"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Lock,
  CreditCard,
  Database,
  Zap,
  Shield,
  BarChart,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Lock,
    title: "Authentication",
    description:
      "Secure authentication with Clerk including sign in, sign up, and password recovery.",
  },
  {
    icon: CreditCard,
    title: "Stripe Payments",
    description:
      "Complete subscription billing with Stripe integration and webhook handling.",
  },
  {
    icon: Database,
    title: "Database Ready",
    description:
      "Prisma ORM with Supabase PostgreSQL for type-safe database operations.",
  },
  {
    icon: Zap,
    title: "Fast & Modern",
    description:
      "Built with Next.js 15, React 18, and Tailwind CSS for optimal performance.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description:
      "Best practices for security, including environment variables and API protection.",
  },
  {
    icon: BarChart,
    title: "Usage Tracking",
    description:
      "Built-in usage tracking and analytics to monitor your application metrics.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to launch
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            All the essential features for a modern SaaS application, ready to
            use out of the box.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
