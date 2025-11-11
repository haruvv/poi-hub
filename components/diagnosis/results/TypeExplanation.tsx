interface TypeExplanationProps {
  features: string[];
  summary: string;
}

export const TypeExplanation = ({
  features,
  summary,
}: TypeExplanationProps) => {
  return (
    <section className="rounded-3xl border-2 border-slate-200 bg-white p-6 shadow-lg">
      <h2 className="text-xl font-bold text-slate-900 mb-4">あなたの特徴</h2>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
            <span className="text-sm text-slate-700 leading-relaxed">
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <div className="rounded-xl bg-blue-50/50 border border-blue-100 p-4">
        <p className="text-sm text-slate-800 leading-relaxed font-medium">
          {summary}
        </p>
      </div>
    </section>
  );
};
