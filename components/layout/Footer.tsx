import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* サイト情報 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">ポイ活なび</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              あなたに合った「お得な始め方」を見つけるための診断サイト
            </p>
          </div>

          {/* ナビゲーション */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">サイト内リンク</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  トップページ
                </Link>
              </li>
              <li>
                <Link
                  href="/diagnosis"
                  className="hover:text-white transition-colors"
                >
                  診断をはじめる
                </Link>
              </li>
              <li>
                <Link
                  href="/diagnosis/poi-katsu"
                  className="hover:text-white transition-colors"
                >
                  ポイ活サービス
                </Link>
              </li>
              <li>
                <Link
                  href="/diagnosis/credit-card"
                  className="hover:text-white transition-colors"
                >
                  クレジットカード
                </Link>
              </li>
              <li>
                <Link
                  href="/diagnosis/investment"
                  className="hover:text-white transition-colors"
                >
                  投資・資産づくり
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/diagnosis/shopping"
                  className="hover:text-white transition-colors"
                >
                  お得に買い物
                </Link>
              </li>
              <li>
                <Link
                  href="/diagnosis/gaming"
                  className="hover:text-white transition-colors"
                >
                  お得にゲーム
                </Link>
              </li> */}
              <li>
                <Link
                  href="/diagnosis/meal"
                  className="hover:text-white transition-colors"
                >
                  お得にご飯
                </Link>
              </li>
              <li>
                <Link
                  href="/diagnosis/oripa"
                  className="hover:text-white transition-colors"
                >
                  オリパ特集
                </Link>
              </li>
              <li className="pt-2 mt-2 border-t border-slate-700">
                <Link
                  href="/hina"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                >
                  ひなちゃんのページ
                </Link>
              </li>
            </ul>
          </div>

          {/* 法的情報 */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">法的情報</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  運営者情報
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  利用規約
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* 注意事項 */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">ご注意</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              本サイトは広告を含みます。最新情報は各公式サイトをご確認ください。投資は元本保証ではありません
            </p>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {currentYear} ポイ活なび. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
