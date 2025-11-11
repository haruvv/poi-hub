export const DiagnosisStartFlow = () => {
  const steps = [
    {
      number: 1,
      title: "質問に答える",
      description: "3つの質問に答えます",
    },
    {
      number: 2,
      title: "タイプを診断",
      description: "あなたに合うタイプを表示",
    },
    {
      number: 3,
      title: "おすすめを提案",
      description: "最適なサービスを案内",
    },
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-[18px] font-bold text-slate-900 text-center">
        診断の流れ
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {steps.map((step, index) => (
          <div key={index} className="relative text-center space-y-2">
            {/* ステップ番号 */}
            <div className="mx-auto w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md">
              <span className="text-lg font-bold text-white">
                {step.number}
              </span>
            </div>

            {/* ステップ内容 */}
            <div>
              <h3 className="text-[13px] font-semibold text-slate-900 mb-1">
                {step.title}
              </h3>
              <p className="text-[11px] text-slate-600">{step.description}</p>
            </div>

            {/* 矢印（最後以外） */}
            {index < steps.length - 1 && (
              <div className="absolute top-5 left-[calc(50%+20px)] right-0 h-0.5 bg-gradient-to-r from-blue-300 to-cyan-300" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
