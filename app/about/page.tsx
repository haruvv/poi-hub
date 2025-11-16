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
              は、「これからお得を始めたい人」が安心してサービスを選べるように情報をまとめたサイトです。
            </p>
            <p className="leading-relaxed text-base mt-4">
              本サイトは{" "}
              <strong className="text-slate-900">ポイ活なび編集部</strong>{" "}
              が運営しています。
            </p>
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
