import type { User } from "$lib/server/db/schema";
import type { Session } from "$lib/server/db/schema";

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface Locals {
			user: User | null;
			session: Session | null;
		}
	}
}

export {};
