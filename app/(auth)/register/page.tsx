import Link from "next/link"
import { GraduationCap, ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RegisterPage() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-md">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </Button>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <span className="text-lg font-bold">SupervisorMatch</span>
            </div>

            <CardTitle>Create your account</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Full name</label>
              <input
                className="w-full rounded-md border border-border/50 bg-background/60 px-3 py-2 text-sm outline-none focus:border-primary/50"
                placeholder="e.g. Hamza Khan"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input
                className="w-full rounded-md border border-border/50 bg-background/60 px-3 py-2 text-sm outline-none focus:border-primary/50"
                placeholder="you@example.com"
                type="email"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <input
                className="w-full rounded-md border border-border/50 bg-background/60 px-3 py-2 text-sm outline-none focus:border-primary/50"
                placeholder="••••••••"
                type="password"
              />
            </div>

            <Button className="w-full">Create account (frontend only)</Button>

            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link className="text-primary hover:underline" href="/login">
                Sign in
              </Link>
            </p>

            <p className="text-center text-xs text-muted-foreground">
              Backend auth will be connected later. For IPD this shows the UI flow.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}