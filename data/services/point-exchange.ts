import type { Service } from "@/types/service";

export const pointExchangeServices: Service[] = [
  {
    id: "walk-1",
    name: "Cashwalk",
    description:
      "歩くだけでコインが貯まり、Amazon ギフト券などに交換できるシンプル歩数計アプリ。広告が控えめで続けやすいのが魅力。",
    category: "point-exchange",
    affiliateUrl: "https://example.com/cashwalk",
    affiliateLinks: [
      {
        label: "Cashwalk",
        url: "https://example.com/cashwalk",
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
    affiliateUrl: "https://example.com/pui",
    affiliateLinks: [
      {
        label: "PUI",
        url: "https://example.com/pui",
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
    affiliateUrl: "https://example.com/powl",
    affiliateLinks: [
      {
        label: "Powl",
        url: "https://example.com/powl",
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
    affiliateUrl: "https://example.com/torima",
    affiliateLinks: [
      {
        label: "トリマ",
        url: "https://example.com/torima",
      },
    ],
    listingIncentive: "",
    affiliateContent: [],
    affiliateHighlights: [],
    affiliateCampaignNote: "",
    tags: ["移動で貯まる", "通勤・通学向け", "動画でブースト"],
  },
];
