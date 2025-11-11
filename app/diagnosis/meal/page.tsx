import type { Metadata } from "next";
import { HeaderBar } from "@/components/layout/HeaderBar";
import { ServiceCard } from "@/components/diagnosis/ServiceCard";
import { getServicesByCategory } from "@/data/services";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ポイ活なび｜お得にご飯",
  description: "お得にご飯を楽しめるサービス一覧",
};

interface PageProps {
  searchParams: Promise<{ type?: string }>;
}

export default async function MealPage({ searchParams }: PageProps) {
  const services = getServicesByCategory("meal");

  return (
    <main className="min-h-screen bg-slate-50">
      <HeaderBar />
      <div className="mx-auto max-w-md px-4 pt-8 pb-16 space-y-6">
        {/* 導入セクション */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
            外食やデリバリーでも「お得」を積み重ねたい人へ
          </h2>
          <div className="space-y-2 text-[14px] text-slate-700 leading-relaxed">
            <p>
              テイクアウト・デリバリー・飲食店予約など、日常のご飯代をお得にできるサービスをまとめています。
            </p>
            <p>
              ポイント還元やクーポン内容は定期的に変わるため、利用前に各公式ページの最新情報をチェックしてください。
            </p>
          </div>
        </section>

        {/* サービス一覧 */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">お得にご飯</h2>
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
