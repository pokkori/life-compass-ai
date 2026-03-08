import Link from "next/link";

const SCENARIOS = [
  { emoji: "💼", title: "Career crossroads", body: "Should I quit my job? Is this the right move?" },
  { emoji: "💔", title: "Relationship decisions", body: "Stay or go? How do I know what I really want?" },
  { emoji: "🌍", title: "Life changes", body: "Move to a new city? Start over? What's holding me back?" },
  { emoji: "🎯", title: "Purpose & direction", body: "What do I actually want from life? Why does nothing feel right?" },
];

const STEPS = [
  { n: "1", title: "Tell me what's on your mind", body: "Start a conversation. No forms, no intake questionnaires — just talk." },
  { n: "2", title: "I ask the right questions", body: "LifeCompass doesn't give answers. It asks questions that help you discover your own." },
  { n: "3", title: "You gain clarity", body: "Most people know what they want. They just need space to hear themselves think." },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-5xl mx-auto">
        <span className="font-semibold text-lg tracking-tight">🧭 LifeCompass AI</span>
        <div className="flex items-center gap-4 text-sm text-stone-400">
          <Link href="#how" className="hover:text-stone-100 transition-colors">How it works</Link>
          <Link href="/chat" className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold px-4 py-2 rounded-full transition-colors">
            Start free →
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 pt-20 pb-16 max-w-3xl mx-auto">
        <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-4">AI Thinking Partner</p>
        <h1 className="text-5xl font-bold leading-tight mb-6">
          You already know the answer.<br />
          <span className="text-amber-400">You just can&apos;t hear yourself.</span>
        </h1>
        <p className="text-stone-400 text-xl leading-relaxed mb-10">
          LifeCompass AI helps you think through life&apos;s big decisions — career, relationships, where to live, what to pursue — using the power of the right questions.
          <br /><span className="text-stone-500">Not therapy. Not advice. Just clarity.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/chat"
            className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-lg px-8 py-4 rounded-full transition-colors"
          >
            Start thinking — it&apos;s free
          </Link>
          <Link
            href="#how"
            className="border border-stone-700 hover:border-stone-500 text-stone-300 text-lg px-8 py-4 rounded-full transition-colors"
          >
            See how it works
          </Link>
        </div>
        <p className="text-stone-600 text-sm mt-4">First 3 conversations free. No credit card needed.</p>
      </section>

      {/* Scenarios */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-center text-2xl font-semibold mb-10 text-stone-300">People use LifeCompass when they&apos;re facing...</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SCENARIOS.map((s) => (
            <div key={s.title} className="bg-stone-900 border border-stone-800 rounded-2xl p-6">
              <div className="text-3xl mb-3">{s.emoji}</div>
              <h3 className="font-semibold text-stone-100 mb-1">{s.title}</h3>
              <p className="text-stone-400 text-sm">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="px-6 py-16 max-w-3xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-12">How it works</h2>
        <div className="space-y-8">
          {STEPS.map((s) => (
            <div key={s.n} className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 text-stone-950 font-bold flex items-center justify-center">
                {s.n}
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
                <p className="text-stone-400">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiator */}
      <section className="px-6 py-16 bg-stone-900 border-y border-stone-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">This is not ChatGPT.</h2>
          <p className="text-stone-400 text-lg leading-relaxed">
            ChatGPT gives you answers. LifeCompass asks questions. There&apos;s a big difference.
            When it&apos;s your life, you shouldn&apos;t outsource the decision — you should own it.
            LifeCompass helps you think, not think for you.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 text-center">
            {[
              { label: "ChatGPT", desc: "Gives you answers", bad: true },
              { label: "Therapy", desc: "$200/hour, weeks of waiting", bad: true },
              { label: "LifeCompass", desc: "Asks the right questions, 24/7", bad: false },
            ].map((x) => (
              <div key={x.label} className={`rounded-xl p-4 ${x.bad ? "border border-stone-700 text-stone-500" : "border-2 border-amber-500 text-stone-100"}`}>
                <div className="font-semibold mb-1">{x.label}</div>
                <div className="text-sm">{x.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-16 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Simple pricing</h2>
        <p className="text-stone-400 mb-10">Start free. Upgrade when you&apos;re ready.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="border border-stone-700 rounded-2xl p-8">
            <h3 className="font-semibold text-lg mb-2">Free</h3>
            <p className="text-4xl font-bold mb-4">$0</p>
            <ul className="text-stone-400 text-sm space-y-2 mb-6">
              <li>✓ 3 full conversations</li>
              <li>✓ All decision types</li>
              <li>✓ No credit card needed</li>
            </ul>
            <Link href="/chat" className="block w-full border border-stone-600 hover:border-stone-400 text-stone-300 py-3 rounded-full font-medium transition-colors">
              Start free
            </Link>
          </div>
          <div className="border-2 border-amber-500 rounded-2xl p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-stone-950 text-xs font-bold px-3 py-1 rounded-full">
              MOST POPULAR
            </div>
            <h3 className="font-semibold text-lg mb-2">Premium</h3>
            <p className="text-4xl font-bold mb-1">$9.99<span className="text-lg font-normal text-stone-400">/mo</span></p>
            <p className="text-stone-500 text-sm mb-4">or $49.99/year (save 58%)</p>
            <ul className="text-stone-300 text-sm space-y-2 mb-6">
              <li>✓ Unlimited conversations</li>
              <li>✓ Conversation history</li>
              <li>✓ All decision types</li>
              <li>✓ Priority support</li>
            </ul>
            <Link
              href="/api/stripe/checkout"
              className="block w-full bg-amber-500 hover:bg-amber-400 text-stone-950 py-3 rounded-full font-bold transition-colors"
            >
              Get Premium →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center bg-stone-900 border-t border-stone-800">
        <h2 className="text-4xl font-bold mb-4">Ready to get clarity?</h2>
        <p className="text-stone-400 mb-8">Start your first conversation — no account required.</p>
        <Link
          href="/chat"
          className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-lg px-10 py-4 rounded-full transition-colors"
        >
          Start thinking for free →
        </Link>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-stone-800 text-center text-stone-600 text-sm">
        <div className="flex flex-wrap justify-center gap-4 mb-3">
          <Link href="/terms" className="hover:text-stone-400 transition-colors">Terms of Service</Link>
          <Link href="/privacy" className="hover:text-stone-400 transition-colors">Privacy Policy</Link>
          <Link href="/legal" className="hover:text-stone-400 transition-colors">特定商取引法に基づく表記</Link>
        </div>
        <p>© 2026 LifeCompass AI. Not a substitute for professional medical, legal, or financial advice.</p>
      </footer>
    </main>
  );
}
