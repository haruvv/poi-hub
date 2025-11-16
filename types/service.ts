// サービスカテゴリ
export type ServiceCategory =
  | "poi-katsu"
  | "credit-card"
  | "investment"
  | "shopping"
  | "gaming"
  | "meal"
  | "oripa"
  | "subscription";

// サービス情報
export interface AffiliateLink {
  label: string;
  url: string;
  source?: string;
  note?: string;
}

export interface AffiliateImage {
  html: string;
  alt?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  category: ServiceCategory;
  affiliateLinks: AffiliateLink[];
  affiliateScript?: string;
  bigImage?: AffiliateImage[];
  smallImage?: AffiliateImage[];
  affiliateContent?: string[];
  affiliateHighlights?: string[];
  affiliateCampaignNote?: string;
  affiliateReferralNote?: string;
  affiliateReferralDetails?: {
    url?: string;
    code?: string;
    perks?: string[];
    conditions?: string[];
  };
  tags: string[];
  imageUrl?: string;
  // カスタムテキスト（サービス詳細ページ用）
  topCtaMessage?: string;
  topCtaSupplement?: string;
  recommendedFor?: string[];
  precautions?: string[];
  bottomCtaMessage?: string;
}
