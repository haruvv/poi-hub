import type { Metadata } from "next";
import Link from "next/link";
import { HeaderBar } from "@/components/layout/HeaderBar";
import { getAllArticles } from "@/data/articles";
import { GoogleAdSense } from "@/components/ads/GoogleAdSense";
import { getAdPolicy, AD_SLOTS } from "@/lib/ad-policy";

export const metadata: Metadata = {
  title: "お得情報コラム | ポイ活なび",
  description: "ポイ活・クレカ・投資など、お得な情報をわかりやすく解説するコラム記事一覧",
};

export default function ArticlesPage() {
  const articles = getAllArticles();
  const adPolicy = getAdPolicy('article');

  return (
    <main className="min-h-screen bg-slate-50">
      <HeaderBar />
      <div className="mx-auto max-w-4xl px-4 pt-8 pb-16 space-y-8">
        {/* ヘッダー */}
        <header className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            お得情報コラム
          </h1>
          <p className="text-base text-slate-600">
            ポイ活・クレカ・投資など、お得な情報をわかりやすく解説
          </p>
        </header>

        {/* 記事一覧 */}
        <div className="space-y-6">
          {articles.map((article, index) => (
            <article
              key={article.slug}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                {/* カテゴリ・日付 */}
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    {article.category}
                  </span>
                  <time dateTime={article.publishedAt}>
                    {new Date(article.publishedAt).toLocaleDateString('ja-JP', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>

                {/* タイトル */}
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                  <Link
                    href={`/articles/${article.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {article.title}
                  </Link>
                </h2>

                {/* 導入文 */}
                <p className="text-slate-600 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* 続きを読むリンク */}
                <Link
                  href={`/articles/${article.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                >
                  <span>続きを読む</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
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

