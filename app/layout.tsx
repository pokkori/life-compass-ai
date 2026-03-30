import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAdScript } from "@/components/GoogleAdScript";
import "./globals.css";
import { InstallPrompt } from "@/components/InstallPrompt";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

const SITE_URL = "https://lifecompass-ai.vercel.app";

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "LifeCompass AI", "item": SITE_URL },
    { "@type": "ListItem", "position": 2, "name": "AI相談チャット", "item": `${SITE_URL}/chat` },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "LifeCompass AI",
  "description": "キャリア・恋愛・転居・人生の大きな決断を、ソクラテス式AI対話で整理できるサービスです。アドバイスではなく「適切な問い」で思考をクリアにします。",
  "applicationCategory": "LifestyleApplication",
  "operatingSystem": "Web",
  "url": SITE_URL,
  "inLanguage": "ja",
  "offers": [
    { "@type": "Offer", "price": "0", "priceCurrency": "JPY", "name": "無料プラン（1日5回まで）" },
    { "@type": "Offer", "price": "980", "priceCurrency": "JPY", "name": "プレミアムプラン（月額・無制限）" },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "LifeCompass AIとは何ですか？",
      "acceptedAnswer": { "@type": "Answer", "text": "キャリア・恋愛・転居など人生の大きな決断に直面したとき、ソクラテス式AI対話で思考を整理できるサービスです。答えを出すのではなく、適切な問いを投げかけることで、あなた自身が答えを見つけられます。" }
    },
    {
      "@type": "Question",
      "name": "無料で使えますか？",
      "acceptedAnswer": { "@type": "Answer", "text": "はい、無料プランでは1日5回まで会話できます。クレジットカード不要です。" }
    },
    {
      "@type": "Question",
      "name": "プレミアムプランの料金はいくらですか？",
      "acceptedAnswer": { "@type": "Answer", "text": "月額980円（税込）です。1日あたり約32円でいつでも無制限に相談できます。" }
    },
    {
      "@type": "Question",
      "name": "プレミアムプランの解約方法は？",
      "acceptedAnswer": { "@type": "Answer", "text": "マイページから随時解約できます。解約後も契約期間終了まではプレミアム機能を利用できます。" }
    },
    {
      "@type": "Question",
      "name": "ChatGPTとどう違いますか？",
      "acceptedAnswer": { "@type": "Answer", "text": "ChatGPTは答えを出しますが、LifeCompass AIは問いを投げかけます。あなた自身の判断力を鍛え、人生の決断を自分で下せるよう支援するのが特徴です。" }
    },
    {
      "@type": "Question",
      "name": "カウンセリングや心理療法の代わりになりますか？",
      "acceptedAnswer": { "@type": "Answer", "text": "なりません。LifeCompass AIは思考整理ツールであり、医療・法律・メンタルヘルスの専門的なアドバイスを提供するものではありません。危機状況の場合は専門家にご相談ください。" }
    },
    {
      "@type": "Question",
      "name": "会話内容は保存されますか？",
      "acceptedAnswer": { "@type": "Answer", "text": "無料プランではブラウザセッション内のみで、閉じると消えます。プレミアムプランでは会話履歴が保存されます。" }
    },
    {
      "@type": "Question",
      "name": "どんな悩みを相談できますか？",
      "acceptedAnswer": { "@type": "Answer", "text": "転職・キャリアの岐路、恋愛・人間関係の判断、引っ越し・ライフスタイルの変化、人生の目的・方向性の模索など、人生の大きな決断全般に対応しています。" }
    },
    {
      "@type": "Question",
      "name": "スマートフォンでも使えますか？",
      "acceptedAnswer": { "@type": "Answer", "text": "はい、ブラウザがあればiPhone・Androidどちらでもご利用いただけます。アプリのインストールは不要です。" }
    },
    {
      "@type": "Question",
      "name": "返金はできますか？",
      "acceptedAnswer": { "@type": "Answer", "text": "デジタルコンテンツの性質上、原則として返金はお受けしておりません。まず無料プランでお試しいただくことをおすすめします。" }
    },
  ],
};

const TITLE = "LifeCompass AI — 人生の決断を整理するAI思考パートナー";
const DESC =
  "キャリア・恋愛・転居・人生の岐路に立ったとき、LifeCompass AIがソクラテス式対話で思考をクリアにします。アドバイスでも療法でもない、ただ「適切な問い」を。月額980円から。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: ["人生相談AI", "思考整理", "キャリア相談", "人生の決断", "ソクラテス式", "AI思考パートナー", "LifeCompassAI"],
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "LifeCompass AI — 人生の決断を整理するAI思考パートナー",
    description: "キャリア・恋愛・転居など人生の岐路で、適切な問いで思考をクリアに。月額980円から。",
    url: SITE_URL,
    siteName: "LifeCompass AI",
    locale: "ja_JP",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "LifeCompass AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LifeCompass AI — 人生の決断を整理するAI思考パートナー",
    description: "キャリア・恋愛・転居など人生の岐路で、適切な問いで思考をクリアに。月額980円から。",
    images: [`${SITE_URL}/opengraph-image.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      </head>
      <body className="bg-stone-950 text-stone-100 antialiased">{children}<InstallPrompt /><Analytics /><SpeedInsights /><GoogleAdScript /></body>
    </html>
  );
}
