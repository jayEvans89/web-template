import { redirect } from '@sveltejs/kit';
import type { RequestEvent } from './$types';
import { deleteSessionTokenCookie, invalidateSession } from '$lib/server/auth/session';

export async function GET(event: RequestEvent): Promise<Response> {
  if (event.locals.session === null) {
    return redirect(401, "/login");
  }

  await invalidateSession(event.locals.session.id);
  deleteSessionTokenCookie(event);

  return redirect(302, "/login");
}
