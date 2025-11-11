import Link from "next/link";

export const CategorySection = () => {
  const categories = [
    {
      href: "/diagnosis/poi-katsu",
      title: "ポイ活でコツコツ貯めたい",
      description:
        "日常の買い物やネット利用でポイントを貯めたい方へ。初心者でも始めやすいポイ活サイトを厳選しています。",
      accent: "blue",
    },
    {
      href: "/diagnosis/credit-card",
      title: "クレジットカードで還元を受けたい",
      description:
        "キャッシュレス決済で還元率を上げたい方へ。年会費無料で高還元のクレジットカードを比較しています。",
      accent: "purple",
    },
    {
      href: "/diagnosis/investment",
      title: "少額から投資を始めたい",
      description:
        "将来の資産形成を考えている方へ。初心者でも始めやすい投資サービスを紹介しています。",
      accent: "emerald",
    },
  ];

  const accentConfig = {
    blue: {
      border: "border-blue-200/60",
      bg: "from-blue-50/80 to-cyan-50/40",
      hoverBg: "hover:from-blue-100/80 hover:to-cyan-100/60",
      text: "text-blue-700",
      button: "from-blue-600 to-cyan-500",
    },
    purple: {
      border: "border-purple-200/60",
      bg: "from-purple-50/80 to-pink-50/40",
      hoverBg: "hover:from-purple-100/80 hover:to-pink-100/60",
      text: "text-purple-700",
      button: "from-purple-600 to-pink-500",
    },
    emerald: {
      border: "border-emerald-200/60",
      bg: "from-emerald-50/80 to-teal-50/40",
      hoverBg: "hover:from-emerald-100/80 hover:to-teal-100/60",
      text: "text-emerald-700",
      button: "from-emerald-600 to-teal-500",
    },
  };

  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">
          カテゴリから探す
        </h2>
        <p className="text-[15px] text-slate-600">
          診断を使わずに、カテゴリ別のサービス一覧から選ぶこともできます
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => {
          const accent =
            accentConfig[category.accent as keyof typeof accentConfig];

          return (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border ${accent.border} bg-gradient-to-br ${accent.bg} ${accent.hoverBg} p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="space-y-4">
                <h3 className={`text-[18px] font-bold ${accent.text}`}>
                  {category.title}
                </h3>
                <p className="text-[14px] text-slate-600 leading-relaxed">
                  {category.description}
                </p>
                <Link
                  href={category.href}
                  className={`group/btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${accent.button} text-white text-[14px] font-semibold py-2.5 px-5 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]`}
                >
                  このカテゴリのサービス一覧へ
                  <svg
                    className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
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
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
