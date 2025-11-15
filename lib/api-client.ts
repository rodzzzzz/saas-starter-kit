// Client-side API helpers for making requests to your API routes

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message)
    this.name = "ApiError"
  }
}

async function fetchApi<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: "Unknown error" }))
    throw new ApiError(response.status, error.error || "Request failed")
  }

  return response.json()
}

// User API
export const userApi = {
  getCurrent: () => fetchApi<{ user: any }>("/api/user"),
  update: (data: { firstName?: string; lastName?: string }) =>
    fetchApi<{ user: any }>("/api/user", {
      method: "PATCH",
      body: JSON.stringify(data),
    }),
}

// Usage API
export const usageApi = {
  get: (params?: { startDate?: string; endDate?: string }) => {
    const searchParams = new URLSearchParams(params as any)
    return fetchApi<{ usage: any[] }>(`/api/usage?${searchParams}`)
  },
  track: (action: string, metadata?: any) =>
    fetchApi<{ usage: any }>("/api/usage", {
      method: "POST",
      body: JSON.stringify({ action, metadata }),
    }),
}

// Subscription API
export const subscriptionApi = {
  get: () => fetchApi<{ subscription: any }>("/api/subscription"),
}

// Analytics API
export const analyticsApi = {
  get: (period: "7d" | "30d" | "90d" = "7d") => fetchApi<{ analytics: any }>(`/api/analytics?period=${period}`),
}

// Stripe API
export const stripeApi = {
  createCheckoutSession: (plan: string) =>
    fetchApi<{ url: string }>("/api/stripe/create-checkout-session", {
      method: "POST",
      body: JSON.stringify({ plan }),
    }),
  createPortalSession: () =>
    fetchApi<{ url: string }>("/api/stripe/create-portal-session", {
      method: "POST",
    }),
}
