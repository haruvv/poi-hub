import Link from "next/link";
import type { Service } from "@/types/service";

interface FeaturedServicesProps {
  services: Service[];
}

export const FeaturedServices = ({ services }: FeaturedServicesProps) => {
  return (
    <section className="space-y-6">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-sm font-bold text-blue-700 bg-blue-100 px-4 py-1.5 rounded-full border-2 border-blue-200">
            ✨ 編集部おすすめ
          </span>
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
          今日のいち押し案件
        </h2>
        <p className="text-[16px] font-medium text-slate-600">
          今すぐ始めたい、おすすめサービスをピックアップ
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="group relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-[320px]"
          >
            {/* サービス名 */}
            <div className="space-y-3 mb-4 flex-shrink-0">
              <h3 className="text-xl font-bold text-slate-900">
                {service.name}
              </h3>

              {/* 一言キャッチ */}
              <div className="max-h-[72px] overflow-hidden">
                <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                  {service.description}
                </p>
              </div>
            </div>

            {/* タグ */}
            <div className="flex-1 min-h-0 overflow-hidden">
              {service.tags && service.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                        index === 0
                          ? "bg-amber-100 text-amber-700 border border-amber-200"
                          : "bg-slate-100 text-slate-700 border border-slate-200"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* ボタン */}
            <div className="flex flex-col gap-2 mt-auto">
              {/* 詳細を見るボタン */}
              <Link
                href={`/diagnosis/services/${service.id}?from=top`}
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-slate-100 text-slate-900 text-sm font-semibold hover:bg-slate-200 transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>詳細を見る</span>
              </Link>

              {/* 今すぐ登録ボタン */}
              {service.affiliateLinks && service.affiliateLinks[0] && (
                <a
                  href={service.affiliateLinks[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                  <span>今すぐ登録</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
