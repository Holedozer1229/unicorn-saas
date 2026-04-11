"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  BarChart3,
  ArrowUpRight,
  Briefcase,
  Sparkles,
  Trash2,
} from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts"
import Link from "next/link"

interface PortfolioCreator {
  id: string
  name: string
  username: string
  avatar: string
  niche: string
  platform: string
  followers: number
  investmentDate: string
  purchaseValue: number
  currentValue: number
  growth: number
  engagementRate: number
}

const portfolioCreators: PortfolioCreator[] = [
  {
    id: "1",
    name: "Alex Chen",
    username: "@alexcreates",
    avatar: "",
    niche: "Tech Reviews",
    platform: "YouTube",
    followers: 2450000,
    investmentDate: "2024-01-15",
    purchaseValue: 50000,
    currentValue: 68500,
    growth: 37,
    engagementRate: 8.7,
  },
  {
    id: "2",
    name: "Marcus Williams",
    username: "@chefmarcus",
    avatar: "",
    niche: "Cooking",
    platform: "TikTok",
    followers: 5670000,
    investmentDate: "2024-02-20",
    purchaseValue: 75000,
    currentValue: 92250,
    growth: 23,
    engagementRate: 9.2,
  },
  {
    id: "3",
    name: "David Park",
    username: "@davidcodes",
    avatar: "",
    niche: "Tech Education",
    platform: "YouTube",
    followers: 890000,
    investmentDate: "2024-03-05",
    purchaseValue: 25000,
    currentValue: 31750,
    growth: 27,
    engagementRate: 7.8,
  },
  {
    id: "4",
    name: "Luna Martinez",
    username: "@lunaart",
    avatar: "",
    niche: "Digital Art",
    platform: "TikTok",
    followers: 2100000,
    investmentDate: "2024-03-18",
    purchaseValue: 35000,
    currentValue: 41300,
    growth: 18,
    engagementRate: 8.9,
  },
]

const performanceData = [
  { month: "Jan", value: 150000, growth: 0 },
  { month: "Feb", value: 162000, growth: 8 },
  { month: "Mar", value: 178000, growth: 18.7 },
  { month: "Apr", value: 195000, growth: 30 },
  { month: "May", value: 208000, growth: 38.7 },
  { month: "Jun", value: 233800, growth: 55.9 },
]

const engagementData = [
  { month: "Jan", engagement: 7.2 },
  { month: "Feb", engagement: 7.8 },
  { month: "Mar", engagement: 8.1 },
  { month: "Apr", engagement: 8.4 },
  { month: "May", engagement: 8.7 },
  { month: "Jun", engagement: 8.65 },
]

