import Link from "next/link";
import type { Service } from "@/types/service";

interface ServiceCardProps {
  service: Service;
  rank?: number;
}

export const ServiceCard = ({ service, rank }: ServiceCardProps) => {
  const isTopThree = rank !== undefined && rank <= 3;

  return (
    <Link
      href={`/diagnosis/services/${service.id}`}
      className={`group block rounded-xl border p-4 shadow-sm hover:shadow-lg transition-all relative overflow-hidden ${
        isTopThree
          ? rank === 1
            ? "border-yellow-400 bg-gradient-to-br from-yellow-50 to-amber-50 rank-card-1"
            : rank === 2
              ? "border-slate-300 bg-gradient-to-br from-slate-50 to-gray-50 rank-card-2"
              : "border-amber-600 bg-gradient-to-br from-amber-50 to-orange-50 rank-card-3"
          : "border-slate-200 bg-white"
      }`}
    >
      {/* キラキラエフェクト（2位と1位） */}
      {rank === 1 && (
        <>
          <div className="sparkle sparkle-1 sparkle-gold" />
          <div className="sparkle sparkle-2 sparkle-gold" />
          <div className="sparkle sparkle-3 sparkle-gold" />
          <div className="sparkle sparkle-4 sparkle-gold" />
        </>
      )}
      {rank === 2 && (
        <>
          <div className="sparkle sparkle-1 sparkle-silver" />
          <div className="sparkle sparkle-2 sparkle-silver" />
        </>
      )}

      {/* 光るエフェクト */}
      {isTopThree && <div className="rank-glow" />}

      <div className="space-y-2 relative z-10">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            {isTopThree && (
              <span
                className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${
                  rank === 1
                    ? "bg-gradient-to-br from-yellow-400 to-amber-500 text-white rank-badge-1"
                    : rank === 2
                      ? "bg-gradient-to-br from-slate-300 to-gray-400 text-white rank-badge-2"
                      : "bg-gradient-to-br from-amber-600 to-orange-600 text-white rank-badge-3"
                }`}
              >
                {rank}
              </span>
            )}
            <h3
              className={`text-sm font-semibold ${
                isTopThree ? "text-slate-900" : "text-slate-900"
              }`}
            >
              {service.name}
            </h3>
          </div>
          <svg
            className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          {service.description}
        </p>
        {service.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between pt-2">
          <span className="text-[11px] font-semibold text-blue-600 tracking-wide">
            詳細をみる
          </span>
          <svg
            className="w-4 h-4 text-blue-500 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
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
  );
};
