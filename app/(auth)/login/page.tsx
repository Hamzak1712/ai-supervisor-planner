"use client";

import { useState } from "react";

export default function LoginPage() {
  const [role, setRole] = useState<"ADMIN" | "STUDENT" | "SUPERVISOR">("STUDENT");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || "Login failed");
      return;
    }

    localStorage.setItem("token", data.token);

    if (data.user.role === "ADMIN") window.location.href = "/admin";
    if (data.user.role === "STUDENT") window.location.href = "/student";
    if (data.user.role === "SUPERVISOR") window.location.href = "/supervisor";
  }

  return (
    <main className="min-h-screen flex bg-[#f6f8f6] dark:bg-[#152012]">
      {/* LEFT / HERO */}
      <section className="hidden lg:flex flex-1 items-center justify-center p-20 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#152012] via-[#152012]/80 to-transparent" />

        <div className="relative z-10 max-w-lg">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#53d22d]/20 border border-[#53d22d]/30 text-[#53d22d] text-xs font-bold mb-6">
            ⚡ v2.0 IS NOW LIVE
          </div>

          <h1 className="text-5xl font-black leading-tight mb-6">
            Streamline your workflow in seconds.
          </h1>

          <p className="text-white/70 text-lg mb-8">
            AI-powered supervisor selection and project planning, built for universities.
          </p>

          <p className="text-sm text-white/60">
            Trusted by students, supervisors, and administrators.
          </p>
        </div>
      </section>

      {/* RIGHT / LOGIN */}
      <section className="w-full lg:w-[540px] flex items-center justify-center px-6 md:px-12">
        <div className="w-full max-w-[400px] py-12">
          <header className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Welcome back</h2>
            <p className="text-white/60 text-sm">Sign in to your account</p>
          </header>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* ROLE */}
            <div className="flex flex-col gap-3">
              <label className="text-sm text-white font-medium">I am a…</label>
              <div className="grid grid-cols-3 gap-3">
                {(["ADMIN", "STUDENT", "SUPERVISOR"] as const).map((r) => (
                  <label
                    key={r}
                    className={`cursor-pointer rounded-xl border px-3 py-3 text-xs font-bold uppercase text-center transition
                      ${
                        role === r
                          ? "border-[#53d22d] bg-[#53d22d]/10 text-[#53d22d]"
                          : "border-white/10 bg-white/5 text-white/60 hover:bg-white/10"
                      }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      className="hidden"
                      checked={role === r}
                      onChange={() => setRole(r)}
                    />
                    {r}
                  </label>
                ))}
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-white font-medium">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@university.ac.uk"
                className="h-14 rounded-xl bg-white/5 border border-white/10 text-white px-4 focus:outline-none focus:ring-2 focus:ring-[#53d22d]/20"
              />
            </div>

            {/* PASSWORD */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-white font-medium">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="h-14 rounded-xl bg-white/5 border border-white/10 text-white px-4 focus:outline-none focus:ring-2 focus:ring-[#53d22d]/20"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="h-14 rounded-full bg-[#53d22d] text-[#152012] font-bold text-base hover:opacity-90 transition"
            >
              Sign in
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-white/50">
            Don’t have an account?
            <span className="text-[#53d22d] font-bold ml-1 cursor-pointer">
              Create one
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}