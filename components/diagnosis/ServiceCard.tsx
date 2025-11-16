"use client";

import Link from "next/link";
import type { Service } from "@/types/service";
import { AffiliateScript } from "@/components/AffiliateScript";

interface ServiceCardProps {
  service: Service;
  rank?: number;
  from?: string;
}

const stripAnchorTags = (html: string) => html.replace(/<\/?a\b[^>]*>/gi, "");

export const ServiceCard = ({ service, rank, from }: ServiceCardProps) => {
  const isTopThree = rank !== undefined && rank <= 3;
  const smallImageHtml =
    service.smallImage && service.smallImage.length > 0
      ? stripAnchorTags(service.smallImage[0].html)
      : null;

  // fromパラメータがある場合はクエリパラメータとして追加
  const detailHref = from
    ? `/diagnosis/services/${service.id}?from=${encodeURIComponent(from)}`
    : `/diagnosis/services/${service.id}`;

  // アフィリエイトリンク（今すぐ登録用）
  const affiliateHref =
    service.affiliateLinks && service.affiliateLinks.length > 0
      ? `/api/click/${service.id}`
      : null;

  // キャッチコピー（affiliateHighlights の先頭を使う）
  const catchCopy =
    service.affiliateHighlights && service.affiliateHighlights.length > 0
      ? service.affiliateHighlights[0]
      : null;

  return (
    <div
      className={`group rounded-xl border p-4 md:p-5 shadow-sm hover:shadow-lg transition-all relative overflow-hidden flex flex-col h-[320px] md:h-[340px] ${
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

      <div className="relative z-10 flex flex-col h-full space-y-3">
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
          {smallImageHtml ? (
            service.smallImage &&
            service.smallImage[0].html.includes("<script") ? (
              <div className="flex-shrink-0 w-20 sm:w-24 lg:w-28 overflow-hidden rounded-xl border border-slate-200 bg-white/90 p-2 shadow-inner">
                <AffiliateScript scriptHtml={service.smallImage[0].html} />
              </div>
            ) : (
              <div
                className="flex-shrink-0 w-20 sm:w-24 lg:w-28 overflow-hidden rounded-xl border border-slate-200 bg-white/90 p-2 shadow-inner"
                dangerouslySetInnerHTML={{
                  __html: smallImageHtml,
                }}
              />
            )
          ) : (
            <div className="flex-shrink-0 w-20 sm:w-24 lg:w-28 h-20 sm:h-24 lg:h-28 rounded-xl border border-slate-200 bg-gradient-to-br from-blue-100 via-white to-blue-50 shadow-inner flex items-center justify-center text-lg font-semibold text-blue-500">
              {service.name.charAt(0)}
            </div>
          )}

          <div className="flex-1 min-w-0">
            <h3 className="text-[15px] sm:text-base lg:text-[17px] font-semibold text-slate-900 leading-snug">
              {service.name}
            </h3>
            {service.affiliateCampaignNote && (
              <div className="mt-1.5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500/90 to-pink-500/80 px-3 py-1 text-[10px] lg:text-[11px] font-semibold text-white shadow-[0_8px_18px_rgba(236,72,153,0.35)]">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.053 3.235a1 1 0 0 0 .95.69h3.4c.969 0 1.371 1.24.588 1.81l-2.752 2a1 1 0 0 0-.364 1.118l1.053 3.235c.3.921-.755 1.688-1.54 1.118l-2.752-2a1 1 0 0 0-1.175 0l-2.752 2c-.785.57-1.84-.197-1.54-1.118l1.053-3.235a1 1 0 0 0-.364-1.118l-2.752-2c-.783-.57-.38-1.81.588-1.81h3.4a1 1 0 0 0 .95-.69l1.053-3.235Z" />
                </svg>
                <span className="line-clamp-1">
                  {service.affiliateCampaignNote}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* 説明文とキャッチコピー */}
        <div className="space-y-2 flex-1 min-h-0 overflow-hidden">
          {/* キャッチコピー（あれば表示） */}
          {catchCopy && (
            <p className="text-[12px] lg:text-[13px] font-semibold text-amber-700 leading-relaxed line-clamp-1">
              {catchCopy}
            </p>
          )}

          {/* 説明文 */}
          <p className="text-[12px] lg:text-[13px] text-slate-700 leading-relaxed line-clamp-2">
            {service.description}
          </p>

          {/* タグ/ラベル */}
          {service.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {service.tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-[10px] lg:text-[11px] font-semibold text-blue-700 border border-blue-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* アクションボタン */}
        <div className="flex flex-col sm:flex-row gap-2 pt-3 mt-auto">
          {/* 詳細を見るボタン */}
          <Link
            href={detailHref}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border-2 border-slate-300 bg-white text-slate-900 text-[13px] font-semibold hover:bg-slate-50 hover:border-slate-400 transition-colors duration-200"
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
          {affiliateHref && (
            <a
              href={affiliateHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white text-[13px] font-bold hover:from-blue-700 hover:to-blue-600 transition-all duration-200 shadow-md hover:shadow-lg"
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
    </div>
  );
};
