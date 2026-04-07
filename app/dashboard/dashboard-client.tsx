"use client"

export function DashboardClient({
  profile,
  tier,
  aiGenerations,
  remainingGenerations,
}: any) {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center gap-3 text-2xl font-bold">
        🦄 UnicornOS Dashboard
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card title="Plan" value={tier} />
        <Card title="AI Used" value={aiGenerations} />
        <Card
          title="Remaining"
          value={
            remainingGenerations === -1 ? "Unlimited" : remainingGenerations
          }
        />
      </div>

      <div className="border rounded-xl p-6">
        <h2 className="font-semibold">Welcome back, {profile?.name}</h2>
        <p className="text-sm text-gray-500">
          Unicorn SaaS is now running on UnicornOS billing engine.
        </p>
      </div>
    </div>
  )
}

function Card({ title, value }: any) {
  return (
    <div className="border rounded-xl p-4">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  )
}
