import type { Metadata } from "next";
import { HeaderBar } from "@/components/layout/HeaderBar";
import { MainHero } from "@/components/top/MainHero";
import { ServiceCategories } from "@/components/top/ServiceCategories";
import { FeaturedSection } from "@/components/top/FeaturedSection";
import { FeaturedServices } from "@/components/top/FeaturedServices";
import { TrustSection } from "@/components/top/TrustSection";
import { getServiceById } from "@/data/services";

export const metadata: Metadata = {
  title: "ポイ活おすすめ｜人気サービス比較・診断サイト【ポイ活なび】",
  description:
    "ポイ活おすすめサービスを厳選紹介！高還元・初心者向け・人気のポイ活サイトを比較できます。30秒の無料診断で、あなたに合ったおすすめポイ活サービスが見つかります。",
  openGraph: {
    title: "ポイ活おすすめ｜人気サービス比較・診断サイト【ポイ活なび】",
    description:
      "ポイ活おすすめサービスを厳選紹介！高還元・初心者向け・人気のポイ活サイトを比較できます。30秒の無料診断で、あなたに合ったおすすめポイ活サービスが見つかります。",
    url: "https://poikatsu-navi.com",
    siteName: "ポイ活なび",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ポイ活なび - あなたに合ったお得な始め方が見つかる",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ポイ活おすすめ｜人気サービス比較・診断サイト【ポイ活なび】",
    description:
      "ポイ活おすすめサービスを厳選紹介！高還元・初心者向け・人気のポイ活サイトを比較できます。30秒の無料診断で、あなたに合ったおすすめポイ活サービスが見つかります。",
    images: ["/logo.png"],
  },
};

export default function Home() {
  // いち押し案件のサービスID（後で編集可能）
  const featuredServiceIds = ["poi-1", "oripa-1", "credit-1"];

  // サービスデータを取得
  const featuredServices = featuredServiceIds
    .map((id) => getServiceById(id))
    .filter(
      (service): service is NonNullable<typeof service> => service !== undefined
    );

  // 構造化データ（JSON-LD）
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ポイ活なび",
    url: "https://poikatsu-navi.com",
    description:
      "ポイ活おすすめサービスを厳選紹介！高還元・初心者向け・人気のポイ活サイトを比較できます。",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://poikatsu-navi.com/diagnosis",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <HeaderBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="mx-auto max-w-4xl px-4 pt-8 pb-20 space-y-12 sm:space-y-16">
        {/* (1) メインヒーロー - 診断メイン構成 */}
        <MainHero />

        {/* (2) 今日のいち押し案件 */}
        {featuredServices.length > 0 && (
          <FeaturedServices services={featuredServices} />
        )}

        {/* (3) 特集コンテンツ */}
        <FeaturedSection />

        {/* (4) サービスカテゴリ */}
        <ServiceCategories />

        {/* (5) 安心・信頼セクション */}
        <TrustSection />
      </div>
    </main>
  );
}
