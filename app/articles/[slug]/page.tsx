import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HeaderBar } from "@/components/layout/HeaderBar";
import { getArticleBySlug, getAllArticles } from "@/data/articles";
import { GoogleAdSense } from "@/components/ads/GoogleAdSense";
import { getAdPolicy, AD_SLOTS } from "@/lib/ad-policy";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "記事が見つかりませんでした | ポイ活なび",
    };
  }

  return {
    title: `${article.title} | ポイ活なび`,
    description: article.excerpt,
  };
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const adPolicy = getAdPolicy('article');

  // 本文を前半と後半に分割（中盤に広告を挿入するため）
  const contentMidpoint = Math.ceil(article.content.length / 2);
  const contentFirstHalf = article.content.slice(0, contentMidpoint);
  const contentSecondHalf = article.content.slice(contentMidpoint);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">
      <HeaderBar />

      <div className="mx-auto max-w-3xl px-4 pt-8 pb-20">
        <article className="space-y-8">
          {/* パンくずナビ */}
          <nav className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              ホーム
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/articles" className="hover:text-blue-600 transition-colors">
              コラム
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-slate-900">{article.category}</span>
          </nav>

          {/* 記事ヘッダー */}
          <header className="space-y-4">
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
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight tracking-tight">
              {article.title}
            </h1>

            {/* 導入文 */}
            <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-blue-500 pl-4">
              {article.excerpt}
            </p>
          </header>

          {/* 記事タイトル直下の広告 */}
          {adPolicy.showTopAd && (
            <div className="py-4">
              <GoogleAdSense
                adSlot={AD_SLOTS.article.top}
                className="max-w-3xl mx-auto"
              />
            </div>
          )}

          {/* 本文（前半） */}
          <div className="prose prose-slate max-w-none space-y-6">
            {contentFirstHalf.map((section, index) => (
              <div key={index}>
                {section.type === 'heading' && (
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                    {section.content as string}
                  </h2>
                )}
                {section.type === 'paragraph' && (
                  <p className="text-base text-slate-700 leading-relaxed">
                    {section.content as string}
                  </p>
                )}
                {section.type === 'list' && (
                  <ul className="space-y-2 ml-6">
                    {(section.content as string[]).map((item, idx) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* 本文中盤の広告 */}
          {adPolicy.showInContentAd && (
            <div className="py-6">
              <GoogleAdSense
                adSlot={AD_SLOTS.article.inContent}
                className="max-w-3xl mx-auto"
              />
            </div>
          )}

          {/* 本文（後半） */}
          <div className="prose prose-slate max-w-none space-y-6">
            {contentSecondHalf.map((section, index) => (
              <div key={index}>
                {section.type === 'heading' && (
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                    {section.content as string}
                  </h2>
                )}
                {section.type === 'paragraph' && (
                  <p className="text-base text-slate-700 leading-relaxed">
                    {section.content as string}
                  </p>
                )}
                {section.type === 'list' && (
                  <ul className="space-y-2 ml-6">
                    {(section.content as string[]).map((item, idx) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* 記事末尾の広告 */}
          {adPolicy.showBottomAd && (
            <div className="py-6">
              <GoogleAdSense
                adSlot={AD_SLOTS.article.bottom}
                className="max-w-3xl mx-auto"
              />
            </div>
          )}

          {/* 記事一覧へ戻る */}
          <div className="pt-8 border-t border-slate-200">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>記事一覧へ戻る</span>
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}

