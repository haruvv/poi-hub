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
          <h1 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
            サブスクでポイントもらう
          </h1>
          <div className="space-y-2 text-[14px] md:text-[15px] text-slate-700 leading-relaxed">
            <p>
              今ってサブスクだらけだよね気づいたらいくつも入ってて、毎月けっこうな額が飛んでいきがち
            </p>
            <p>
              どうせどこかのサブスクには入るなら、ポイントやキャッシュバック付きの案件から順番に拾っていきたい
            </p>
            <p>
              このページでは、サブスクに入りつつ、ポイントやキャッシュバックも狙うための考え方をざっくり整理しています
            </p>
          </div>
        </section>

        {/* サブスクに入る前に決めておきたいこと */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 tracking-tight">
            サブスクに入る前に決めておきたいこと
          </h2>
          <ul className="space-y-3 text-[14px] md:text-[15px] text-slate-700 leading-relaxed">
            <li className="flex gap-3 items-start">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
              <span>
                無料期間だけ試すつもりなのか、しばらく使う前提なのかを決めてから入る
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
              <span>
                すでに入っているサブスクと役割がかぶってないかをざっくり確認する
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
              <span>
                解約し忘れないように、更新日や無料期間の終わりだけはどこかにメモしておく
              </span>
            </li>
          </ul>
        </section>

        {/* ポイント・キャッシュバックを狙うコツ */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 tracking-tight">
            ポイントやキャッシュバックを狙うコツ
          </h2>
          <ol className="space-y-3 text-[14px] md:text-[15px] text-slate-700 leading-relaxed list-decimal list-inside">
            <li>
              ポイントサイトやキャンペーンページを経由して申し込むことで、サブスク料金とは別にポイントやキャッシュバックが狙える
            </li>
            <li>
              還元率の高いクレカ払いにして、サブスク料金からもカードポイントを拾う
            </li>
            <li>
              無料期間だけで終わらせるつもりでも、条件達成までちゃんと利用しないと成果が否認されることがあるので、そのあたりの条件を事前にチェックしておく
            </li>
          </ol>
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

        {/* 注意・まとめセクション */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 tracking-tight">
            ポイント目当てでも、入りっぱなしには気をつけたい
          </h2>
          <div className="space-y-2 text-[14px] md:text-[15px] text-slate-700 leading-relaxed">
            <p>
              サブスクは一度入るとそのまま放置しがちなので、ポイントやキャッシュバック目当てで入ったあとも見直しが必要
            </p>
            <p>
              キャンペーン条件やポイント数、判定条件は変わるので、申し込むときは必ず公式ページと広告主側の条件を確認したほうがいい
            </p>
            <p>
              「登録すれば誰でも必ず◯◯円もらえる」というものではなく、条件を満たした場合にだけ成果になる、という前提を頭に入れておく
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
