export const SimpleHero = () => {
  return (
    <section className="relative flex flex-col gap-8 items-stretch pt-4 pb-6">
      {/* 背景エフェクト */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/12 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-20 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* メインコンテンツカード */}
      <div className="relative overflow-hidden rounded-3xl border-2 border-blue-300 bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6 shadow-2xl hero-main-card">
        {/* 光るエフェクト */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-purple-400/10 hero-glow" />

        {/* キラキラエフェクト */}
        <div className="sparkle sparkle-1 sparkle-blue" />
        <div className="sparkle sparkle-2 sparkle-blue" />
        <div className="sparkle sparkle-3 sparkle-purple" />

        <div className="relative z-10 space-y-6">
          {/* キャッチコピーエリア */}
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-1.5 text-[11px] font-bold text-white shadow-lg">
              <span className="inline-block h-2 w-2 rounded-full bg-white animate-pulse" />
              完全無料の診断ツール
            </div>

            <div className="space-y-3">
              <h1 className="text-[28px] leading-[1.2] font-extrabold text-slate-900">
                あなたにピッタリの
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  お得ルート
                </span>
                を30秒で診断
              </h1>
              <p className="text-[14px] text-slate-600 leading-relaxed max-w-sm mx-auto font-medium">
                ポイ活初心者でもOK。3つの質問に答えるだけで、最適なお得情報をご提案します。
              </p>
            </div>

            {/* 特徴ポイント */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <FeaturePoint text="質問3つだけ" />
              <FeaturePoint text="個人情報不要" />
              <FeaturePoint text="厳選された案件のみ" />
            </div>
          </div>

          {/* CTAボタン */}
          <div className="space-y-2">
            <a
              href="/diagnosis"
              className="hero-cta w-full inline-flex items-center justify-center gap-2
               rounded-2xl bg-gradient-to-r from-red-600 via-red-500 to-pink-500 text-white text-[16px] font-bold py-4
               hover:from-red-500 hover:via-red-400 hover:to-pink-400 active:scale-[0.98] transition-all duration-200
               shadow-[0_8px_24px_rgba(239,68,68,0.4)] hover:shadow-[0_12px_32px_rgba(239,68,68,0.5)]
               relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              <span className="relative">30秒お得診断をはじめる</span>
              <svg
                className="w-5 h-5 relative group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <p className="text-[10px] text-slate-500 text-center">
              ※広告を含みます
            </p>
          </div>
        </div>
      </div>

      {/* カテゴリセクション */}
      <div className="space-y-4 pt-2">
        <div className="text-center">
          <h2 className="text-[15px] font-bold text-slate-900 mb-1">
            カテゴリから探す
          </h2>
          <p className="text-[11px] text-slate-500">
            タップしてランキング一覧へ
          </p>
        </div>

        <div className="grid gap-3">
          <CategoryCard
            href="/diagnosis/poi-katsu"
            title="ポイ活サイト"
            description="ハピタス、モッピーなど人気サイト"
            accent="blue"
          />
          <CategoryCard
            href="/diagnosis/credit-card"
            title="クレジットカード"
            description="楽天カード、三井住友カードなど"
            accent="purple"
          />
          <CategoryCard
            href="/diagnosis/investment"
            title="投資・資産づくり"
            description="楽天証券、SBI証券など"
            accent="emerald"
          />
        </div>
      </div>
    </section>
  );
};

const FeaturePoint = ({ text }: { text: string }) => (
  <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 px-3 py-1.5 text-[11px] font-bold text-blue-700 shadow-sm">
    <svg
      className="w-3 h-3 text-blue-500 flex-shrink-0"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span>{text}</span>
  </div>
);

type CategoryCardProps = {
  href: string;
  title: string;
  description: string;
  accent: "blue" | "purple" | "emerald";
};

const CategoryCard = ({
  href,
  title,
  description,
  accent,
}: CategoryCardProps) => {
  const accentConfig = {
    blue: {
      border: "border-blue-300",
      bg: "bg-gradient-to-br from-blue-50 to-cyan-50",
      hoverBg: "hover:from-blue-100 hover:to-cyan-100",
      hoverBorder: "hover:border-blue-400",
      glow: "from-blue-400/20 to-cyan-400/20",
      text: "text-blue-600",
      iconBg: "from-blue-400 to-cyan-400",
    },
    purple: {
      border: "border-purple-300",
      bg: "bg-gradient-to-br from-purple-50 to-pink-50",
      hoverBg: "hover:from-purple-100 hover:to-pink-100",
      hoverBorder: "hover:border-purple-400",
      glow: "from-purple-400/20 to-pink-400/20",
      text: "text-purple-600",
      iconBg: "from-purple-400 to-pink-400",
    },
    emerald: {
      border: "border-emerald-300",
      bg: "bg-gradient-to-br from-emerald-50 to-teal-50",
      hoverBg: "hover:from-emerald-100 hover:to-teal-100",
      hoverBorder: "hover:border-emerald-400",
      glow: "from-emerald-400/20 to-teal-400/20",
      text: "text-emerald-600",
      iconBg: "from-emerald-400 to-teal-400",
    },
  }[accent];

  return (
    <a
      href={href}
      className={`group relative overflow-hidden rounded-xl border-2 ${accentConfig.border} ${accentConfig.bg} ${accentConfig.hoverBg} ${accentConfig.hoverBorder} p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] category-card`}
    >
      {/* 光るエフェクト */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${accentConfig.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      <div className="relative flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className={`text-[15px] font-bold mb-1 ${accentConfig.text}`}>
            {title}
          </h3>
          <p className="text-[12px] text-slate-600 leading-relaxed">
            {description}
          </p>
        </div>
        <div
          className={`flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br ${accentConfig.iconBg} shadow-md group-hover:scale-110 transition-transform duration-300`}
        >
          <svg
            className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </a>
  );
};
