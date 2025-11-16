import type { Metadata } from "next";
import { HeaderBar } from "@/components/layout/HeaderBar";
import { ServiceCard } from "@/components/diagnosis/ServiceCard";
import { getServicesByCategory } from "@/data/services";
import { NextActionsSection } from "@/components/next-actions/NextActionsSection";
import { getNextActionsForCategory } from "@/lib/next-actions-rules";
import { GoogleAdSense } from "@/components/ads/GoogleAdSense";
import { getAdPolicy, AD_SLOTS } from "@/lib/ad-policy";

export const metadata: Metadata = {
  title: "ポイ活なび｜投資サービスおすすめ",
  description: "診断結果に基づいた投資サービスおすすめ一覧",
};

interface PageProps {
  searchParams: Promise<{ type?: string }>;
}

export default async function InvestmentPage({ searchParams }: PageProps) {
  const services = getServicesByCategory("investment");
  const nextActions = getNextActionsForCategory("investment");
  const adPolicy = getAdPolicy("category-list");

  return (
    <main className="min-h-screen bg-slate-50">
      <HeaderBar />
      <div className="mx-auto max-w-md md:max-w-2xl lg:max-w-4xl px-4 pt-8 pb-16 space-y-6">
        {/* 導入セクション */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 tracking-tight">
            少額からコツコツ始めたい人向けの"やさしい投資特集"📈
          </h2>
          <div className="space-y-3 text-[14px] md:text-[15px] text-slate-700 leading-relaxed">
            <p>
              つみたてNISA対応や、スマホで気軽に始められる投資サービスを中心に紹介中
              <br />
              投資って聞くとハードル高そうだけど、今は500円とか1000円からでもOKなサービスが増えてる！
            </p>
            <p>
              もちろんリスクもゼロじゃないけど
              <br />
              メリット・注意点どっちもちゃんとまとめてるから安心してチェックしてほしい
            </p>
            <p className="font-medium text-slate-900">
              焦らず、自分のペースで始められる選択肢だけをピックアップ🔥
            </p>
          </div>
        </section>

        {/* サービス一覧 */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              投資サービス
            </h2>
            <span className="text-xs md:text-sm text-slate-500">
              {services.length}件
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 md:gap-5">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                rank={index + 1}
                from="investment"
              />
            ))}
          </div>
        </div>

        {/* 次にやると良いことセクション */}
        {nextActions.items.length > 0 && (
          <NextActionsSection
            title={nextActions.title}
            description={nextActions.description}
            items={nextActions.items}
          />
        )}

        {/* 下部広告（控えめに） */}
        {adPolicy.showBottomAd && (
          <div className="pt-4">
            <GoogleAdSense
              adSlot={AD_SLOTS.general.bottom}
              className="max-w-3xl mx-auto"
            />
          </div>
        )}
      </div>
    </main>
  );
}
