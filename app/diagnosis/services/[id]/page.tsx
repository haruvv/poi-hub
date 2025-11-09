import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HeaderBar } from "@/components/layout/HeaderBar";
import { getAllServices, getServiceById } from "@/data/services";

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
  walking: {
    label: "ポイント交換アプリ一覧へ戻る",
    href: "/diagnosis/walking",
  },
} as const;

type PageProps = {
  params: { id: string };
};

export function generateStaticParams() {
  return getAllServices().map((service) => ({ id: service.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const service = getServiceById(params.id);

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

export default function ServiceDetailPage({ params }: PageProps) {
  const service = getServiceById(params.id);

  if (!service) {
    notFound();
  }

  const categoryInfo = categoryMeta[service.category];

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
          <div className="space-y-2">
            <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[10px] font-semibold text-blue-600">
              おすすめサービス
            </p>
            <h1 className="text-xl font-semibold text-slate-900">
              {service.name}
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              {service.description}
            </p>
          </div>

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

          <a
            href={service.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:from-blue-500 hover:to-blue-400 hover:shadow-xl active:scale-[0.97]"
          >
            公式／詳細ページへ進む
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
