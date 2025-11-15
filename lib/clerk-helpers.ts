import { auth, currentUser } from "@clerk/nextjs/server"
import { getUserByClerkId, createUser } from "./db-helpers"

export async function getCurrentUserWithDb() {
  const { userId } = await auth()

  if (!userId) {
    return null
  }

  const clerkUser = await currentUser()

  if (!clerkUser) {
    return null
  }

  // Check if user exists in database
  let dbUser = await getUserByClerkId(userId)

  // If not, create the user
  if (!dbUser) {
    dbUser = await createUser({
      clerkId: userId,
      email: clerkUser.emailAddresses[0]?.emailAddress || "",
      firstName: clerkUser.firstName || undefined,
      lastName: clerkUser.lastName || undefined,
      imageUrl: clerkUser.imageUrl || undefined,
    })
  }

  return {
    clerk: clerkUser,
    db: dbUser,
  }
}

export async function requireAuth() {
  const user = await getCurrentUserWithDb()

  if (!user) {
    throw new Error("Unauthorized")
  }

  return user
}
