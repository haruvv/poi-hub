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
        <div className="rounded-3xl border-2 border-slate-200 bg-white p-6 shadow-lg">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            セカンドチョイス
          </h2>
          {secondChoices.map((choice, idx) => (
            <div key={idx} className="mb-6 last:mb-0">
              <h3 className="text-base font-semibold text-slate-800 mb-2">
                {choice.title}
              </h3>
              <p className="text-sm text-slate-600 mb-3">
                {choice.description}
              </p>
              <div className="space-y-2">
                {choice.services.map((service, sIdx) => (
                  <Link
                    key={sIdx}
                    href={service.href}
                    className="block rounded-xl border border-slate-200 bg-slate-50 p-3 hover:bg-slate-100 transition-colors"
                  >
                    <span className="text-sm font-medium text-slate-700">
                      {service.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="rounded-3xl border-2 border-slate-200 bg-white p-6 shadow-lg overflow-x-auto">
        <h2 className="text-xl font-bold text-slate-900 mb-4">カテゴリ比較</h2>
        <div className="min-w-full">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="text-left py-3 px-2 font-bold text-slate-900">
                  カテゴリ
                </th>
                <th className="text-center py-3 px-2 font-bold text-slate-900">
                  難易度
                </th>
                <th className="text-center py-3 px-2 font-bold text-slate-900">
                  リスク
                </th>
                <th className="text-center py-3 px-2 font-bold text-slate-900">
                  リターンイメージ
                </th>
                <th className="text-left py-3 px-2 font-bold text-slate-900">
                  向いてる人
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                >
                  <td className="py-3 px-2">
                    <Link
                      href={row.href}
                      className="font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      {row.category}
                    </Link>
                  </td>
                  <td className="text-center py-3 px-2 text-slate-700">
                    {row.difficulty}
                  </td>
                  <td className="text-center py-3 px-2 text-slate-700">
                    {row.risk}
                  </td>
                  <td className="text-center py-3 px-2 text-slate-700">
                    {row.returnImage}
                  </td>
                  <td className="py-3 px-2 text-slate-700">
                    {row.suitableFor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
