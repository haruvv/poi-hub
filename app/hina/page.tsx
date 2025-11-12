import type { Metadata } from "next";
import { HeaderBar } from "@/components/layout/HeaderBar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ひなちゃんのページ｜ポイ活なび",
  description: "ポイ活なびの公式キャラクター「ひな」のプロフィールと最新情報",
};

export default function HinaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50">
      <HeaderBar />
      <div className="mx-auto max-w-4xl px-4 pt-8 pb-16 space-y-8">
        {/* ヘッダー */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
            ひなちゃんのページ
          </h1>
          <p className="text-slate-600 text-lg">
            ポイ活なび公式キャラクター
          </p>
        </div>

        {/* メインコンテンツ */}
        <section className="bg-white rounded-3xl border-2 border-blue-200 p-8 sm:p-10 shadow-xl">
          <div className="grid md:grid-cols-[240px_1fr] gap-8 items-start">
            {/* 左側：画像エリア */}
            <div className="flex flex-col items-center space-y-6">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100">
                <img
                  src="/hina-avatar.png"
                  alt="ひなちゃん"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* XのID */}
              <a
                href="https://x.com/poinavi_hina"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 text-white text-base font-semibold hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
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
                      お得情報とスイーツが大好きな、ちょっと真面目な広報ガール
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />
                    <span className="leading-relaxed text-slate-700">
                      「難しいことをそのまま出されるとイヤ！」という人の味方として、キャンペーンやポイントの仕組みをやさしく噛み砕いて解説するよ
                    </span>
                  </li>
                </ul>
              </div>

              {/* ひなちゃんの一言コメント */}
              <div className="mt-8 relative">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-300 p-6 shadow-lg relative">
                  {/* 吹き出しの三角 */}
                  <div className="absolute -top-3 left-10 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[14px] border-b-blue-300"></div>
                  <div className="absolute -top-2 left-10 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[14px] border-b-blue-50"></div>

                  <p className="text-base font-bold text-blue-600 mb-3">
                    ひなちゃんから一言
                  </p>
                  <p className="text-lg leading-relaxed text-slate-800 font-medium">
                    初めまして！広報のひなです！みんなのお得ライフを全力でサポートするから、一緒に楽しくお得活動しましょう〜！
                  </p>
                </div>
              </div>
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
                <h3 className="font-bold text-slate-900 mb-1">X（旧Twitter）</h3>
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

