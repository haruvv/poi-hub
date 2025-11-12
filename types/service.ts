// サービスカテゴリ
export type ServiceCategory =
  | "poi-katsu"
  | "credit-card"
  | "investment"
  | "shopping"
  | "gaming"
  | "meal"
  | "oripa";

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
  tags: string[]; // 例: ["年会費無料", "高還元", "初心者向け"]
  imageUrl?: string; // 将来的にロゴ画像など
}
