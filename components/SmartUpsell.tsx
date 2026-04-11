"use client"

import { useEffect, useState } from "react"

export function SmartUpsell() {
  const [insight, setInsight] = useState<any>(null)

  useEffect(() => {
    fetch("/api/revenue/insight")
      .then((r) => r.json())
      .then(setInsight)
  }, [])

  if (!insight) return null

  if (!insight.shouldUpsell) return null

  return (
    <div className="border rounded-xl p-4 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="font-semibold">🦄 Smart Upgrade Suggestion</div>
      <p className="text-sm text-gray-600">{insight.message}</p>

      {insight.recommendedTier && (
        <button className="mt-2 px-3 py-1 bg-black text-white rounded-lg text-sm">
          Upgrade to {insight.recommendedTier}
        </button>
      )}
    </div>
  )
}
}
