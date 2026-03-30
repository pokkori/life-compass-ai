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
        <div className="text-stone-400 animate-pulse">決済を確認中...</div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          {verified ? (
            <div className="w-20 h-20 rounded-full bg-amber-500 flex items-center justify-center" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-11 h-11 text-stone-950">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3z" clipRule="evenodd"/>
              </svg>
            </div>
          ) : (
            <div className="w-20 h-20 rounded-full bg-stone-700 flex items-center justify-center" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-11 h-11 text-amber-400">
                <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clipRule="evenodd"/>
              </svg>
            </div>
          )}
        </div>
        <h1 className="text-3xl font-bold mb-4">
          {verified ? "プレミアムプランへようこそ！" : "エラーが発生しました"}
        </h1>
        <p className="text-stone-400 mb-8">
          {verified
            ? "サブスクリプションが有効になりました。LifeCompass AIを無制限にご利用いただけます。"
            : "決済の確認ができませんでした。請求された場合はサポートまでご連絡ください。"}
        </p>
        <Link
          href="/chat"
          aria-label={verified ? "チャットを開始してLifeCompass AIを無制限に使う" : "チャットページに戻る"}
          className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-8 py-4 rounded-full transition-colors inline-block"
        >
          {verified ? "無制限の思考整理を始める →" : "チャットに戻る"}
        </Link>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen text-stone-400">読み込み中...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
