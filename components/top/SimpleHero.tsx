export const SimpleHero = () => {
  return (
    <section className="relative flex flex-col gap-6 items-stretch pt-2">
      <div className="hero-gradient" aria-hidden="true" />

      <p className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[10px] text-slate-700 border border-slate-200 shadow-xs">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-500 badge-dot" />
        ムダなくお得を積み上げるためのチェックツール
      </p>

      <div className="hero-card space-y-4">
        <h1 className="text-[24px] leading-snug font-semibold text-slate-900">
          ポイ活初心者でもOK。
          <br />
          あなたにピッタリなお得ルートを30秒でご提案。
        </h1>

        <div className="grid grid-cols-3 gap-2 text-[9px]">
          <Badge>質問3つだけ</Badge>
          <Badge>個人情報なし</Badge>
          <Badge>怪しい案件カット</Badge>
        </div>

        <div className="flex flex-col gap-2">
          <a
            href="/diagnosis"
            className="hero-cta w-full inline-flex items-center justify-center gap-2
             rounded-2xl bg-gradient-to-r from-red-600 to-red-500 text-white text-[15px] font-semibold py-3.5
             hover:from-red-500 hover:to-red-400 active:scale-[0.97] transition-all duration-200
             shadow-lg hover:shadow-xl"
          >
            <span>30秒お得診断をはじめる</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <p className="text-[10px] text-slate-500 text-center">
            ※広告を含みます。
          </p>
        </div>
      </div>
    </section>
  );
};

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center rounded-xl bg-blue-50 border border-blue-200 text-blue-700 font-medium px-2 py-1 shadow-[0_1px_4px_rgba(15,23,42,0.04)]">
    {children}
  </div>
);
