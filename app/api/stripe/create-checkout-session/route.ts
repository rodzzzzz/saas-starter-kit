import { NextResponse } from "next/server"
import { stripe, STRIPE_PLANS } from "@/lib/stripe"
import { requireAuth } from "@/lib/clerk-helpers"
import { getSubscription } from "@/lib/db-helpers"

export async function POST(req: Request) {
  try {
    const user = await requireAuth()
    const { plan } = await req.json()

    if (!plan || !STRIPE_PLANS[plan as keyof typeof STRIPE_PLANS]) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 })
    }

    const selectedPlan = STRIPE_PLANS[plan as keyof typeof STRIPE_PLANS]

    if (!selectedPlan.priceId) {
      return NextResponse.json({ error: "Plan not available for checkout" }, { status: 400 })
    }

    // Check if user already has a subscription
    const subscription = await getSubscription(user.db.id)

    if (subscription?.stripeCustomerId) {
      // User already has a subscription, redirect to portal
      return NextResponse.json({ error: "User already has a subscription" }, { status: 400 })
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      customer_email: user.clerk.emailAddresses[0]?.emailAddress,
      line_items: [
        {
          price: selectedPlan.priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing?canceled=true`,
      metadata: {
        userId: user.db.id,
        plan,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("Error creating checkout session:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
