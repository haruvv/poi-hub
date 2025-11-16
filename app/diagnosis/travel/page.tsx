import type { Metadata } from "next";
import { HeaderBar } from "@/components/layout/HeaderBar";
import { ServiceCard } from "@/components/diagnosis/ServiceCard";
import { getServicesByCategory } from "@/data/services";
import { NextActionsSection } from "@/components/next-actions/NextActionsSection";
import { getNextActionsForCategory } from "@/lib/next-actions-rules";
import { GoogleAdSense } from "@/components/ads/GoogleAdSense";
import { getAdPolicy, AD_SLOTS } from "@/lib/ad-policy";

export const metadata: Metadata = {
  title: "ポイ活なび｜旅行会社のお得プランを狙う",
  description: "各旅行会社のセールやお得プランを見つけやすい予約サイト一覧",
};

export default async function TravelPage() {
  const services = getServicesByCategory("travel");
  const nextActions = getNextActionsForCategory("travel");
  const adPolicy = getAdPolicy("category-list");

  return (
    <main className="min-h-screen bg-slate-50">
      <HeaderBar />
      <div className="mx-auto max-w-md md:max-w-2xl lg:max-w-4xl px-4 pt-8 pb-16 space-y-6">
        {/* 導入セクション */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
          <h1 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
            旅行会社のお得プランを狙う
          </h1>
          <div className="space-y-2 text-[14px] md:text-[15px] text-slate-700 leading-relaxed">
            <p>
              旅行って、一回予約するだけで数万円とか普通に飛んでいく。
            </p>
            <p>
              どうせ同じようなプラン取るなら、どの会社が今セールやってるかくらいはチェックしておきたい。
            </p>
            <p>
              このページでは、旅行プランを決める前に、どの辺を意識してお得プランを拾っていくかをざっくり整理してる。
            </p>
          </div>
        </section>

        {/* お得プラン探しの前にざっくり決めておきたいこと */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 tracking-tight">
            お得プラン探しの前にざっくり決めておきたいこと
          </h2>
          <ul className="space-y-3 text-[14px] md:text-[15px] text-slate-700 leading-relaxed">
            <li className="flex gap-3 items-start">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
              <span>
                行き先エリアと日程のだいたいの候補。
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
              <span>
                交通と宿をセットで取りたいのか、別々に取りたいのか。
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
              <span>
                ホテルでゆずれない条件（立地・朝食・大浴場・部屋の広さなど）を2〜3個に絞っておく。
              </span>
            </li>
          </ul>
          <p className="mt-4 text-[13px] md:text-[14px] text-slate-600 leading-relaxed">
            ここが決まってないと、お得プランを見つけても自分に合ってるか分かりづらい。
          </p>
        </section>

        {/* 各旅行会社のお得プランを狙うコツ */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 tracking-tight">
            各旅行会社のお得プランを狙うコツ
          </h2>
          <ol className="space-y-3 text-[14px] md:text-[15px] text-slate-700 leading-relaxed list-decimal list-inside">
            <li>
              早割・直前割・タイムセールなど、同じプランでも時期によって値段が変わるので、旅行サイト側のセールページを一度ざっと眺めてから探し始めると効率がいい。
            </li>
            <li>
              公式サイト限定プラン・アプリ限定クーポン・会員限定セールなど、旅行会社ごとに&ldquo;内輪の割引&rdquo;があることが多い。
            </li>
            <li>
              価格だけ見て決めると、食事・立地・キャンセル条件で「やっぱり違った」となりやすいので、&ldquo;お得そうに見える理由&rdquo;も合わせてチェックしたほうがいい。
            </li>
            <li>
              「とりあえず全部見て最安一本決める」より、「自分の条件に合ってるプランの中でお得そうなやつを拾う」くらいの距離感がちょうどいい。
            </li>
          </ol>
        </section>

        {/* サービス一覧 */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              これから追加していく旅行サイト
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
                  from="travel"
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <p className="text-[14px] md:text-[15px] text-slate-600 leading-relaxed">
                ここにホテル予約サイト系の案件が並ぶ予定。ここにツアー・パッケージ系の案件が並ぶ予定。
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

        {/* 注意・まとめセクション */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 tracking-tight">
            お得プランだけ追いかけすぎないようにだけ注意
          </h2>
          <div className="space-y-2 text-[14px] md:text-[15px] text-slate-700 leading-relaxed">
            <p>
              セールや割引だけを追いかけすぎると、アクセスの悪さやキャンセル規定の厳しさで逆に損した気分になることもあるので、「自分の条件に合うか」を優先したほうがいい。
            </p>
            <p>
              セール内容やキャンペーンの条件は頻繁に変わるので、申し込む前に必ず公式ページで最新の条件を確認したほうがいい。
            </p>
            <p>
              このページは「どの会社が&ldquo;今どんなお得プランを出しているか&rdquo;を探しにいく入口」くらいの立ち位置で使ってもらうイメージ。
            </p>
          </div>
        </section>

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

