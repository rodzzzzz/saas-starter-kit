# SaaS Starter Kit

A production-ready SaaS starter template built with Next.js, Clerk, Stripe, Prisma, and Supabase.

## Features

- **Authentication**: Secure authentication with Clerk (sign in, sign up, password recovery)
- **Payments**: Stripe subscription billing with webhook handling
- **Database**: Prisma ORM with Supabase PostgreSQL
- **Dashboard**: Responsive dashboard with sidebar navigation
- **User Settings**: Profile management, notifications, API keys
- **API Routes**: Protected API routes with rate limiting and usage tracking
- **Landing Page**: Marketing page with hero, features, pricing, and CTA sections
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Type Safety**: Full TypeScript support

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account
- Clerk account
- Stripe account

### Installation

1. Clone the repository
2. Install dependencies:

\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:

Copy `.env.example` to `.env` and fill in your credentials:

\`\`\`bash
cp .env.example .env
\`\`\`

4. Set up the database:

\`\`\`bash
npx prisma generate
npx prisma db push
\`\`\`

5. Run the development server:

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to see your app.

## Environment Variables

### Database (Supabase)
- `DATABASE_URL`: Your Supabase PostgreSQL connection string

### Clerk Authentication
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Clerk publishable key
- `CLERK_SECRET_KEY`: Clerk secret key
- `CLERK_WEBHOOK_SECRET`: Clerk webhook secret for user sync

### Stripe
- `STRIPE_SECRET_KEY`: Stripe secret key
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Stripe publishable key
- `STRIPE_WEBHOOK_SECRET`: Stripe webhook secret
- `STRIPE_PRO_PRICE_ID`: Stripe price ID for Pro plan

### App Configuration
- `NEXT_PUBLIC_APP_URL`: Your app URL (e.g., http://localhost:3000)

## Project Structure

\`\`\`
├── app/
│   ├── api/                    # API routes
│   │   ├── user/              # User management
│   │   ├── usage/             # Usage tracking
│   │   ├── subscription/      # Subscription info
│   │   ├── analytics/         # Analytics data
│   │   ├── stripe/            # Stripe integration
│   │   └── webhooks/          # Webhook handlers
│   ├── dashboard/             # Dashboard pages
│   │   ├── settings/          # User settings
│   │   └── billing/           # Billing management
│   ├── sign-in/               # Sign in page
│   ├── sign-up/               # Sign up page
│   └── page.tsx               # Landing page
├── components/
│   ├── dashboard/             # Dashboard components
│   ├── landing/               # Landing page components
│   ├── settings/              # Settings components
│   ├── billing/               # Billing components
│   └── ui/                    # Reusable UI components
├── lib/
│   ├── prisma.ts              # Prisma client
│   ├── db-helpers.ts          # Database helper functions
│   ├── clerk-helpers.ts       # Clerk helper functions
│   ├── stripe.ts              # Stripe configuration
│   ├── api-client.ts          # Client-side API helpers
│   └── rate-limit.ts          # Rate limiting utilities
├── prisma/
│   └── schema.prisma          # Database schema
└── scripts/
    └── init-database.sql      # Database initialization
\`\`\`

## API Routes

### User Management
- `GET /api/user` - Get current user
- `PATCH /api/user` - Update user profile

### Usage Tracking
- `GET /api/usage` - Get user usage data
- `POST /api/usage` - Track usage event

### Subscription
- `GET /api/subscription` - Get subscription info

### Analytics
- `GET /api/analytics` - Get analytics data

### Stripe
- `POST /api/stripe/create-checkout-session` - Create checkout session
- `POST /api/stripe/create-portal-session` - Create customer portal session

### Webhooks
- `POST /api/webhooks/clerk` - Clerk user sync webhook
- `POST /api/webhooks/stripe` - Stripe subscription webhook

## Webhooks Setup

### Clerk Webhook
1. Go to Clerk Dashboard → Webhooks
2. Add endpoint: `https://your-domain.com/api/webhooks/clerk`
3. Subscribe to: `user.created`, `user.updated`, `user.deleted`
4. Copy webhook secret to `CLERK_WEBHOOK_SECRET`

### Stripe Webhook
1. Go to Stripe Dashboard → Developers → Webhooks
2. Add endpoint: `https://your-domain.com/api/webhooks/stripe`
3. Subscribe to: `checkout.session.completed`, `invoice.payment_succeeded`, `customer.subscription.updated`, `customer.subscription.deleted`
4. Copy webhook secret to `STRIPE_WEBHOOK_SECRET`

## Deployment

This app is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add environment variables
4. Deploy

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Authentication**: Clerk
- **Payments**: Stripe
- **Database**: Supabase (PostgreSQL)
- **ORM**: Prisma
- **Animations**: Framer Motion

## License

MIT
