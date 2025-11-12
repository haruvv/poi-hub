import Link from "next/link";

export const DiagnosisPromo = () => {
  return (
    <section className="group relative overflow-hidden rounded-3xl border-4 border-blue-300 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-8 sm:p-10 shadow-2xl hover:shadow-[0_20px_60px_rgba(59,130,246,0.4)] transition-all duration-500 hover:-translate-y-1 animate-[glow_3s_ease-in-out_infinite]">
      {/* キラキラエフェクト背景 */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 bg-blue-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-28 h-28 bg-indigo-300 rounded-full blur-2xl animate-ping"></div>
      </div>

      {/* 人気バッジ */}
      <div className="absolute top-6 right-6 z-10 animate-bounce">
        <span className="inline-flex items-center gap-1 text-sm font-extrabold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-4 py-2 rounded-full shadow-lg border-2 border-white animate-pulse">
          <svg
            className="w-4 h-4 animate-spin"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          おすすめ 💡
        </span>
      </div>

      <div className="relative z-10 grid gap-8 sm:grid-cols-2 sm:items-center">
        {/* 左側：説明 */}
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 text-[12px] font-extrabold shadow-lg border-2 border-blue-300">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
            簡単診断ツール
          </div>

          <div className="space-y-4">
            <h2 className="text-[32px] sm:text-[36px] font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 tracking-tight leading-tight">
              どこから始めればいいか
              <br />
              <span className="text-[34px] sm:text-[38px]">迷ったら診断へ</span>
            </h2>
            <p className="text-[16px] font-semibold text-slate-800 leading-relaxed">
              たった3つの質問に答えるだけで、あなたのライフスタイルに最適なサービスやカテゴリを提案します。
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-[14px] font-bold text-slate-800">
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-md border-2 border-blue-200 hover:scale-110 transition-transform">
              <svg
                className="w-5 h-5 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>3問・30秒</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-md border-2 border-blue-200 hover:scale-110 transition-transform">
              <svg
                className="w-5 h-5 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span>登録不要</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-emerald-400 text-white px-4 py-2 rounded-full shadow-md border-2 border-white hover:scale-110 transition-transform animate-pulse">
              <svg
                className="w-5 h-5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>初心者向け</span>
            </div>
          </div>
        </div>

        {/* 右側：CTA */}
        <div className="sm:text-right">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <Link
              href="/diagnosis"
              className="group/btn relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-[18px] font-black py-5 shadow-2xl hover:shadow-[0_0_40px_rgba(59,130,246,0.8)] transition-all duration-300 hover:scale-110 border-4 border-white overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
              <span className="relative animate-pulse">💡</span>
              <span className="relative">診断をはじめる</span>
              <svg
                className="w-6 h-6 relative transition-transform group-hover/btn:translate-x-2 group-hover/btn:scale-125"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
