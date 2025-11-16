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

  const adPolicy = getAdPolicy("article");

  // 本文を前半と後半に分割（中盤に広告を挿入するため）
  const contentMidpoint = Math.ceil(article.content.length / 2);
  const contentFirstHalf = article.content.slice(0, contentMidpoint);
  const contentSecondHalf = article.content.slice(contentMidpoint);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">
      <HeaderBar />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 pt-8 pb-20">
        <article className="space-y-8">
          {/* パンくずナビ */}
          <nav className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              ホーム
            </Link>
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
            <Link
              href="/articles"
              className="hover:text-blue-600 transition-colors"
            >
              コラム
            </Link>
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
            <span className="text-slate-900">{article.category}</span>
          </nav>

          {/* 記事ヘッダー */}
          <header className="space-y-6 mb-12">
            {/* カテゴリ・日付 */}
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold text-blue-700">
                {article.category}
              </span>
              <time dateTime={article.publishedAt}>
                {new Date(article.publishedAt).toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>

            {/* タイトル */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
              {article.title}
            </h1>

            {/* 導入文 */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100 p-6 sm:p-8">
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
                {article.excerpt}
              </p>
            </div>
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
          <div className="prose prose-slate max-w-none space-y-8">
            {contentFirstHalf.map((section, index) => {
              const headingText =
                section.type === "heading" ? (section.content as string) : "";
              const isChecklist = headingText.includes("チェックリスト");
              const isQandA =
                headingText.includes("Q&A") ||
                headingText.includes("Q.") ||
                headingText.startsWith("Q.");
              const isCaseStudy = headingText.includes("ケーススタディ");
              const isHowTo =
                headingText.includes("ステップ") ||
                headingText.includes("How To");
              const isToc = headingText.includes("この記事でわかること");
              const prevSection =
                index > 0 ? contentFirstHalf[index - 1] : null;
              const isQ =
                headingText.startsWith("Q.") || headingText.startsWith("Q:");
              const isA =
                prevSection?.type === "heading" &&
                (prevSection.content as string).startsWith("Q.");

              return (
                <div key={index}>
                  {section.type === "heading" && (
                    <>
                      {isToc ? (
                        <h2 className="text-xl font-bold text-slate-900 mt-12 mb-4 flex items-center gap-2">
                          <svg
                            className="w-6 h-6 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                            />
                          </svg>
                          {section.content as string}
                        </h2>
                      ) : isChecklist ? (
                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 text-blue-700">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                              />
                            </svg>
                          </span>
                          {section.content as string}
                        </h2>
                      ) : isCaseStudy ? (
                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-purple-100 text-purple-700">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                              />
                            </svg>
                          </span>
                          {section.content as string}
                        </h2>
                      ) : isQandA ? (
                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-green-100 text-green-700">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </span>
                          {section.content as string}
                        </h2>
                      ) : isQ ? (
                        <h3 className="text-xl font-bold text-green-700 mt-8 mb-3 flex items-start gap-3">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 flex-shrink-0 font-bold">
                            Q
                          </span>
                          <span className="pt-1">
                            {section.content as string}
                          </span>
                        </h3>
                      ) : isHowTo ? (
                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-orange-100 text-orange-700">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                              />
                            </svg>
                          </span>
                          {section.content as string}
                        </h2>
                      ) : (
                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 pb-3 border-b-2 border-slate-200">
                          {section.content as string}
                        </h2>
                      )}
                    </>
                  )}
                  {section.type === "paragraph" && (
                    <>
                      {isA ? (
                        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-5 my-4">
                          <p className="text-base text-slate-700 leading-relaxed font-medium">
                            {section.content as string}
                          </p>
                        </div>
                      ) : isCaseStudy && prevSection?.type === "heading" ? (
                        <div className="bg-purple-50 border-l-4 border-purple-500 rounded-r-lg p-5 my-4">
                          <p className="text-base text-slate-700 leading-relaxed">
                            {section.content as string}
                          </p>
                        </div>
                      ) : (
                        <p className="text-base text-slate-700 leading-relaxed mt-4">
                          {section.content as string}
                        </p>
                      )}
                    </>
                  )}
                  {section.type === "list" && (
                    <>
                      {isToc && prevSection?.type === "heading" ? (
                        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 my-6">
                          <ul className="space-y-3">
                            {(section.content as string[]).map((item, idx) => (
                              <li key={idx} className="flex gap-3 items-start">
                                <svg
                                  className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="text-slate-700 font-medium">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : isChecklist && prevSection?.type === "heading" ? (
                        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 my-6">
                          <ul className="space-y-3">
                            {(section.content as string[]).map((item, idx) => (
                              <li key={idx} className="flex gap-3 items-start">
                                <span className="mt-1 w-6 h-6 flex-shrink-0 rounded border-2 border-blue-500 bg-white flex items-center justify-center">
                                  <svg
                                    className="w-4 h-4 text-blue-600 hidden"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </span>
                                <span className="text-slate-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : isHowTo &&
                        prevSection?.type === "heading" &&
                        /^\d+\./.test(
                          (section.content as string[])[0] || ""
                        ) ? (
                        <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 my-6">
                          <ol className="space-y-4">
                            {(section.content as string[]).map((item, idx) => (
                              <li key={idx} className="flex gap-4 items-start">
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-bold flex-shrink-0">
                                  {idx + 1}
                                </span>
                                <span className="text-slate-700 leading-relaxed pt-1">
                                  {item.replace(/^\d+\.\s*/, "")}
                                </span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      ) : (
                        <ul className="space-y-3 ml-6 my-4">
                          {(section.content as string[]).map((item, idx) => (
                            <li key={idx} className="flex gap-3 items-start">
                              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />
                              <span className="text-slate-700 leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </div>
              );
            })}
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
          <div className="prose prose-slate max-w-none space-y-8">
            {contentSecondHalf.map((section, index) => {
              const headingText =
                section.type === "heading" ? (section.content as string) : "";
              const isChecklist = headingText.includes("チェックリスト");
              const isQandA =
                headingText.includes("Q&A") ||
                headingText.includes("Q.") ||
                headingText.startsWith("Q.");
              const isCaseStudy = headingText.includes("ケーススタディ");
              const isHowTo =
                headingText.includes("ステップ") ||
                headingText.includes("How To");
              const isToc = headingText.includes("この記事でわかること");
              const prevSection =
                index > 0 ? contentSecondHalf[index - 1] : null;
              const isQ =
                headingText.startsWith("Q.") || headingText.startsWith("Q:");
              const isA =
                prevSection?.type === "heading" &&
                (prevSection.content as string).startsWith("Q.");

              return (
                <div key={index}>
                  {section.type === "heading" && (
                    <>
                      {isToc ? (
                        <h2 className="text-xl font-bold text-slate-900 mt-12 mb-4 flex items-center gap-2">
                          <svg
                            className="w-6 h-6 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                            />
                          </svg>
                          {section.content as string}
                        </h2>
                      ) : isChecklist ? (
                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 text-blue-700">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                              />
                            </svg>
                          </span>
                          {section.content as string}
                        </h2>
                      ) : isCaseStudy ? (
                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-purple-100 text-purple-700">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                              />
                            </svg>
                          </span>
                          {section.content as string}
                        </h2>
                      ) : isQandA ? (
                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-green-100 text-green-700">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </span>
                          {section.content as string}
                        </h2>
                      ) : isQ ? (
                        <h3 className="text-xl font-bold text-green-700 mt-8 mb-3 flex items-start gap-3">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 flex-shrink-0 font-bold">
                            Q
                          </span>
                          <span className="pt-1">
                            {section.content as string}
                          </span>
                        </h3>
                      ) : isHowTo ? (
                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-orange-100 text-orange-700">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                              />
                            </svg>
                          </span>
                          {section.content as string}
                        </h2>
                      ) : (
                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 pb-3 border-b-2 border-slate-200">
                          {section.content as string}
                        </h2>
                      )}
                    </>
                  )}
                  {section.type === "paragraph" && (
                    <>
                      {isA ? (
                        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-5 my-4">
                          <p className="text-base text-slate-700 leading-relaxed font-medium">
                            {section.content as string}
                          </p>
                        </div>
                      ) : isCaseStudy && prevSection?.type === "heading" ? (
                        <div className="bg-purple-50 border-l-4 border-purple-500 rounded-r-lg p-5 my-4">
                          <p className="text-base text-slate-700 leading-relaxed">
                            {section.content as string}
                          </p>
                        </div>
                      ) : (
                        <p className="text-base text-slate-700 leading-relaxed mt-4">
                          {section.content as string}
                        </p>
                      )}
                    </>
                  )}
                  {section.type === "list" && (
                    <>
                      {isToc && prevSection?.type === "heading" ? (
                        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 my-6">
                          <ul className="space-y-3">
                            {(section.content as string[]).map((item, idx) => (
                              <li key={idx} className="flex gap-3 items-start">
                                <svg
                                  className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="text-slate-700 font-medium">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : isChecklist && prevSection?.type === "heading" ? (
                        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 my-6">
                          <ul className="space-y-3">
                            {(section.content as string[]).map((item, idx) => (
                              <li key={idx} className="flex gap-3 items-start">
                                <span className="mt-1 w-6 h-6 flex-shrink-0 rounded border-2 border-blue-500 bg-white flex items-center justify-center">
                                  <svg
                                    className="w-4 h-4 text-blue-600 hidden"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </span>
                                <span className="text-slate-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : isHowTo &&
                        prevSection?.type === "heading" &&
                        /^\d+\./.test(
                          (section.content as string[])[0] || ""
                        ) ? (
                        <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 my-6">
                          <ol className="space-y-4">
                            {(section.content as string[]).map((item, idx) => (
                              <li key={idx} className="flex gap-4 items-start">
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-bold flex-shrink-0">
                                  {idx + 1}
                                </span>
                                <span className="text-slate-700 leading-relaxed pt-1">
                                  {item.replace(/^\d+\.\s*/, "")}
                                </span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      ) : (
                        <ul className="space-y-3 ml-6 my-4">
                          {(section.content as string[]).map((item, idx) => (
                            <li key={idx} className="flex gap-3 items-start">
                              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />
                              <span className="text-slate-700 leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </div>
              );
            })}
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
