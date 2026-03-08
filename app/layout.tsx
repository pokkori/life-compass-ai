import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LifeCompass AI — Your AI Thinking Partner for Life's Big Decisions",
  description:
    "When you're at a crossroads — career, relationships, where to live — LifeCompass AI helps you think it through. Not advice, not therapy. Just the right questions.",
  openGraph: {
    title: "LifeCompass AI",
    description: "Your AI thinking partner for life's big decisions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-stone-950 text-stone-100 antialiased">{children}</body>
    </html>
  );
}
