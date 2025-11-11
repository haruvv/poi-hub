import type { Metadata } from "next";
import { HeaderBar } from "@/components/layout/HeaderBar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "利用規約｜お得ナビ Hub",
  description: "お得ナビ Hubの利用規約",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <HeaderBar />
      <div className="mx-auto max-w-3xl px-4 pt-8 pb-20">
        <article className="prose prose-slate max-w-none">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 no-underline"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              トップページへ戻る
            </Link>
          </div>

          <h1 className="text-3xl font-bold text-slate-900 mb-8">利用規約</h1>

          <div className="space-y-8 text-slate-700">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                第1条（適用）
              </h2>
              <p className="leading-relaxed">
                本規約は、お得ナビ
                Hub（以下「当サイト」）が提供するサービスの利用条件を定めるものです。ユーザーは、当サイトを利用することにより、本規約に同意したものとみなされます。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                第2条（サービス内容）
              </h2>
              <p className="leading-relaxed">
                当サイトは、ユーザーに対して以下のサービスを提供します：
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>お得な始め方診断機能</li>
                <li>ポイ活、クレジットカード、投資サービスに関する情報提供</li>
                <li>各種サービスの比較・紹介</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                第3条（広告について）
              </h2>
              <p className="leading-relaxed">
                当サイトは、アフィリエイトプログラムを利用して収益を得ています。サービスの紹介リンクには、アフィリエイトリンクが含まれる場合があります。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                第4条（免責事項）
              </h2>
              <p className="leading-relaxed">
                当サイトは、以下の事項について一切の責任を負いません：
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  当サイトに掲載された情報の正確性、完全性、有用性等について
                </li>
                <li>
                  ユーザーが当サイトの情報に基づいて行った行動の結果について
                </li>
                <li>
                  外部サイト（リンク先）のサービス内容や規約の変更について
                </li>
                <li>投資によって生じた損失について</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                第5条（著作権）
              </h2>
              <p className="leading-relaxed">
                当サイトに掲載されているコンテンツ（文章、画像、デザイン等）の著作権は、当サイトまたは正当な権利者に帰属します。無断での転載、複製は禁止します。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                第6条（禁止事項）
              </h2>
              <p className="leading-relaxed">
                ユーザーは、当サイトの利用にあたり、以下の行為を行ってはなりません：
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>法令または公序良俗に違反する行為</li>
                <li>当サイトの運営を妨害する行為</li>
                <li>他のユーザーまたは第三者に迷惑をかける行為</li>
                <li>当サイトのコンテンツを無断で転載・複製する行為</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                第7条（規約の変更）
              </h2>
              <p className="leading-relaxed">
                当サイトは、必要に応じて本規約を変更することができます。変更後の規約は、当サイトに掲載した時点で効力を生じるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                第8条（準拠法・管轄裁判所）
              </h2>
              <p className="leading-relaxed">
                本規約の解釈にあたっては、日本法を準拠法とします。当サイトに関して紛争が生じた場合は、当サイト運営者の所在地を管轄する裁判所を専属的合意管轄裁判所とします。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                お問い合わせ
              </h2>
              <p className="leading-relaxed">
                本規約に関するお問い合わせは、
                <Link href="/contact" className="text-blue-600 hover:underline">
                  お問い合わせページ
                </Link>
                よりご連絡ください。
              </p>
            </section>

            <p className="text-sm text-slate-500 mt-12">制定日：2025年1月1日</p>
          </div>
        </article>
      </div>
    </main>
  );
}
