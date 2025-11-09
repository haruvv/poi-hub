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
      : [
          {
            label: "公式／詳細ページ",
            url: service.affiliateUrl,
          },
        ];
  const primaryLink = affiliateLinks[0];

  return (
    <main className="min-h-screen">
      <HeaderBar />
      <div className="mx-auto max-w-md px-4 pt-8 pb-16 space-y-6">
        <div className="flex flex-col gap-2">
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
        </div>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)] space-y-4">
          {service.affiliateImages && service.affiliateImages.length > 0 && (
            <div className="space-y-3">
              {service.affiliateImages.map((image) => (
                <div
                  key={image.html}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/80 p-3 shadow-inner"
                  dangerouslySetInnerHTML={{ __html: image.html }}
                />
              ))}
            </div>
          )}

          <div className="space-y-2 text-center">
            <h1 className="text-xl font-semibold text-slate-900">
              {service.name}
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              {service.description}
            </p>
          </div>

          {service.affiliateContent && service.affiliateContent.length > 0 && (
            <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
              {service.affiliateContent.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}

          {service.affiliateHighlights &&
            service.affiliateHighlights.length > 0 && (
              <div className="space-y-2">
                <h2 className="text-xs font-semibold text-slate-500 tracking-wide">
                  {service.affiliateHighlightsTitle ?? "おすすめポイント"}
                </h2>
                <ul className="space-y-1.5 rounded-xl border border-amber-100 bg-amber-50/70 p-3 text-[12px] text-amber-800">
                  {service.affiliateHighlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          {service.tags.length > 0 && (
            <div className="space-y-2">
              <h2 className="text-xs font-semibold text-slate-500 tracking-wide">
                ここがポイント
              </h2>
              <ul className="grid grid-cols-2 gap-2 text-[11px]">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50/80 px-3 py-2 text-blue-700 font-medium shadow-sm"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="space-y-1 text-[11px] text-slate-500">
            <p>※ 別タブで公式／案内ページを開きます。</p>
            <p>
              ※
              案件の内容・条件は変更される場合があります。お申し込み前に必ず記載内容をご確認ください。
            </p>
          </div>

          {service.affiliateCampaignNote && (
            <div className="rounded-xl border border-rose-100 bg-rose-50/70 p-3 text-[12px] text-rose-700">
              <p className="font-semibold">キャンペーン情報</p>
              <p className="mt-1 leading-relaxed">
                {service.affiliateCampaignNote}
              </p>
            </div>
          )}

          <div className="space-y-3">
            <a
              href={primaryLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:from-blue-500 hover:to-blue-400 hover:shadow-xl active:scale-[0.97]"
            >
              {primaryLink.label}
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

            {affiliateLinks.length > 1 && (
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
                        <p className="text-[10px] text-blue-500">{link.note}</p>
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
        </section>

        <Link
          href="/diagnosis"
          className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-200 py-2 text-[11px] font-semibold text-slate-600 hover:bg-slate-50 transition"
        >
          診断トップへ戻る
        </Link>
      </div>
    </main>
  );
}
