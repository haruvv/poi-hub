interface TypeExplanationProps {
  features: string[];
  summary: string;
}

export const TypeExplanation = ({
  features,
  summary,
}: TypeExplanationProps) => {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-md">
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-5">
          あなたの特徴
        </h2>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-lg bg-blue-600 flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white"
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
              <span className="text-sm text-slate-700 leading-relaxed font-medium">
                {feature}
              </span>
            </li>
          ))}
        </ul>
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-5">
          <div className="h-1 w-16 bg-blue-600 rounded-full mb-3" />
          <p className="text-sm text-slate-800 leading-relaxed font-medium">
            {summary}
          </p>
        </div>
      </div>
    </section>
  );
};
