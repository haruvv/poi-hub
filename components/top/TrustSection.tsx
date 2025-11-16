import Link from "next/link";

export const TrustSection = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 backdrop-blur-sm p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-blue-50/20" />

      <div className="relative z-10 space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 text-center tracking-tight">
          このサイトについて
        </h2>

        <div className="space-y-5 text-[15px] text-slate-700 leading-relaxed">
          <div>
            <p>
              <strong className="text-slate-900">【中立的な情報提供】</strong>
              金融サービスや投資商品は、中立的な立場から比較・情報提供を行っています各サービスの特徴やメリット・デメリットを分かりやすく整理して、あなたに最適な選択をサポートします
            </p>
          </div>

          <div>
            <p>
              <strong className="text-slate-900">
                【アフィリエイトについて】
              </strong>
              一部のリンクはアフィリエイトリンクになっていて、これによりサイト運営費を賄い、無料で診断サービスを提供していますリンク先のサービス内容や条件は、各公式サイトで最新情報を確認してください
            </p>
          </div>

          <div>
            <p>
              <strong className="text-slate-900">【投資リスク】</strong>
              投資は元本保証ではなく、投資判断は自己責任で行う必要があります投資の結果により損失が発生する可能性があります
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200/60">
          <div className="flex flex-wrap items-center justify-center gap-6 text-[14px]">
            <Link
              href="/about"
              className="text-slate-600 hover:text-slate-900 hover:underline transition-colors"
            >
              運営者情報
            </Link>
            <Link
              href="/terms"
              className="text-slate-600 hover:text-slate-900 hover:underline transition-colors"
            >
              利用規約
            </Link>
            <Link
              href="/privacy"
              className="text-slate-600 hover:text-slate-900 hover:underline transition-colors"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/contact"
              className="text-slate-600 hover:text-slate-900 hover:underline transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
