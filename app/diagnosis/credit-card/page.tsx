import type { Metadata } from "next";
import { HeaderBar } from "@/components/layout/HeaderBar";
import { ServiceCard } from "@/components/diagnosis/ServiceCard";
import { getServicesByCategory } from "@/data/services";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ポイ活なび｜クレジットカードおすすめ",
  description: "診断結果に基づいたクレジットカードおすすめ一覧",
};

interface PageProps {
  searchParams: Promise<{ type?: string }>;
}

export default async function CreditCardPage({ searchParams }: PageProps) {
  const services = getServicesByCategory("credit-card");

  return (
    <main className="min-h-screen bg-slate-50">
      <HeaderBar />
      <div className="mx-auto max-w-md px-4 pt-8 pb-16 space-y-6">
        {/* 導入セクション */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
            自分に合った「一枚目・乗り換え候補」を選びたい人へ
          </h2>
          <div className="space-y-2 text-[14px] text-slate-700 leading-relaxed">
            <p>
              年会費・還元率・安心感を重視して選びやすいクレジットカードだけをピックアップしています。
            </p>
            <p>
              ポイント重視派・シンプル派などタイプ別のおすすめも紹介。申し込み前に公式サイトで最新の特典を必ずチェックしてください。
            </p>
          </div>
        </section>

        {/* サービス一覧 */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">
              クレジットカード
            </h2>
            <span className="text-xs text-slate-500">{services.length}件</span>
          </div>
          <div className="space-y-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                rank={index + 1}
              />
            ))}
          </div>
        </div>

        {/* もう一度診断する */}
        <div className="pt-4">
          <Link
            href="/diagnosis"
            className="block w-full text-center rounded-2xl border border-slate-200 text-sm text-slate-600 py-3 hover:bg-slate-50 transition"
          >
            もう一度診断する
          </Link>
        </div>
      </div>
    </main>
  );
}
