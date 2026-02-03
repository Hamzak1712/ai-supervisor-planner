export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark flex">
      {/* LEFT SIDE (HERO) */}
      <section className="hidden lg:flex flex-1 relative items-center justify-center p-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-tr from-background-dark via-background-dark/80 to-transparent z-0" />

        <div className="relative z-10 max-w-lg">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold mb-6">
            ⚡ v2.0 IS NOW LIVE
          </div>

          <h1 className="text-5xl font-black leading-tight mb-6">
            Streamline your workflow in seconds.
          </h1>

          <p className="text-white/70 text-lg mb-8">
            AI-powered supervisor selection and project planning,
            built for universities.
          </p>

          <p className="text-sm text-white/60">
            Trusted by students, supervisors, and admins.
          </p>
        </div>
      </section>

      {/* RIGHT SIDE (LOGIN FORM) */}
      <section className="w-full lg:w-[540px] flex items-center justify-center px-6 md:px-12">
        <div className="w-full max-w-[400px] py-12">
          <header className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              Welcome back
            </h2>
            <p className="text-white/60 text-sm">
              Sign in to your account
            </p>
          </header>

          <form className="flex flex-col gap-6">
            {/* USER TYPE */}
            <div className="flex flex-col gap-3">
              <label className="text-sm text-white font-medium">
                I am a…
              </label>

              <div className="grid grid-cols-3 gap-3">
                {["Admin", "Student", "Supervisor"].map((role) => (
                  <label
                    key={role}
                    className="cursor-pointer rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white/70 text-xs font-bold uppercase tracking-wide flex flex-col items-center justify-center gap-2 p-3"
                  >
                    <input
                      type="radio"
                      name="role"
                      className="hidden"
                      defaultChecked={role === "Student"}
                    />
                    {role}
                  </label>
                ))}
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-white font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="name@university.ac.uk"
                className="h-14 rounded-xl bg-white/5 border border-white/10 text-white px-4 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* PASSWORD */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-white font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="h-14 rounded-xl bg-white/5 border border-white/10 text-white px-4 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="h-14 rounded-full bg-primary text-background-dark font-bold text-base hover:opacity-90 transition"
            >
              Sign in
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-white/50">
            Don’t have an account?
            <span className="text-primary font-bold ml-1 cursor-pointer">
              Create one
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}