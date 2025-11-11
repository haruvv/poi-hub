import Link from "next/link";
import type { Service } from "@/types/service";

interface RecommendedServicesProps {
  strategyTitle: string;
  strategyDescription: string;
  services: Service[];
  categoryLabel: string;
  resultsParams?: string; // 診断結果ページのパラメータ（URLクエリ文字列）
}

// アンカータグを削除するヘルパー関数
const stripAnchorTags = (html: string) => html.replace(/<\/?a\b[^>]*>/gi, "");

export const RecommendedServices = ({
  strategyTitle,
  strategyDescription,
  services,
  categoryLabel,
  resultsParams,
}: RecommendedServicesProps) => {
  const getServiceLabel = (index: number) => {
    if (index === 0) return "第1候補";
    if (index === 1) return "定番";
    return "サブ候補";
  };

  const getServiceLabelColor = (index: number) => {
    if (index === 0) return "bg-gradient-to-r from-amber-500 to-orange-500";
    if (index === 1) return "bg-gradient-to-r from-slate-500 to-slate-600";
    return "bg-gradient-to-r from-blue-500 to-cyan-500";
  };

  const getServiceHighlights = (service: Service) => {
    const highlights: string[] = [];

    // タグから主要な特徴を抽出
    if (service.tags.length > 0) {
      highlights.push(service.tags[0]);
    }
    if (service.tags.length > 1) {
      highlights.push(service.tags[1]);
    }

    // カテゴリ別の特徴
    if (service.category === "credit-card") {
      highlights.push("年会費無料");
    } else if (service.category === "investment") {
      highlights.push("少額から始められる");
    } else {
      highlights.push("初心者向け");
    }

    return highlights.slice(0, 3);
  };

  return (
    <section className="space-y-8">
      <div className="text-center space-y-3">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          {strategyTitle}
        </h2>
        <p className="text-[15px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {strategyDescription}
        </p>
      </div>

      <div className="space-y-5">
        {services.slice(0, 3).map((service, index) => {
          const primaryLink = service.affiliateLinks[0];
          const highlights = getServiceHighlights(service);
          const smallImageHtml =
            service.smallImage && service.smallImage.length > 0
              ? stripAnchorTags(service.smallImage[0].html)
              : null;

          return (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/90 backdrop-blur-sm p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* 背景グラデーション */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-start gap-5 mb-4">
                  {/* サービス画像 */}
                  {smallImageHtml ? (
                    <div
                      className="flex-shrink-0 w-24 sm:w-28 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-2.5 shadow-[0_2px_12px_rgba(0,0,0,0.08)] group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow"
                      dangerouslySetInnerHTML={{
                        __html: smallImageHtml,
                      }}
                    />
                  ) : (
                    <div className="flex-shrink-0 w-24 sm:w-28 h-24 sm:h-28 rounded-2xl border border-slate-200/80 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-50 shadow-[0_2px_12px_rgba(0,0,0,0.08)] flex items-center justify-center text-2xl font-bold text-blue-600">
                      {service.name.charAt(0)}
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span
                        className={`inline-flex items-center rounded-xl ${getServiceLabelColor(
                          index
                        )} px-3 py-1 text-[11px] font-bold text-white shadow-sm`}
                      >
                        {getServiceLabel(index)}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                        {service.name}
                      </h3>
                    </div>
                    <p className="text-[14px] text-slate-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100/80 px-3 py-1.5 text-[13px] font-medium text-slate-700 border border-slate-200/60"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {highlight}
                    </span>
                  ))}
                </div>

                {primaryLink && (
                  <Link
                    href={`/diagnosis/services/${service.id}${
                      resultsParams ? `?from=results&${resultsParams}` : ""
                    }`}
                    className="group/btn relative block w-full text-center rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white text-[15px] font-bold py-3.5 px-6 shadow-[0_4px_16px_rgba(59,130,246,0.4)] hover:shadow-[0_6px_24px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      詳細を見る
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
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-[11px] text-slate-500 text-center">
        ※広告リンクを含みます
      </p>
    </section>
  );
};
