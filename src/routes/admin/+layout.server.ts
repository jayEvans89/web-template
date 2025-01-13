import { redirect } from '@sveltejs/kit';

export const load = async (event) => {
  if (!event.locals.loggedInUser) {
    return {
      status: 302,
      headers: {
        location: "/login"
      }
    };
  }

  if (event.locals.loggedInUser.role !== 'admin') {
    redirect(302, '/dashboard')
  }

  const loggedInUser = event.locals.loggedInUser;

  return {
    loggedInUser
  }
}
