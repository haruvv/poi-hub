import type { Metadata } from "next";
import { HeaderBar } from "@/components/layout/HeaderBar";
import { MainHero } from "@/components/top/MainHero";
import { ServiceCategories } from "@/components/top/ServiceCategories";
import { FeaturedSection } from "@/components/top/FeaturedSection";
import { DiagnosisPromo } from "@/components/top/DiagnosisPromo";
import { TrustSection } from "@/components/top/TrustSection";

export const metadata: Metadata = {
  title: "ポイ活なび｜あなたに合ったお得な始め方が見つかる",
  description:
    "ポイ活・クレジットカード・投資サービスの中から、あなたのライフスタイルに合う選択肢を探せるお得情報サイト。",
  openGraph: {
    title: "ポイ活なび｜あなたに合ったお得な始め方が見つかる",
    description:
      "ポイ活・クレジットカード・投資サービスの中から、あなたのライフスタイルに合う選択肢を探せるお得情報サイト。",
    url: "https://poikatsu-navi.com",
    siteName: "ポイ活なび",
    images: [
      {
        url: "/og-image.jpg",
        width: 1920,
        height: 1080,
        alt: "ポイ活なび - あなたに合ったお得な始め方が見つかる",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ポイ活なび｜あなたに合ったお得な始め方が見つかる",
    description:
      "ポイ活・クレジットカード・投資サービスの中から、あなたのライフスタイルに合う選択肢を探せるお得情報サイト。",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <HeaderBar />
      <div className="mx-auto max-w-4xl px-4 pt-8 pb-20 space-y-12 sm:space-y-16">
        {/* (1) メインヒーロー */}
        <MainHero />

        {/* (2) 診断プロモーション */}
        <DiagnosisPromo />

        {/* (3) 特集コンテンツ */}
        <FeaturedSection />

        {/* (4) サービスカテゴリ */}
        <ServiceCategories />

        {/* (5) 安心・信頼セクション */}
        <TrustSection />
      </div>
    </main>
  );
}
