import type { Service } from "@/types/service";

export const investmentServices: Service[] = [
  {
    id: "inv-1",
    name: "楽天証券",
    description:
      "つみたてNISAから米国株まで幅広く対応。楽天ポイント投資で気軽に始められる人気ネット証券。",
    category: "investment",
    affiliateLinks: [
      {
        label: "楽天証券",
        url: "https://example.com/rakuten-securities",
      },
    ],
    bigImage: [
      {
        html: `<img src="https://via.placeholder.com/300x250?text=Sample+Banner" alt="楽天証券 サンプルバナー" />`,
        alt: "楽天証券 サンプルバナー",
      },
    ],
    smallImage: [
      {
        html: `<img src="https://via.placeholder.com/125x125?text=Sample" alt="楽天証券 サンプル小バナー" />`,
        alt: "楽天証券 サンプル小バナー",
      },
    ],
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
    affiliateLinks: [
      {
        label: "SBI証券",
        url: "https://example.com/sbi-securities",
      },
    ],
    bigImage: [
      {
        html: `<img src="https://via.placeholder.com/300x250?text=Sample+Banner" alt="SBI証券 サンプルバナー" />`,
        alt: "SBI証券 サンプルバナー",
      },
    ],
    smallImage: [
      {
        html: `<img src="https://via.placeholder.com/125x125?text=Sample" alt="SBI証券 サンプル小バナー" />`,
        alt: "SBI証券 サンプル小バナー",
      },
    ],
    affiliateContent: [],
    affiliateHighlights: [],
    affiliateCampaignNote: "",
    tags: ["手数料安", "投資信託", "長期投資"],
  },
];
