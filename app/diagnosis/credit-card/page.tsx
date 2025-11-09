import type { Metadata } from "next";
import { HeaderBar } from "@/components/layout/HeaderBar";
import { ServiceCard } from "@/components/diagnosis/ServiceCard";
import { getServicesByCategory } from "@/data/services";
import { getDiagnosisTypeFromId } from "@/types/diagnosis";
import Link from "next/link";

export const metadata: Metadata = {
  title: "お得ナビ Hub｜クレジットカードおすすめ",
  description: "診断結果に基づいたクレジットカードおすすめ一覧",
};

interface PageProps {
  searchParams: Promise<{ type?: string }>;
}

export default async function CreditCardPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const diagnosisType = getDiagnosisTypeFromId(params.type);
  const services = getServicesByCategory("credit-card");

  return (
    <main className="min-h-screen">
      <HeaderBar />
      <div className="mx-auto max-w-md px-4 pt-8 pb-16 space-y-6">
        {/* 診断結果表示 */}
        {diagnosisType && (
          <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-sm">
            <p className="text-xs font-semibold text-blue-600 mb-1">
              あなたの診断結果
            </p>
            <h1 className="text-base font-semibold text-slate-900">
              {diagnosisType}
            </h1>
            <p className="text-xs text-slate-600 mt-2">
              このタイプにおすすめのクレジットカードをご紹介します。
            </p>
          </div>
        )}

        {/* サービス一覧 */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">
              クレジットカード
            </h2>
            <span className="text-xs text-slate-500">{services.length}件</span>
          </div>
          <div className="space-y-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
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
