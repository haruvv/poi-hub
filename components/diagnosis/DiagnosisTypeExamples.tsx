export const DiagnosisTypeExamples = () => {
  const types = [
    {
      title: "コツコツ貯蓄型",
      description: "少額から安全に始めたい",
    },
    {
      title: "キャッシュレス特化型",
      description: "普段の支払いで還元を受けたい",
    },
    {
      title: "ライトスタート型",
      description: "まずは簡単なことから始めたい",
    },
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-[18px] font-bold text-slate-900 text-center">
        診断で分かるタイプの例
      </h2>
      <div className="grid gap-3 sm:grid-cols-3">
        {types.map((type, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl border border-slate-200/60 bg-white/80 backdrop-blur-sm p-4 shadow-sm"
          >
            {/* 左側のアクセントライン */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500" />

            <div className="pl-3">
              <h3 className="text-[15px] font-bold text-slate-900 mb-1">
                {type.title}
              </h3>
              <p className="text-[12px] text-slate-600 leading-relaxed">
                {type.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
