"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { updateStreak, loadStreak, getStreakMilestoneMessage, type StreakData } from "@/lib/streak";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const FREE_LIMIT = 3; // free messages per session
const STORAGE_KEY = "lifecompass_sessions";
const PREMIUM_KEY = "lifecompass_premium";

function getSessionCount(): number {
  if (typeof window === "undefined") return 0;
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "0");
    return typeof data === "number" ? data : 0;
  } catch {
    return 0;
  }
}

function incrementSession() {
  const count = getSessionCount();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(count + 1));
}

function isPremium(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(PREMIUM_KEY) === "true";
}

const STARTER_PROMPTS = [
  "I'm thinking about quitting my job but I'm not sure",
  "I don't know if I should end this relationship",
  "I feel stuck and don't know what direction to take in life",
  "I'm considering a big move but scared to commit",
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionCount, setSessionCount] = useState(0);
  const [premium, setPremium] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [userMessageCount, setUserMessageCount] = useState(0);
  const [streak, setStreak] = useState<StreakData | null>(null);
  const [streakMsg, setStreakMsg] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setSessionCount(getSessionCount());
    setPremium(isPremium());
    setStreak(loadStreak("lifecompass"));
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const canChat = premium || userMessageCount < FREE_LIMIT;

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return;

    if (!canChat) {
      setShowPaywall(true);
      return;
    }

    const newUserMsg: Message = { role: "user", content: text.trim() };
    const newMessages = [...messages, newUserMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    const newCount = userMessageCount + 1;
    setUserMessageCount(newCount);

    // Track sessions on first message
    if (messages.length === 0) {
      incrementSession();
      setSessionCount(getSessionCount());
      // ストリーク更新
      const s = updateStreak("lifecompass");
      setStreak(s);
      const msg = getStreakMilestoneMessage(s.count);
      if (msg) setStreakMsg(msg);
    }

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        if (res.status === 429 && (errData as { error?: string }).error === "LIMIT_REACHED") {
          setShowPaywall(true);
          setLoading(false);
          return;
        }
        throw new Error("API error");
      }

      // Streaming response
      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      // Add empty assistant message to start streaming into
      setMessages([...newMessages, { role: "assistant", content: "" }]);

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          accumulated += decoder.decode(value, { stream: true });
          setMessages([...newMessages, { role: "assistant", content: accumulated }]);
        }
      }

      // Show paywall after free limit reached
      if (!premium && newCount >= FREE_LIMIT) {
        setTimeout(() => setShowPaywall(true), 1500);
      }
    } catch {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  return (
    <div className="flex flex-col h-screen bg-stone-950">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-stone-800 flex-shrink-0">
        <Link href="/" aria-label="LifeCompass AIトップページに戻る" className="font-semibold text-stone-300 hover:text-white transition-colors flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-amber-400" aria-hidden="true">
            <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-5.414V7h2v5.586l3.707 3.707-1.414 1.414L11 14.414z"/>
            <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm.5 4.5 4 8-8-4 8-4zm-.5 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
          </svg>
          LifeCompass AI
        </Link>
        <div className="flex items-center gap-3">
          {streak && streak.count > 0 && (
            <span className="text-amber-400 text-xs font-medium" aria-label={`${streak.count}日連続利用中`}>
              {streak.count}day streak
            </span>
          )}
          {streakMsg && (
            <span className="text-orange-400 text-xs animate-bounce">{streakMsg}</span>
          )}
          {!premium && (
            <span className="text-stone-500 text-sm">
              {Math.max(0, FREE_LIMIT - userMessageCount)} free messages left
            </span>
          )}
          {premium && (
            <span className="text-amber-400 text-sm font-medium flex items-center gap-1" aria-label="プレミアムプラン利用中">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143z" clipRule="evenodd"/></svg>
              Premium
            </span>
          )}
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("LifeCompass AIで人生の決断を整理中。ソクラテス式AIコーチが問いかけで思考をクリアにしてくれる #LifeCompassAI https://lifecompass-ai.vercel.app")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LifeCompass AIを使ったことをXにシェアする"
            className="text-stone-500 hover:text-stone-300 text-xs transition-colors px-2 py-1 border border-stone-700/50 rounded-lg hover:border-stone-500/50"
          >
            Xシェア
          </a>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6 max-w-3xl mx-auto w-full">
        {messages.length === 0 && (
          <div className="text-center pt-8">
            <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-stone-950" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3z" clipRule="evenodd"/>
              </svg>
            </div>
          </div>
            <h2 className="text-2xl font-bold text-stone-100 mb-2">What&apos;s on your mind?</h2>
            <p className="text-stone-400 mb-8">
              Tell me about a decision you&apos;re facing. I&apos;ll ask questions to help you find clarity.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto">
              {STARTER_PROMPTS.map((p) => (
                <button
                  key={p}
                  onClick={() => sendMessage(p)}
                  aria-label={`${p}を相談として入力する`}
                  className="border border-stone-700 hover:border-amber-500 hover:text-amber-400 text-stone-400 text-sm px-4 py-3 rounded-xl text-left transition-colors"
                >
                  &ldquo;{p}&rdquo;
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            {m.role === "assistant" && (
              <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-1 mr-3" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-stone-950">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3z" clipRule="evenodd"/>
                </svg>
              </div>
            )}
            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                m.role === "user"
                  ? "bg-amber-500 text-stone-950 font-medium"
                  : "backdrop-blur-sm bg-stone-800/80 border border-stone-700/50 text-stone-100"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-1 mr-3" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-stone-950">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="bg-stone-800 px-4 py-3 rounded-2xl">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-stone-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 bg-stone-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 bg-stone-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Paywall overlay */}
      {showPaywall && (
        <div className="fixed inset-0 bg-stone-950/90 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-stone-900 border border-stone-700 rounded-2xl p-8 max-w-md w-full text-center">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-stone-950">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">You&apos;ve used your free sessions</h2>
            <p className="text-stone-400 mb-6">
              Upgrade to Premium to continue your conversation and get unlimited access.
            </p>
            <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-4 mb-6 text-sm text-stone-300 text-left space-y-2">
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-amber-400 flex-shrink-0" aria-hidden="true"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143z" clipRule="evenodd"/></svg>
                Unlimited conversations
              </p>
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-amber-400 flex-shrink-0" aria-hidden="true"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143z" clipRule="evenodd"/></svg>
                Continue from where you left off
              </p>
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-amber-400 flex-shrink-0" aria-hidden="true"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143z" clipRule="evenodd"/></svg>
                All decision types
              </p>
            </div>
            <Link
              href="/api/stripe/checkout"
              aria-label="プレミアムプランを購入して無制限に利用する（月$9.99）"
              className="block w-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold py-3 rounded-full transition-colors mb-3"
            >
              Get Premium — $9.99/month →
            </Link>
            <button
              onClick={() => setShowPaywall(false)}
              aria-label="Close paywall and continue"
              className="text-stone-500 hover:text-stone-400 text-sm transition-colors"
            >
              Maybe later
            </button>
          </div>
        </div>
      )}

      {/* Input */}
      <div className="border-t border-stone-800 px-4 py-4 flex-shrink-0">
        <div className="max-w-3xl mx-auto flex gap-3 items-end">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={canChat ? "Tell me what's on your mind..." : "Upgrade to continue..."}
            aria-label="LifeCompass AIに相談内容を入力する"
            disabled={loading || !canChat}
            rows={1}
            className="flex-1 bg-stone-800 border border-stone-700 focus:border-amber-500 text-stone-100 placeholder-stone-500 rounded-xl px-4 py-3 text-sm resize-none outline-none transition-colors disabled:opacity-50"
            style={{ minHeight: "48px", maxHeight: "120px" }}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = "auto";
              target.style.height = Math.min(target.scrollHeight, 120) + "px";
            }}
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={loading || !input.trim() || !canChat}
            aria-label="メッセージを送信する"
            className="bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:cursor-not-allowed text-stone-950 font-bold px-5 py-3 rounded-xl transition-colors flex-shrink-0"
          >
            Send
          </button>
        </div>
        <p className="text-center text-stone-700 text-xs mt-2">
          LifeCompass is not a substitute for professional therapy, medical, or legal advice.
        </p>
      </div>
    </div>
  );
}
