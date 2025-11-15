import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, CreditCard } from "lucide-react"
import { BillingHistory } from "@/components/billing/billing-history"
import { ManageSubscriptionButton } from "@/components/billing/manage-subscription-button"

const plans = [
  {
    name: "Free",
    price: "$0",
    features: ["Up to 1,000 API calls/month", "Basic analytics", "Email support", "Community access"],
    current: false,
  },
  {
    name: "Pro",
    price: "$29",
    features: [
      "Up to 100,000 API calls/month",
      "Advanced analytics",
      "Priority email support",
      "Custom integrations",
      "Team collaboration",
    ],
    current: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited API calls",
      "Custom analytics",
      "24/7 phone & email support",
      "Dedicated account manager",
      "SLA guarantee",
      "Custom contracts",
    ],
    current: false,
  },
]

export default function BillingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Billing</h1>
        <p className="text-muted-foreground">Manage your subscription and billing information.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
          <CardDescription>You are currently on the Pro plan.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">Pro Plan</p>
              <p className="text-sm text-muted-foreground">$29/month • Renews on January 15, 2025</p>
            </div>
            <ManageSubscriptionButton />
          </div>
          <div className="rounded-lg border border-border p-4">
            <div className="flex items-center gap-2 text-sm">
              <CreditCard className="h-4 w-4 text-muted-foreground" />
              <span>•••• •••• •••• 4242</span>
              <span className="text-muted-foreground">Expires 12/25</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="mb-4 text-2xl font-bold">Available Plans</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className={plan.current ? "border-primary" : ""}>
              <CardHeader>
                {plan.current && (
                  <div className="mb-2 inline-flex w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Current Plan
                  </div>
                )}
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.current ? "outline" : "default"} disabled={plan.current}>
                  {plan.current ? "Current Plan" : plan.price === "Custom" ? "Contact Sales" : "Upgrade"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <BillingHistory />
    </div>
  )
}
