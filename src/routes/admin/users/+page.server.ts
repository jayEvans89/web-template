import { getPaginatedUsers } from '$lib/server/db/queries/user.js'

export const load = async () => {
  return {
    users: await getAllUsers()
  }
}

async function getAllUsers() {
  return await getPaginatedUsers()
}
