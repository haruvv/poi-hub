import Link from "next/link";

interface ResultHeroProps {
  typeLabel: string;
  subCopy: string;
  ctaText: string;
  ctaHref: string;
  riskLevel: number; // 0-100 (安全志向〜攻め志向)
  typeColor: "blue" | "orange" | "green" | "teal";
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
    teal: {
      gradient: "from-teal-600 via-teal-500 to-cyan-500",
      gradientLight: "from-teal-500/20 via-cyan-500/10 to-teal-600/20",
      bg: "from-teal-50/80 via-white/60 to-cyan-50/40",
      border: "border-teal-200/60",
      glow: "from-teal-400/20 via-transparent to-cyan-400/20",
      sparkle: "sparkle-blue",
      badge: "bg-teal-500/10 text-teal-700 border-teal-200/60",
    },
  };

  const colors = colorClasses[typeColor];

  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-md"
>

      <div className="space-y-6">
        {/* タイトル */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-4 py-1.5 text-xs font-bold border border-blue-200">
            <span className="inline-block h-2 w-2 rounded-full bg-current" />
            診断結果
          </div>
          <h1 className="text-3xl sm:text-4xl leading-tight font-bold">
            <span className="text-slate-800">あなたは</span>
            <br />
            <span className="text-blue-600">
              「{typeLabel}」
            </span>
            <br />
            <span className="text-slate-800">タイプです</span>
          </h1>
        </div>

        {/* サブコピー */}
        <p className="text-center text-base font-medium text-slate-700 leading-relaxed max-w-2xl mx-auto">
          {subCopy}
        </p>

        {/* リスクバー */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
            <span>安全志向</span>
            <span>攻め志向</span>
          </div>
          <div className="relative h-3 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-blue-600 rounded-full transition-all duration-1000"
              style={{ width: `${riskLevel}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-slate-800 rounded-full transition-all duration-1000"
              style={{ left: `calc(${riskLevel}% - 8px)` }}
            />
          </div>
        </div>

        {/* メインCTA */}
        <Link
          href={ctaHref}
          className="group block w-full text-center rounded-xl bg-blue-600 text-white text-base font-bold py-4 px-8 shadow-md hover:shadow-lg hover:bg-blue-700 transition-all duration-200"
        >
          <span className="flex items-center justify-center gap-2">
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
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
};
