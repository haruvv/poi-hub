interface TypeExplanationProps {
  features: string[];
  summary: string;
}

export const TypeExplanation = ({
  features,
  summary,
}: TypeExplanationProps) => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 backdrop-blur-sm p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-blue-50/30" />

      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
          あなたの特徴
        </h2>
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-4 group">
              <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-[15px] text-slate-700 leading-relaxed font-medium pt-0.5">
                {feature}
              </span>
            </li>
          ))}
        </ul>
        <div className="relative rounded-2xl bg-gradient-to-br from-blue-50/80 via-cyan-50/50 to-blue-50/30 border border-blue-100/60 p-6 backdrop-blur-sm">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 rounded-t-2xl" />
          <p className="text-[15px] text-slate-800 leading-relaxed font-semibold">
            {summary}
          </p>
        </div>
      </div>
    </section>
  );
};
