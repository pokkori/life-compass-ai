export default function Loading() {
  return (
    <div className="min-h-screen p-4 md:p-8 animate-pulse">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="h-10 w-48 rounded-lg bg-white/10" />
        <div className="h-5 w-72 rounded bg-white/10" />
        <div className="rounded-2xl bg-white/5 p-6 space-y-4">
          <div className="h-5 w-24 rounded bg-white/10" />
          <div className="h-12 w-full rounded bg-white/10" />
          <div className="h-5 w-32 rounded bg-white/10" />
          <div className="h-32 w-full rounded bg-white/10" />
          <div className="h-12 w-full rounded-xl bg-white/10" />
        </div>
      </div>
    </div>
  );
}
