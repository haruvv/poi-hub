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

      <div className="relative z-10 space-y-3">
        {isTopThree && (
          <span
            className={`absolute -top-3 -left-3 inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white shadow-lg ${
              rank === 1
                ? "bg-gradient-to-br from-yellow-400 to-amber-500 rank-badge-1"
                : rank === 2
                  ? "bg-gradient-to-br from-slate-300 to-gray-400 rank-badge-2"
                  : "bg-gradient-to-br from-amber-600 to-orange-600 rank-badge-3"
            }`}
          >
            {rank}
          </span>
        )}

        <div className="flex items-center gap-3">
          {service.listingImage ? (
            <div
              className="flex-shrink-0 w-20 sm:w-24 overflow-hidden rounded-xl border border-slate-200 bg-white/90 p-2 shadow-inner"
              dangerouslySetInnerHTML={{ __html: service.listingImage.html }}
            />
          ) : (
            <div className="flex-shrink-0 w-20 sm:w-24 h-20 sm:h-24 rounded-xl border border-slate-200 bg-gradient-to-br from-blue-100 via-white to-blue-50 shadow-inner flex items-center justify-center text-lg font-semibold text-blue-500">
              {service.name.charAt(0)}
            </div>
          )}

          <div className="flex-1">
            <h3 className="text-[15px] sm:text-base font-semibold text-slate-900 leading-snug">
              {service.name}
            </h3>
            {service.listingIncentive && (
              <div className="mt-1 inline-flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50/90 px-2.5 py-1 text-[10px] font-semibold text-amber-700 shadow-sm">
                <svg
                  className="w-3 h-3 text-amber-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.053 3.235a1 1 0 00.95.69h3.4c.969 0 1.371 1.24.588 1.81l-2.752 2a1 1 0 00-.364 1.118l1.053 3.235c.3.921-.755 1.688-1.54 1.118l-2.752-2a1 1 0 00-1.175 0l-2.752 2c-.785.57-1.84-.197-1.54-1.118l1.053-3.235a1 1 0 00-.364-1.118l-2.752-2c-.783-.57-.38-1.81.588-1.81h3.4a1 1 0 00.95-.69l1.053-3.235z" />
                </svg>
                <span>{service.listingIncentive}</span>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-3">
            {service.description}
          </p>

          {service.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-[9px] font-medium text-blue-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

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
