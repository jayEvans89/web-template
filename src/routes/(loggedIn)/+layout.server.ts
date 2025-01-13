import { redirect } from "@sveltejs/kit";

export const load = async (event) => {
	if (!event.locals.loggedInUser) {
		return redirect(302, "/login");
	}

	const loggedInUser = event.locals.loggedInUser;

	return {
		loggedInUser
	}
}
