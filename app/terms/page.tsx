import Link from "next/link";

export default function TermsPage() {
  const updated = "March 8, 2026";

  return (
    <main className="min-h-screen px-6 py-16 max-w-3xl mx-auto">
      <Link href="/" className="text-amber-400 hover:text-amber-300 text-sm mb-8 inline-block">
        ← LifeCompass AI
      </Link>
      <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
      <p className="text-stone-500 text-sm mb-10">Last updated: {updated}</p>

      <div className="space-y-8 text-stone-300 leading-relaxed">

        <section className="bg-stone-900 border border-amber-500/30 rounded-xl p-5">
          <h2 className="text-amber-400 font-semibold mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
              <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clipRule="evenodd"/>
            </svg>
            Important Disclaimer
          </h2>
          <p className="text-stone-300">
            LifeCompass AI is a <strong>thinking tool</strong>, not a mental health service or professional advisor.
            It is not a substitute for therapy, counseling, medical advice, legal advice, or financial advice.
            Always consult qualified professionals for important life decisions. If you are in crisis,
            please contact a mental health professional or crisis helpline immediately.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-100 mb-3">1. Acceptance of terms</h2>
          <p className="text-stone-400">
            By using LifeCompass AI, you agree to these terms. If you do not agree, please do not use the service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-100 mb-3">2. What LifeCompass AI is (and isn&apos;t)</h2>
          <p className="text-stone-400 mb-2">LifeCompass AI <strong className="text-stone-200">is</strong>:</p>
          <ul className="list-disc list-inside space-y-1 text-stone-400 mb-4">
            <li>An AI-powered thinking partner that helps you explore your own thoughts</li>
            <li>A tool for structured self-reflection through question-and-answer dialogue</li>
            <li>An entertainment and productivity tool</li>
          </ul>
          <p className="text-stone-400 mb-2">LifeCompass AI <strong className="text-stone-200">is not</strong>:</p>
          <ul className="list-disc list-inside space-y-1 text-stone-400">
            <li>A licensed therapist, counselor, psychologist, or psychiatrist</li>
            <li>A medical, legal, or financial advisor</li>
            <li>A crisis intervention service</li>
            <li>A substitute for professional help</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-100 mb-3">3. Subscription and billing</h2>
          <ul className="list-disc list-inside space-y-1 text-stone-400">
            <li>Free plan: 3 conversations at no charge</li>
            <li>Premium: $9.99/month or $49.99/year, billed automatically</li>
            <li>Prices may change with 30 days notice to existing subscribers</li>
            <li>Cancel anytime; access continues until end of billing period</li>
            <li>Refunds: Digital services are non-refundable unless required by law</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-100 mb-3">4. Prohibited uses</h2>
          <p className="text-stone-400 mb-2">You agree not to:</p>
          <ul className="list-disc list-inside space-y-1 text-stone-400">
            <li>Use the service to harm yourself or others</li>
            <li>Attempt to extract harmful content from the AI</li>
            <li>Reverse engineer or scrape the service</li>
            <li>Share your account credentials with others</li>
            <li>Use the service for any illegal purpose</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-100 mb-3">5. Limitation of liability</h2>
          <p className="text-stone-400">
            LifeCompass AI is provided &quot;as is.&quot; We make no warranties about the accuracy, completeness,
            or suitability of AI responses. We are not liable for any decisions you make based on
            conversations with LifeCompass AI. To the maximum extent permitted by law, our total
            liability is limited to the amount you paid in the 3 months preceding any claim.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-100 mb-3">6. Intellectual property</h2>
          <p className="text-stone-400">
            The LifeCompass AI service, branding, and interface are owned by us. You retain ownership
            of content you share. You grant us a limited license to process your messages to deliver the service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-100 mb-3">7. Governing law</h2>
          <p className="text-stone-400">
            These terms are governed by the laws of Japan. Disputes will be resolved in Japanese courts,
            with Tokyo District Court having exclusive jurisdiction for Japanese users.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-100 mb-3">8. Changes to terms</h2>
          <p className="text-stone-400">
            We may update these terms. We will notify premium subscribers of material changes.
            Continued use constitutes acceptance of updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-100 mb-3">9. Contact</h2>
          <p className="text-stone-400">
            Questions: <a href="mailto:support@lifecompassai.com" className="text-amber-400 hover:underline">support@lifecompassai.com</a>
          </p>
        </section>
      </div>

      <div className="mt-12 flex gap-4 text-sm text-stone-500">
        <Link href="/privacy" className="hover:text-stone-300 transition-colors">Privacy Policy</Link>
        <Link href="/legal" className="hover:text-stone-300 transition-colors">特定商取引法</Link>
      </div>
    </main>
  );
}
