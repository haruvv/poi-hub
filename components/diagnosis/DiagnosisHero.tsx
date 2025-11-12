"use client";

interface DiagnosisHeroProps {
  onStart: () => void;
}

export const DiagnosisHero = ({ onStart }: DiagnosisHeroProps) => {
  return (
    <section className="relative overflow-hidden rounded-3xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      {/* 控えめな背景エフェクト */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-cyan-200 rounded-full blur-3xl"></div>
      </div>

      {/* シンプルなバッジ */}
      <div className="absolute top-6 left-6 z-10">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-white px-3 py-1.5 rounded-full shadow-sm border border-blue-200">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          最短30秒
        </span>
      </div>

      <div className="relative z-10 space-y-6 text-center">
        {/* タイトル */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-4 py-2 text-[12px] font-bold shadow-md">
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
            あなた専用診断
          </div>

          <h1 className="text-[30px] sm:text-[34px] font-bold text-slate-900 tracking-tight leading-tight">
            迷ったら、まず診断！
            <br />
            <span className="text-blue-600">
              30秒であなたにピッタリがわかる
            </span>
          </h1>
          <p className="text-[15px] text-slate-600 leading-relaxed max-w-xl mx-auto">
            ポイ活・クレカ・投資…どこから手をつければいいかわからない。
            <br />
            そんなあなたのために、5つの質問で最適な選択肢を提案します。
          </p>
        </div>

        {/* バッジ */}
        <div className="flex flex-wrap justify-center gap-3 text-[13px] font-semibold">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 hover:border-blue-300 transition-colors">
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
            <span className="text-slate-700">5問・30秒</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 hover:border-blue-300 transition-colors">
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
            <span className="text-slate-700">登録不要</span>
          </div>
          <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full shadow-sm border border-emerald-200">
            <svg
              className="w-4 h-4 text-emerald-600 flex-shrink-0"
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
            <span className="text-emerald-700">完全無料</span>
          </div>
        </div>

        {/* CTAボタン */}
        <div className="pt-2">
          <button
            type="button"
            onClick={onStart}
            className="group/btn relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 rounded-2xl bg-blue-600 text-white text-[16px] font-bold py-4 shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-200 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
            <span className="relative">今すぐ診断スタート</span>
            <svg
              className="w-5 h-5 relative transition-transform group-hover/btn:translate-x-1"
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
          </button>
        </div>
      </div>
    </section>
  );
};
