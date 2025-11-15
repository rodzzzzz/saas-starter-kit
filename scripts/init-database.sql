-- Initialize database tables for SaaS starter kit
-- This script will be run automatically when you execute it

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Note: Prisma will handle table creation via migrations
-- This script is for any additional setup needed

-- Create indexes for better query performance
-- (Prisma will create these, but documenting here for reference)

-- User table indexes
-- CREATE INDEX IF NOT EXISTS idx_user_clerk_id ON "User"("clerkId");
-- CREATE INDEX IF NOT EXISTS idx_user_email ON "User"("email");

-- Subscription table indexes
-- CREATE INDEX IF NOT EXISTS idx_subscription_user_id ON "Subscription"("userId");
-- CREATE INDEX IF NOT EXISTS idx_subscription_stripe_customer_id ON "Subscription"("stripeCustomerId");

-- Usage table indexes
-- CREATE INDEX IF NOT EXISTS idx_usage_user_id ON "Usage"("userId");
-- CREATE INDEX IF NOT EXISTS idx_usage_created_at ON "Usage"("createdAt");
