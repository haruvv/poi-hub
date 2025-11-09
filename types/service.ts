// サービスカテゴリ
export type ServiceCategory =
  | "poi-katsu"
  | "credit-card"
  | "investment"
  | "point-exchange";

// サービス情報
export interface Service {
  id: string;
  name: string;
  description: string;
  category: ServiceCategory;
  affiliateUrl: string;
  tags: string[]; // 例: ["年会費無料", "高還元", "初心者向け"]
  imageUrl?: string; // 将来的にロゴ画像など
}
