import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://lifecompass-ai.vercel.app";

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
    { "@type": "ListItem", "position": 2, "name": "Life Compass AI Tool", "item": `${SITE_URL}/tool` },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "LifeCompass AI",
  "description": "When you're at a crossroads — career, relationships, where to live — LifeCompass AI helps you think it through with structured AI-guided reflection.",
  "applicationCategory": "LifestyleApplication",
  "operatingSystem": "Web",
  "url": SITE_URL,
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "inLanguage": "en",
};
const TITLE = "LifeCompass AI — Your AI Thinking Partner for Life's Big Decisions";
const DESC =
  "When you're at a crossroads — career, relationships, where to live — LifeCompass AI helps you think it through. Not advice, not therapy. Just the right questions.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "LifeCompass AI",
    description: "Your AI thinking partner for life's big decisions.",
    url: SITE_URL,
    siteName: "LifeCompass AI",
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "LifeCompass AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LifeCompass AI",
    description: "Your AI thinking partner for life's big decisions.",
    images: [`${SITE_URL}/opengraph-image.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-stone-950 text-stone-100 antialiased">{children}</body>
    </html>
  );
}
