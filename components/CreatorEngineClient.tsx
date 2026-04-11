"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Loader2, Video, Flame } from "lucide-react"

export function CreatorEngineClient() {
  const [topic, setTopic] = useState("")
  const [platform, setPlatform] = useState("tiktok")
  const [loading, setLoading] = useState(false)
  const [stream, setStream] = useState("")
  const [result, setResult] = useState<any>(null)

  async function generate() {
    setLoading(true)
    setStream("")
    setResult(null)

    const res = await fetch("/api/creator-engine", {
      method: "POST",
      body: JSON.stringify({ topic, platform }),
    })

    if (!res.body) return

    const reader = res.body.getReader()
    const decoder = new TextDecoder()
    let buffer = ""

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      buffer += decoder.decode(value, { stream: true })
      setStream(buffer)
    }

    try {
      setResult(JSON.parse(buffer.split("\n\n").pop() || "{}"))
    } catch {
      setResult({ script: buffer })
    }

    setLoading(false)
  }

  return (
    <div className="space-y-6">

      <Card>
        <CardHeader>
          <CardTitle className="flex gap-2 items-center">
            <Sparkles className="text-purple-500" />
            Creator Engine
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          <Input
            placeholder="Enter your idea (e.g. 'how to make money online')"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />

          <Button
            onClick={generate}
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-500 to-cyan-500"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2" />
                Generating...
              </>
            ) : (
              <>
                <Video className="mr-2" />
                Generate Creator Pack
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* STREAM */}
      {stream && (
        <Card>
          <CardContent className="p-4 text-sm whitespace-pre-wrap text-white/80">
            {stream}
          </CardContent>
        </Card>
      )}

      {/* RESULT */}
      {result && (
        <div className="grid gap-4 md:grid-cols-2">

          <Card>
            <CardHeader>
              <CardTitle>🔥 Hook</CardTitle>
            </CardHeader>
            <CardContent>{result.hook}</CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🎯 Viral Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-cyan-400">
                {result.viral_score}/100
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>🎬 Script</CardTitle>
            </CardHeader>
            <CardContent className="whitespace-pre-wrap">
              {result.script}
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>📈 Retention Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {result.retention_tips?.map((t: string, i: number) => (
                  <li key={i}>• {t}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

        </div>
      )}
    </div>
  )
}
