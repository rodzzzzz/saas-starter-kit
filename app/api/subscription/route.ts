import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/clerk-helpers";
import { getSubscription } from "@/lib/db-helpers";

export async function GET() {
  try {
    const user = await requireAuth();

    if (!user.db) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const subscription = await getSubscription(user.db.id);

    if (!subscription) {
      return NextResponse.json({
        subscription: {
          plan: "free",
          status: "inactive",
        },
      });
    }

    return NextResponse.json({ subscription });
  } catch (error) {
    console.error("Error fetching subscription:", error);
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
