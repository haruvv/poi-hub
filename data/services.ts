import type { Service } from "@/types/service";

export const services: Service[] = [
  // ポイ活カテゴリ
  {
    id: "poi-1",
    name: "ハピタス",
    description:
      "ポイ活の定番。ECサイト経由でポイント還元。登録だけでもポイントがもらえる案件も多数。",
    category: "poi-katsu",
    affiliateUrl: "https://example.com/hapitas",
    tags: ["登録特典あり", "初心者向け", "高還元率"],
  },
  {
    id: "poi-2",
    name: "モッピー",
    description: "アンケートやゲームでポイント獲得。スマホで手軽に始められる。",
    category: "poi-katsu",
    affiliateUrl: "https://example.com/moppy",
    tags: ["アンケート", "ゲーム", "手軽"],
  },
  {
    id: "poi-3",
    name: "楽天ポイント",
    description:
      "楽天市場での買い物でポイント還元。楽天カードと組み合わせると還元率アップ。",
    category: "poi-katsu",
    affiliateUrl: "https://example.com/rakuten",
    tags: ["楽天市場", "ポイント還元", "定番"],
  },
  // クレカカテゴリ
  {
    id: "card-1",
    name: "楽天カード",
    description:
      "年会費永年無料で、楽天市場での還元率が高い。楽天ユーザーには最適。",
    category: "credit-card",
    affiliateUrl: "https://example.com/rakuten-card",
    tags: ["年会費無料", "楽天市場", "高還元"],
  },
  {
    id: "card-2",
    name: "三井住友カード",
    description:
      "年会費無料で、Visa/Mastercard/JCBの3ブランドから選べる。還元率も良好。",
    category: "credit-card",
    affiliateUrl: "https://example.com/smbc-card",
    tags: ["年会費無料", "ブランド選択可", "還元率良好"],
  },
  {
    id: "card-3",
    name: "セゾンカード",
    description:
      "年会費無料で、ポイント還元率が高い。セゾン系サービスとの相性も良い。",
    category: "credit-card",
    affiliateUrl: "https://example.com/saison-card",
    tags: ["年会費無料", "高還元", "セゾン系"],
  },
  // 投資カテゴリ
  {
    id: "inv-1",
    name: "楽天証券",
    description: "手数料が安く、初心者でも始めやすい。楽天ポイントとも連携。",
    category: "investment",
    affiliateUrl: "https://example.com/rakuten-securities",
    tags: ["手数料安", "初心者向け", "楽天連携"],
  },
  {
    id: "inv-2",
    name: "SBI証券",
    description: "手数料が安く、投資信託の種類も豊富。長期投資に適している。",
    category: "investment",
    affiliateUrl: "https://example.com/sbi-securities",
    tags: ["手数料安", "投資信託", "長期投資"],
  },
];

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((service) => service.category === category);
}
