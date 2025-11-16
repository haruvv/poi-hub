import type { Metadata } from "next";
import { HeaderBar } from "@/components/layout/HeaderBar";
import { ServiceCard } from "@/components/diagnosis/ServiceCard";
import { getServicesByCategory } from "@/data/services";
import { NextActionsSection } from "@/components/next-actions/NextActionsSection";
import { getNextActionsForCategory } from "@/lib/next-actions-rules";
import { GoogleAdSense } from "@/components/ads/GoogleAdSense";
import { getAdPolicy, AD_SLOTS } from "@/lib/ad-policy";

export const metadata: Metadata = {
  title: "ポイ活なび｜サブスクでポイントもらう",
  description: "サブスク契約でポイントやキャッシュバックが狙える案件一覧",
};

export default async function SubscriptionPage() {
  const services = getServicesByCategory("subscription");
  const nextActions = getNextActionsForCategory("subscription");
  const adPolicy = getAdPolicy("category-list");

  return (
    <main className="min-h-screen bg-slate-50">
      <HeaderBar />
      <div className="mx-auto max-w-md md:max-w-2xl lg:max-w-4xl px-4 pt-8 pb-16 space-y-6">
        {/* 導入セクション */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
          <h1 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 tracking-tight">
            ちょっとテンション上がる "届く系サブスク" をまとめて紹介🎁
          </h1>
          <div className="space-y-3 text-[14px] md:text-[15px] text-slate-700 leading-relaxed">
            <p>
              ごはん・コスメ・ファッション・日用品まで
              <br />
              定期的に届くことで、毎日の"ちょっとめんどくさい"をまるっと解決！
            </p>
            <p>
              初回割・送料無料・気軽に試せるサービスも多いから
              <br />
              まずは1ヶ月だけ使ってみるのもアリ🔥
            </p>
            <p className="font-medium text-slate-900">
              生活の質を上げつつ、実はコスパも悪くない
              <br />
              そんな賢いサブスク、集めました！
            </p>
          </div>
        </section>

        {/* サービス一覧 */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              これから追加していくサブスク案件
            </h2>
            <span className="text-xs md:text-sm text-slate-500">
              {services.length}件
            </span>
          </div>
          {services.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 md:gap-5">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  rank={index + 1}
                  from="subscription"
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <p className="text-[14px] md:text-[15px] text-slate-600 leading-relaxed">
                ここに動画配信サブスクのポイント案件が並ぶ予定ここに電子書籍・学習系サブスクの案件が並ぶ予定
              </p>
            </div>
          )}
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
