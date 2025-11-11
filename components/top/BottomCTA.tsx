import Link from "next/link";

export const BottomCTA = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-blue-50/80 via-white/60 to-cyan-50/40 backdrop-blur-sm p-8 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-cyan-50/20" />

      <div className="relative z-10 text-center space-y-5">
        <h2 className="text-[28px] sm:text-[32px] font-bold text-slate-900 tracking-tight">
          自分に合った「お得な始め方」を
          <br />
          見つけませんか？
        </h2>
        <p className="text-[16px] text-slate-600 leading-relaxed max-w-xl mx-auto">
          3つの質問に答えるだけで、あなたに最適な選択肢が分かります。
          <br />
          所要時間は約30秒です。
        </p>

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
        </div>
      </div>
    </section>
  );
};
