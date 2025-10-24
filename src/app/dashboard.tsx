export default function Dashboard() {
  return (
    <section className="py-10">
      <h1 className="text-2xl font-bold">Your Dashboard</h1>
      <p className="mt-2 text-gray-600">Plans, sessions, and progress will appear here.</p>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border p-6">Weekly plan</div>
        <div className="rounded-xl border p-6">Volume & PRs</div>
        <div className="rounded-xl border p-6">Recovery & sleep</div>
      </div>
    </section>
  );
}
