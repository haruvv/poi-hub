import Link from "next/link";

export interface NextActionItem {
  title: string;
  description: string;
  href: string;
  label?: string;
}

interface NextActionsSectionProps {
  title?: string;
  description?: string;
  items: NextActionItem[];
}

export const NextActionsSection = ({
  title = "次にやっておきたいこと",
  description = "TODO: なぜこの次の行動が良いのか、1〜2行程度の短い説明",
  items,
}: NextActionsSectionProps) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6 sm:p-8 shadow-md">
      <div className="space-y-6">
        {/* ヘッダー */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 text-blue-600 mb-2">
            <svg
              className="w-6 h-6"
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
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* カードリスト */}
        <div className={`grid gap-4 ${items.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} ${items.length >= 3 ? 'lg:grid-cols-3' : ''}`}>
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-white p-5 hover:border-blue-300 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
            >
              {/* 背景エフェクト */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-100/0 group-hover:from-blue-50/50 group-hover:via-blue-50/30 group-hover:to-blue-100/20 transition-all duration-300" />
              
              <div className="relative space-y-3">
                {/* タイトル */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                {/* 説明 */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
                
                {/* リンク */}
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:gap-3 transition-all">
                  <span>{item.label || "詳しく見る"}</span>
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

