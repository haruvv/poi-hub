import type { Service } from "@/types/service";

export const pointExchangeServices: Service[] = [
  {
    id: "walk-1",
    name: "Cashwalk",
    description:
      "歩くだけでコインが貯まり、Amazon ギフト券などに交換できるシンプル歩数計アプリ。広告が控えめで続けやすいのが魅力。",
    category: "point-exchange",
    affiliateLinks: [
      {
        label: "Cashwalk",
        url: "https://example.com/cashwalk",
      },
    ],
    bigImage: [
      {
        html: `<img src="https://via.placeholder.com/300x250?text=Sample+Banner" alt="Cashwalk サンプルバナー" />`,
        alt: "Cashwalk サンプルバナー",
      },
    ],
    smallImage: [
      {
        html: `<img src="https://via.placeholder.com/125x125?text=Sample" alt="Cashwalk サンプル小バナー" />`,
        alt: "Cashwalk サンプル小バナー",
      },
    ],
    listingIncentive: "",
    affiliateContent: [],
    affiliateHighlights: [],
    affiliateCampaignNote: "",
    tags: ["広告なし", "歩くだけ", "お手軽"],
  },
  {
    id: "walk-2",
    name: "PUI",
    description:
      "歩数やミッション達成でポイントが貯まる“歩数計 × 育成”アプリ。キャラクター要素でゲーム感覚に続けられるのがポイント。",
    category: "point-exchange",
    affiliateLinks: [
      {
        label: "PUI",
        url: "https://example.com/pui",
      },
    ],
    bigImage: [
      {
        html: `<img src="https://via.placeholder.com/300x250?text=Sample+Banner" alt="PUI サンプルバナー" />`,
        alt: "PUI サンプルバナー",
      },
    ],
    smallImage: [
      {
        html: `<img src="https://via.placeholder.com/125x125?text=Sample" alt="PUI サンプル小バナー" />`,
        alt: "PUI サンプル小バナー",
      },
    ],
    listingIncentive: "",
    affiliateContent: [],
    affiliateHighlights: [],
    affiliateCampaignNote: "",
    tags: ["キャラ育成", "初心者向け", "使いやすい"],
  },
  {
    id: "walk-3",
    name: "Powl",
    description:
      "アンケート回答・ミニゲーム・サービス利用などでポイントを貯めて、少額からギフト券へ交換できるお小遣いアプリ。",
    category: "point-exchange",
    affiliateLinks: [
      {
        label: "Powl",
        url: "https://example.com/powl",
      },
    ],
    bigImage: [
      {
        html: `<img src="https://via.placeholder.com/300x250?text=Sample+Banner" alt="Powl サンプルバナー" />`,
        alt: "Powl サンプルバナー",
      },
    ],
    smallImage: [
      {
        html: `<img src="https://via.placeholder.com/125x125?text=Sample" alt="Powl サンプル小バナー" />`,
        alt: "Powl サンプル小バナー",
      },
    ],
    listingIncentive: "",
    affiliateContent: [],
    affiliateHighlights: [],
    affiliateCampaignNote: "",
    tags: ["アンケートで貯まる", "ミニゲーム", "少額交換"],
  },
  {
    id: "walk-4",
    name: "トリマ",
    description:
      "歩数と移動距離でマイルが貯まる人気アプリ。動画視聴で効率アップでき、通勤・通学ついでにポイ活がはかどります。",
    category: "point-exchange",
    affiliateLinks: [
      {
        label: "トリマ",
        url: "https://example.com/torima",
      },
    ],
    bigImage: [
      {
        html: `<img src="https://via.placeholder.com/300x250?text=Sample+Banner" alt="トリマ サンプルバナー" />`,
        alt: "トリマ サンプルバナー",
      },
    ],
    smallImage: [
      {
        html: `<img src="https://via.placeholder.com/125x125?text=Sample" alt="トリマ サンプル小バナー" />`,
        alt: "トリマ サンプル小バナー",
      },
    ],
    listingIncentive: "",
    affiliateContent: [],
    affiliateHighlights: [],
    affiliateCampaignNote: "",
    tags: ["移動で貯まる", "通勤・通学向け", "動画でブースト"],
  },
];
