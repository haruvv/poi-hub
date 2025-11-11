import type { Metadata } from "next";
import { HeaderBar } from "@/components/layout/HeaderBar";
import { HeroSection } from "@/components/top/HeroSection";
import { ValueProposition } from "@/components/top/ValueProposition";
import { DiagnosisFlow } from "@/components/top/DiagnosisFlow";
import { CategorySection } from "@/components/top/CategorySection";
import { TrustSection } from "@/components/top/TrustSection";
import { BottomCTA } from "@/components/top/BottomCTA";

export const metadata: Metadata = {
  title: "お得ナビ Hub｜あなたがムダなく増やせるお金を30秒でチェック",
  description:
    "質問3つに答えるだけで、「今の自分がムダなく増やせるお得アクション」だけを絞って表示する診断ツール。",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <HeaderBar />
      <div className="mx-auto max-w-4xl px-4 pt-8 pb-20 space-y-12 sm:space-y-16">
        {/* (1) ヒーローセクション */}
        <HeroSection />

        {/* (2) この診断で得られる価値 */}
        <ValueProposition />

        {/* (3) 診断の流れ（3ステップ） */}
        <DiagnosisFlow />

        {/* (4) カテゴリから探すセクション */}
        <CategorySection />

        {/* (5) 安心・信頼セクション */}
        <TrustSection />

        {/* (7) ページ下部の再CTA */}
        <BottomCTA />
      </div>
    </main>
  );
}
