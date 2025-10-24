export default function Landing() {
  return (
    <>
      {/* HERO */}
      <section className="py-20">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Training plans that <span className="underline decoration-emerald-400">adapt</span> to you
            </h1>
            <p className="mt-4 text-gray-600">
              Answer 10 quick questions. Get a plan built for your goals, time, equipment, and recovery.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="/intake" className="rounded-lg bg-black px-5 py-3 text-white">Start your plan</a>
              <a href="#how" className="rounded-lg border px-5 py-3">How it works</a>
            </div>
            <p className="mt-3 text-xs text-gray-500">Takes ~2 minutes • No signup required</p>
          </div>
          <div className="rounded-xl border p-4">
            {/* placeholder “screenshot” card */}
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 h-4 w-24 rounded bg-gray-200" />
              <div className="grid grid-cols-3 gap-2">
                <div className="h-24 rounded bg-gray-200" />
                <div className="h-24 rounded bg-gray-200" />
                <div className="h-24 rounded bg-gray-200" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="grid gap-6 py-12 md:grid-cols-3">
        {[
          { t: "Personalized Plans", d: "Built from your goals, schedule, equipment, and recovery." },
          { t: "Smart Progression", d: "Auto-adjusts volume and intensity based on your feedback." },
          { t: "Clear Execution", d: "Simple workouts with cues, alternatives, and demo videos." },
        ].map((x) => (
          <div key={x.t} className="rounded-xl border p-6">
            <h3 className="font-semibold">{x.t}</h3>
            <p className="mt-2 text-sm text-gray-600">{x.d}</p>
          </div>
        ))}
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-16">
        <h2 className="text-2xl font-bold">How it works</h2>
        <ol className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            { n: "1", t: "Tell us about you", d: "10 questions: goals, time, equipment, recovery." },
            { n: "2", t: "Get your plan", d: "We generate a week-by-week plan with progressions." },
            { n: "3", t: "Train & adapt", d: "Log sessions, we auto-adjust based on performance." },
          ].map((s) => (
            <li key={s.n} className="rounded-xl border p-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">{s.n}</div>
              <h3 className="mt-3 font-semibold">{s.t}</h3>
              <p className="mt-1 text-sm text-gray-600">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="rounded-2xl bg-gradient-to-r from-emerald-100 to-teal-100 p-10">
          <h3 className="text-2xl font-bold">Ready to build your plan?</h3>
          <p className="mt-2 text-gray-700">No fluff. Just training that fits your life.</p>
          <a href="/intake" className="mt-6 inline-block rounded-lg bg-black px-5 py-3 text-white">Start now</a>
        </div>
      </section>
    </>
  );
}
