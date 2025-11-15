import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/clerk-helpers";
import { prisma } from "@/lib/prisma"; // Declare the prisma variable

export async function GET() {
  try {
    const user = await requireAuth();

    if (!user.db) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    return NextResponse.json({
      user: {
        id: user.db.id,
        clerkId: user.db.clerkId,
        email: user.db.email,
        firstName: user.db.firstName,
        lastName: user.db.lastName,
        imageUrl: user.db.imageUrl,
        subscription: user.db.subscription,
      },
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function PATCH(req: Request) {
  try {
    const user = await requireAuth();
    const body = await req.json();

    if (!user.db) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { firstName, lastName } = body;

    // Update user in database
    const updatedUser = await prisma.user.update({
      where: { id: user.db.id },
      data: {
        firstName,
        lastName,
      },
    });

    return NextResponse.json({ user: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
