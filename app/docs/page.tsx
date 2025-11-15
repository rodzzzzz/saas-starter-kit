import Link from "next/link";
import { LandingNav } from "@/components/landing/landing-nav";
import { Footer } from "@/components/landing/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Code,
  Zap,
  Shield,
  CreditCard,
  Database,
  Settings,
  Rocket,
} from "lucide-react";

export default function DocsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <LandingNav />

      <main className="flex-1">
        <div className="border-b border-border/40 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Documentation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Everything you need to know about building with the SaaS Starter
              Kit
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <nav className="sticky top-24 space-y-1">
                <h3 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
                  Navigation
                </h3>
                <a
                  href="#getting-started"
                  className="block py-2 px-3 text-sm rounded-md hover:bg-accent transition-colors"
                >
                  Getting Started
                </a>
                <a
                  href="#webhooks"
                  className="block py-2 px-3 text-sm rounded-md hover:bg-accent transition-colors"
                >
                  Webhooks
                </a>
                <a
                  href="#authentication"
                  className="block py-2 px-3 text-sm rounded-md hover:bg-accent transition-colors"
                >
                  Authentication
                </a>
                <a
                  href="#database"
                  className="block py-2 px-3 text-sm rounded-md hover:bg-accent transition-colors"
                >
                  Database
                </a>
                <a
                  href="#billing"
                  className="block py-2 px-3 text-sm rounded-md hover:bg-accent transition-colors"
                >
                  Billing
                </a>
                <a
                  href="#api-routes"
                  className="block py-2 px-3 text-sm rounded-md hover:bg-accent transition-colors"
                >
                  API Routes
                </a>
                <a
                  href="#deployment"
                  className="block py-2 px-3 text-sm rounded-md hover:bg-accent transition-colors"
                >
                  Deployment
                </a>
              </nav>
            </aside>

            <div className="lg:col-span-3 space-y-12">
              <section id="getting-started">
                <h2 className="text-3xl font-bold mb-6">Getting Started</h2>

                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Rocket className="h-5 w-5" />
                      Quick Start
                    </CardTitle>
                    <CardDescription>
                      Get your SaaS up and running in minutes
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">
                        1. Clone and Install
                      </h4>
                      <div className="bg-muted p-4 rounded-md font-mono text-sm">
                        <code>npm install</code>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">
                        2. Set Up Environment Variables
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Copy{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          .env.example
                        </code>{" "}
                        to{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          .env
                        </code>{" "}
                        and fill in your credentials:
                      </p>
                      <div className="bg-muted p-4 rounded-md font-mono text-sm space-y-1">
                        <div>DATABASE_URL="postgresql://xxxxxx"</div>
                        <div>DIRECT_URL="postgresql://xxxxxx"</div>
                        <br />
                        <div>
                          NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
                        </div>
                        <div>CLERK_SECRET_KEY=sk_test_xxxxx</div>
                        <div>CLERK_WEBHOOK_SECRET=whsec_xxxxx</div>
                        <br />
                        <div>STRIPE_SECRET_KEY=sk_test_xxxxx</div>
                        <div>
                          NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
                        </div>
                        <div>STRIPE_WEBHOOK_SECRET=whsec_xxxxx</div>
                        <div>STRIPE_PRO_PRICE_ID=price_xxxxx</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">
                        3. Initialize Database
                      </h4>
                      <div className="bg-muted p-4 rounded-md font-mono text-sm space-y-1">
                        <div>npx prisma generate</div>
                        <div>npx prisma db push</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">
                        4. Run Development Server
                      </h4>
                      <div className="bg-muted p-4 rounded-md font-mono text-sm">
                        <code>npm run dev</code>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Open{" "}
                        <a
                          href="http://localhost:3000"
                          className="text-foreground underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          http://localhost:3000
                        </a>{" "}
                        to see your app.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="authentication">
                <h2 className="text-3xl font-bold mb-6">Authentication</h2>

                <Card>
                  <CardHeader>
                    <CardTitle>Clerk Integration</CardTitle>
                    <CardDescription>
                      Secure authentication with minimal setup
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Setup</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Sign up at{" "}
                        <a
                          href="https://clerk.com"
                          className="text-foreground underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          clerk.com
                        </a>{" "}
                        and get your API keys
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Protected Routes</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Routes are protected using middleware. All{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          /dashboard
                        </code>{" "}
                        routes require authentication.
                      </p>
                      <div className="bg-muted p-4 rounded-md font-mono text-sm">
                        <code className="whitespace-pre-wrap">{`// middleware.ts
export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect()
})`}</code>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Get Current User</h4>
                      <div className="bg-muted p-4 rounded-md font-mono text-sm">
                        <code className="whitespace-pre-wrap">{`import { getCurrentUser } from '@/lib/clerk-helpers'

const user = await getCurrentUser()`}</code>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Webhooks</h4>
                      <p className="text-sm text-muted-foreground">
                        User data is automatically synced to your database via
                        Clerk webhooks at{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          /api/webhooks/clerk
                        </code>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="database">
                <h2 className="text-3xl font-bold mb-6">Database</h2>

                <Card>
                  <CardHeader>
                    <CardTitle>Prisma + Supabase</CardTitle>
                    <CardDescription>
                      Type-safe database operations
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Schema</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        The database schema includes User, Subscription, and
                        Usage models:
                      </p>
                      <div className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                        <code className="whitespace-pre-wrap">{`model User {
  id            String         @id @default(cuid())
  clerkId       String         @unique
  email         String         @unique
  name          String?
  subscription  Subscription?
  usage         Usage[]
  createdAt     DateTime       @default(now())
  updatedAt     DateTime       @updatedAt
}`}</code>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Queries</h4>
                      <div className="bg-muted p-4 rounded-md font-mono text-sm">
                        <code className="whitespace-pre-wrap">{`import { prisma } from '@/lib/prisma'

const user = await prisma.user.findUnique({
  where: { clerkId: userId },
  include: { subscription: true }
})`}</code>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Helper Functions</h4>
                      <p className="text-sm text-muted-foreground">
                        Use the helper functions in{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          lib/db-helpers.ts
                        </code>{" "}
                        for common operations like getting user data, checking
                        subscription status, and tracking usage.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="billing">
                <h2 className="text-3xl font-bold mb-6">Billing</h2>

                <Card>
                  <CardHeader>
                    <CardTitle>Stripe Integration</CardTitle>
                    <CardDescription>
                      Subscription management made easy
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Setup</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                        <li>Create a Stripe account and get your API keys</li>
                        <li>Create products and prices in Stripe Dashboard</li>
                        <li>Add price IDs to your environment variables</li>
                        <li>
                          Configure webhook endpoint at{" "}
                          <code className="bg-muted px-1 py-0.5 rounded">
                            /api/webhooks/stripe
                          </code>
                        </li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">
                        Create Checkout Session
                      </h4>
                      <div className="bg-muted p-4 rounded-md font-mono text-sm">
                        <code className="whitespace-pre-wrap">{`const response = await fetch('/api/stripe/create-checkout-session', {
  method: 'POST',
  body: JSON.stringify({ priceId: 'price_xxx' })
})`}</code>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Customer Portal</h4>
                      <p className="text-sm text-muted-foreground">
                        Users can manage their subscriptions through the Stripe
                        Customer Portal, accessible from the billing page.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Webhooks</h4>
                      <p className="text-sm text-muted-foreground">
                        Subscription events are automatically handled via
                        webhooks, updating your database when subscriptions are
                        created, updated, or cancelled.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="api-routes">
                <h2 className="text-3xl font-bold mb-6">API Routes</h2>

                <Card>
                  <CardHeader>
                    <CardTitle>Protected Endpoints</CardTitle>
                    <CardDescription>
                      Secure API routes with rate limiting
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">
                        Available Endpoints
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <code className="bg-muted px-2 py-1 rounded">
                            GET /api/user
                          </code>
                          <span className="text-muted-foreground">
                            Get current user
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <code className="bg-muted px-2 py-1 rounded">
                            PATCH /api/user
                          </code>
                          <span className="text-muted-foreground">
                            Update user profile
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <code className="bg-muted px-2 py-1 rounded">
                            GET /api/usage
                          </code>
                          <span className="text-muted-foreground">
                            Get user usage data
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <code className="bg-muted px-2 py-1 rounded">
                            POST /api/usage
                          </code>
                          <span className="text-muted-foreground">
                            Track usage event
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <code className="bg-muted px-2 py-1 rounded">
                            GET /api/subscription
                          </code>
                          <span className="text-muted-foreground">
                            Get subscription info
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <code className="bg-muted px-2 py-1 rounded">
                            GET /api/analytics
                          </code>
                          <span className="text-muted-foreground">
                            Get analytics data
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <code className="bg-muted px-2 py-1 rounded">
                            POST /api/stripe/create-checkout-session
                          </code>
                          <span className="text-muted-foreground">
                            Create checkout session
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <code className="bg-muted px-2 py-1 rounded">
                            POST /api/stripe/create-portal-session
                          </code>
                          <span className="text-muted-foreground">
                            Create customer portal session
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <code className="bg-muted px-2 py-1 rounded">
                            POST /api/webhooks/clerk
                          </code>
                          <span className="text-muted-foreground">
                            Clerk user sync webhook
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <code className="bg-muted px-2 py-1 rounded">
                            POST /api/webhooks/stripe
                          </code>
                          <span className="text-muted-foreground">
                            Stripe subscription webhook
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Rate Limiting</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        API routes include rate limiting to prevent abuse:
                      </p>
                      <div className="bg-muted p-4 rounded-md font-mono text-sm">
                        <code className="whitespace-pre-wrap">{`import { rateLimit } from '@/lib/rate-limit'

const limiter = rateLimit({ interval: 60000, uniqueTokenPerInterval: 500 })
await limiter.check(10, userId)`}</code>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Client Usage</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Use the API client helper for type-safe requests:
                      </p>
                      <div className="bg-muted p-4 rounded-md font-mono text-sm">
                        <code className="whitespace-pre-wrap">{`import { apiClient } from '@/lib/api-client'

const data = await apiClient.get('/api/user')`}</code>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="webhooks">
                <h2 className="text-3xl font-bold mb-6">Webhooks Setup</h2>

                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Clerk Webhook</CardTitle>
                    <CardDescription>
                      Sync user data automatically
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                      <li>Go to Clerk Dashboard → Webhooks</li>
                      <li>
                        Add endpoint:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          https://your-domain.com/api/webhooks/clerk
                        </code>
                      </li>
                      <li>
                        Subscribe to:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          user.created
                        </code>
                        ,{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          user.updated
                        </code>
                        ,{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          user.deleted
                        </code>
                      </li>
                      <li>
                        Copy webhook secret to{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          CLERK_WEBHOOK_SECRET
                        </code>
                      </li>
                    </ol>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Stripe Webhook</CardTitle>
                    <CardDescription>
                      Handle subscription events automatically
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                      <li>Go to Stripe Dashboard → Developers → Webhooks</li>
                      <li>
                        Add endpoint:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          https://your-domain.com/api/webhooks/stripe
                        </code>
                      </li>
                      <li>
                        Subscribe to:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          checkout.session.completed
                        </code>
                        ,{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          invoice.payment_succeeded
                        </code>
                        ,{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          customer.subscription.updated
                        </code>
                        ,{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          customer.subscription.deleted
                        </code>
                      </li>
                      <li>
                        Copy webhook secret to{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          STRIPE_WEBHOOK_SECRET
                        </code>
                      </li>
                    </ol>
                  </CardContent>
                </Card>
              </section>

              <section id="deployment">
                <h2 className="text-3xl font-bold mb-6">Deployment</h2>

                <Card>
                  <CardHeader>
                    <CardTitle>Deploy to Vercel</CardTitle>
                    <CardDescription>Go live in minutes</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Steps</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                        <li>Push your code to GitHub</li>
                        <li>Import your repository on Vercel</li>
                        <li>Add environment variables</li>
                        <li>Deploy</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">
                        Environment Variables
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Make sure to add all required environment variables from{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          .env.example
                        </code>{" "}
                        to your Vercel project settings.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Webhooks</h4>
                      <p className="text-sm text-muted-foreground">
                        Update your webhook URLs in Clerk and Stripe dashboards
                        to point to your production domain.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
