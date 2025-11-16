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
    <section className="space-y-6">
      {secondChoices && secondChoices.length > 0 && (
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-md">

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-5">
              セカンドチョイス
            </h2>
            {secondChoices.map((choice, idx) => (
              <div key={idx} className="mb-6 last:mb-0">
                <h3 className="text-base font-bold text-slate-800 mb-2">
                  {choice.title}
                </h3>
                <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                  {choice.description}
                </p>
                <div className="space-y-2">
                  {choice.services.map((service, sIdx) => (
                    <Link
                      key={sIdx}
                      href={service.href}
                      className="group block w-full text-center rounded-lg bg-emerald-600 text-white text-sm font-bold py-3 px-6 shadow-sm hover:shadow-md hover:bg-emerald-700 transition-all duration-200"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <span className="service-name">{service.name}</span>の詳細を見る
                        <svg
                          className="w-4 h-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
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

      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-md">
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-5">
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
