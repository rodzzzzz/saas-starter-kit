"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function ManageSubscriptionButton() {
  const [isLoading, setIsLoading] = useState(false)

  const handleManageSubscription = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/stripe/create-portal-session", {
        method: "POST",
      })
      const { url } = await response.json()
      window.location.href = url
    } catch (error) {
      console.error("Error creating portal session:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button onClick={handleManageSubscription} disabled={isLoading}>
      {isLoading ? "Loading..." : "Manage Subscription"}
    </Button>
  )
}
