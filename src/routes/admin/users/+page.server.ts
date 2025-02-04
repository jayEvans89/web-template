import { getPaginatedUsers } from '$lib/server/database/models/user.model.js'

export const load = async () => {
  return {
    users: await getAllUsers()
  }
}

async function getAllUsers() {
  return await getPaginatedUsers()
}
