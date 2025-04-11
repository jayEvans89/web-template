import type { Handle } from '@sveltejs/kit';
import { validateSessionToken, deleteSessionTokenCookie, setSessionTokenCookie } from '$lib/server/auth/session';
import { paraglideMiddleware } from '$lib/paraglide/server';
import { sequence } from '@sveltejs/kit/hooks';

const paraglideHandle: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request: localizedRequest, locale }) => {
		event.request = localizedRequest;
		return resolve(event, {
			transformPageChunk: ({ html }) => {
				return html.replace('%lang%', locale);
			}
		});
	});

	const sessionHandle: Handle = async ({ event, resolve }) => {
		const token = event.cookies.get("session") ?? null;
		if (token === null) {
			event.locals.loggedInUser = null;
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
		event.locals.loggedInUser = user;
		return resolve(event);
	}

	export const handle = sequence(paraglideHandle, sessionHandle);