export default function PortfolioPage() {
  const totalInvested = portfolioCreators.reduce(
    (sum, c) => sum + c.purchaseValue,
    0
  )
  const totalCurrentValue = portfolioCreators.reduce(
    (sum, c) => sum + c.currentValue,
    0
  )
  const totalGain = totalCurrentValue - totalInvested
  const totalROI = ((totalGain / totalInvested) * 100).toFixed(1)
  const avgEngagement = (
    portfolioCreators.reduce((sum, c) => sum + c.engagementRate, 0) /
    portfolioCreators.length
  ).toFixed(1)

  function formatCurrency(num: number): string {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num)
  }

  function formatNumber(num: number): string {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`
    return num.toString()
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Your Portfolio
          </h1>
          <p className="text-muted-foreground">
            Track performance and manage your creator investments.
          </p>
        </div>
        <Button asChild className="btn-gradient">
          <Link href="/market">
            <Sparkles className="mr-2 h-4 w-4" />
            Discover Creators
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="cosmic-card">
          <CardHeader className="pb-2">
            <CardDescription>Total Value</CardDescription>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <DollarSign className="h-5 w-5 text-green-400" />
              {formatCurrency(totalCurrentValue).replace("$", "")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="flex items-center gap-1 text-sm text-green-400">
              <ArrowUpRight className="h-4 w-4" />+{formatCurrency(totalGain)}{" "}
              all time
            </p>
          </CardContent>
        </Card>

        <Card className="cosmic-card">
          <CardHeader className="pb-2">
            <CardDescription>Total ROI</CardDescription>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <TrendingUp className="h-5 w-5 text-primary" />
              {totalROI}%
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              From {formatCurrency(totalInvested)} invested
            </p>
          </CardContent>
        </Card>

        <Card className="cosmic-card">
          <CardHeader className="pb-2">
            <CardDescription>Avg Engagement</CardDescription>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <BarChart3 className="h-5 w-5 text-accent" />
              {avgEngagement}%
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Across all creators
            </p>
          </CardContent>
        </Card>

        <Card className="cosmic-card">
          <CardHeader className="pb-2">
            <CardDescription>Creators</CardDescription>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Briefcase className="h-5 w-5 text-yellow-400" />
              {portfolioCreators.length}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              In your portfolio
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="cosmic-card">
          <CardHeader>
            <CardTitle className="text-lg">Portfolio Value</CardTitle>
            <CardDescription>Performance over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor="hsl(330, 90%, 55%)"
                        stopOpacity={0.3}
                      />
                      <stop
                        offset="95%"
                        stopColor="hsl(330, 90%, 55%)"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="hsl(260, 20%, 18%)"
                  />
                  <XAxis
                    dataKey="month"
                    stroke="hsl(220, 10%, 55%)"
                    fontSize={12}
                  />
                  <YAxis
                    stroke="hsl(220, 10%, 55%)"
                    fontSize={12}
                    tickFormatter={(value) => `$${value / 1000}k`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(260, 25%, 8%)",
                      border: "1px solid hsl(260, 20%, 18%)",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "hsl(210, 20%, 90%)" }}
                    formatter={(value: number) => [
                      formatCurrency(value),
                      "Value",
                    ]}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="hsl(330, 90%, 55%)"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="cosmic-card">
          <CardHeader>
            <CardTitle className="text-lg">Engagement Rate</CardTitle>
            <CardDescription>Average engagement over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={engagementData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="hsl(260, 20%, 18%)"
                  />
                  <XAxis
                    dataKey="month"
                    stroke="hsl(220, 10%, 55%)"
                    fontSize={12}
                  />
                  <YAxis
                    stroke="hsl(220, 10%, 55%)"
                    fontSize={12}
                    domain={[6, 10]}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(260, 25%, 8%)",
                      border: "1px solid hsl(260, 20%, 18%)",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "hsl(210, 20%, 90%)" }}
                    formatter={(value: number) => [`${value}%`, "Engagement"]}
                  />
                  <Line
                    type="monotone"
                    dataKey="engagement"
                    stroke="hsl(175, 80%, 45%)"
                    strokeWidth={2}
                    dot={{ fill: "hsl(175, 80%, 45%)", strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="cosmic-card">
        <CardHeader>
          <CardTitle className="text-lg">Portfolio Holdings</CardTitle>
          <CardDescription>
            Your creator investments and their performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {portfolioCreators.map((creator) => {
              const gain = creator.currentValue - creator.purchaseValue
              const isPositive = gain >= 0

              return (
                <div
                  key={creator.id}
                  className="flex flex-col gap-4 rounded-lg border border-border/50 bg-muted/20 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarImage src={creator.avatar} alt={creator.name} />
                      <AvatarFallback className="bg-primary/20 text-primary">
                        {creator.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{creator.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {creator.username}
                      </p>
                      <div className="mt-1 flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {creator.platform}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-secondary/50 text-xs"
                        >
                          {creator.niche}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">Followers</p>
                      <p className="flex items-center justify-center gap-1 font-semibold">
                        <Users className="h-3 w-3 text-muted-foreground" />
                        {formatNumber(creator.followers)}
                      </p>
                    </div>

                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">Engagement</p>
                      <p className="font-semibold text-accent">
                        {creator.engagementRate}%
                      </p>
                    </div>

                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">Invested</p>
                      <p className="font-semibold">
                        {formatCurrency(creator.purchaseValue)}
                      </p>
                    </div>

                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">
                        Current Value
                      </p>
                      <p className="font-semibold text-green-400">
                        {formatCurrency(creator.currentValue)}
                      </p>
                    </div>

                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">ROI</p>
                      <p
                        className={`flex items-center justify-center gap-1 font-semibold ${
                          isPositive ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {isPositive ? (
                          <TrendingUp className="h-3 w-3" />
                        ) : (
                          <TrendingDown className="h-3 w-3" />
                        )}
                        {isPositive ? "+" : ""}
                        {creator.growth}%
                      </p>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
