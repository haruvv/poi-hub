import type { Service } from "@/types/service";
import { FALLBACK_IMAGE_HTML, createImageHTML } from "./shared";

export const investmentServices: Service[] = [
  {
    id: "inv-1",
    name: "楽天証券",
    description:
      "つみたてNISAから米国株まで幅広く対応楽天ポイント投資で気軽に始められる人気ネット証券",
    category: "investment",
    affiliateLinks: [
      {
        label: "楽天証券",
        url: "https://example.com/rakuten-securities",
      },
    ],
    bigImage: [
      {
        html: FALLBACK_IMAGE_HTML,
        alt: "楽天証券 サンプルバナー",
      },
    ],
    smallImage: [
      {
        html: FALLBACK_IMAGE_HTML,
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
      "国内株・米国株ともに取扱銘柄が豊富低コスト＆高機能でメイン証券として愛用する人多数",
    category: "investment",
    affiliateLinks: [
      {
        label: "SBI証券",
        url: "https://example.com/sbi-securities",
      },
    ],
    bigImage: [
      {
        html: FALLBACK_IMAGE_HTML,
        alt: "SBI証券 サンプルバナー",
      },
    ],
    smallImage: [
      {
        html: FALLBACK_IMAGE_HTML,
        alt: "SBI証券 サンプル小バナー",
      },
    ],
    affiliateContent: [],
    affiliateHighlights: [],
    affiliateCampaignNote: "",
    tags: ["手数料安", "投資信託", "長期投資"],
  },
];
