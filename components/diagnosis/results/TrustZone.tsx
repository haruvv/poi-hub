import Link from "next/link";

export const TrustZone = () => {
  return (
    <section className="rounded-3xl border-2 border-slate-200 bg-slate-50 p-6 space-y-4">
      <h2 className="text-lg font-bold text-slate-900">ご利用にあたって</h2>
      <div className="space-y-3 text-sm text-slate-700">
        <div className="flex items-start gap-2">
          <span className="text-slate-500">・</span>
          <p>本ページは広告を含みます</p>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-slate-500">・</span>
          <p>最新情報は公式サイトをご確認ください</p>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-slate-500">・</span>
          <p>投資は元本保証ではありません</p>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-slate-500">・</span>
          <p>サービス内容や条件は変更される場合があります</p>
        </div>
      </div>
      <div className="pt-4 border-t border-slate-200">
        <Link
          href="/diagnosis"
          className="inline-block text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
        >
          もう一度診断する →
        </Link>
      </div>
    </section>
  );
};
