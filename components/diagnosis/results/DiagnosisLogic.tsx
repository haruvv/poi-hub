interface DiagnosisLogicProps {
  answers: {
    question: string;
    answer: string;
    insight: string;
  }[];
}

export const DiagnosisLogic = ({ answers }: DiagnosisLogicProps) => {
  return (
    <section className="rounded-3xl border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-lg">
      <h2 className="text-xl font-bold text-slate-900 mb-4">診断結果の根拠</h2>
      <div className="space-y-4">
        {answers.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-200 bg-white p-4 space-y-2"
          >
            <div className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex-shrink-0">
                Q{index + 1}
              </span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-900 mb-1">
                  {item.question}
                </p>
                <p className="text-sm text-slate-700 mb-2">
                  → 「{item.answer}」を選択
                </p>
                <div className="flex items-center gap-2 text-xs text-blue-600">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{item.insight}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
