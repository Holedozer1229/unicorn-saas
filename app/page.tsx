import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Sparkles,
  Lightbulb,
  TrendingUp,
  Briefcase,
  BarChart3,
  ArrowRight,
  Zap,
  DollarSign,
  Users,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold text-gradient">Creator Capital</span>
              <span className="ml-2 text-sm text-muted-foreground">Markets OS</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Button asChild className="btn-gradient">
              <Link href="/dashboard">
                Launch App
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center md:py-32">
          <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary">
            AI-Powered Creator Intelligence
          </Badge>
          <h1 className="mx-auto mb-6 max-w-4xl text-balance text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            The Operating System for{" "}
            <span className="text-gradient">Creator Capital Markets</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            Generate viral content strategies with AI, discover top-performing creators,
            track growth metrics, and optimize your monetization - all in one platform.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="btn-gradient">
              <Link href="/dashboard">
                <Zap className="mr-2 h-5 w-5" />
                Start Generating Content
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/market">
                <Users className="mr-2 h-5 w-5" />
                Explore Creator Market
              </Link>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted/10 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Everything You Need to Dominate
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Powerful AI tools and market intelligence to help creators go viral,
                grow their audience, and maximize monetization.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="cosmic-card transition-all hover:scale-[1.02]">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">AI Content Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Generate viral ideas, hooks, scripts, captions, and monetization
                    strategies tailored to your niche and platform.
                  </p>
                </CardContent>
              </Card>

              <Card className="cosmic-card transition-all hover:scale-[1.02]">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Creator Market</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Discover top performers and trending creators with growth scores,
                    engagement metrics, and simulated market values.
                  </p>
                </CardContent>
              </Card>

              <Card className="cosmic-card transition-all hover:scale-[1.02]">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
                    <Briefcase className="h-6 w-6 text-green-500" />
                  </div>
                  <CardTitle className="text-lg">Portfolio Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Build your creator portfolio, track total growth, ROI, and
                    engagement rates with beautiful performance charts.
                  </p>
                </CardContent>
              </Card>

              <Card className="cosmic-card transition-all hover:scale-[1.02]">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/10">
                    <DollarSign className="h-6 w-6 text-yellow-500" />
                  </div>
                  <CardTitle className="text-lg">Monetization AI</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Get personalized monetization strategies with revenue estimates
                    and difficulty ratings for your specific niche.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                How It Works
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Three simple steps to unlock your creator potential
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                  1
                </div>
                <h3 className="mb-2 text-xl font-semibold">Enter Your Niche</h3>
                <p className="text-muted-foreground">
                  Tell us your content niche and preferred platform (TikTok, Instagram, or YouTube).
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-2xl font-bold text-accent">
                  2
                </div>
                <h3 className="mb-2 text-xl font-semibold">Generate Strategy</h3>
                <p className="text-muted-foreground">
                  AI generates viral ideas, hooks, scripts, captions, and monetization plans instantly.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-2xl font-bold text-green-500">
                  3
                </div>
                <h3 className="mb-2 text-xl font-semibold">Track & Grow</h3>
                <p className="text-muted-foreground">
                  Discover top creators in the market and build your portfolio to track performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Go Viral?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Join the AI-powered platform that helps creators generate viral content,
              track growth, and optimize monetization.
            </p>
            <Button asChild size="lg" className="btn-gradient">
              <Link href="/dashboard">
                Launch Creator Capital OS
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold">Creator Capital Markets OS</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Built for creators, powered by AI.
          </p>
        </div>
      </footer>
    </div>
  )
}
