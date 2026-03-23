"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

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
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setSessionCount(getSessionCount());
    setPremium(isPremium());
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
    }

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) throw new Error("API error");

      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.content }]);

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
        <Link href="/" className="font-semibold text-stone-300 hover:text-white transition-colors">
          🧭 LifeCompass AI
        </Link>
        <div className="flex items-center gap-3">
          {!premium && (
            <span className="text-stone-500 text-sm">
              {Math.max(0, FREE_LIMIT - userMessageCount)} free messages left
            </span>
          )}
          {premium && (
            <span className="text-amber-400 text-sm font-medium">✓ Premium</span>
          )}
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6 max-w-3xl mx-auto w-full">
        {messages.length === 0 && (
          <div className="text-center pt-8">
            <div className="text-5xl mb-4">🧭</div>
            <h2 className="text-2xl font-bold text-stone-100 mb-2">What&apos;s on your mind?</h2>
            <p className="text-stone-400 mb-8">
              Tell me about a decision you&apos;re facing. I&apos;ll ask questions to help you find clarity.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto">
              {STARTER_PROMPTS.map((p) => (
                <button
                  key={p}
                  onClick={() => sendMessage(p)}
                  aria-label={`Start conversation: "${p}"`}
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
              <div className="w-8 h-8 rounded-full bg-amber-500 text-stone-950 font-bold text-sm flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                🧭
              </div>
            )}
            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                m.role === "user"
                  ? "bg-amber-500 text-stone-950 font-medium"
                  : "bg-stone-800 text-stone-100"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-stone-950 font-bold text-sm flex items-center justify-center flex-shrink-0 mt-1 mr-3">
              🧭
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
            <div className="text-4xl mb-4">🧭</div>
            <h2 className="text-2xl font-bold mb-2">You&apos;ve used your free sessions</h2>
            <p className="text-stone-400 mb-6">
              Upgrade to Premium to continue your conversation and get unlimited access.
            </p>
            <div className="bg-stone-800 rounded-xl p-4 mb-6 text-sm text-stone-300 text-left space-y-1">
              <p>✓ Unlimited conversations</p>
              <p>✓ Continue from where you left off</p>
              <p>✓ All decision types</p>
            </div>
            <Link
              href="/api/stripe/checkout"
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
            aria-label="Type your message to LifeCompass AI"
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
            aria-label="Send message"
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
