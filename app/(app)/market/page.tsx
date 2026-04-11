"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  TrendingUp,
  TrendingDown,
  Users,
  Sparkles,
  BarChart3,
  DollarSign,
  Plus,
  ArrowUpRight,
  Flame,
} from "lucide-react"

interface Creator {
  id: string
  name: string
  username: string
  avatar: string
  niche: string
  platform: string
  followers: number
  growthScore: number
  engagementScore: number
  marketValue: number
  trending: boolean
  weeklyChange: number
}

const mockCreators: Creator[] = [
  {
    id: "1",
    name: "Alex Chen",
    username: "@alexcreates",
    avatar: "",
    niche: "Tech Reviews",
    platform: "YouTube",
    followers: 2450000,
    growthScore: 94,
    engagementScore: 87,
    marketValue: 485000,
    trending: true,
    weeklyChange: 12.5,
  },
  {
    id: "2",
    name: "Sarah Johnson",
    username: "@sarahfitlife",
    avatar: "",
    niche: "Fitness",
    platform: "Instagram",
    followers: 1890000,
    growthScore: 88,
    engagementScore: 92,
    marketValue: 320000,
    trending: true,
    weeklyChange: 8.3,
  },
  {
    id: "3",
    name: "Marcus Williams",
    username: "@chefmarcus",
    avatar: "",
    niche: "Cooking",
    platform: "TikTok",
    followers: 5670000,
    growthScore: 96,
    engagementScore: 89,
    marketValue: 720000,
    trending: true,
    weeklyChange: 15.7,
  },
  {
    id: "4",
    name: "Emily Davis",
    username: "@emilytravels",
    avatar: "",
    niche: "Travel",
    platform: "YouTube",
    followers: 980000,
    growthScore: 72,
    engagementScore: 78,
    marketValue: 145000,
    trending: false,
    weeklyChange: -2.1,
  },
  {
    id: "5",
    name: "Jake Thompson",
    username: "@jakeplaysgames",
    avatar: "",
    niche: "Gaming",
    platform: "Twitch",
    followers: 3200000,
    growthScore: 82,
    engagementScore: 95,
    marketValue: 510000,
    trending: true,
    weeklyChange: 6.8,
  },
  {
    id: "6",
    name: "Mia Rodriguez",
    username: "@miabeauty",
    avatar: "",
    niche: "Beauty",
    platform: "Instagram",
    followers: 1450000,
    growthScore: 76,
    engagementScore: 84,
    marketValue: 198000,
    trending: false,
    weeklyChange: 3.2,
  },
  {
    id: "7",
    name: "David Park",
    username: "@davidcodes",
    avatar: "",
    niche: "Tech Education",
    platform: "YouTube",
    followers: 890000,
    growthScore: 91,
    engagementScore: 86,
    marketValue: 165000,
    trending: true,
    weeklyChange: 9.4,
  },
  {
    id: "8",
    name: "Luna Martinez",
    username: "@lunaart",
    avatar: "",
    niche: "Digital Art",
    platform: "TikTok",
    followers: 2100000,
    growthScore: 85,
    engagementScore: 91,
    marketValue: 285000,
    trending: true,
    weeklyChange: 7.6,
  },
  {
    id: "9",
    name: "Ryan Cooper",
    username: "@ryanfinance",
    avatar: "",
    niche: "Finance",
    platform: "YouTube",
    followers: 1670000,
    growthScore: 79,
    engagementScore: 73,
    marketValue: 225000,
    trending: false,
    weeklyChange: 1.8,
  },
  {
    id: "10",
    name: "Zoe Anderson",
    username: "@zoefashion",
    avatar: "",
    niche: "Fashion",
    platform: "Instagram",
    followers: 3450000,
    growthScore: 83,
    engagementScore: 88,
    marketValue: 445000,
    trending: true,
    weeklyChange: 5.9,
  },
  {
    id: "11",
    name: "Chris Lee",
    username: "@chrismusic",
    avatar: "",
    niche: "Music",
    platform: "TikTok",
    followers: 4200000,
    growthScore: 89,
    engagementScore: 94,
    marketValue: 580000,
    trending: true,
    weeklyChange: 11.2,
  },
  {
    id: "12",
    name: "Olivia Brown",
    username: "@oliviawellness",
    avatar: "",
    niche: "Wellness",
    platform: "Instagram",
    followers: 760000,
    growthScore: 68,
    engagementScore: 81,
    marketValue: 98000,
    trending: false,
    weeklyChange: -1.5,
  },
]

type SortOption = "top" | "trending" | "growth" | "engagement" | "value"

