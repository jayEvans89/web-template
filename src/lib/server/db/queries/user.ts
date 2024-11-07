import { eq } from 'drizzle-orm';
import { db } from '../index'
import { userTable } from '../schema';

const getUserFromGoogleId = (id: string) => {
  return db.select().from(userTable).where(eq(userTable.googleId, id)).get()
}

const getUser = (id: number) => {
  return db.select().from(userTable).where(eq(userTable.id, id)).get()
}

const createUser = async (googleId: string, name: string, email: string) => {
  const users = await db.insert(userTable).values({ googleId, name, email }).returning().execute()
  return users[0]
}

export {
  getUserFromGoogleId,
  getUser,
  createUser
}
