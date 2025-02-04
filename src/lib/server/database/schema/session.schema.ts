import { type InferSelectModel } from 'drizzle-orm';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { userTable } from './user.schema';

/**
 * The schema for the session table.
 */
export const sessionTable = sqliteTable("session", {
  id: text("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => userTable.id),
  expiresAt: integer("expires_at", {
    mode: "timestamp"
  }).notNull()
});
export type Session = InferSelectModel<typeof sessionTable>;
