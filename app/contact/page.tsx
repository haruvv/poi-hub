import type { Metadata } from "next";
import { HeaderBar } from "@/components/layout/HeaderBar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "お問い合わせ｜お得ナビ Hub",
  description: "お得ナビ Hubへのお問い合わせ",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <HeaderBar />
      <div className="mx-auto max-w-3xl px-4 pt-8 pb-20">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
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

        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900 mb-6">
            お問い合わせ
          </h1>

          <div className="space-y-6 text-slate-700">
            <section>
              <p className="text-lg leading-relaxed">
                お得ナビ Hubをご利用いただき、ありがとうございます。
              </p>
              <p className="leading-relaxed mt-4">
                サイトに関するご質問、ご意見、ご要望などがございましたら、以下のメールアドレスまでお気軽にお問い合わせください。
              </p>
            </section>

            <section className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h2 className="text-sm font-semibold text-slate-600 mb-2">
                お問い合わせ先メールアドレス
              </h2>
              <p className="text-lg font-bold text-slate-900">
                contact@example.com
              </p>
              <p className="text-sm text-slate-600 mt-2">
                ※実際のメールアドレスに置き換えてください
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900">
                お問い合わせの前に
              </h2>
              <p className="leading-relaxed">以下のページもご確認ください：</p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    プライバシーポリシー
                  </Link>
                  {" - "}個人情報の取り扱いについて
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    利用規約
                  </Link>
                  {" - "}サービスの利用条件について
                </li>
              </ul>
            </section>

            <section className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h2 className="text-lg font-bold text-slate-900 mb-3">
                回答までの目安
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                お問い合わせいただいた内容については、通常3営業日以内に返信させていただきます。ただし、内容によってはお時間をいただく場合がございますので、あらかじめご了承ください。
              </p>
            </section>

            <section className="text-sm text-slate-600 space-y-2">
              <p>【注意事項】</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  各サービス（ポイ活サイト、クレジットカード、投資サービス等）に関する個別のお問い合わせは、各サービスの公式サイトへ直接お問い合わせください
                </li>
                <li>
                  投資判断に関するご相談には応じられません。投資は自己責任で行ってください
                </li>
                <li>営業目的のお問い合わせはご遠慮ください</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
