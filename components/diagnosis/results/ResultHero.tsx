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
      bg: "from-blue-50 via-white to-cyan-50/30",
      border: "border-blue-200/50",
      glow: "from-blue-300/10 via-transparent to-cyan-300/10",
      sparkle: "sparkle-blue",
    },
    orange: {
      gradient: "from-orange-600 via-orange-500 to-red-500",
      bg: "from-orange-50 via-white to-red-50/30",
      border: "border-orange-200/50",
      glow: "from-orange-300/10 via-transparent to-red-300/10",
      sparkle: "sparkle-orange",
    },
    green: {
      gradient: "from-emerald-600 via-emerald-500 to-teal-500",
      bg: "from-emerald-50 via-white to-teal-50/30",
      border: "border-emerald-200/50",
      glow: "from-emerald-300/10 via-transparent to-teal-300/10",
      sparkle: "sparkle-blue",
    },
    purple: {
      gradient: "from-purple-600 via-purple-500 to-pink-500",
      bg: "from-purple-50 via-white to-pink-50/30",
      border: "border-purple-200/50",
      glow: "from-purple-300/10 via-transparent to-pink-300/10",
      sparkle: "sparkle-purple",
    },
  };

  const colors = colorClasses[typeColor];

  return (
    <section className="relative overflow-hidden rounded-3xl border-2 border-t-4 bg-gradient-to-br p-8 shadow-2xl result-hero-card">
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

      <div className="relative z-10 space-y-6">
        {/* タイトル */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-[11px] font-bold text-slate-700 shadow-md">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            診断結果
          </div>
          <h1 className="text-[32px] sm:text-[36px] leading-tight font-black">
            <span className="text-slate-700">あなたは</span>
            <br />
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}`}
            >
              「{typeLabel}」
            </span>
            <br />
            <span className="text-slate-700">タイプです</span>
          </h1>
        </div>

        {/* サブコピー */}
        <p className="text-center text-base sm:text-lg font-semibold text-slate-700 leading-relaxed">
          {subCopy}
        </p>

        {/* リスクバー */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-600">
            <span>安全志向</span>
            <span>攻め志向</span>
          </div>
          <div className="relative h-3 bg-slate-200 rounded-full overflow-hidden">
            <div
              className={`absolute inset-y-0 left-0 bg-gradient-to-r ${colors.gradient} rounded-full transition-all duration-1000`}
              style={{ width: `${riskLevel}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-slate-700 rounded-full shadow-lg transition-all duration-1000"
              style={{ left: `calc(${riskLevel}% - 8px)` }}
            />
          </div>
        </div>

        {/* メインCTA */}
        <Link
          href={ctaHref}
          className={`result-hero-cta block w-full text-center rounded-2xl bg-gradient-to-r ${colors.gradient} text-white text-base sm:text-lg font-bold py-4 px-6 shadow-[0_12px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] transition-all duration-200 active:scale-[0.98] relative overflow-hidden group`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
          <span className="relative z-10">{ctaText}</span>
        </Link>
      </div>
    </section>
  );
};
