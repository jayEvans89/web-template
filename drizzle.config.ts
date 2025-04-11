import { defineConfig } from 'drizzle-kit';
if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

export default defineConfig({
  schema: './src/lib/server/database/schema',
  verbose: true,
  strict: true,
  dialect: 'sqlite',
  driver: 'turso',
  dbCredentials: {
    url: process.env.DATABASE_URL,
    authToken: process.env.DATABASE_AUTH_TOKEN
  },
});
