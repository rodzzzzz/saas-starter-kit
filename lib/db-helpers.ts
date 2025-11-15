import { prisma } from "./prisma"

// User helpers
export async function getUserByClerkId(clerkId: string) {
  return await prisma.user.findUnique({
    where: { clerkId },
    include: { subscription: true },
  })
}

export async function createUser(data: {
  clerkId: string
  email: string
  firstName?: string
  lastName?: string
  imageUrl?: string
}) {
  return await prisma.user.create({
    data,
  })
}

export async function updateUser(
  clerkId: string,
  data: {
    email?: string
    firstName?: string
    lastName?: string
    imageUrl?: string
  },
) {
  return await prisma.user.update({
    where: { clerkId },
    data,
  })
}

// Subscription helpers
export async function getSubscription(userId: string) {
  return await prisma.subscription.findUnique({
    where: { userId },
  })
}

export async function createSubscription(data: {
  userId: string
  stripeCustomerId: string
  stripeSubscriptionId?: string
  stripePriceId?: string
  stripeCurrentPeriodEnd?: Date
  status?: string
  plan?: string
}) {
  return await prisma.subscription.create({
    data,
  })
}

export async function updateSubscription(
  userId: string,
  data: {
    stripeSubscriptionId?: string
    stripePriceId?: string
    stripeCurrentPeriodEnd?: Date
    status?: string
    plan?: string
  },
) {
  return await prisma.subscription.update({
    where: { userId },
    data,
  })
}

// Usage tracking helpers
export async function trackUsage(userId: string, action: string, metadata?: any) {
  return await prisma.usage.create({
    data: {
      userId,
      action,
      metadata,
    },
  })
}

export async function getUserUsage(userId: string, startDate?: Date, endDate?: Date) {
  return await prisma.usage.findMany({
    where: {
      userId,
      ...(startDate && endDate
        ? {
            createdAt: {
              gte: startDate,
              lte: endDate,
            },
          }
        : {}),
    },
    orderBy: { createdAt: "desc" },
  })
}
