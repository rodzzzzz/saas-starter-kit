import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-09-30.clover",
  typescript: true,
});

export const STRIPE_PLANS = {
  FREE: {
    name: "Free",
    price: 0,
    priceId: null,
    features: {
      apiCalls: 1000,
      analytics: "basic",
      support: "email",
    },
  },
  PRO: {
    name: "Pro",
    price: 2900, // in cents
    priceId: process.env.STRIPE_PRO_PRICE_ID,
    features: {
      apiCalls: 100000,
      analytics: "advanced",
      support: "priority",
    },
  },
  ENTERPRISE: {
    name: "Enterprise",
    price: null,
    priceId: null,
    features: {
      apiCalls: -1, // unlimited
      analytics: "custom",
      support: "24/7",
    },
  },
};
