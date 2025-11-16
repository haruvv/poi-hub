import Link from "next/link";

export const TrustZone = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-slate-50/80 via-white/60 to-blue-50/30 backdrop-blur-sm p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-blue-50/20" />

      <div className="relative z-10">
        <h2 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">
          ご利用にあたって
        </h2>
        <div className="space-y-4 mb-6">
          {[
            "本ページは広告を含みます",
            "最新情報は公式サイトをご確認ください。",
            "投資は元本保証ではありません",
            "サービス内容や条件は変更される場合があります",
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="mt-1.5 flex-shrink-0 w-5 h-5 rounded-lg bg-slate-200/80 flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-slate-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <p className="text-[14px] text-slate-700 leading-relaxed pt-0.5">
                {item}
              </p>
            </div>
          ))}
        </div>
        <div className="pt-6 border-t border-slate-200/60">
          <Link
            href="/diagnosis"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            もう一度診断する
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
