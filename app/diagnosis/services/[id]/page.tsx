import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HeaderBar } from "@/components/layout/HeaderBar";
import { getServiceById } from "@/data/services";
import { AffiliateScript } from "@/components/AffiliateScript";
import { ServiceDetailTopCTA } from "@/components/service-detail/ServiceDetailTopCTA";
import { ServiceDetailRecommendedFor } from "@/components/service-detail/ServiceDetailRecommendedFor";
import { ServiceDetailPrecautions } from "@/components/service-detail/ServiceDetailPrecautions";
import { ServiceDetailBottomCTA } from "@/components/service-detail/ServiceDetailBottomCTA";
import { NextActionsSection } from "@/components/next-actions/NextActionsSection";
import { getNextActionsForCategory } from "@/lib/next-actions-rules";

const categoryMeta = {
  "poi-katsu": {
    label: "ポイ活サービス一覧へ戻る",
    href: "/diagnosis/poi-katsu",
  },
  "credit-card": {
    label: "クレカおすすめ一覧へ戻る",
    href: "/diagnosis/credit-card",
  },
  investment: {
    label: "投資サービス一覧へ戻る",
    href: "/diagnosis/investment",
  },
  shopping: {
    label: "お得に買い物一覧へ戻る",
    href: "/diagnosis/shopping",
  },
  gaming: {
    label: "お得にゲーム一覧へ戻る",
    href: "/diagnosis/gaming",
  },
  meal: {
    label: "お得にご飯一覧へ戻る",
    href: "/diagnosis/meal",
  },
  oripa: {
    label: "オリパ一覧へ戻る",
    href: "/diagnosis/oripa",
  },
} as const;

type PageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{
    from?: string;
    cardUse?: string;
    spareTime?: string;
    tolerance?: string;
    cashlessAmount?: string;
    fixedCostAwareness?: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    return {
      title: "サービスが見つかりませんでした | ポイ活なび",
    };
  }

  return {
    title: `${service.name} | ポイ活なび`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
  searchParams,
}: PageProps) {
  const { id } = await params;
  const searchParamsData = await searchParams;
  const service = getServiceById(id);

  if (!service) {
    notFound();
  }

  // 遷移元に応じた戻るリンクを構築
  const from = searchParamsData.from;
  
  // 診断結果ページから来た場合
  const isFromResults = from === "results";
  const resultsBackUrl = isFromResults
    ? `/diagnosis/results?${new URLSearchParams({
        cardUse: searchParamsData.cardUse || "",
        spareTime: searchParamsData.spareTime || "",
        tolerance: searchParamsData.tolerance || "",
        cashlessAmount: searchParamsData.cashlessAmount || "",
        fixedCostAwareness: searchParamsData.fixedCostAwareness || "",
      }).toString()}`
    : null;

  // トップページから来た場合
  const isFromTop = from === "top";

  // カテゴリページから来た場合
  const isFromCategory = from && categoryMeta[from as keyof typeof categoryMeta];
  
  const categoryInfo = categoryMeta[service.category] ?? {
    label: "診断一覧へ戻る",
    href: "/diagnosis",
  };

  const affiliateLinks =
    service.affiliateLinks && service.affiliateLinks.length > 0
      ? service.affiliateLinks
      : [];

  const primaryLink = affiliateLinks[0];
  const highlightItems =
    service.affiliateHighlights && service.affiliateHighlights.length > 0
      ? service.affiliateHighlights
      : service.tags.length > 0
        ? service.tags
        : ["まずは無料で登録して、掲載案件をチェックしてみましょう。"];

  const hasSecondaryLinks = affiliateLinks.length > 1;
  const hasBannerImages = service.bigImage && service.bigImage.length > 0;
  const referralDetails = service.affiliateReferralDetails;

  // カテゴリに応じた次のアクションを取得
  const nextActions = getNextActionsForCategory(service.category);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">
      <HeaderBar />

      <div className="relative mx-auto max-w-3xl px-4 pt-12 pb-20">
        <div className="absolute inset-x-0 top-8 h-56 rounded-full bg-gradient-to-r from-blue-200/40 via-blue-100/30 to-transparent blur-3xl" />

        <div className="relative flex flex-col gap-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {isFromResults && resultsBackUrl ? (
              // 診断結果から来た場合
              <Link
                href={resultsBackUrl}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 hover:text-blue-500 transition"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                診断結果へ戻る
              </Link>
            ) : isFromTop ? (
              // トップページから来た場合
              <Link
                href="/"
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 hover:text-blue-500 transition"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                トップページへ戻る
              </Link>
            ) : isFromCategory ? (
              // カテゴリページから来た場合
              <Link
                href={categoryMeta[from as keyof typeof categoryMeta].href}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 hover:text-blue-500 transition"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                {categoryMeta[from as keyof typeof categoryMeta].label}
              </Link>
            ) : (
              // その他の場合はデフォルトでカテゴリページへ
              <Link
                href={categoryInfo.href}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 hover:text-blue-500 transition"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                {categoryInfo.label}
              </Link>
            )}
            <Link
              href="/diagnosis"
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-slate-700 transition"
            >
              診断トップへ戻る
            </Link>
          </div>

          <section className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white/90 p-6 sm:p-8 shadow-[0_25px_60px_rgba(15,23,42,0.15)] backdrop-blur">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-transparent" />
            <div className="relative space-y-8">
              {hasBannerImages && (
                <div className="grid gap-4 sm:grid-cols-2 justify-items-center">
                  {service.bigImage!.map((image, index) => {
                    // スクリプトタグを含むかチェック
                    const isScript = image.html.includes('<script');
                    
                    return isScript ? (
                      <div
                        key={`${image.html}-${index}`}
                        className="w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-inner"
                      >
                        <AffiliateScript scriptHtml={image.html} />
                      </div>
                    ) : (
                      <div
                        key={`${image.html}-${index}`}
                        className="w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-inner"
                        dangerouslySetInnerHTML={{ __html: image.html }}
                      />
                    );
                  })}
                </div>
              )}
              <header className="space-y-4">
                <div>
                  <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                    {service.name}
                  </h1>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>

                {service.affiliateCampaignNote && (
                  <div className="campaign-callout rounded-3xl px-5 py-4 w-full max-w-full overflow-hidden">
                    <div className="relative z-10 space-y-2 min-w-0">
                      <span className="campaign-badge">キャンペーン情報</span>
                      <p className="campaign-text break-words">
                        {service.affiliateCampaignNote}
                      </p>
                    </div>
                  </div>
                )}

                {(service.affiliateReferralNote || referralDetails) && (
                  <div className="referral-stack overflow-hidden rounded-3xl border-2 border-red-300/60 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 shadow-[0_30px_80px_rgba(239,68,68,0.4)]">
                    {/* キラキラエフェクト */}
                    <div className="sparkle sparkle-1 sparkle-red" />
                    <div className="sparkle sparkle-2 sparkle-orange" />
                    <div className="sparkle sparkle-3 sparkle-red" />
                    <div className="sparkle sparkle-4 sparkle-orange" />

                    <div className="referral-callout relative px-6 py-6">
                      <div className="relative z-10 flex flex-col gap-3">
                        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-red-600">
                          <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
                          紹介特典
                        </span>
                        {service.affiliateReferralNote && (
                          <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-red-600 leading-tight">
                            {service.affiliateReferralNote}
                          </h3>
                        )}
                        <p className="text-[10px] text-red-600/80">
                          ※
                          特典や条件はタイミングによって変動する場合があります。必ず紹介ページで最新情報を確認してください。
                        </p>
                      </div>
                      <div className="referral-glow" />
                    </div>

                    {referralDetails && (
                      <div className="space-y-4 border-t-2 border-red-200/60 bg-gradient-to-br from-white via-red-50/50 to-orange-50/50 px-6 py-5 text-red-900">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <p className="text-base font-black text-red-700">
                            紹介経由でさらにお得に！
                          </p>
                          {referralDetails.url && (
                            <a
                              href={referralDetails.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="referral-cta-button inline-flex items-center gap-2 rounded-full border-2 border-red-600 bg-gradient-to-r from-red-600 to-orange-600 px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(239,68,68,0.5)] hover:from-red-500 hover:to-orange-500 hover:shadow-[0_12px_32px_rgba(239,68,68,0.6)] active:scale-95 transition-all duration-200 whitespace-nowrap"
                            >
                              紹介URLを開く
                              <svg
                                className="h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M14 3h7v7h-2.5V6.207L10.354 14.35l-1.414-1.415L17.086 4.79H14V3Z" />
                              </svg>
                            </a>
                          )}
                        </div>

                        {referralDetails.code && (
                          <div className="rounded-xl border-2 border-red-300 bg-gradient-to-r from-white to-red-50 px-4 py-3 text-[13px] font-bold text-red-700 shadow-md">
                            紹介コード：
                            <code className="ml-2 font-mono text-base text-red-800">
                              {referralDetails.code}
                            </code>
                          </div>
                        )}

                        {referralDetails.perks &&
                          referralDetails.perks.length > 0 && (
                            <div>
                              <p className="text-[12px] font-bold text-red-700 mb-2">
                                🎁 もらえる特典
                              </p>
                              <ul className="space-y-2 text-[12px]">
                                {referralDetails.perks.map((perk) => (
                                  <li
                                    key={perk}
                                    className="flex gap-2 items-start"
                                  >
                                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                                    <span className="font-semibold text-red-900">
                                      {perk}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                        {referralDetails.conditions &&
                          referralDetails.conditions.length > 0 && (
                            <div>
                              <p className="text-[12px] font-bold text-red-700 mb-2">
                                ⚠️ 達成条件（必ずチェック）
                              </p>
                              <ul className="space-y-2 text-[12px]">
                                {referralDetails.conditions.map((condition) => (
                                  <li
                                    key={condition}
                                    className="flex gap-2 items-start"
                                  >
                                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full border-2 border-red-500" />
                                    <span className="font-medium text-red-800">
                                      {condition}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                      </div>
                    )}
                  </div>
                )}
              </header>

              {/* 上部CTAブロック */}
              <ServiceDetailTopCTA
                serviceId={service.id}
                serviceName={service.name}
                message={service.topCtaMessage}
                supplement={service.topCtaSupplement}
              />

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                  <h2 className="text-xs font-semibold tracking-wide text-slate-500">
                    サービス概要
                  </h2>
                  {service.affiliateContent &&
                    service.affiliateContent.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>

                <div className="space-y-3">
                  <h2 className="text-xs font-semibold tracking-wide text-slate-500">
                    {service.name}のここがすごい！
                  </h2>
                  <ul className="space-y-2 rounded-2xl border border-blue-100 bg-blue-50/80 p-4 text-[12px] text-blue-900 shadow-sm">
                    {highlightItems.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {service.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-0.5 text-[11px] font-medium text-blue-800"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* こんな人におすすめセクション */}
              <ServiceDetailRecommendedFor items={service.recommendedFor} />

              {/* やる前の注意点セクション */}
              <ServiceDetailPrecautions items={service.precautions} />

              <div className="space-y-3">
                {service.affiliateScript ? (
                  // スクリプトタグ型のアフィリエイトリンク（JANetなど）
                  <div className="rounded-2xl border-2 border-rose-200 bg-gradient-to-br from-rose-50 to-white p-6 shadow-lg">
                    <AffiliateScript scriptHtml={service.affiliateScript} />
                  </div>
                ) : primaryLink ? (
                  <a
                    href={`/api/click/${service.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="detail-cta inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-rose-600 to-rose-500 py-3 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(244,63,94,0.45)] transition-all duration-200 hover:from-rose-500 hover:to-rose-400 hover:shadow-[0_18px_40px_rgba(244,63,94,0.55)] active:scale-[0.97]"
                  >
                    今すぐ登録！
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                ) : null}

                {hasSecondaryLinks && (
                  <div className="space-y-2 rounded-xl border border-blue-100 bg-blue-50/60 p-3">
                    <p className="text-[11px] font-semibold text-blue-600">
                      その他の案件リンク
                    </p>
                    <ul className="space-y-2">
                      {affiliateLinks.slice(1).map((link) => (
                        <li key={link.url} className="space-y-1">
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[12px] font-semibold text-blue-600 hover:text-blue-500 transition"
                          >
                            <svg
                              className="w-3.5 h-3.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                              />
                            </svg>
                            {link.label}
                          </a>
                          <code className="block truncate rounded-lg bg-white px-2 py-1 text-[11px] text-blue-700">
                            {link.url}
                          </code>
                          {link.note && (
                            <p className="text-[10px] text-blue-500">
                              {link.note}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <details className="rounded-xl border border-slate-200 bg-slate-50/60 p-3 text-[11px] text-slate-600">
                  <summary className="cursor-pointer font-semibold text-slate-700">
                    リンクの取り扱いについて
                  </summary>
                  <div className="mt-2 space-y-1">
                    <p>・リンクは新しいタブで開きます。</p>
                    <p>
                      ・条件が変わる場合があるため、遷移先の案内を必ず確認してください。
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </section>

          {/* 下部CTAブロック */}
          <ServiceDetailBottomCTA
            serviceId={service.id}
            serviceName={service.name}
            message={service.bottomCtaMessage}
          />

          {/* 次にやると良いことセクション */}
          {nextActions.items.length > 0 && (
            <NextActionsSection
              title={nextActions.title}
              description={nextActions.description}
              items={nextActions.items}
            />
          )}
        </div>
      </div>
    </main>
  );
}
