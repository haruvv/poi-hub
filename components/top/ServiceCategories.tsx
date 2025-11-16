"use client";

import Link from "next/link";
import { useState } from "react";

export const ServiceCategories = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const categories = [
    {
      title: "ポイ活でコツコツ貯める",
      description:
        "普段のネット通販やアプリ登録を&ldquo;ついでに&rdquo;ポイント化して、コツコツ貯めていく系のサービスをまとめてる。",
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
        "年会費無料＆還元率高めのカードだけに絞って、&ldquo;とりあえず1枚持つならここ&rdquo;ってやつを比べやすくしてる。",
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
        "いきなり難しい商品に突っ込むんじゃなくて、少額から始めやすい投資サービスだけピックアップ。余裕資金でじわっと増やしていく前提。",
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
        "冷蔵惣菜や冷凍弁当の宅配サービスを中心に、&ldquo;自炊の手間は減らしたいけど食費はできるだけ抑えたい&rdquo;って人向けのサービスを集めてる。",
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
  };

  // 主要カテゴリ（最初の3つ）とその他を分ける
  const mainCategories = categories.slice(0, 3);
  const otherCategories = categories.slice(3);
  const displayedCategories = isExpanded ? categories : mainCategories;

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
        {displayedCategories.map((category, index) => {
          const colors =
            colorConfig[category.color as keyof typeof colorConfig];

          return (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50">
                  {category.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900">
                    {category.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>
                <Link
                  href={category.href}
                  className="group/btn inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white text-sm font-semibold py-2 px-4 hover:bg-blue-700 transition-colors duration-200"
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
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* 展開ボタン */}
      {otherCategories.length > 0 && (
        <div className="text-center pt-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors duration-200"
          >
            <span>
              {isExpanded
                ? "カテゴリを閉じる"
                : `他のカテゴリを見る（${otherCategories.length}件）`}
            </span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};
