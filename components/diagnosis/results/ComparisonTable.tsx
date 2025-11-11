import Link from "next/link";

interface ComparisonRow {
  category: string;
  difficulty: string;
  risk: string;
  returnImage: string;
  suitableFor: string;
  href: string;
}

interface ComparisonTableProps {
  rows: ComparisonRow[];
  secondChoices?: {
    title: string;
    description: string;
    services: Array<{
      name: string;
      href: string;
    }>;
  }[];
}

export const ComparisonTable = ({
  rows,
  secondChoices,
}: ComparisonTableProps) => {
  return (
    <section className="space-y-8">
      {secondChoices && secondChoices.length > 0 && (
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 backdrop-blur-sm p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
          {/* 背景グラデーション */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-teal-50/20" />

          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
              セカンドチョイス
            </h2>
            {secondChoices.map((choice, idx) => (
              <div key={idx} className="mb-8 last:mb-0">
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {choice.title}
                </h3>
                <p className="text-[14px] text-slate-600 mb-4 leading-relaxed">
                  {choice.description}
                </p>
                <div className="space-y-3">
                  {choice.services.map((service, sIdx) => (
                    <Link
                      key={sIdx}
                      href={service.href}
                      className="group relative block w-full text-center rounded-xl bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 text-white text-[15px] font-bold py-3.5 px-6 shadow-[0_4px_16px_rgba(16,185,129,0.4)] hover:shadow-[0_6px_24px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {service.name}の詳細を見る
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 backdrop-blur-sm p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
        {/* 背景グラデーション */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-indigo-50/20" />

        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
            カテゴリ比較
          </h2>
          <div className="overflow-x-auto -mx-2 px-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200/60">
                  <th className="text-left py-4 px-3 font-bold text-slate-900">
                    カテゴリ
                  </th>
                  <th className="text-center py-4 px-3 font-bold text-slate-900">
                    難易度
                  </th>
                  <th className="text-center py-4 px-3 font-bold text-slate-900">
                    リスク
                  </th>
                  <th className="text-center py-4 px-3 font-bold text-slate-900">
                    リターンイメージ
                  </th>
                  <th className="text-left py-4 px-3 font-bold text-slate-900">
                    向いてる人
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-100/80 hover:bg-slate-50/50 transition-colors duration-200"
                  >
                    <td className="py-4 px-3">
                      <Link
                        href={row.href}
                        className="font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors inline-flex items-center gap-1.5"
                      >
                        {row.category}
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </td>
                    <td className="text-center py-4 px-3 text-slate-700 font-medium">
                      {row.difficulty}
                    </td>
                    <td className="text-center py-4 px-3 text-slate-700 font-medium">
                      {row.risk}
                    </td>
                    <td className="text-center py-4 px-3 text-slate-700 font-medium">
                      {row.returnImage}
                    </td>
                    <td className="py-4 px-3 text-slate-700 font-medium">
                      {row.suitableFor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
