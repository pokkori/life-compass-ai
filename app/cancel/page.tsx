export const metadata = {
  title: "Cancel Subscription | LifeCompass AI",
  description: "Cancel your LifeCompass AI subscription.",
};

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white">
        <h1 className="text-2xl font-bold mb-6 text-center">Cancel Subscription</h1>

        <div className="space-y-4 text-sm text-gray-300 mb-8">
          <p>Thank you for using LifeCompass AI. If you wish to cancel your subscription, please follow the instructions below.</p>

          <div className="bg-white/5 rounded-lg p-4">
            <h2 className="font-semibold text-white mb-2">How to Cancel</h2>
            <p>Please send an email with the subject &quot;Cancel Subscription&quot; to the address below. We will process your cancellation within 24 hours.</p>
            <a
              href="mailto:support@levona.design?subject=Cancel%20Subscription%3A%20LifeCompass%20AI"
              className="inline-block mt-3 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold transition-colors min-h-[44px]"
              aria-label="Send cancellation email"
            >
              Request Cancellation
            </a>
          </div>

          <div className="bg-white/5 rounded-lg p-4">
            <h2 className="font-semibold text-white mb-2">After Cancellation</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Billing will stop from the next payment date after cancellation</li>
              <li>You can continue using the service until your current billing period ends</li>
              <li>Due to the nature of digital content, refunds for already paid fees are not available</li>
            </ul>
          </div>

          <div className="bg-white/5 rounded-lg p-4">
            <h2 className="font-semibold text-white mb-2">Contact Us</h2>
            <p>If you have any questions, please feel free to reach out.</p>
            <p className="mt-1">Email: support@levona.design</p>
          </div>
        </div>

        <a href="/" className="block text-center text-gray-400 hover:text-white transition-colors" aria-label="Back to home page">
          ← Back to Home
        </a>
      </div>
    </div>
  );
}
