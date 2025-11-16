"use client";

interface ServiceDetailBottomCTAProps {
  serviceId: string;
  serviceName: string;
  ctaText?: string;
  message?: string;
}

export const ServiceDetailBottomCTA = ({
  serviceId,
  serviceName,
  ctaText = "今すぐ登録する",
  message = "TODO: ここまで読んでアリかもと思った人への一言",
}: ServiceDetailBottomCTAProps) => {
  return (
    <section className="rounded-3xl border-2 border-blue-300 bg-gradient-to-br from-blue-100 via-blue-50 to-white p-8 sm:p-10 shadow-xl text-center space-y-6">
      {/* 締めの一言 */}
      <div className="space-y-2">
        <p className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed">
          {message}
        </p>
        <p className="text-sm sm:text-base text-slate-600">
          {serviceName === "アメフリ"
            ? "アメフリで、お得な毎日を始めよう！"
            : serviceName === "どっかん！トレカ"
              ? "どっかん！トレカで、オリパを楽しもう！"
              : `${serviceName}で、お得な生活を始めよう！`}
        </p>
      </div>

      {/* メインCTAボタン */}
      <a
        href={`/api/click/${serviceId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white text-lg font-bold py-5 px-10 shadow-[0_8px_24px_rgba(37,99,235,0.4)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.5)] hover:from-blue-700 hover:to-blue-600 transition-all duration-200 hover:scale-105 active:scale-[0.98]"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
        {ctaText}
        <svg
          className="w-6 h-6"
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
      </a>

      {/* 補足 */}
      <p className="text-xs text-slate-500">※ 外部サイトへ移動します</p>
    </section>
  );
};
