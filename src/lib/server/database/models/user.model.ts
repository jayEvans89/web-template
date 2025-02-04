import { eq } from 'drizzle-orm';
import { db } from '../index'
import { userTable, type User } from '../schema/user.schema';

/**
 * Get a user via their google id
 * @param id The google id of the user
 * @returns The user
 */
export const getUserFromGoogleId = (id: string) => {
  return db.select().from(userTable).where(eq(userTable.googleId, id)).get()
}

/**
 * Get a user via their internal id
 * @param id The users id
 * @returns The user
 */
export const getUser = (id: number) => {
  return db.select().from(userTable).where(eq(userTable.id, id)).get()
}

/**
 * Get all users
 * @returns An array of users
 */
export const getAllUsers = () => {
  return db.select().from(userTable).all()
}

/**
 * Get a paginated list of users
 * @param page The page to return
 * @param limit The number of users to limit the page to
 * @returns An array of users
 */
export const getPaginatedUsers = (page?: number, limit = 10): Promise<User[]> => {
  if (page === undefined || page === 0) {
    return db.select().from(userTable).limit(limit)
  }

  return db.select().from(userTable).limit(limit).offset(page)
}

/**
 * Creates a new user via google
 * @param googleId The google id of the user
 * @param name The name of the user
 * @param email The email of the user
 * @param role The role of the user (user | admin)
 * @returns The user
 */
export const createUserFromGoogle = async (googleId: string, name: string, email: string, role: 'user' | 'admin') => {
  const users = await db.insert(userTable).values({ googleId, name, email, role }).returning().execute()
  return users[0]
}
