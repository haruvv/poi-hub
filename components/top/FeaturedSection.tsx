import Link from "next/link";

export const FeaturedSection = () => {
  return (
    <section className="space-y-6">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 mb-3 animate-pulse">
          <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 px-4 py-1.5 rounded-full border-2 border-amber-300 bg-gradient-to-r from-amber-50 to-orange-50 shadow-lg">
            ✨ 特集コンテンツ ✨
          </span>
        </div>
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 mb-2 tracking-tight">
          🔥 今月のピックアップ 🔥
        </h2>
        <p className="text-[16px] font-semibold text-slate-700 leading-relaxed max-w-3xl mx-auto">
          今"ガチで使える"副業・ポイ活サービスを厳選！
          <br />
          編集部が今月注目してる案件をまとめたから、まずはここからスタート！
          <br />
          今だけの限定キャンペーンもあるかも🎁
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* オリパ特集カード */}
        <div className="group relative overflow-hidden rounded-3xl border-4 border-amber-400 bg-gradient-to-br from-amber-100 via-yellow-100 to-orange-100 shadow-2xl hover:shadow-[0_20px_60px_rgba(245,158,11,0.5)] transition-all duration-500 hover:-translate-y-2 animate-[glow_3s_ease-in-out_infinite]">
          {/* キラキラエフェクト背景 */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-amber-300 rounded-full blur-2xl animate-ping"></div>
          </div>

          {/* 特集バッジ */}
          <div className="absolute top-6 right-6 z-10 animate-bounce">
            <span className="inline-flex items-center gap-1 text-sm font-extrabold text-amber-900 bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-300 px-4 py-2 rounded-full shadow-lg border-2 border-amber-400 animate-pulse">
              <svg
                className="w-4 h-4 animate-spin"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              HOT 🔥
            </span>
          </div>

          <div className="relative flex flex-col md:flex-row md:items-center">
            {/* 左側：画像エリア（300x250の比率 = 6:5を維持） */}
            <div className="flex-shrink-0 w-full md:w-[45%] lg:w-[42%] md:flex md:items-center md:justify-center md:p-6 lg:p-8">
              <div className="relative w-full" style={{ aspectRatio: "6/5" }}>
                <img
                  src="https://www24.a8.net/svt/bgt?aid=251112152332&wid=001&eno=01&mid=s00000026645001003000&mc=1"
                  alt="どっかん！トレカ"
                  width="300"
                  height="250"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* 右側：コンテンツ */}
            <div className="relative flex-1 flex flex-col justify-center text-center md:text-left space-y-4 p-6 md:p-8 lg:p-10">
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 mb-3 tracking-tight">
                  オリパ特集🎯
                </h3>
                <p className="text-[16px] font-medium text-slate-800 leading-relaxed">
                  本当に引けるの？って疑う前に見てほしい
                  <br />
                  信頼できるオリパサイトを厳選して紹介中！
                  <br />
                  オンラインで開封できるから、いつでもワクワクが止まらない！
                </p>
              </div>

              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="inline-block text-sm font-bold text-amber-900 bg-gradient-to-r from-yellow-200 to-amber-200 px-4 py-1.5 rounded-full border-2 border-amber-300 shadow-md hover:scale-110 transition-transform">
                  ⭐ ポケカ
                </span>
                <span className="inline-block text-sm font-bold text-amber-900 bg-gradient-to-r from-yellow-200 to-amber-200 px-4 py-1.5 rounded-full border-2 border-amber-300 shadow-md hover:scale-110 transition-transform">
                  ⭐ 遊戯王
                </span>
                <span className="inline-block text-sm font-bold text-amber-900 bg-gradient-to-r from-yellow-200 to-amber-200 px-4 py-1.5 rounded-full border-2 border-amber-300 shadow-md hover:scale-110 transition-transform">
                  ⭐ ワンピース
                </span>
                <span className="inline-block text-sm font-bold text-red-700 bg-gradient-to-r from-red-200 to-orange-200 px-4 py-1.5 rounded-full border-2 border-red-300 shadow-md hover:scale-110 transition-transform animate-pulse">
                  🔥 高還元
                </span>
              </div>

              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <Link
                  href="/diagnosis/oripa"
                  className="relative group/btn inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 text-white text-[17px] font-black py-4 px-8 shadow-2xl hover:shadow-[0_0_30px_rgba(251,146,60,0.8)] transition-all duration-300 hover:scale-110 border-2 border-white"
                >
                  <span className="animate-pulse">🎯</span>
                  ▶ 特集を見る
                  <svg
                    className="w-5 h-5 transition-transform group-hover/btn:translate-x-2 group-hover/btn:scale-125"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
