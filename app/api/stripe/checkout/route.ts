import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const dynamic = "force-dynamic";

// 必須環境変数:
//   STRIPE_SECRET_KEY    : Stripeシークレットキー
//   STRIPE_PRICE_ID      : ¥980/月プランのStripe Price ID (例: price_xxxxxxxxxx)
//   NEXT_PUBLIC_BASE_URL : 本番URL (例: https://lifecompass-ai.vercel.app)

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!);
}

export async function GET(req: NextRequest) {
  const origin = req.headers.get("origin") ?? process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          // STRIPE_PRICE_ID: Stripeダッシュボードで¥980/月のサブスクリプションPrice IDを設定
          price: process.env.STRIPE_PRICE_ID!,
          quantity: 1,
        },
      ],
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/chat`,
      allow_promotion_codes: true,
      locale: "ja",
      metadata: {
        product: "lifecompass_premium",
      },
    });

    return NextResponse.redirect(session.url!, 303);
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }
}
