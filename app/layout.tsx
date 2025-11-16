import "./globals.css";
import type { ReactNode } from "react";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "ポイ活なび",
  description: "ムダなくお得を積み上げるための、シンプルな30秒お得診断サイト",
  other: {
    "google-adsense-account": "ca-pub-2028703181823597",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col">
        <Script
          id="adsense-init"
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2028703181823597"
          crossOrigin="anonymous"
        />
        <div className="flex-1">{children}</div>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
