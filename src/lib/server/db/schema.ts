import { sql, type InferSelectModel } from 'drizzle-orm';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

/**
 * The schema for the user table.
 */
export const userTable = sqliteTable('user', {
    id: integer('id').primaryKey(),
    name: text('name').notNull(),
    googleId: text('google_id'),
    email: text('email').notNull(),
    role: text('role').notNull(),
    created: text('created')
    .notNull()
    .default(sql`(current_timestamp)`).notNull()
});
export type User = InferSelectModel<typeof userTable>;

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
