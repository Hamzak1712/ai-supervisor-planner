"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type MatchResult = {
  supervisorName: string
  expertise: string[]
  matchScore: number
  rationale: string
}

export default function PlannerPage() {
  const [topic, setTopic] = useState("")
  const [keywords, setKeywords] = useState("")
  const [level, setLevel] = useState<"UG" | "PG">("UG")
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState<MatchResult[] | null>(null)

  const canGenerate = useMemo(() => topic.trim().length >= 5, [topic])

  async function handleGenerate() {
    setIsLoading(true)
    setResults(null)

    // Frontend-only demo: simulate an API request
    await new Promise((r) => setTimeout(r, 900))

    const demo: MatchResult[] = [
      {
        supervisorName: "Dr Umair Khan",
        expertise: ["Distributed systems", "Web platforms", "Project supervision"],
        matchScore: 92,
        rationale:
          "Strong overlap with your topic keywords and good availability for iterative milestone reviews.",
      },
      {
        supervisorName: "Dr Barbara Smith",
        expertise: ["Data privacy", "GDPR", "Ethics"],
        matchScore: 85,
        rationale:
          "Good match if your project involves student data, consent, or monitoring/analytics with compliance.",
      },
      {
        supervisorName: "Dr Tendai Mhlanga",
        expertise: ["Software engineering", "Requirements", "Testing"],
        matchScore: 78,
        rationale:
          "Solid fit for structured delivery, documentation quality, and strong verification/testing focus.",
      },
    ]

    setResults(demo)
    setIsLoading(false)
  }

  return (
    <main className="relative min-h-screen px-6 py-12">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-chart-2/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl space-y-6">
        <div className="flex items-center justify-between gap-4">
          <Button variant="ghost" asChild>
            <Link href="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to dashboard
            </Link>
          </Button>

          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <span className="text-lg font-bold">SupervisorMatch</span>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold">Supervisor Matching</h1>
          <p className="mt-2 text-muted-foreground">
            Frontend-only IPD demo. Next step is wiring this to your API and database.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Your project details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Project topic</label>
                <input
                  className="w-full rounded-md border border-border/50 bg-background/60 px-3 py-2 text-sm outline-none focus:border-primary/50"
                  placeholder="e.g. AI supervisor planning system for university projects"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  Tip: enter at least 5 characters so the demo can generate results.
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Keywords (comma separated)
                </label>
                <input
                  className="w-full rounded-md border border-border/50 bg-background/60 px-3 py-2 text-sm outline-none focus:border-primary/50"
                  placeholder="e.g. Next.js, Prisma, GDPR, dashboard, milestones"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Level</label>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant={level === "UG" ? "default" : "outline"}
                    onClick={() => setLevel("UG")}
                  >
                    Undergraduate
                  </Button>
                  <Button
                    type="button"
                    variant={level === "PG" ? "default" : "outline"}
                    onClick={() => setLevel("PG")}
                  >
                    Postgraduate
                  </Button>
                </div>
              </div>

              <Button
                className="w-full"
                disabled={!canGenerate || isLoading}
                onClick={handleGenerate}
              >
                {isLoading ? "Generating..." : "Generate matches"}
              </Button>

              {!canGenerate && (
                <div className="flex items-start gap-2 rounded-md border border-border/50 bg-card/50 p-3 text-sm text-muted-foreground">
                  <AlertTriangle className="mt-0.5 h-4 w-4" />
                  Enter a project topic to generate demo matches.
                </div>
              )}

              <p className="text-xs text-muted-foreground">
                This is frontend-only for IPD. Later we will call your API route and
                store results in the database.
              </p>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-4">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Output</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {isLoading && "Matching in progress..."}
                {!isLoading && results === null && (
                  <span>Fill the form and click Generate matches.</span>
                )}
                {!isLoading && results?.length === 0 && (
                  <span>No matches found.</span>
                )}
                {!isLoading && results && results.length > 0 && (
                  <span>
                    Showing {results.length} supervisor matches (demo data).
                  </span>
                )}
              </CardContent>
            </Card>

            {results?.map((r) => (
              <Card
                key={r.supervisorName}
                className="border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader className="space-y-1">
                  <CardTitle className="flex items-center justify-between gap-3 text-lg">
                    <span>{r.supervisorName}</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-success/15 px-2.5 py-1 text-sm font-medium text-success">
                      <CheckCircle2 className="h-4 w-4" />
                      {r.matchScore}%
                    </span>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Expertise: {r.expertise.join(", ")}
                  </p>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {r.rationale}
                  <div className="mt-4 flex gap-2">
                    <Button size="sm" asChild>
                      <Link href="/dashboard">Select</Link>
                    </Button>
                    <Button size="sm" variant="outline">
                      View profile (later)
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}