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
        .default(sql`(current_timestamp)`).notNull(),
    password: text('password'),
    username: text('username')
});

export type User = InferSelectModel<typeof userTable>;