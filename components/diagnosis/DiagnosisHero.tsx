"use client";

interface DiagnosisHeroProps {
  onStart: () => void;
}

export const DiagnosisHero = ({ onStart }: DiagnosisHeroProps) => {
  return (
    <section className="relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-gradient-to-br from-white via-slate-50/30 to-slate-50/30 p-6 shadow-xl diagnosis-hero-card">
      {/* 光るエフェクト */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-300/5 via-transparent to-slate-300/5 diagnosis-hero-glow" />

      <div className="relative z-10 space-y-5">
        {/* タイトル */}
        <div className="space-y-3">
          <h1 className="text-[26px] leading-tight font-extrabold text-slate-900">
            30秒でわかる、
            <br />
            あなたに一番トクな始め方診断
          </h1>
          <p className="text-[14px] text-slate-600 leading-relaxed">
            ポイ活・クレカ・投資…いきなり全部はしんどいあなたへ。
          </p>
        </div>

        {/* 箇条書き */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-2.5 text-[13px] text-slate-700">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center">
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="font-medium">所要時間：5問</span>
          </div>
          <div className="flex items-center gap-2.5 text-[13px] text-slate-700">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center">
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="font-medium">初心者OK</span>
          </div>
          <div className="flex items-center gap-2.5 text-[13px] text-slate-700">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center">
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="font-medium">
              診断後にあなた向けサービスだけ表示
            </span>
          </div>
        </div>

        {/* CTAボタン */}
        <button
          type="button"
          onClick={onStart}
          className="w-full mt-4 inline-flex items-center justify-center rounded-2xl text-base font-bold py-4 bg-slate-700 text-white hover:bg-slate-600 hover:shadow-xl active:scale-[0.98] transition-all duration-200 shadow-lg"
        >
          診断をはじめる
        </button>
      </div>
    </section>
  );
};
