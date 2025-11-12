import type { Metadata } from "next";
import { HeaderBar } from "@/components/layout/HeaderBar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ひなちゃんのページ｜ポイ活なび",
  description: "ポイ活なびの広報「ひな」のプロフィールと最新情報",
};

export default function HinaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-pink-50 relative overflow-hidden">
      {/* 背景の装飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-40 h-40 bg-pink-200/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-36 h-36 bg-cyan-200/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <HeaderBar />
      <div className="relative mx-auto max-w-4xl px-4 pt-8 pb-16 space-y-8">
        {/* ヘッダー */}
        <div className="text-center space-y-4">
          <div className="inline-block">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-2">
              ひなちゃんのページ
            </h1>
            <div className="h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-pink-400 rounded-full"></div>
          </div>
        </div>

        {/* メインコンテンツ */}
        <section className="relative bg-white/90 backdrop-blur-sm rounded-[2rem] border-4 border-white p-8 sm:p-10 shadow-2xl">
          {/* 装飾的な要素 */}
          <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-300 rounded-full opacity-60 blur-xl"></div>
          <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-300 rounded-full opacity-60 blur-xl"></div>

          <div className="relative grid md:grid-cols-[240px_1fr] gap-8 items-start">
            {/* 左側：画像エリア */}
            <div className="flex flex-col items-center space-y-6">
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-[6px] border-white shadow-2xl overflow-hidden bg-gradient-to-br from-blue-200 to-pink-200 ring-4 ring-blue-100">
                  <img
                    src="/hina-avatar.png"
                    alt="ひなちゃん"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* 装飾 */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
              </div>

              {/* XのID */}
              <a
                href="https://x.com/poinavi_hina"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-base font-bold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                @poinavi_hina
              </a>
            </div>

            {/* 右側：プロフィール情報 */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-lg font-bold text-slate-900">名前</span>
                  <span className="text-2xl font-bold text-blue-600">ひな</span>
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="text-lg font-bold text-slate-900">役割</span>
                  <span className="text-lg text-slate-700">
                    ポイ活なび公式・広報担当
                  </span>
                </div>
              </div>

              <div className="border-t-2 border-blue-100 pt-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  プロフィール
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />
                    <span className="leading-relaxed text-slate-700">
                      お得情報を調べるのが好きな広報担当
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />
                    <span className="leading-relaxed text-slate-700">
                      ポイ活初心者だから、みんなと一緒に学んでいきたい！
                    </span>
                  </li>
                </ul>
              </div>

              {/* ひなちゃんの一言コメント */}
              <div className="mt-8 relative">
                <div className="bg-gradient-to-br from-pink-50 via-white to-cyan-50 rounded-3xl border-4 border-pink-200 p-6 shadow-xl relative transform hover:scale-[1.02] transition-transform">
                  {/* 吹き出しの三角 */}
                  <div className="absolute -top-4 left-10 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[16px] border-b-pink-200"></div>
                  <div className="absolute -top-3 left-10 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[16px] border-b-pink-50"></div>

                  <p className="text-base font-black text-pink-600 mb-3">
                    ひなちゃんから一言
                  </p>
                  <p className="text-lg leading-relaxed text-slate-800 font-medium">
                    初めまして！広報のひなです！みんなのお得ライフを全力でサポートしたいです！一緒に楽しくお得活動しましょう〜！
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* プロフィール詳細 */}
        <section className="bg-gradient-to-br from-cyan-100/50 via-blue-50/50 to-pink-100/50 rounded-[2rem] border-4 border-white p-6 sm:p-8 shadow-xl backdrop-blur-sm">
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">
            もっとひなを知ろう
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all hover:-translate-y-1">
              <h3 className="text-lg font-bold text-blue-600 mb-3">
                最近ハマってること
              </h3>
              <p className="text-slate-700 leading-relaxed">
                ポケモンカード
                <br />
                <span className="text-sm text-slate-600">
                  オリパ開封もよくしてる！
                </span>
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border-2 border-pink-100 hover:border-pink-300 transition-all hover:-translate-y-1">
              <h3 className="text-lg font-bold text-pink-600 mb-3">
                ポイ活レベル
              </h3>
              <p className="text-slate-700 leading-relaxed">
                初心者
                <br />
                <span className="text-sm text-slate-600">
                  まだ始めたばかり！これから色々試していくよー
                </span>
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border-2 border-cyan-100 hover:border-cyan-300 transition-all hover:-translate-y-1">
              <h3 className="text-lg font-bold text-cyan-600 mb-3">
                これからの目標
              </h3>
              <p className="text-slate-700 leading-relaxed">
                月1000円貯めたい
                <br />
                <span className="text-sm text-slate-600">
                  まだ全然貯まってないけど、コツコツ頑張る！
                </span>
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border-2 border-yellow-100 hover:border-yellow-300 transition-all hover:-translate-y-1">
              <h3 className="text-lg font-bold text-yellow-600 mb-3">
                座右の銘
              </h3>
              <p className="text-slate-700 leading-relaxed">
                「塵も積もれば山となる」(ドヤ)
              </p>
            </div>
          </div>
        </section>

        {/* Q&A */}
        <section className="bg-white/80 backdrop-blur-sm rounded-[2rem] border-4 border-white p-6 sm:p-8 shadow-xl">
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">
            ひなに聞いてみた
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-400 bg-blue-50/50 rounded-r-xl pl-5 py-3 hover:bg-blue-100/50 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">
                Q. ひなって何者？
              </h3>
              <p className="text-slate-700 leading-relaxed">
                A. お得情報を調べるのが好きで気づいたら広報やってた人
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-5">
              <h3 className="font-bold text-slate-900 mb-2">
                Q. ポイ活始めたきっかけは？
              </h3>
              <p className="text-slate-700 leading-relaxed">
                A. このサイトの広報になってから！
                <br />
                調べてるうちに「自分もやってみよう」ってなった
              </p>
            </div>

            <div className="border-l-4 border-cyan-400 bg-cyan-50/50 rounded-r-xl pl-5 py-3 hover:bg-cyan-100/50 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">
                Q. ポイ活ってどう？
              </h3>
              <p className="text-slate-700 leading-relaxed">
                A. まだ始めたばかりだから大きなことは言えないけど、
                <br />
                少しずつでも貯まっていくのが楽しい！
              </p>
            </div>

            <div className="border-l-4 border-yellow-400 bg-yellow-50/50 rounded-r-xl pl-5 py-3 hover:bg-yellow-100/50 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">
                Q. これから何に使いたい？
              </h3>
              <p className="text-slate-700 leading-relaxed">
                A. ポケカのパック買いたい！
                <br />
                あとコンビニスイーツとか本とか
              </p>
            </div>

            <div className="border-l-4 border-green-400 bg-green-50/50 rounded-r-xl pl-5 py-3 hover:bg-green-100/50 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">
                Q. 初心者だけど大丈夫？
              </h3>
              <p className="text-slate-700 leading-relaxed">
                A. 私も初心者だから一緒に頑張ろう！
                <br />
                分からないことがあったらサイトで調べながら進めてるよ
              </p>
            </div>
          </div>
        </section>

        {/* SNS・活動情報 */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
            SNS・活動情報
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 mb-1">
                  X（旧Twitter）
                </h3>
                <p className="text-sm text-slate-600 mb-2">
                  お得情報やキャンペーンの最新情報を発信中！
                </p>
                <a
                  href="https://x.com/poinavi_hina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-500 font-semibold text-sm hover:underline"
                >
                  @poinavi_hina をフォロー →
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="pt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            トップページへ戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
