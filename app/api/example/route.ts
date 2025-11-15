import { NextResponse } from "next/server"
import { requireAuth } from "@/lib/clerk-helpers"
import { rateLimitMiddleware } from "@/lib/rate-limit"
import { trackUsage } from "@/lib/db-helpers"

// Example protected API route with rate limiting and usage tracking
export async function GET(req: Request) {
  try {
    // Authenticate user
    const user = await requireAuth()

    // Rate limit (10 requests per minute per user)
    const rateLimitResponse = rateLimitMiddleware(user.db.id, 10, 60000)
    if (rateLimitResponse) {
      return rateLimitResponse
    }

    // Track usage
    await trackUsage(user.db.id, "api_call", {
      endpoint: "/api/example",
      method: "GET",
    })

    // Your API logic here
    const data = {
      message: "Hello from the API!",
      timestamp: new Date().toISOString(),
      user: {
        id: user.db.id,
        email: user.db.email,
      },
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error in example API:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const user = await requireAuth()

    const rateLimitResponse = rateLimitMiddleware(user.db.id, 10, 60000)
    if (rateLimitResponse) {
      return rateLimitResponse
    }

    const body = await req.json()

    await trackUsage(user.db.id, "api_call", {
      endpoint: "/api/example",
      method: "POST",
      body,
    })

    // Your API logic here
    return NextResponse.json({
      message: "Data received successfully",
      data: body,
    })
  } catch (error) {
    console.error("Error in example API:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
