import { NextResponse } from "next/server"

// Simple in-memory rate limiter (use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

export function rateLimit(identifier: string, limit = 10, windowMs = 60000) {
  const now = Date.now()
  const record = rateLimitMap.get(identifier)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    })
    return { success: true, remaining: limit - 1 }
  }

  if (record.count >= limit) {
    return {
      success: false,
      remaining: 0,
      resetTime: record.resetTime,
    }
  }

  record.count++
  return {
    success: true,
    remaining: limit - record.count,
  }
}

export function rateLimitMiddleware(identifier: string, limit = 10, windowMs = 60000) {
  const result = rateLimit(identifier, limit, windowMs)

  if (!result.success) {
    return NextResponse.json(
      { error: "Too many requests", resetTime: result.resetTime },
      {
        status: 429,
        headers: {
          "X-RateLimit-Limit": limit.toString(),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": result.resetTime?.toString() || "",
        },
      },
    )
  }

  return null
}
