interface DiagnosisLogicProps {
  answers: {
    question: string;
    answer: string;
    insight: string;
  }[];
}

export const DiagnosisLogic = ({ answers }: DiagnosisLogicProps) => {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-md">

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-5">
          診断結果の根拠
        </h2>
        <div className="space-y-3">
          {answers.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white p-4"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">
                      Q{index + 1}
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900 mb-2 leading-relaxed">
                    {item.question}
                  </p>
                  <div className="mb-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <span className="font-medium">選択:</span> 「{item.answer}
                      」
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-1.5 border border-blue-200">
                    <svg
                      className="w-4 h-4 text-blue-600"
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
                    <span className="text-xs font-semibold text-blue-700">
                      {item.insight}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
