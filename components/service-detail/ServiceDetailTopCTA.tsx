"use client";

interface ServiceDetailTopCTAProps {
  serviceId: string;
  serviceName: string;
  ctaText?: string;
  message?: string;
  supplement?: string;
}

export const ServiceDetailTopCTA = ({
  serviceId,
  serviceName,
  ctaText = "今すぐ登録する",
  message = "今なら新規登録＆条件クリアで、ポイントや特典を一気に狙えるチャンス。",
  supplement = "キャンペーン内容やポイント付与のタイミングは時期や案件ごとに変わるから、申し込み前に公式ページの最新条件をチェックしておこう。",
}: ServiceDetailTopCTAProps) => {
  return (
    <div className="rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 via-white to-blue-50 p-6 shadow-lg">
      <div className="space-y-4">
        {/* 今やる理由 */}
        <div className="text-center space-y-2">
          <p className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
            {message}
          </p>
        </div>

        {/* メインCTAボタン */}
        <a
          href={`/api/click/${serviceId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white text-base sm:text-lg font-bold py-4 px-6 shadow-[0_8px_24px_rgba(37,99,235,0.4)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.5)] hover:from-blue-700 hover:to-blue-600 transition-all duration-200 active:scale-[0.98]"
        >
          <span className="inline-flex items-center justify-center gap-2">
            {ctaText}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </a>

        {/* 補足テキスト */}
        <p className="text-xs text-center text-slate-500">{supplement}</p>
      </div>
    </div>
  );
};
