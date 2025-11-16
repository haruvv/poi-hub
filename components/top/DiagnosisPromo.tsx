import Link from "next/link";

export const DiagnosisPromo = () => {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-blue-200 bg-blue-50 p-8 sm:p-10 shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* シンプルなバッジ */}
      <div className="absolute top-4 right-4 z-10">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-white px-3 py-1.5 rounded-full shadow-sm border border-blue-200">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          おすすめ
        </span>
      </div>

      <div className="relative z-10 grid gap-6 sm:grid-cols-2 sm:items-center">
        {/* 左側：説明 */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-4 py-2 text-xs font-bold shadow-sm">
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
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
            簡単診断ツール
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
              どこから始めればいいか
              <br />
              迷ったら診断へ
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              たった3つの質問に答えるだけで、あなたのライフスタイルに最適なサービスやカテゴリを提案します
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full border border-slate-200">
              <svg
                className="w-4 h-4 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>3問・30秒</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full border border-slate-200">
              <svg
                className="w-4 h-4 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span>登録不要</span>
            </div>
            <div className="flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-2 rounded-full border border-emerald-200">
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>初心者向け</span>
            </div>
          </div>
        </div>

        {/* 右側：CTA */}
        <div className="sm:text-right">
          <Link
            href="/diagnosis"
            className="group/btn inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 rounded-xl bg-blue-600 text-white text-base font-bold py-4 shadow-md hover:shadow-lg hover:bg-blue-700 transition-all duration-200"
          >
            <span>診断をはじめる</span>
            <svg
              className="w-5 h-5 transition-transform group-hover/btn:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
