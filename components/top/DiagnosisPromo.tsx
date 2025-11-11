import Link from "next/link";

export const DiagnosisPromo = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-blue-200/60 bg-gradient-to-br from-blue-50/80 via-white/60 to-cyan-50/40 backdrop-blur-sm p-8 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-cyan-50/20" />

      <div className="relative z-10 grid gap-8 sm:grid-cols-2 sm:items-center">
        {/* 左側：説明 */}
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-3 py-1 text-[11px] font-bold">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
            診断機能
          </div>

          <div className="space-y-3">
            <h2 className="text-[28px] sm:text-[32px] font-bold text-slate-900 tracking-tight leading-tight">
              どこから始めればいいか
              <br />
              迷ったら診断へ
            </h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              3つの質問に答えるだけで、あなたのライフスタイルに最適なサービスやカテゴリを提案します。
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-[13px] text-slate-700">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-semibold">3問・30秒</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span className="font-semibold">登録不要</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-semibold">初心者向け</span>
            </div>
          </div>
        </div>

        {/* 右側：CTA */}
        <div className="sm:text-right">
          <Link
            href="/diagnosis"
            className="group relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white text-[16px] font-bold py-4 shadow-[0_8px_24px_rgba(59,130,246,0.35)] hover:shadow-[0_12px_32px_rgba(59,130,246,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <span className="relative">診断をはじめる</span>
            <svg
              className="w-5 h-5 relative transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
