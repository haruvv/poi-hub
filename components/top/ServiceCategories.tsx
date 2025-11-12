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
    // {
    //   title: "お得に買い物",
    //   description:
    //     "楽天市場やAmazonなど、ポイント還元や割引が充実したショッピングサイトを紹介しています。",
    //   icon: (
    //     <svg
    //       className="w-8 h-8 text-orange-600"
    //       fill="none"
    //       stroke="currentColor"
    //       viewBox="0 0 24 24"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth={2}
    //         d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    //       />
    //     </svg>
    //   ),
    //   href: "/diagnosis/shopping",
    //   color: "orange",
    // },
    // {
    //   title: "お得にゲーム",
    //   description:
    //     "Steamのセールやゲームサブスクなど、お得にゲームを楽しめるサービスを紹介しています。",
    //   icon: (
    //     <svg
    //       className="w-8 h-8 text-indigo-600"
    //       fill="none"
    //       stroke="currentColor"
    //       viewBox="0 0 24 24"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth={2}
    //         d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
    //       />
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth={2}
    //         d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    //       />
    //     </svg>
    //   ),
    //   href: "/diagnosis/gaming",
    //   color: "indigo",
    // },
    {
      title: "お得にご飯",
      description:
        "食べログやホットペッパーなど、お得にグルメを楽しめるサービスを紹介しています。",
      icon: (
        <svg
          className="w-8 h-8 text-rose-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ),
      href: "/diagnosis/meal",
      color: "rose",
    },
    {
      title: "オリパ特集",
      description:
        "安心して楽しめるオリパサイトを厳選紹介。ポケカ・遊戯王・ワンピースなど人気カードのガチャが楽しめます。",
      icon: (
        <svg
          className="w-8 h-8 text-amber-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      href: "/diagnosis/oripa",
      color: "amber",
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
    orange: {
      bg: "from-orange-50/80 to-amber-50/40",
      border: "border-orange-200/60",
      hoverBg: "hover:from-orange-100/80 hover:to-amber-100/60",
      button: "from-orange-600 to-amber-500",
    },
    indigo: {
      bg: "from-indigo-50/80 to-blue-50/40",
      border: "border-indigo-200/60",
      hoverBg: "hover:from-indigo-100/80 hover:to-blue-100/60",
      button: "from-indigo-600 to-blue-500",
    },
    rose: {
      bg: "from-rose-50/80 to-pink-50/40",
      border: "border-rose-200/60",
      hoverBg: "hover:from-rose-100/80 hover:to-pink-100/60",
      button: "from-rose-600 to-pink-500",
    },
    amber: {
      bg: "from-amber-50/80 to-yellow-50/40",
      border: "border-amber-200/60",
      hoverBg: "hover:from-amber-100/80 hover:to-yellow-100/60",
      button: "from-amber-600 to-yellow-500",
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
