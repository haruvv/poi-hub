import Link from "next/link";
import type { Service } from "@/types/service";

interface RecommendedServicesProps {
  strategyTitle: string;
  strategyDescription: string;
  services: Service[];
  categoryLabel: string;
}

export const RecommendedServices = ({
  strategyTitle,
  strategyDescription,
  services,
  categoryLabel,
}: RecommendedServicesProps) => {
  const getServiceLabel = (index: number) => {
    if (index === 0) return "第1候補";
    if (index === 1) return "定番";
    return "サブ候補";
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
    <section className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold text-slate-900">{strategyTitle}</h2>
        <p className="text-sm text-slate-600">{strategyDescription}</p>
      </div>

      <div className="space-y-4">
        {services.slice(0, 3).map((service, index) => {
          const primaryLink = service.affiliateLinks[0];
          const highlights = getServiceHighlights(service);

          return (
            <div
              key={service.id}
              className="rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-[10px] font-bold text-blue-700">
                      {getServiceLabel(index)}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      {service.name}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">
                    {service.description}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-slate-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {primaryLink && (
                <Link
                  href={`/diagnosis/services/${service.id}`}
                  className="block w-full text-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-bold py-2.5 hover:from-blue-500 hover:to-blue-400 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  詳細を見る
                </Link>
              )}
            </div>
          );
        })}
      </div>

      <p className="text-[10px] text-slate-500 text-center">
        ※広告リンクを含みます
      </p>
    </section>
  );
};
