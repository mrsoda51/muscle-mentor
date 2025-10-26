export default function Landing() {
  return (
    // Full width + full height dark background
    <main className="fixed inset-0 w-full h-full bg-black text-white overflow-y-auto overflow-x-hidden">
      {/* HERO SECTION */}
     <section className="relative min-h-screen w-full overflow-hidden pt-24">
        {/* Full background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/40 to-black" />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 px-8 md:px-16 lg:px-32 py-24">
          {/* LEFT SIDE */}
          <div className="space-y-8 max-w-xl">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              UNLEASH YOUR{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                POTENTIAL
              </span>
            </h1>

            <p className="text-gray-300 text-lg">
              Transform your body. Elevate your mind. Become the athlete you
              were born to be.
            </p>

            {/* FEATURE TAGS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {[
                { label: "STRENGTH", color: "from-orange-600 to-red-600" },
                { label: "SPEED", color: "from-yellow-500 to-orange-500" },
                { label: "ENDURANCE", color: "from-pink-500 to-red-500" },
                { label: "VICTORY", color: "from-amber-400 to-orange-500" },
              ].map((x) => (
                <div
                  key={x.label}
                  className={`rounded-xl bg-gradient-to-br ${x.color} p-[1px]`}
                >
                  <div className="bg-black rounded-xl py-3 text-center font-semibold text-sm tracking-wide">
                    {x.label}
                  </div>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-6">
              <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 font-semibold shadow-xl hover:scale-105 transition-transform duration-200">
                Start Training Now
              </button>
              <button className="px-8 py-3 rounded-lg border border-gray-700 font-semibold text-gray-300 hover:bg-gray-900 transition">
                Watch Demo
              </button>
            </div>

            <p className="pt-3 text-sm text-gray-500">
              ⭐ 50K+ Athletes trust Muscle Mentor
            </p>
          </div>

          {/* RIGHT SIDE (APP MOCKUP) */}
          <div className="relative flex justify-center md:justify-end flex-1">
            <div className="relative">
              {/* Glow background */}
              <div className="absolute -inset-10 bg-gradient-to-r from-orange-700/50 to-red-600/50 blur-3xl rounded-full opacity-70" />
              {/* Placeholder phone */}
              <div className="relative w-72 h-[540px] bg-gradient-to-tr from-gray-800 to-gray-900 rounded-3xl shadow-2xl border border-gray-700 flex items-center justify-center">
                <span className="text-gray-400 text-sm opacity-60">
                  App Mockup
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-gradient-to-b from-black to-gray-900 text-gray-100 py-20 px-8 md:px-16 lg:px-32 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center w-full">
          {[
            { stat: "50K+", label: "Athletes" },
            { stat: "1M+", label: "Workouts" },
            { stat: "95%", label: "Success Rate" },
            { stat: "24/7", label: "Support" },
          ].map((x) => (
            <div key={x.stat}>
              <h3 className="text-3xl font-bold text-white">{x.stat}</h3>
              <p className="text-gray-400">{x.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-black text-center py-24 px-8 md:px-16 lg:px-32">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          YOUR{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            MOMENT
          </span>{" "}
          IS NOW
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Stop waiting. Stop making excuses. Your transformation starts today.
          Join the elite.
        </p>
        <button className="mt-8 px-10 py-4 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 font-semibold text-lg shadow-xl hover:scale-105 transition-transform duration-200">
          Start Your Journey
        </button>
        <p className="mt-3 text-sm text-gray-600">
          14-Day Free Trial · No Commitment
        </p>
      </section>
    </main>
  );
}
