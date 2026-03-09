import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

export const dynamic = "force-dynamic";

const FREE_LIMIT = 3;
const COOKIE_KEY = "lifecompass_msg_count";

const rateLimit = new Map<string, { count: number; resetAt: number }>();
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) { rateLimit.set(ip, { count: 1, resetAt: now + 60000 }); return true; }
  if (entry.count >= 20) return false;
  entry.count++;
  return true;
}

const SYSTEM_PROMPT = `You are LifeCompass, an AI thinking partner that helps people gain clarity on major life decisions.

Your role is NOT to give advice or tell people what to do. Your role is to ask thoughtful, probing questions that help people discover what they truly want and think clearly about their situation.

Core principles:
- Ask ONE question at a time (never multiple questions in one response)
- Keep responses concise — 2-3 sentences maximum, ending with one focused question
- Never give direct recommendations ("you should...", "I think you should...")
- Help people articulate what they already feel but haven't expressed
- Surface their values, fears, and what's really driving their hesitation
- Be warm, non-judgmental, and genuinely curious
- If someone is clearly in crisis (mentions self-harm, abuse), gently suggest professional support

Question techniques to use (vary them):
- "What would it feel like if you [did X / didn't do X]?"
- "What's the worst that could realistically happen?"
- "What would you tell a close friend in exactly this situation?"
- "What does the hesitation feel like — fear, intuition, or something else?"
- "If you knew the outcome would work out, what would you choose?"
- "What's the version of you that makes this decision — what does that person value?"
- "What are you most afraid of being honest about here?"

Start the conversation by acknowledging what they've shared, then ask one targeted opening question.

Language: Match the user's language. If they write in Japanese, respond in Japanese. If English, respond in English.

IMPORTANT: This is a thinking tool, not therapy. If the conversation becomes clinical or the user needs real psychological support, gently note that LifeCompass is a thinking tool and suggest speaking with a professional.`;

interface Message {
  role: "user" | "assistant";
  content: string;
}

function getAnthropicClient() {
  return new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const isPremium = req.cookies.get("lifecompass_premium")?.value === "1";
  const cookieCount = parseInt(req.cookies.get(COOKIE_KEY)?.value ?? "0");

  if (!isPremium && cookieCount >= FREE_LIMIT) {
    return NextResponse.json({ error: "LIMIT_REACHED" }, { status: 429 });
  }

  const { messages } = await req.json() as { messages: Message[] };

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: "messages required" }, { status: 400 });
  }

  try {
    const client = getAnthropicClient();
    const aiResponse = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages: messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    });

    const content = aiResponse.content[0].type === "text" ? aiResponse.content[0].text : "";
    const newCount = cookieCount + 1;
    const res = NextResponse.json({ content, count: newCount });
    if (!isPremium) {
      res.cookies.set(COOKIE_KEY, String(newCount), {
        maxAge: 60 * 60 * 24 * 30, sameSite: "lax", httpOnly: true, secure: true,
      });
    }
    return res;
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json({ error: "AI unavailable" }, { status: 500 });
  }
}
