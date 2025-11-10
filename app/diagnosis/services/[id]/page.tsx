import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HeaderBar } from "@/components/layout/HeaderBar";
import { getServiceById } from "@/data/services";

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
  "point-exchange": {
    label: "ポイント交換アプリ一覧へ戻る",
    href: "/diagnosis/point-exchange",
  },
} as const;

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    return {
      title: "サービスが見つかりませんでした | お得ナビ Hub",
    };
  }

  return {
    title: `${service.name} | お得ナビ Hub`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    notFound();
  }

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

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">
      <HeaderBar />

      <div className="relative mx-auto max-w-3xl px-4 pt-12 pb-20">
        <div className="absolute inset-x-0 top-8 h-56 rounded-full bg-gradient-to-r from-blue-200/40 via-blue-100/30 to-transparent blur-3xl" />

        <div className="relative flex flex-col gap-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
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
                  {service.bigImage!.map((image) => (
                    <div
                      key={image.html}
                      className="w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-inner"
                      dangerouslySetInnerHTML={{ __html: image.html }}
                    />
                  ))}
                </div>
              )}
              <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div>
                    <h1 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                      {service.name}
                    </h1>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                    {service.listingIncentive && (
                      <div className="incentive-callout mt-4 rounded-3xl border border-rose-200 bg-gradient-to-r from-rose-50 via-white to-rose-100 p-4 shadow-[0_15px_35px_rgba(244,63,94,0.18)]">
                        <div className="flex items-start gap-3">
                          <div className="incentive-icon flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-rose-500 text-white shadow-lg">
                            <svg
                              className="w-5 h-5"
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
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose-600">
                              限定特典
                            </p>
                            <p className="text-sm font-semibold text-rose-700">
                              {service.listingIncentive}
                            </p>
                            <p className="text-[11px] text-rose-500">
                              登録ボタンからアクセスして特典を逃さないようにしましょう。
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-[11px] text-slate-500 shadow-sm">
                  <p>
                    ※
                    掲載リンクはすべて新しいタブで開きます。条件が変わる場合があるため、遷移先の案内を必ずご確認ください。
                  </p>
                </div>
              </header>

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
                    押さえておきたいポイント
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

              <div className="space-y-3">
                {primaryLink && (
                  <a
                    href={primaryLink.url}
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
                )}

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
                    <p>・ASPで発行したURLをそのまま掲載しています。</p>
                    <p>・リンクは新しいタブで開きます。</p>
                    <p>
                      ・条件が変わる場合があるため、遷移先の案内を必ず確認してください。
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
