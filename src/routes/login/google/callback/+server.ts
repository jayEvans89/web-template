import { generateSessionToken, createSession, setSessionTokenCookie } from "$lib/server/auth/session";
import { google } from "$lib/server/auth/providers";
import { decodeIdToken } from "arctic";
import { createUser, getUserFromGoogleId } from "$lib/server/db/queries/user";

import type { RequestEvent } from "@sveltejs/kit";
import type { OAuth2Tokens } from "arctic";

export async function GET(event: RequestEvent): Promise<Response> {
	const code = event.url.searchParams.get("code");
	const state = event.url.searchParams.get("state");
	const storedState = event.cookies.get("google_oauth_state") ?? null;
	const codeVerifier = event.cookies.get("google_code_verifier") ?? null;

	if (code === null || state === null || storedState === null || codeVerifier === null) {
		return new Response(null, {
			status: 400
		});
	}

	if (state !== storedState) {
		return new Response(null, {
			status: 400
		});
	}

	let tokens: OAuth2Tokens;
	try {
		tokens = await google.validateAuthorizationCode(code, codeVerifier);
	} catch (_e) {
		// Invalid code or client credentials
		return new Response(null, {
			status: 400,
		});
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const claims = decodeIdToken(tokens.idToken()) as any;
	const googleUserId = claims.sub;
	const username = claims.name;
	const email = claims.email;

	const existingUser = await getUserFromGoogleId(googleUserId);

	if (existingUser !== undefined) {
		const sessionToken = generateSessionToken();
		const session = await createSession(sessionToken, existingUser.id);

		setSessionTokenCookie(event, sessionToken, session.expiresAt);

		return new Response(null, {
			status: 302,
			headers: {
				Location: "/dashboard"
			}
		});
	}

	const user = await createUser(googleUserId, username, email);

	const sessionToken = generateSessionToken();
	const session = await createSession(sessionToken, user.id);

	setSessionTokenCookie(event, sessionToken, session.expiresAt);

	return new Response(null, {
		status: 302,
		headers: {
			Location: "/dashboard"
		}
	});
}