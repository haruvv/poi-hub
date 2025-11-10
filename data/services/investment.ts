import type { Service } from "@/types/service";

export const investmentServices: Service[] = [
  {
    id: "inv-1",
    name: "楽天証券",
    description:
      "つみたてNISAから米国株まで幅広く対応。楽天ポイント投資で気軽に始められる人気ネット証券。",
    category: "investment",
    affiliateUrl: "https://example.com/rakuten-securities",
    affiliateLinks: [
      {
        label: "楽天証券",
        url: "https://example.com/rakuten-securities",
      },
    ],
    listingIncentive: "",
    affiliateContent: [],
    affiliateHighlights: [],
    affiliateCampaignNote: "",
    tags: ["手数料安", "初心者向け", "楽天連携"],
  },
  {
    id: "inv-2",
    name: "SBI証券",
    description:
      "国内株・米国株ともに取扱銘柄が豊富。低コスト＆高機能でメイン証券として愛用する人多数。",
    category: "investment",
    affiliateUrl: "https://example.com/sbi-securities",
    affiliateLinks: [
      {
        label: "SBI証券",
        url: "https://example.com/sbi-securities",
      },
    ],
    listingIncentive: "",
    affiliateContent: [],
    affiliateHighlights: [],
    affiliateCampaignNote: "",
    tags: ["手数料安", "投資信託", "長期投資"],
  },
];
