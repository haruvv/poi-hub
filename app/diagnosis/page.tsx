import type { Metadata } from "next";
import { HeaderBar } from "@/components/layout/HeaderBar";
import { DiagnosisPageClient } from "./DiagnosisPageClient";

export const metadata: Metadata = {
  title: "ポイ活なび｜30秒お得診断",
  description:
    "質問3つに答えるだけで、今の自分がやるべきポイ活・クレカ・節約アクションだけを絞って表示します。",
  openGraph: {
    title: "ポイ活なび｜30秒お得診断",
    description:
      "質問3つに答えるだけで、今の自分がやるべきポイ活・クレカ・節約アクションだけを絞って表示します。",
    url: "https://poikatu.com/diagnosis",
    siteName: "ポイ活なび",
    images: [
      {
        url: "/og-image.jpg",
        width: 1920,
        height: 1080,
        alt: "ポイ活なび - 30秒お得診断",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ポイ活なび｜30秒お得診断",
    description:
      "質問3つに答えるだけで、今の自分がやるべきポイ活・クレカ・節約アクションだけを絞って表示します。",
    images: ["/og-image.jpg"],
  },
};

export default function DiagnosisPage() {
  return (
    <main className="min-h-screen bg-slate-50 relative pb-20">
      {/* 背景エフェクト */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-slate-300/8 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-20 right-1/4 w-64 h-64 bg-slate-400/6 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <HeaderBar />
      <DiagnosisPageClient />
    </main>
  );
}
