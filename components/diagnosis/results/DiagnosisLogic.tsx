interface DiagnosisLogicProps {
  answers: {
    question: string;
    answer: string;
    insight: string;
  }[];
}

export const DiagnosisLogic = ({ answers }: DiagnosisLogicProps) => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 backdrop-blur-sm p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-cyan-50/30" />

      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
          診断結果の根拠
        </h2>
        <div className="space-y-4">
          {answers.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/90 backdrop-blur-sm p-5 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* 左側のアクセントライン */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                    <span className="text-sm font-bold text-white">
                      Q{index + 1}
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[15px] font-semibold text-slate-900 mb-2.5 leading-relaxed">
                    {item.question}
                  </p>
                  <div className="mb-3 p-3 rounded-xl bg-slate-50/80 border border-slate-200/60">
                    <p className="text-[14px] text-slate-700 leading-relaxed">
                      <span className="font-medium">選択:</span> 「{item.answer}
                      」
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-lg bg-blue-50/80 px-3 py-1.5 border border-blue-200/60">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-[13px] font-semibold text-blue-700">
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
