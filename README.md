
# What is this?

This is a simple web-app template using the following tech stack

- Sveltekit
- DrizzleOrm
- Turso Database
- Storybook
- Vitest
- Auth from Lucia guide
- Paraglide for translations

Authentication had already been setup with **Google OAuth**

## Getting started

1. To get started setup a database on Turso and add the url and auth tokens to the .env file.

2. Now run `npm run db:push` to push the basic user and session schemas to the database.

3. Next setup a client app on google cloud and add the id and secret to the .env.

4. Run the app via `npm run dev`. You should now have a very basic app working with a guarded `/dashboard` route which you have to be logged in for.
