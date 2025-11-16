interface ServiceDetailRecommendedForProps {
  items?: string[];
}

const defaultItems = [
  "いつもの支払いを、どうせならちょっとでもお得にしたい人",
  "あれこれ手を出すより、まずはメインのサービスを1つ決めて育てたい人",
  "難しいことは抜きで、シンプルなやり方からサクッと始めたい人",
];

export const ServiceDetailRecommendedFor = ({
  items = defaultItems,
}: ServiceDetailRecommendedForProps) => {
  return (
    <section className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
        <svg
          className="w-6 h-6 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        こんな人におすすめ
      </h2>

      <div className="rounded-2xl border border-green-200 bg-gradient-to-br from-green-50/50 to-white p-6">
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex gap-3 items-start">
              <span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-700 text-sm font-bold mt-0.5">
                ✓
              </span>
              <span className="text-[15px] text-slate-700 leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
