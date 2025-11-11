import Link from "next/link";

interface ResultHeroProps {
  typeLabel: string;
  subCopy: string;
  ctaText: string;
  ctaHref: string;
  riskLevel: number; // 0-100 (安全志向〜攻め志向)
  typeColor: "blue" | "orange" | "green" | "purple";
}

export const ResultHero = ({
  typeLabel,
  subCopy,
  ctaText,
  ctaHref,
  riskLevel,
  typeColor,
}: ResultHeroProps) => {
  const colorClasses = {
    blue: {
      gradient: "from-blue-600 via-blue-500 to-cyan-500",
      gradientLight: "from-blue-500/20 via-cyan-500/10 to-blue-600/20",
      bg: "from-blue-50/80 via-white/60 to-cyan-50/40",
      border: "border-blue-200/60",
      glow: "from-blue-400/20 via-transparent to-cyan-400/20",
      sparkle: "sparkle-blue",
      badge: "bg-blue-500/10 text-blue-700 border-blue-200/60",
    },
    orange: {
      gradient: "from-orange-600 via-orange-500 to-red-500",
      gradientLight: "from-orange-500/20 via-red-500/10 to-orange-600/20",
      bg: "from-orange-50/80 via-white/60 to-red-50/40",
      border: "border-orange-200/60",
      glow: "from-orange-400/20 via-transparent to-red-400/20",
      sparkle: "sparkle-orange",
      badge: "bg-orange-500/10 text-orange-700 border-orange-200/60",
    },
    green: {
      gradient: "from-emerald-600 via-emerald-500 to-teal-500",
      gradientLight: "from-emerald-500/20 via-teal-500/10 to-emerald-600/20",
      bg: "from-emerald-50/80 via-white/60 to-teal-50/40",
      border: "border-emerald-200/60",
      glow: "from-emerald-400/20 via-transparent to-teal-400/20",
      sparkle: "sparkle-blue",
      badge: "bg-emerald-500/10 text-emerald-700 border-emerald-200/60",
    },
    purple: {
      gradient: "from-purple-600 via-purple-500 to-pink-500",
      gradientLight: "from-purple-500/20 via-pink-500/10 to-purple-600/20",
      bg: "from-purple-50/80 via-white/60 to-pink-50/40",
      border: "border-purple-200/60",
      glow: "from-purple-400/20 via-transparent to-pink-400/20",
      sparkle: "sparkle-purple",
      badge: "bg-purple-500/10 text-purple-700 border-purple-200/60",
    },
  };

  const colors = colorClasses[typeColor];

  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 backdrop-blur-sm p-8 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.1)] result-hero-card">
      {/* 背景グラデーション */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg}`} />
      {/* 光るエフェクト */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${colors.glow} result-hero-glow`}
      />
      {/* キラキラエフェクト */}
      <div className={`sparkle sparkle-1 ${colors.sparkle}`} />
      <div className={`sparkle sparkle-2 ${colors.sparkle}`} />
      <div className={`sparkle sparkle-3 ${colors.sparkle}`} />

      <div className="relative z-10 space-y-7">
        {/* タイトル */}
        <div className="text-center space-y-4">
          <div
            className={`inline-flex items-center gap-2 rounded-full ${colors.badge} px-4 py-1.5 text-[12px] font-bold border shadow-sm`}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-current animate-pulse" />
            診断結果
          </div>
          <h1 className="text-[36px] sm:text-[42px] leading-tight font-black tracking-tight">
            <span className="text-slate-800">あなたは</span>
            <br />
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}`}
            >
              「{typeLabel}」
            </span>
            <br />
            <span className="text-slate-800">タイプです</span>
          </h1>
        </div>

        {/* サブコピー */}
        <p className="text-center text-[17px] sm:text-[19px] font-semibold text-slate-700 leading-relaxed max-w-2xl mx-auto">
          {subCopy}
        </p>

        {/* リスクバー */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-[13px] text-slate-600 font-medium">
            <span>安全志向</span>
            <span>攻め志向</span>
          </div>
          <div className="relative h-4 bg-slate-200/80 rounded-full overflow-hidden shadow-inner">
            <div
              className={`absolute inset-y-0 left-0 bg-gradient-to-r ${colors.gradient} rounded-full transition-all duration-1000 shadow-sm`}
              style={{ width: `${riskLevel}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-3 border-slate-800 rounded-full shadow-lg transition-all duration-1000 ring-2 ring-white"
              style={{ left: `calc(${riskLevel}% - 10px)` }}
            />
          </div>
        </div>

        {/* メインCTA */}
        <Link
          href={ctaHref}
          className={`group relative block w-full text-center rounded-2xl bg-gradient-to-r ${colors.gradient} text-white text-[17px] sm:text-[19px] font-bold py-4.5 px-8 shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
          <span className="relative z-10 flex items-center justify-center gap-2">
            {ctaText}
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
          </span>
        </Link>
      </div>
    </section>
  );
};
