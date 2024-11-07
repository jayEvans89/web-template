import { redirect } from "@sveltejs/kit";

export const load = async (event) => {
	if (!event.locals.user) {
		return redirect(302, "/login");
	}

	const user = event.locals.user;

	return {
		user
	}
}
