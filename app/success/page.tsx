"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const [verified, setVerified] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    if (!sessionId) {
      setChecking(false);
      return;
    }

    fetch(`/api/stripe/verify?session_id=${sessionId}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem("lifecompass_premium", "true");
          setVerified(true);
        }
      })
      .finally(() => setChecking(false));
  }, [searchParams]);

  if (checking) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-stone-400 animate-pulse">Verifying your payment...</div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">{verified ? "🧭" : "⚠️"}</div>
        <h1 className="text-3xl font-bold mb-4">
          {verified ? "Welcome to Premium!" : "Something went wrong"}
        </h1>
        <p className="text-stone-400 mb-8">
          {verified
            ? "Your subscription is active. You now have unlimited conversations with LifeCompass AI."
            : "We couldn't verify your payment. Please contact support if you were charged."}
        </p>
        <Link
          href="/chat"
          className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-8 py-4 rounded-full transition-colors"
        >
          {verified ? "Start your unlimited journey →" : "Back to chat"}
        </Link>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen text-stone-400">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
