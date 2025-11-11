import Link from "next/link";

export const FeaturedContent = () => {
  const contents = [
    {
      title: "ポイ活初心者向けガイド",
      description:
        "ポイ活を始める前に知っておきたい基本知識と、初心者におすすめのサービスをまとめました。",
      href: "/diagnosis/poi-katsu",
      category: "ポイ活",
    },
    {
      title: "高還元カード特集",
      description:
        "年会費無料で還元率の高いクレジットカードを比較。あなたの利用パターンに合う1枚を見つけられます。",
      href: "/diagnosis/credit-card",
      category: "クレジットカード",
    },
    {
      title: "少額から始める投資サービスまとめ",
      description:
        "100円から始められる投資サービスを紹介。投資初心者でも無理なく資産形成を始められます。",
      href: "/diagnosis/investment",
      category: "投資",
    },
  ];

  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">
          おすすめコンテンツ
        </h2>
        <p className="text-[15px] text-slate-600">
          カテゴリ別の詳しい情報や特集記事をご覧いただけます
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {contents.map((content, index) => (
          <Link
            key={index}
            href={content.href}
            className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            {/* 左上のカテゴリバッジ */}
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center rounded-lg bg-slate-100/80 px-2.5 py-1 text-[11px] font-semibold text-slate-700 border border-slate-200/60">
                {content.category}
              </span>
            </div>

            <div className="space-y-3 pr-16">
              <h3 className="text-[17px] font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                {content.title}
              </h3>
              <p className="text-[14px] text-slate-600 leading-relaxed">
                {content.description}
              </p>
              <div className="flex items-center gap-2 text-[13px] font-semibold text-blue-600 pt-2">
                <span>詳しく見る</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
