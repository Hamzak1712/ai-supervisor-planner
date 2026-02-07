import Link from "next/link"
import { GraduationCap, Users, BarChart3, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <main className="relative min-h-screen">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-chart-2/5 blur-3xl" />
      </div>

      <header className="relative z-10 flex items-center justify-between border-b border-border/50 px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
          <span className="text-lg font-bold">SupervisorMatch</span>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button asChild>
            <Link href="/planner">Go to Planner</Link>
          </Button>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard (IPD Frontend)</h1>
          <p className="mt-2 text-muted-foreground">
            This is the frontend-only dashboard view. Backend data will be integrated later.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <StatCard
            title="Students"
            value="—"
            icon={<Users className="h-5 w-5" />}
            hint="Will come from database"
          />
          <StatCard
            title="Matches Generated"
            value="—"
            icon={<Sparkles className="h-5 w-5" />}
            hint="Will come from matching API"
          />
          <StatCard
            title="Progress Alerts"
            value="—"
            icon={<BarChart3 className="h-5 w-5" />}
            hint="Will come from milestones"
          />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Recent activity</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Placeholder list for IPD demo:
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Student created an account</li>
                <li>Supervisor matching run completed</li>
                <li>Planner milestones generated</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Quick actions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Button asChild>
                <Link href="/planner">Run Supervisor Match</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/login">Sign in page</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/register">Register page</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}

function StatCard({
  title,
  value,
  icon,
  hint,
}: {
  title: string
  value: string
  icon: React.ReactNode
  hint: string
}) {
  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-base">{title}</CardTitle>
        <div className="text-primary">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
        <p className="mt-1 text-sm text-muted-foreground">{hint}</p>
      </CardContent>
    </Card>
  )
}