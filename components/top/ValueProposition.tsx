export const ValueProposition = () => {
  const values = [
    {
      title: "自分に合うジャンルが分かる",
      description:
        "ポイ活・クレカ・投資の中から、あなたのライフスタイルに最適な選択肢を提案します。",
    },
    {
      title: "初心者向けだけに絞っている",
      description:
        "複雑な手続きや高いリスクは不要。誰でも無理なく始められるサービスだけを厳選しています。",
    },
    {
      title: "面倒な比較を代わりにやっている",
      description:
        "数あるサービスの中から、あなたの条件に合うものだけを比較・整理してお届けします。",
    },
    {
      title: "3問・約30秒で完了",
      description:
        "長い質問はありません。シンプルな3つの質問に答えるだけで、すぐに結果が分かります。",
    },
  ];

  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">
          この診断で得られる価値
        </h2>
        <p className="text-[15px] text-slate-600">
          あなたの状況に合わせた、最適な選択肢を見つけられます
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {values.map((value, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* 左側のアクセントライン */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500" />

            <div className="pl-4">
              <h3 className="text-[17px] font-bold text-slate-900 mb-2">
                {value.title}
              </h3>
              <p className="text-[14px] text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
