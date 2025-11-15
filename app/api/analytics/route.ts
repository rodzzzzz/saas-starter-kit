import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/clerk-helpers";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const user = await requireAuth();
    const { searchParams } = new URL(req.url);

    if (!user.db) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const period = searchParams.get("period") || "7d"; // 7d, 30d, 90d

    const days = period === "7d" ? 7 : period === "30d" ? 30 : 90;
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    // Get usage data grouped by day
    const usageByDay = await prisma.usage.groupBy({
      by: ["createdAt"],
      where: {
        userId: user.db.id,
        createdAt: {
          gte: startDate,
        },
      },
      _count: {
        id: true,
      },
      _sum: {
        count: true,
      },
    });

    // Get usage by action type
    const usageByAction = await prisma.usage.groupBy({
      by: ["action"],
      where: {
        userId: user.db.id,
        createdAt: {
          gte: startDate,
        },
      },
      _count: {
        id: true,
      },
      _sum: {
        count: true,
      },
    });

    // Get total usage count
    const totalUsage = await prisma.usage.aggregate({
      where: {
        userId: user.db.id,
        createdAt: {
          gte: startDate,
        },
      },
      _sum: {
        count: true,
      },
    });

    return NextResponse.json({
      analytics: {
        period,
        totalUsage: totalUsage._sum.count || 0,
        usageByDay,
        usageByAction,
      },
    });
  } catch (error) {
    console.error("Error fetching analytics:", error);
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
