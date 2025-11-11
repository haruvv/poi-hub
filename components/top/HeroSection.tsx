import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/90 backdrop-blur-sm p-8 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-blue-50/20" />

      <div className="relative z-10 space-y-6 text-center">
        {/* バッジ */}
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-100/80 border border-slate-200/60 px-4 py-1.5 text-[12px] font-semibold text-slate-700">
          <span className="inline-block h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          完全無料の診断ツール
        </div>

        {/* キャッチコピー */}
        <div className="space-y-4">
          <h1 className="text-[32px] sm:text-[38px] leading-tight font-bold text-slate-900 tracking-tight">
            3つの質問で、自分に合った
            <br />
            <span className="text-blue-600">「お得な始め方」</span>
            <br />
            が分かる診断サイト
          </h1>
          <p className="text-[16px] sm:text-[17px] text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
            ポイ活・クレジットカード・投資の中から、初心者でも無理なく始められる選択肢だけを厳選して提案します。
          </p>
        </div>

        {/* メインCTA */}
        <div className="pt-2">
          <Link
            href="/diagnosis"
            className="group relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white text-[17px] font-bold py-4 shadow-[0_8px_24px_rgba(59,130,246,0.35)] hover:shadow-[0_12px_32px_rgba(59,130,246,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
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
          <p className="text-[11px] text-slate-500 mt-3">※広告を含みます</p>
        </div>
      </div>
    </section>
  );
};