export default function MarketPage() {
  const [sortBy, setSortBy] = useState<SortOption>("top")
  const [portfolio, setPortfolio] = useState<string[]>([])

  const sortedCreators = useMemo(() => {
    const sorted = [...mockCreators]
    switch (sortBy) {
      case "trending":
        return sorted
          .filter((c) => c.trending)
          .sort((a, b) => b.weeklyChange - a.weeklyChange)
      case "growth":
        return sorted.sort((a, b) => b.growthScore - a.growthScore)
      case "engagement":
        return sorted.sort((a, b) => b.engagementScore - a.engagementScore)
      case "value":
        return sorted.sort((a, b) => b.marketValue - a.marketValue)
      default:
        return sorted.sort(
          (a, b) =>
            (b.growthScore + b.engagementScore) / 2 -
            (a.growthScore + a.engagementScore) / 2
        )
    }
  }, [sortBy])

  function formatNumber(num: number): string {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`
    return num.toString()
  }

  function formatCurrency(num: number): string {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num)
  }

  function getScoreColor(score: number): string {
    if (score >= 90) return "text-green-400"
    if (score >= 75) return "text-yellow-400"
    return "text-orange-400"
  }

  function addToPortfolio(creatorId: string) {
    if (!portfolio.includes(creatorId)) {
      setPortfolio([...portfolio, creatorId])
    }
  }

  function isInPortfolio(creatorId: string): boolean {
    return portfolio.includes(creatorId)
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Creator Market
          </h1>
          <p className="text-muted-foreground">
            Discover top performers and trending creators to add to your
            portfolio.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Select
            value={sortBy}
            onValueChange={(v) => setSortBy(v as SortOption)}
          >
            <SelectTrigger className="w-[180px] bg-input">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="top">Top Performers</SelectItem>
              <SelectItem value="trending">Trending Now</SelectItem>
              <SelectItem value="growth">Growth Score</SelectItem>
              <SelectItem value="engagement">Engagement</SelectItem>
              <SelectItem value="value">Market Value</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {sortBy === "trending" && (
        <div className="flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-3">
          <Flame className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium">
            Showing trending creators with highest weekly growth
          </span>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedCreators.map((creator) => (
          <Card
            key={creator.id}
            className="cosmic-card transition-all hover:scale-[1.02]"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
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
                    <CardTitle className="flex items-center gap-2 text-base">
                      {creator.name}
                      {creator.trending && (
                        <Sparkles className="h-4 w-4 text-primary" />
                      )}
                    </CardTitle>
                    <CardDescription className="text-xs">
                      {creator.username}
                    </CardDescription>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs">
                  {creator.platform}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{formatNumber(creator.followers)}</span>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-secondary/50 text-xs font-normal"
                >
                  {creator.niche}
                </Badge>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <TrendingUp className="h-3 w-3" />
                    Growth
                  </span>
                  <span className={getScoreColor(creator.growthScore)}>
                    {creator.growthScore}
                  </span>
                </div>
                <Progress
                  value={creator.growthScore}
                  className="h-1.5 bg-muted"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <BarChart3 className="h-3 w-3" />
                    Engagement
                  </span>
                  <span className={getScoreColor(creator.engagementScore)}>
                    {creator.engagementScore}
                  </span>
                </div>
                <Progress
                  value={creator.engagementScore}
                  className="h-1.5 bg-muted"
                />
              </div>

              <div className="flex items-center justify-between border-t border-border/50 pt-4">
                <div>
                  <p className="text-xs text-muted-foreground">Market Value</p>
                  <p className="flex items-center gap-1 text-lg font-bold">
                    <DollarSign className="h-4 w-4 text-green-400" />
                    {formatCurrency(creator.marketValue).replace("$", "")}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">7d Change</p>
                  <p
                    className={`flex items-center justify-end gap-1 text-sm font-semibold ${
                      creator.weeklyChange >= 0
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {creator.weeklyChange >= 0 ? (
                      <ArrowUpRight className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    {creator.weeklyChange >= 0 ? "+" : ""}
                    {creator.weeklyChange}%
                  </p>
                </div>
              </div>

              <Button
                onClick={() => addToPortfolio(creator.id)}
                disabled={isInPortfolio(creator.id)}
                className={`w-full ${
                  isInPortfolio(creator.id)
                    ? "bg-green-500/20 text-green-400"
                    : "btn-gradient"
                }`}
                size="sm"
              >
                {isInPortfolio(creator.id) ? (
                  "In Portfolio"
                ) : (
                  <>
                    <Plus className="mr-2 h-4 w-4" />
                    Add to Portfolio
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
