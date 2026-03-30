import Link from "next/link";

export default function PrivacyPage() {
  const updated = "March 8, 2026";

  return (
    <main className="min-h-screen px-6 py-16 max-w-3xl mx-auto">
      <Link href="/" className="text-amber-400 hover:text-amber-300 text-sm mb-8 inline-block">
        ← LifeCompass AI
      </Link>
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-stone-500 text-sm mb-10">Last updated: {updated}</p>

      <div className="space-y-8 text-stone-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-stone-100 mb-3">1. What we collect</h2>
          <p>When you use LifeCompass AI, we may collect:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-stone-400">
            <li>Conversation messages you send to the AI</li>
            <li>Payment information (processed by Stripe — we never see your card number)</li>
            <li>Technical data: IP address, browser type, device type</li>
            <li>Usage data: session counts, features used</li>
          </ul>
          <p className="mt-3 text-stone-400">
            We do <strong className="text-stone-200">not</strong> require account registration.
            Session data for free-tier tracking is stored locally in your browser (localStorage) and never sent to our servers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-100 mb-3">2. How we use your data</h2>
          <ul className="list-disc list-inside space-y-1 text-stone-400">
            <li>To provide and improve the LifeCompass AI service</li>
            <li>To process payments and manage subscriptions</li>
            <li>To prevent abuse and ensure service security</li>
            <li>To comply with legal obligations</li>
          </ul>
          <p className="mt-3 text-stone-400">
            Conversation content is sent to Anthropic&apos;s Claude API to generate responses.
            Anthropic&apos;s own privacy policy governs their handling of this data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-100 mb-3">3. Third-party services</h2>
          <ul className="list-disc list-inside space-y-1 text-stone-400">
            <li><strong className="text-stone-300">Anthropic</strong> — AI model provider (receives conversation text)</li>
            <li><strong className="text-stone-300">Stripe</strong> — Payment processing (receives payment details)</li>
            <li><strong className="text-stone-300">Vercel</strong> — Hosting and infrastructure</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-100 mb-3">4. Data retention</h2>
          <p className="text-stone-400">
            Conversation history is not stored on our servers unless you are a premium subscriber
            who has opted into history. Payment records are retained as required by law (typically 7 years).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-100 mb-3">5. Your rights (GDPR / CCPA)</h2>
          <p className="text-stone-400 mb-2">You have the right to:</p>
          <ul className="list-disc list-inside space-y-1 text-stone-400">
            <li>Access the personal data we hold about you</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Data portability</li>
            <li>Lodge a complaint with your local data protection authority</li>
          </ul>
          <p className="mt-3 text-stone-400">
            To exercise these rights, email: <a href="mailto:support@lifecompassai.com" className="text-amber-400 hover:underline">support@lifecompassai.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-100 mb-3">6. Children&apos;s privacy</h2>
          <p className="text-stone-400">
            LifeCompass AI is not directed at children under 13. We do not knowingly collect data from children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-100 mb-3">7. Changes to this policy</h2>
          <p className="text-stone-400">
            We may update this policy. We will notify premium subscribers of material changes by email.
            Continued use of the service constitutes acceptance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-100 mb-3">8. External data transmission (Japan Telecommunications Business Act)</h2>
          <p className="text-stone-400 mb-3">In compliance with Japan&apos;s external transmission regulations, this service transmits data to the following third-party services:</p>
          <table className="w-full text-left text-xs text-stone-400">
            <thead><tr className="border-b border-stone-600"><th className="py-2 pr-2">Recipient</th><th className="py-2 pr-2">Purpose</th><th className="py-2">Data transmitted</th></tr></thead>
            <tbody>
              <tr className="border-b border-stone-700"><td className="py-2 pr-2">Anthropic (Claude API)</td><td className="py-2 pr-2">AI response generation</td><td className="py-2">User conversation text</td></tr>
              <tr className="border-b border-stone-700"><td className="py-2 pr-2">Stripe, Inc.</td><td className="py-2 pr-2">Payment processing</td><td className="py-2">Payment details</td></tr>
              <tr><td className="py-2 pr-2">Vercel Inc.</td><td className="py-2 pr-2">Hosting &amp; analytics</td><td className="py-2">Page views, device info</td></tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-100 mb-3">9. Contact</h2>
          <p className="text-stone-400">
            For privacy questions: <a href="mailto:support@lifecompassai.com" className="text-amber-400 hover:underline">support@lifecompassai.com</a>
          </p>
        </section>
      </div>

      <div className="mt-12 flex gap-4 text-sm text-stone-500">
        <Link href="/terms" className="hover:text-stone-300 transition-colors">Terms of Service</Link>
        <Link href="/legal" className="hover:text-stone-300 transition-colors">特定商取引法</Link>
      </div>
    </main>
  );
}
