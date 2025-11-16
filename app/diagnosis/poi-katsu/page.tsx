import type { Metadata } from "next";
import { HeaderBar } from "@/components/layout/HeaderBar";
import { ServiceCard } from "@/components/diagnosis/ServiceCard";
import { getServicesByCategory } from "@/data/services";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ポイ活なび｜ポイ活おすすめサービス",
  description: "診断結果に基づいたポイ活おすすめサービス一覧",
};

interface PageProps {
  searchParams: Promise<{ type?: string }>;
}

export default async function PoiKatsuPage({ searchParams }: PageProps) {
  const services = getServicesByCategory("poi-katsu");

  return (
    <main className="min-h-screen bg-slate-50">
      <HeaderBar />
      <div className="mx-auto max-w-md md:max-w-2xl lg:max-w-4xl px-4 pt-8 pb-16 space-y-6">
        {/* 導入セクション */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
            ポイ活で「ムリなく・コツコツ」始めたい人へ
          </h2>
          <div className="space-y-2 text-[14px] md:text-[15px] text-slate-700 leading-relaxed">
            <p>
              ここでは、毎日のネットショッピングやアプリ利用でポイントが貯めやすい定番サービスを厳選して紹介しています。
            </p>
            <p>
              「怪しい案件」は避け、実績のあるサービスを中心に掲載。ひなちゃんと一緒に、今日から気軽にポイ活デビューしよう。
            </p>
          </div>
        </section>

        {/* サービス一覧 */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              ポイ活サービス
            </h2>
            <span className="text-xs md:text-sm text-slate-500">{services.length}件</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                rank={index + 1}
                from="poi-katsu"
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
