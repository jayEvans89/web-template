
# What is this?

This is a simple web-app template using the following tech stack

- [Sveltekit](https://svelte.dev/)
- [DrizzleOrm](https://orm.drizzle.team/)
- [Turso Database](https://turso.tech/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/)
- [Auth from Lucia guide](https://lucia-auth.com/)
- [Paraglide for translations](https://inlang.com/m/gerre34r/library-inlang-paraglideJs)

Authentication has already been setup with **Google OAuth**

## Getting started

1. To get started setup a database on [Turso](https://turso.tech/) and add the url and auth tokens to the .env file.

2. Now run `npm run db:push` to push the basic user and session schemas to the database.

3. Next setup a client app on google cloud and add the id and secret to the .env.

4. Run the app via `npm run dev`. You should now have a very basic app working with a guarded `/dashboard` route which you have to be logged in for.
