import type { Handle } from '@sveltejs/kit';
import { i18n } from '$lib/i18n';
import { validateSessionToken, deleteSessionTokenCookie, setSessionTokenCookie } from '$lib/server/auth/session';

export const handle: Handle = async({ event, resolve}) => {
  i18n.handle()
  const token = event.cookies.get("session") ?? null;
	if (token === null) {
		event.locals.user = null;
		event.locals.session = null;
		return resolve(event);
	}

	const { session, user } = await validateSessionToken(token);
	if (session !== null) {
		setSessionTokenCookie(event, token, session.expiresAt);
	} else {
		deleteSessionTokenCookie(event);
	}

	// Set the user and session in the locals object
	event.locals.session = session;
	event.locals.user = user;
	return resolve(event);
}
