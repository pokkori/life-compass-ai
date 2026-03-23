import Link from "next/link";

const SCENARIO_ICONS = [
  // Briefcase icon for Career
  <svg key="career" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-amber-400" aria-hidden="true"><path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clipRule="evenodd"/><path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4z"/></svg>,
  // Heart icon for Relationship
  <svg key="relation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-amber-400" aria-hidden="true"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001z"/></svg>,
  // Globe icon for Life changes
  <svg key="life" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-amber-400" aria-hidden="true"><path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477zM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0zM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605zM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477zM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.099zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.817zM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49zM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276zM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985z"/></svg>,
  // Star icon for Purpose
  <svg key="purpose" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-amber-400" aria-hidden="true"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z" clipRule="evenodd"/></svg>,
];

const SCENARIOS = [
  { icon: SCENARIO_ICONS[0], title: "Career crossroads", body: "Should I quit my job? Is this the right move?" },
  { icon: SCENARIO_ICONS[1], title: "Relationship decisions", body: "Stay or go? How do I know what I really want?" },
  { icon: SCENARIO_ICONS[2], title: "Life changes", body: "Move to a new city? Start over? What's holding me back?" },
  { icon: SCENARIO_ICONS[3], title: "Purpose & direction", body: "What do I actually want from life? Why does nothing feel right?" },
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
        <span className="font-semibold text-lg tracking-tight flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-amber-400" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3z" clipRule="evenodd"/>
          </svg>
          LifeCompass AI
        </span>
        <div className="flex items-center gap-4 text-sm text-stone-400">
          <Link href="#how" aria-label="使い方セクションへスクロールする" className="hover:text-stone-100 transition-colors">How it works</Link>
          <Link href="/chat" aria-label="LifeCompass AIを無料で始める" className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold px-4 py-2 rounded-full transition-colors">
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
            aria-label="LifeCompass AIで無料で思考を始める"
            className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-lg px-8 py-4 rounded-full transition-colors"
          >
            Start thinking — it&apos;s free
          </Link>
          <Link
            href="#how"
            aria-label="使い方の詳細を見る"
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
            <div key={s.title} className="backdrop-blur-sm bg-white/5 border border-white/10 shadow-lg rounded-2xl p-6">
              <div className="mb-3">{s.icon}</div>
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
            <Link href="/chat" aria-label="無料プランでLifeCompass AIを始める" className="block w-full border border-stone-600 hover:border-stone-400 text-stone-300 py-3 rounded-full font-medium transition-colors">
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
              aria-label="プレミアムプランを購入する（月$9.99）"
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
          aria-label="LifeCompass AIで今すぐ無料で思考を整理する"
          className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-lg px-10 py-4 rounded-full transition-colors"
        >
          Start thinking for free →
        </Link>
      </section>

      {/* X Share */}
      <section className="px-6 py-10 text-center">
        <p className="text-stone-500 text-sm mb-3">Share LifeCompass AI with someone who needs clarity</p>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Just used LifeCompass AI to think through a big life decision. It asks the right questions instead of giving generic advice. Try it free → https://lifecompass-ai.vercel.app #LifeCompassAI #clarity #decision")}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share LifeCompass AI on X (Twitter)"
          className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-stone-100 border border-stone-700 px-5 py-3 rounded-xl text-sm font-semibold transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          Share on X
        </a>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-stone-800 text-center text-stone-600 text-sm">
        <div className="flex flex-wrap justify-center gap-4 mb-3">
          <Link href="/terms" aria-label="利用規約を見る" className="hover:text-stone-400 transition-colors">Terms of Service</Link>
          <Link href="/privacy" aria-label="プライバシーポリシーを見る" className="hover:text-stone-400 transition-colors">Privacy Policy</Link>
          <Link href="/legal" aria-label="特定商取引法に基づく表記を見る" className="hover:text-stone-400 transition-colors">特定商取引法に基づく表記</Link>
        </div>
        <p>© 2026 LifeCompass AI. Not a substitute for professional medical, legal, or financial advice.</p>
      </footer>
    </main>
  );
}
