import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import UnicornOSLogo from "@/components/ui/UnicornOSLogo"

export default function SignUpSuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 circuit-grid starfield">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#00d4ff]/6 blur-[100px]" />
      </div>
      <div className="relative z-10 w-full max-w-md">
        <div className="mb-8 flex justify-center"><UnicornOSLogo size={40} /></div>
        <div className="cosmic-card gradient-border rounded-2xl p-8 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[rgba(0,200,255,0.1)] border border-[rgba(0,200,255,0.25)] glow-primary">
            <Mail className="h-8 w-8 text-[#00d4ff]" />
          </div>
          <h1 className="text-2xl font-black text-white mb-2">Check your email</h1>
          <p className="text-sm text-white/50 mb-6">We&apos;ve sent you a confirmation link to verify your account</p>
          <p className="text-sm text-white/40 mb-8">
            Click the link in the email to complete your registration and start using UnicornOS. The link will expire in 24 hours.
          </p>
          <Button asChild variant="outline" className="w-full border-[rgba(0,200,255,0.2)] text-white/70 hover:border-[#00d4ff] hover:text-[#00d4ff] hover:bg-[rgba(0,200,255,0.05)] rounded-xl transition-all">
            <Link href="/auth/login">Back to Sign In</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}