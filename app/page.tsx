import type { Metadata } from "next";
import { HeaderBar } from "@/components/layout/HeaderBar";
import { MainHero } from "@/components/top/MainHero";
import { ServiceCategories } from "@/components/top/ServiceCategories";
import { DiagnosisPromo } from "@/components/top/DiagnosisPromo";
import { TrustSection } from "@/components/top/TrustSection";

export const metadata: Metadata = {
  title: "ポイ活なび｜あなたに合ったお得な始め方が見つかる",
  description:
    "ポイ活・クレジットカード・投資サービスの中から、あなたのライフスタイルに合う選択肢を探せるお得情報サイト。",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <HeaderBar />
      <div className="mx-auto max-w-4xl px-4 pt-8 pb-20 space-y-12 sm:space-y-16">
        {/* (1) メインヒーロー */}
        <MainHero />

        {/* (2) サービスカテゴリ */}
        <ServiceCategories />

        {/* (3) 診断プロモーション */}
        <DiagnosisPromo />

        {/* (4) 安心・信頼セクション */}
        <TrustSection />
      </div>
    </main>
  );
}
