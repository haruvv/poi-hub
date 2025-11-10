import type { Service } from "@/types/service";

export const creditCardServices: Service[] = [
  {
    id: "card-1",
    name: "楽天カード",
    description:
      "年会費永年無料で、楽天市場での還元率が高い定番カード。楽天ポイントをガッツリ貯めたい方に最適。",
    category: "credit-card",
    affiliateLinks: [
      {
        label: "楽天カード",
        url: "https://example.com/rakuten-card",
      },
    ],
    bigImage: [],
    smallImage: undefined,
    listingIncentive: "",
    affiliateContent: [],
    affiliateHighlights: [],
    affiliateCampaignNote: "",
    tags: ["年会費無料", "楽天市場", "高還元"],
  },
  {
    id: "card-2",
    name: "三井住友カード",
    description:
      "Visa/Mastercard/JCB の 3 ブランドから選べる王道カード。安心のセキュリティと使い勝手が魅力。",
    category: "credit-card",
    affiliateLinks: [
      {
        label: "三井住友カード",
        url: "https://example.com/smbc-card",
      },
    ],
    bigImage: [],
    smallImage: undefined,
    listingIncentive: "",
    affiliateContent: [],
    affiliateHighlights: [],
    affiliateCampaignNote: "",
    tags: ["年会費無料", "ブランド選択可", "還元率良好"],
  },
  {
    id: "card-3",
    name: "セゾンカード",
    description:
      "年会費無料でポイントの有効期限なし。セゾン系サービスと組み合わせて、賢くポイントを使い回せます。",
    category: "credit-card",
    affiliateLinks: [
      {
        label: "セゾンカード",
        url: "https://example.com/saison-card",
      },
    ],
    bigImage: [],
    smallImage: undefined,
    listingIncentive: "",
    affiliateContent: [],
    affiliateHighlights: [],
    affiliateCampaignNote: "",
    tags: ["年会費無料", "高還元", "ポイント無期限"],
  },
];
