import { encodeBase32LowerCaseNoPadding, encodeHexLowerCase } from '@oslojs/encoding';
import { type User, type Session, sessionTable, userTable } from "../../server/db/schema";
import { sha256 } from '@oslojs/crypto/sha2';
import { db } from '$lib/server/db';
import { eq } from 'drizzle-orm';
import type { RequestEvent } from '@sveltejs/kit';

/**
 * Generate a new session token
 * @returns A new session token
 */
export function generateSessionToken(): string {
  const bytes = new Uint8Array(20);
  const token = encodeBase32LowerCaseNoPadding(bytes);
  return token;
}

/**
 * Create a new session using the given token and user ID
 * Ands sets its expiration to 30 days
 * @param token The token to create a session for
 * @param userId The user ID to associate with the session
 */
export async function createSession(token: string, userId: number): Promise<Session> {
  const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
  const session: Session = {
    id: sessionId,
    userId,
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
  };
  await db.insert(sessionTable).values(session);
  return session;
}

/**
 * Validate a session token
 * @param token The token to validate
 * @returns
 */
export async function validateSessionToken(token: string): Promise<SessionValidationResult> {
  const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
  const result = await db
    .select({ user: userTable, session: sessionTable })
    .from(sessionTable)
    .innerJoin(userTable, eq(sessionTable.userId, userTable.id))
    .where(eq(sessionTable.id, sessionId));

  if (result.length < 1) {
    return { session: null, user: null };
  }

  const { user, session } = result[0];

  // Check if token expired
  if (Date.now() >= session.expiresAt.getTime()) {
    await db.delete(sessionTable).where(eq(sessionTable.id, session.id));
    return { session: null, user: null };
  }

  // Check if token is close to expiration (15 days left)
  // If it is, renew the session
  if (Date.now() >= session.expiresAt.getTime() - 1000 * 60 * 60 * 24 * 15) {
    session.expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);
    await db
      .update(sessionTable)
      .set({
        expiresAt: session.expiresAt
      })
      .where(eq(sessionTable.id, session.id));
  }

  return { session, user };
}

/**
 * Invalidate a session by deleting if from the database
 * @param sessionId The session to invalidate
 */
export async function invalidateSession(sessionId: string): Promise<void> {
  await db.delete(sessionTable).where(eq(sessionTable.id, sessionId));
}

export function setSessionTokenCookie(event: RequestEvent, token: string, expiresAt: Date): void {
	event.cookies.set("session", token, {
		httpOnly: true,
		sameSite: "lax",
		expires: expiresAt,
		path: "/"
	});
}

export function deleteSessionTokenCookie(event: RequestEvent): void {
	event.cookies.set("session", "", {
		httpOnly: true,
		sameSite: "lax",
		maxAge: 0,
		path: "/"
	});
}

export type SessionValidationResult =
	| { session: Session; user: User }
	| { session: null; user: null };