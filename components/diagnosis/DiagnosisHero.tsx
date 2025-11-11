"use client";

interface DiagnosisHeroProps {
  onStart: () => void;
}

export const DiagnosisHero = ({ onStart }: DiagnosisHeroProps) => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/90 backdrop-blur-sm p-8 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-blue-50/20" />

      <div className="relative z-10 space-y-6">
        {/* タイトル */}
        <div className="text-center space-y-4">
          <h1 className="text-[32px] sm:text-[36px] leading-tight font-bold text-slate-900 tracking-tight">
            あなたに一番トクな
            <br />
            始め方診断
          </h1>
          <p className="text-[16px] sm:text-[17px] text-slate-600 leading-relaxed max-w-xl mx-auto">
            ポイ活・クレジットカード・投資の中から、あなたのライフスタイルに最適な選択肢を提案します。
          </p>
        </div>

        {/* 安心情報 */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-[14px] text-slate-700">
            <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center">
              <svg
                className="w-3.5 h-3.5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="font-semibold">3問・30秒程度</span>
          </div>
          <div className="flex items-center gap-2 text-[14px] text-slate-700">
            <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center">
              <svg
                className="w-3.5 h-3.5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="font-semibold">登録不要</span>
          </div>
          <div className="flex items-center gap-2 text-[14px] text-slate-700">
            <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center">
              <svg
                className="w-3.5 h-3.5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="font-semibold">初心者向け</span>
          </div>
        </div>

        {/* CTAボタン */}
        <div className="pt-2">
          <button
            type="button"
            onClick={onStart}
            className="group relative w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white text-[17px] font-bold py-4 px-8 shadow-[0_8px_24px_rgba(59,130,246,0.35)] hover:shadow-[0_12px_32px_rgba(59,130,246,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
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
          </button>
        </div>
      </div>
    </section>
  );
};
