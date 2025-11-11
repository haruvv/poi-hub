export const DiagnosisFlow = () => {
  const steps = [
    {
      number: 1,
      title: "質問に答える",
      description:
        "あなたのライフスタイルや希望に関する3つの質問に答えます。所要時間は約30秒です。",
    },
    {
      number: 2,
      title: "あなたのタイプを表示",
      description:
        "回答をもとに、あなたに最適な「お得な始め方」のタイプを診断します。",
    },
    {
      number: 3,
      title: "おすすめサービスを案内",
      description:
        "診断結果に基づいて、あなたに合うサービスを厳選してご提案します。",
    },
  ];

  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-slate-50/80 via-white/60 to-blue-50/30 backdrop-blur-sm p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-blue-50/20" />

      <div className="relative z-10 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">
            診断の流れ
          </h2>
          <p className="text-[15px] text-slate-600">
            3問・約30秒で完了。個人情報の入力は不要です
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-start gap-5 group">
                {/* ステップ番号 */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                    <span className="text-xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* ステップ内容 */}
                <div className="flex-1 pt-1">
                  <h3 className="text-[18px] font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* 矢印（最後以外） */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-6 bg-gradient-to-b from-blue-300 to-cyan-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
