import type { Metadata } from "next";
import { HeaderBar } from "@/components/layout/HeaderBar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜ポイ活なび",
  description: "ポイ活なびのプライバシーポリシー",
};

export default function PrivacyPage() {
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

          <h1 className="text-3xl font-bold text-slate-900 mb-8">
            プライバシーポリシー
          </h1>

          <div className="space-y-8 text-slate-700">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                個人情報の取り扱いについて
              </h2>
              <p className="leading-relaxed">
                ポイ活なび（以下「当サイト」）は、ユーザーの個人情報を適切に保護するため、以下の方針に基づいて個人情報を取り扱います
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                個人情報の収集について
              </h2>
              <p className="leading-relaxed">
                当サイトでは、診断機能の提供にあたり、個人を特定できる情報（氏名、メールアドレス等）の入力は必要ありません
              </p>
              <p className="leading-relaxed mt-4">
                ただし、サイトの利用状況の分析のため、以下の情報を自動的に収集する場合があります：
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>IPアドレス</li>
                <li>閲覧ページ</li>
                <li>アクセス日時</li>
                <li>ブラウザの種類</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                アクセス解析ツールについて
              </h2>
              <p className="leading-relaxed">
                当サイトでは、サイトの利用状況を把握するため、Google Analytics 4（GA4）を使用しています。
              </p>
              <p className="leading-relaxed mt-4">
                Google Analytics 4は、クッキー（Cookie）等を使用して匿名のトラフィックデータを収集します。これにより、ページの閲覧数やユーザーの行動パターンなどの統計情報を取得していますが、個人を特定する情報は含まれません。
              </p>
              <p className="leading-relaxed mt-4">
                収集されたデータは、Googleのプライバシーポリシーに基づいて管理されます。詳細については、
                <a
                  href="https://policies.google.com/privacy?hl=ja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Googleのプライバシーポリシー
                </a>
                をご確認ください。
              </p>
              <p className="leading-relaxed mt-4">
                また、Google Analyticsの利用規約については、
                <a
                  href="https://marketingplatform.google.com/about/analytics/terms/jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Google Analytics利用規約
                </a>
                をご確認ください。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                広告について
              </h2>
              <p className="leading-relaxed">
                当サイトは、第三者配信の広告サービス（Googleアドセンス、A8.net等）を利用しています広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                免責事項
              </h2>
              <p className="leading-relaxed">
                当サイトに掲載されている情報の正確性には万全を期していますが、利用者が当サイトの情報を用いて行う一切の行為について、当サイトは責任を負いません
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                プライバシーポリシーの変更
              </h2>
              <p className="leading-relaxed">
                当サイトは、必要に応じて本プライバシーポリシーを変更することがあります変更後のプライバシーポリシーは、当サイトに掲載した時点で効力を生じるものとします
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                お問い合わせ
              </h2>
              <p className="leading-relaxed">
                本ポリシーに関するお問い合わせは、
                <Link href="/contact" className="text-blue-600 hover:underline">
                  お問い合わせページ
                </Link>
                よりご連絡ください
              </p>
            </section>

            <p className="text-sm text-slate-500 mt-12">制定日：2025年1月1日</p>
          </div>
        </article>
      </div>
    </main>
  );
}
