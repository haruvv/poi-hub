import type { Metadata } from "next";
import Link from "next/link";
import { HeaderBar } from "@/components/layout/HeaderBar";
import { getAllArticles } from "@/data/articles";
import { GoogleAdSense } from "@/components/ads/GoogleAdSense";
import { getAdPolicy, AD_SLOTS } from "@/lib/ad-policy";

export const metadata: Metadata = {
  title: "お得情報コラム | ポイ活なび",
  description:
    "ポイ活・クレカ・投資など、お得な情報をわかりやすく解説するコラム記事一覧",
};

export default function ArticlesPage() {
  const articles = getAllArticles();
  const adPolicy = getAdPolicy("article");

  return (
    <main className="min-h-screen bg-slate-50">
      <HeaderBar />
      <div className="mx-auto max-w-4xl px-4 pt-8 pb-16 space-y-8">
        {/* ヘッダー */}
        <header className="text-center space-y-4 mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            お得情報コラム
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            ポイ活・クレカ・投資など、お得な情報をわかりやすく解説
          </p>
        </header>

        {/* 記事一覧 */}
        <div className="space-y-8">
          {articles.map((article, index) => (
            <article
              key={article.slug}
              className="group bg-white rounded-2xl border-2 border-slate-200 p-6 sm:p-8 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300"
            >
              <Link
                href={`/articles/${article.slug}`}
                className="block space-y-4"
              >
                {/* カテゴリ・日付 */}
                <div className="flex items-center gap-3 text-sm">
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold text-blue-700">
                    {article.category}
                  </span>
                  <time
                    dateTime={article.publishedAt}
                    className="text-slate-500"
                  >
                    {new Date(article.publishedAt).toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>

                {/* タイトル */}
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h2>

                {/* 導入文 */}
                <p className="text-slate-600 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* 続きを読むリンク */}
                <div className="inline-flex items-center gap-2 text-blue-600 text-base font-bold group-hover:gap-3 transition-all">
                  <span>続きを読む</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* 下部広告 */}
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
