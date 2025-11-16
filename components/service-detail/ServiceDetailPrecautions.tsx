interface ServiceDetailPrecautionsProps {
  items?: string[];
}

const defaultItems = [
  "ポイント交換には最低交換額があることが多いので、少額利用だけだと交換まで時間がかかりがち",
  "ポイントが反映されるまでに数日〜数カ月かかる案件もあるので、「すぐ使える前提」では見ないほうが安心",
  "退会や登録情報の変更をする前に、貯まっているポイントや申請中のポイントがどう扱われるかだけは事前にチェックしておきたい",
];

export const ServiceDetailPrecautions = ({
  items = defaultItems,
}: ServiceDetailPrecautionsProps) => {
  return (
    <section className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
        <svg
          className="w-6 h-6 text-amber-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        やる前の注意点
      </h2>

      <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50/50 to-white p-6">
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex gap-3 items-start">
              <span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-sm font-bold mt-0.5">
                !
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
