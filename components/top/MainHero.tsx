import Link from "next/link";

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
          副業とかポイ活とか、やってみたいけど…どれがいいのか分からない
        </h1>

        <p className="text-[17px] sm:text-[18px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
          そんな人のための30秒でピッタリのサービスを診断できる無料ツール
          <br />
          <br />
          質問に答えるだけで、自分に合った"お得なスタート"がサクッと分かる！
        </p>

        {/* メインCTA */}
        <div className="pt-6 flex flex-col items-center gap-4">
          <Link
            href="/diagnosis"
            className="group/btn inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 rounded-xl bg-blue-600 text-white text-lg font-bold py-5 shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-200 hover:scale-105"
          >
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
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
            <span>▶ 診断してみる</span>
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

          {/* 補足テキスト */}
          <p className="text-sm text-slate-600 text-center">
            💡 登録不要・所要時間たった30秒！
            <br />
            まずは気軽に診断してみよう！
          </p>
        </div>
      </div>
    </section>
  );
};
