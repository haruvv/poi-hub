import Link from "next/link";

export const ServiceCategories = () => {
  const categories = [
    {
      title: "ポイ活でコツコツ貯める",
      description:
        "日常の買い物やネット利用でポイントを貯められるサービスを紹介。初心者でも始めやすいポイ活サイトを厳選しています。",
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      href: "/diagnosis/poi-katsu",
      color: "blue",
    },
    {
      title: "クレジットカードで還元",
      description:
        "キャッシュレス決済で還元率を上げたい方へ。年会費無料で高還元のクレジットカードを比較できます。",
      icon: (
        <svg
          className="w-8 h-8 text-purple-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
      href: "/diagnosis/credit-card",
      color: "purple",
    },
    {
      title: "投資で資産形成",
      description:
        "少額から始められる投資サービスを紹介。投資初心者でも無理なく資産形成を始められるサービスを厳選しています。",
      icon: (
        <svg
          className="w-8 h-8 text-emerald-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      href: "/diagnosis/investment",
      color: "emerald",
    },
  ];

  const colorConfig = {
    blue: {
      bg: "from-blue-50/80 to-cyan-50/40",
      border: "border-blue-200/60",
      hoverBg: "hover:from-blue-100/80 hover:to-cyan-100/60",
      button: "from-blue-600 to-cyan-500",
    },
    purple: {
      bg: "from-purple-50/80 to-pink-50/40",
      border: "border-purple-200/60",
      hoverBg: "hover:from-purple-100/80 hover:to-pink-100/60",
      button: "from-purple-600 to-pink-500",
    },
    emerald: {
      bg: "from-emerald-50/80 to-teal-50/40",
      border: "border-emerald-200/60",
      hoverBg: "hover:from-emerald-100/80 hover:to-teal-100/60",
      button: "from-emerald-600 to-teal-500",
    },
  };

  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">
          お得情報のカテゴリ
        </h2>
        <p className="text-[15px] text-slate-600">
          あなたの目的に合わせてサービスを探せます
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => {
          const colors =
            colorConfig[category.color as keyof typeof colorConfig];

          return (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border ${colors.border} bg-gradient-to-br ${colors.bg} ${colors.hoverBg} p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="space-y-5">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-sm">
                  {category.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-[19px] font-bold text-slate-900">
                    {category.title}
                  </h3>
                  <p className="text-[14px] text-slate-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>
                <Link
                  href={category.href}
                  className={`group/btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${colors.button} text-white text-[14px] font-semibold py-2.5 px-5 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]`}
                >
                  サービス一覧を見る
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
