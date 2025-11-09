import type { Metadata } from "next";
import { HeaderBar } from "@/components/layout/HeaderBar";
import { DiagnosisHero } from "@/components/diagnosis/DiagnosisHero";
import { DiagnosisWizard } from "@/components/diagnosis/DiagnosisWizard";

export const metadata: Metadata = {
  title: "お得ナビ Hub｜30秒お得診断",
  description:
    "質問3つに答えるだけで、“今の自分がやるべき”ポイ活・クレカ・節約アクションだけを絞って表示します。",
};

export default function DiagnosisPage() {
  return (
    <main className="min-h-screen">
      <HeaderBar />
      <div className="mx-auto max-w-md px-4 pt-8 pb-16 space-y-6">
        <DiagnosisHero />
        <DiagnosisWizard />
      </div>
    </main>
  );
}
