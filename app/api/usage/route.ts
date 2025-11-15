import { NextResponse } from "next/server"
import { requireAuth } from "@/lib/clerk-helpers"
import { trackUsage, getUserUsage } from "@/lib/db-helpers"

export async function GET(req: Request) {
  try {
    const user = await requireAuth()
    const { searchParams } = new URL(req.url)

    const startDate = searchParams.get("startDate")
    const endDate = searchParams.get("endDate")

    const usage = await getUserUsage(
      user.db.id,
      startDate ? new Date(startDate) : undefined,
      endDate ? new Date(endDate) : undefined,
    )

    return NextResponse.json({ usage })
  } catch (error) {
    console.error("Error fetching usage:", error)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}

export async function POST(req: Request) {
  try {
    const user = await requireAuth()
    const body = await req.json()

    const { action, metadata } = body

    if (!action) {
      return NextResponse.json({ error: "Action is required" }, { status: 400 })
    }

    const usage = await trackUsage(user.db.id, action, metadata)

    return NextResponse.json({ usage })
  } catch (error) {
    console.error("Error tracking usage:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
