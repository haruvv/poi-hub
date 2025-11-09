import type { Metadata } from "next";
import { HeaderBar } from "@/components/layout/HeaderBar";
import { SimpleHero } from "@/components/top/SimpleHero";

export const metadata: Metadata = {
  title: "お得ナビ Hub｜あなたがムダなく増やせるお金を30秒でチェック",
  description:
    "質問3つに答えるだけで、“今の自分がムダなく増やせるお得アクション”だけを絞って表示する診断ツール。",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <HeaderBar />
      <div className="mx-auto max-w-md px-4 pt-10 pb-16">
        <SimpleHero />
      </div>
    </main>
  );
}
