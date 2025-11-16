import type { Metadata } from "next";
import { HeaderBar } from "@/components/layout/HeaderBar";
import { ServiceCard } from "@/components/diagnosis/ServiceCard";
import { getServicesByCategory } from "@/data/services";
import { NextActionsSection } from "@/components/next-actions/NextActionsSection";
import { getNextActionsForCategory } from "@/lib/next-actions-rules";
import { GoogleAdSense } from "@/components/ads/GoogleAdSense";
import { getAdPolicy, AD_SLOTS } from "@/lib/ad-policy";

export const metadata: Metadata = {
  title: "ポイ活なび｜お得にご飯",
  description: "お得にご飯を楽しめるサービス一覧",
};

interface PageProps {
  searchParams: Promise<{ type?: string }>;
}

export default async function MealPage({ searchParams }: PageProps) {
  const services = getServicesByCategory("meal");
  const nextActions = getNextActionsForCategory("meal");
  const adPolicy = getAdPolicy("category-list");

  return (
    <main className="min-h-screen bg-slate-50">
      <HeaderBar />
      <div className="mx-auto max-w-md md:max-w-2xl lg:max-w-4xl px-4 pt-8 pb-16 space-y-6">
        {/* 導入セクション */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 tracking-tight">
            毎日のごはん代、うまく節約したい人におすすめ🍱
          </h2>
          <div className="space-y-3 text-[14px] md:text-[15px] text-slate-700 leading-relaxed">
            <p>
              ここでは、毎週届く冷凍ごはんやミールキット、宅配ごはん系のサービスをピックアップ
              <br />
              コンビニや外食に頼りがちな人でも、バランスよく＆お得に食費を見直せる！
            </p>
            <p>
              初回割や限定クーポンがあるサービスも多いから
              <br />
              気になるやつは早めにチェックしてみて🔥
            </p>
            <p className="text-xs text-slate-600 bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
              ※クーポン内容や還元率は変動するから、申し込み前に公式サイトの最新情報は要チェック！
            </p>
          </div>
        </section>

        {/* サービス一覧 */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              お得にご飯
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
                from="meal"
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
