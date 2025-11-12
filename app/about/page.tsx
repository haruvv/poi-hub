import type { Metadata } from "next";
import { HeaderBar } from "@/components/layout/HeaderBar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "運営者情報｜ポイ活なび",
  description: "ポイ活なびの運営者情報・サイトの目的・掲載基準について",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <HeaderBar />
      <div className="mx-auto max-w-4xl px-4 pt-8 pb-16 space-y-8">
        <h1 className="text-3xl font-bold text-slate-900 text-center tracking-tight">
          ポイ活なびについて（運営者情報）
        </h1>

        <div className="space-y-8 text-slate-700">
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <p className="leading-relaxed text-base">
              <strong className="text-slate-900">ポイ活なび</strong>{" "}
              は、「これからお得を始めたい人」が安心してポイ活・クレジットカード・投資サービスを選べるように情報をまとめたサイトです。
            </p>
            <p className="leading-relaxed text-base mt-4">
              本サイトは{" "}
              <strong className="text-slate-900">ポイ活なび編集部</strong>{" "}
              が運営しており、公式広報キャラクターの{" "}
              <strong className="text-blue-600">「ひなちゃん」</strong>{" "}
              が、読者のみなさんに分かりやすく情報をお届けします。
            </p>
          </section>

          <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-2xl border-2 border-blue-200 p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight text-center">
              ひなちゃんについて
            </h2>

            <div className="grid md:grid-cols-[200px_1fr] gap-6 items-start">
              {/* 左側：画像エリア */}
              <div className="flex flex-col items-center space-y-4">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100">
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
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  @poinavi_hina
                </a>
              </div>

              {/* 右側：プロフィール情報 */}
              <div className="space-y-4">
                <div>
                  <p className="text-base">
                    <strong className="text-slate-900">名前</strong>：ひな
                  </p>
                </div>

                <div>
                  <p className="text-base">
                    <strong className="text-slate-900">役割</strong>
                    ：ポイ活なび公式・広報担当
                  </p>
                </div>

                <div>
                  <p className="text-base font-semibold text-slate-900 mb-2">
                    プロフィール：
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex gap-2 items-start">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                      <span className="leading-relaxed">
                        お得情報とスイーツが大好きな、ちょっと真面目な広報ガール
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                      <span className="leading-relaxed">
                        「難しいことをそのまま出されるとイヤ！」という人の味方として、キャンペーンやポイントの仕組みをやさしく噛み砕いて解説するよ
                      </span>
                    </li>
                  </ul>
                </div>

                {/* ひなちゃんの一言コメント */}
                <div className="mt-6 relative">
                  <div className="bg-white rounded-2xl border-2 border-blue-300 p-5 shadow-md relative">
                    {/* 吹き出しの三角 */}
                    <div className="absolute -top-3 left-8 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-blue-300"></div>
                    <div className="absolute -top-2 left-8 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-white"></div>

                    <p className="text-sm font-bold text-blue-600 mb-2">
                      ひなちゃんから一言 💭
                    </p>
                    <p className="text-base leading-relaxed text-slate-800">
                      お得情報って難しそうに見えるけど、実はちょっとしたコツで簡単にお得になれるんだよ！みんなのお得ライフを全力でサポートするから、一緒に楽しくお得活動しましょう〜！
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-500 italic mt-4">
                  ※ひなちゃんの発信する内容は、ポイ活なび編集部が監修しています。
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
              サイトの目的
            </h2>

            <p className="leading-relaxed mb-4">
              ポイ活なびは、次のような方に向けて情報を発信しています。
            </p>

            <ul className="space-y-2 ml-4 mb-6">
              <li className="flex gap-2 items-start">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-500" />
                <span className="leading-relaxed">
                  ポイ活やクレジットカードに興味はあるけれど、どれを選べばいいか分からない人
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-500" />
                <span className="leading-relaxed">
                  「怪しくないサービス」だけを知りたい人
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-500" />
                <span className="leading-relaxed">
                  少額からコツコツお得を貯めたい人
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-500" />
                <span className="leading-relaxed">
                  無理のない範囲で投資・資産形成も検討したい人
                </span>
              </li>
            </ul>

            <p className="leading-relaxed mb-4">
              そのために、以下を大切にしています。
            </p>

            <ul className="space-y-2 ml-4">
              <li className="flex gap-2 items-start">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                <span className="leading-relaxed">
                  初心者にも分かりやすい言葉で説明すること
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                <span className="leading-relaxed">
                  実績のある、信頼性の高いサービスを優先して紹介すること
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                <span className="leading-relaxed">
                  メリットだけでなく、注意点もあわせて記載すること
                </span>
              </li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
              掲載サービスの選定基準
            </h2>

            <p className="leading-relaxed mb-4">
              ポイ活なび編集部では、主に以下の観点からサービスを選定しています。
            </p>

            <ul className="space-y-2 ml-4 mb-6">
              <li className="flex gap-2 items-start">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                <span className="leading-relaxed">
                  運営会社・サービス実績が一定以上あること
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                <span className="leading-relaxed">
                  利用条件やポイント付与条件が明示されていること
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                <span className="leading-relaxed">
                  読者にとって実用性・還元性が見込めること
                </span>
              </li>
            </ul>

            <p className="leading-relaxed text-slate-700 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              案件提供の有無にかかわらず、「読者にとっておすすめできるか」を基準に紹介するサービスを判断しています。
            </p>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
              アフィリエイトリンク・広告について
            </h2>

            <p className="leading-relaxed mb-4">
              ポイ活なびの一部コンテンツには、広告・アフィリエイトリンクを含みます。
              <br />
              経由してお申込み・ご利用いただくことで、当サイトに成果報酬が発生する場合があります。
            </p>

            <ul className="space-y-2 ml-4">
              <li className="flex gap-2 items-start">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                <span className="leading-relaxed">
                  ユーザーの皆さまのご負担で追加料金が発生することはありません。
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                <span className="leading-relaxed">
                  広告収益は、サイト運営費およびコンテンツ品質向上に活用させていただきます。
                </span>
              </li>
            </ul>

            <p className="leading-relaxed mt-4 text-sm text-slate-600">
              広告が含まれるページでは、その旨を分かりやすく明記するよう努めています。
            </p>
          </section>

          <section className="bg-slate-100 rounded-2xl border border-slate-300 p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
              免責事項
            </h2>

            <ul className="space-y-3">
              <li className="flex gap-2 items-start">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-600" />
                <span className="leading-relaxed">
                  掲載情報はできる限り正確な内容を心がけていますが、最新の情報・条件は必ず各公式サイトにてご確認ください。
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-600" />
                <span className="leading-relaxed">
                  当サイト経由でのサービス利用において生じた損害・トラブルについて、当サイトは責任を負いかねます。
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-600" />
                <span className="leading-relaxed">
                  投資・資産運用に関する情報は、特定の金融商品の勧誘・推奨を目的としたものではありません。投資判断はご自身の責任で行ってください。
                </span>
              </li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
              お問い合わせ
            </h2>

            <p className="leading-relaxed mb-4">
              掲載内容に関するご質問・ご意見・修正依頼などは、下記フォームよりご連絡ください。
            </p>

            <div className="space-y-2 mb-6">
              <p className="text-base">
                <strong className="text-slate-900">お問い合わせ</strong>：
                <Link
                  href="/contact"
                  className="text-blue-600 hover:text-blue-500 hover:underline transition-colors ml-2"
                >
                  お問い合わせページ
                </Link>
              </p>
              <p className="text-base">
                <strong className="text-slate-900">運営</strong>
                ：ポイ活なび編集部
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <p className="leading-relaxed text-slate-700 text-center">
                ひなちゃんと一緒に、「無理せず・楽しく・ちょっと賢く」お得を始めていきましょう。
              </p>
            </div>
          </section>
        </div>

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
