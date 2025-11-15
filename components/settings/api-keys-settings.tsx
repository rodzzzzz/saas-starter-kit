"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Eye, EyeOff, Plus, Trash2 } from "lucide-react"
import { useState } from "react"

const mockApiKeys = [
  {
    id: "1",
    name: "Production API Key",
    key: "sk_live_51234567890abcdef",
    createdAt: "2024-01-15",
    lastUsed: "2 hours ago",
  },
  {
    id: "2",
    name: "Development API Key",
    key: "sk_test_51234567890abcdef",
    createdAt: "2024-01-10",
    lastUsed: "1 day ago",
  },
]

export function ApiKeysSettings() {
  const [showKeys, setShowKeys] = useState<Record<string, boolean>>({})

  const toggleKeyVisibility = (id: string) => {
    setShowKeys((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const copyToClipboard = (key: string) => {
    navigator.clipboard.writeText(key)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>API Keys</CardTitle>
              <CardDescription>Manage your API keys for accessing our services.</CardDescription>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create New Key
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockApiKeys.map((apiKey) => (
              <div key={apiKey.id} className="flex items-center justify-between rounded-lg border border-border p-4">
                <div className="flex-1 space-y-1">
                  <p className="font-medium">{apiKey.name}</p>
                  <div className="flex items-center gap-2">
                    <code className="text-sm text-muted-foreground">
                      {showKeys[apiKey.id] ? apiKey.key : "••••••••••••••••••••"}
                    </code>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => toggleKeyVisibility(apiKey.id)}
                    >
                      {showKeys[apiKey.id] ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                    </Button>
                    <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => copyToClipboard(apiKey.key)}>
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Created {apiKey.createdAt} • Last used {apiKey.lastUsed}
                  </p>
                </div>
                <Button variant="ghost" size="icon" className="text-destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage Limits</CardTitle>
          <CardDescription>Your current API usage and limits for this billing period.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span>API Calls</span>
                <span className="text-muted-foreground">12,234 / 100,000</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[12%] bg-foreground" />
              </div>
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span>Bandwidth</span>
                <span className="text-muted-foreground">45 GB / 100 GB</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[45%] bg-foreground" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
