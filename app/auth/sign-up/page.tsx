"use client"

import { useState } from "react"
import Link from "next/link"
import { signUp } from "@/app/actions/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import UnicornOSLogo from "@/components/ui/UnicornOSLogo"

export default function SignUpPage() {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(formData: FormData) {
    setLoading(true)
    setError(null)
    const result = await signUp(formData)
    if (result?.error) {
      setError(result.error)
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 circuit-grid starfield">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#00d4ff]/6 blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-[#8b5cf6]/6 blur-[80px]" />
      </div>
      <div className="relative z-10 w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <UnicornOSLogo size={40} />
        </div>
        <div className="cosmic-card gradient-border rounded-2xl p-8">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-black text-white">Create your account</h1>
            <p className="text-sm text-white/50 mt-1">Start your journey with UnicornOS</p>
          </div>
          <form action={handleSubmit} className="space-y-4">
            {error && (
              <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-400">{error}</div>
            )}
            <div className="space-y-1.5">
              <Label htmlFor="displayName" className="text-white/70 text-xs font-mono uppercase tracking-wider">Display Name</Label>
              <Input id="displayName" name="displayName" type="text" placeholder="Your creator name" required
                className="bg-[rgba(0,200,255,0.04)] border-[rgba(0,200,255,0.15)] text-white placeholder:text-white/25 focus:border-[#00d4ff] focus:ring-[#00d4ff]/20 rounded-xl" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-white/70 text-xs font-mono uppercase tracking-wider">Email</Label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" required autoComplete="email"
                className="bg-[rgba(0,200,255,0.04)] border-[rgba(0,200,255,0.15)] text-white placeholder:text-white/25 focus:border-[#00d4ff] focus:ring-[#00d4ff]/20 rounded-xl" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password" className="text-white/70 text-xs font-mono uppercase tracking-wider">Password</Label>
              <Input id="password" name="password" type="password" placeholder="Create a strong password" required minLength={8} autoComplete="new-password"
                className="bg-[rgba(0,200,255,0.04)] border-[rgba(0,200,255,0.15)] text-white placeholder:text-white/25 focus:border-[#00d4ff] focus:ring-[#00d4ff]/20 rounded-xl" />
              <p className="text-xs text-white/30">Must be at least 8 characters</p>
            </div>
            <Button type="submit" className="w-full bg-[#00d4ff] hover:bg-[#00bde8] text-[#04040f] font-bold rounded-xl h-11 shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all mt-2" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create Account
            </Button>
            <p className="text-center text-sm text-white/40">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-[#00d4ff] hover:text-[#67e8f9] font-medium transition-colors">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}