export const MainHero = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 backdrop-blur-sm p-10 sm:p-14 shadow-[0_8px_30px_rgba(0,0,0,0.08)] text-center">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-blue-50/20" />

      <div className="relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-100/80 border border-blue-200/60 px-4 py-1.5 text-[12px] font-semibold text-blue-700">
          <span className="inline-block h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          お得情報を見つけるためのナビゲーションサイト
        </div>

        <h1 className="text-[36px] sm:text-[42px] leading-tight font-bold text-slate-900 tracking-tight">
          あなたに合った
          <br />
          <span className="text-blue-600">お得な始め方</span>が見つかる
        </h1>

        <p className="text-[17px] sm:text-[18px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
          ポイ活・クレジットカード・投資サービスの中から、
          <br className="hidden sm:block" />
          あなたのライフスタイルに合う選択肢を探せます
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-[14px] text-slate-700">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-blue-600"
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
            <span className="font-semibold">初心者向けに厳選</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-blue-600"
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
            <span className="font-semibold">サービス比較が簡単</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-blue-600"
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
            <span className="font-semibold">診断機能も使える</span>
          </div>
        </div>
      </div>
    </section>
  );
};
