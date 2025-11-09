import type { Service, ServiceCategory } from "@/types/service";

export const services: Service[] = [
  // ポイ活カテゴリ
  {
    id: "poi-1",
    name: "ハピタス",
    description:
      "いつものネットショッピングがそのままポイントに！迷ったらハピタス。ポイ活デビューにちょうどいい定番サイトです。",
    category: "poi-katsu",
    affiliateUrl: "https://example.com/hapitas",
    affiliateLinks: [
      {
        label: "ハピタス（ASPリンク）",
        url: "https://example.com/hapitas",
      },
    ],
    affiliateContent: [],
    affiliateHighlightsTitle: undefined,
    affiliateHighlights: [],
    affiliateCampaignNote: "",
    tags: ["高還元", "手数料ほぼなし", "初心者"],
  },
  {
    id: "poi-2",
    name: "モッピー",
    description:
      "案件もゲームも盛りだくさん！「しっかり貯めたい」人の心強い定番サイト。毎日チェックで効率アップ。",
    category: "poi-katsu",
    affiliateUrl: "https://example.com/moppy",
    affiliateLinks: [
      {
        label: "モッピー（ASPリンク）",
        url: "https://example.com/moppy",
      },
    ],
    affiliateContent: [],
    affiliateHighlightsTitle: undefined,
    affiliateHighlights: [],
    affiliateCampaignNote: "",
    tags: ["高額案件", "ミッション充実", "手軽"],
  },
  {
    id: "poi-3",
    name: "ワラウ",
    description:
      "運営20年以上・会員数260万人超の老舗ポイ活サイト。広告利用も、ミニゲームも、アンケートも一気にこなせます。",
    category: "poi-katsu",
    affiliateUrl: "https://px.a8.net/svt/ejp?a8mat=45I5TH+73EZAQ+3ZZC+5YZ77",
    affiliateLinks: [
      {
        label: "ワラウ（ASPリンク）",
        url: "https://px.a8.net/svt/ejp?a8mat=45I5TH+73EZAQ+3ZZC+5YZ77",
      },
    ],
    affiliateContent: [
      "「ワラウ」は登録無料で使えるポイ活の定番サイト！",
      "約3,000以上の広告利用でポイントが貯まるサービスを掲載中。ショッピングやサービス申し込みでガッツリ貯まります。",
      "その他にもゲームや雑誌を読んだり、アンケートに答えたりと、毎日ポイントを貯めるチャンスが盛りだくさん。貯めたポイントは1ポイント＝1円相当で、Tポイントなどの共通ポイントや電子マネー、ギフト券、銀行振込など30種類以上の交換先に交換可能！",
    ],
    affiliateHighlightsTitle: "ワラウのここがすごい！",
    affiliateHighlights: [
      "運営実績20年以上、登録ユーザー数260万人の老舗ポイントサイト",
      "普段のネットショッピングがグンとおトクに！",
      "無料ゲームで遊ぶだけでワラウポイントが貯まる",
      "30種類以上もの豊富な交換先！",
      "ポイント有効期限が半永久的でムダがない！",
    ],
    affiliateCampaignNote:
      "登録後、最大300円分がもらえるキャンペーン実施中。この機会にぜひご登録ください。",
    tags: ["老舗サイト", "交換先豊富", "ゲームで貯まる"],
  },
  // クレカカテゴリ
  {
    id: "card-1",
    name: "楽天カード",
    description:
      "年会費永年無料で、楽天市場での還元率が高い定番カード。楽天ポイントをガッツリ貯めたい方に最適。",
    category: "credit-card",
    affiliateUrl: "https://example.com/rakuten-card",
    affiliateLinks: [
      {
        label: "楽天カード（ASPリンク）",
        url: "https://example.com/rakuten-card",
      },
    ],
    affiliateContent: [],
    affiliateHighlightsTitle: undefined,
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
    affiliateUrl: "https://example.com/smbc-card",
    affiliateLinks: [
      {
        label: "三井住友カード（ASPリンク）",
        url: "https://example.com/smbc-card",
      },
    ],
    affiliateContent: [],
    affiliateHighlightsTitle: undefined,
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
    affiliateUrl: "https://example.com/saison-card",
    affiliateLinks: [
      {
        label: "セゾンカード（ASPリンク）",
        url: "https://example.com/saison-card",
      },
    ],
    affiliateContent: [],
    affiliateHighlightsTitle: undefined,
    affiliateHighlights: [],
    affiliateCampaignNote: "",
    tags: ["年会費無料", "高還元", "ポイント無期限"],
  },
  // 投資カテゴリ
  {
    id: "inv-1",
    name: "楽天証券",
    description:
      "つみたてNISAから米国株まで幅広く対応。楽天ポイント投資で気軽に始められる人気ネット証券。",
    category: "investment",
    affiliateUrl: "https://example.com/rakuten-securities",
    affiliateLinks: [
      {
        label: "楽天証券（ASPリンク）",
        url: "https://example.com/rakuten-securities",
      },
    ],
    affiliateContent: [],
    affiliateHighlightsTitle: undefined,
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
        label: "SBI証券（ASPリンク）",
        url: "https://example.com/sbi-securities",
      },
    ],
    affiliateContent: [],
    affiliateHighlightsTitle: undefined,
    affiliateHighlights: [],
    affiliateCampaignNote: "",
    tags: ["手数料安", "投資信託", "長期投資"],
  },
  // ポイント貯めて交換できるアプリカテゴリ
  {
    id: "walk-1",
    name: "Cashwalk",
    description:
      "歩くだけでコインが貯まり、Amazon ギフト券などに交換できるシンプル歩数計アプリ。広告が控えめで続けやすいのが魅力。",
    category: "point-exchange",
    affiliateUrl: "https://example.com/cashwalk",
    affiliateLinks: [
      {
        label: "Cashwalk（ASPリンク）",
        url: "https://example.com/cashwalk",
      },
    ],
    affiliateContent: [],
    affiliateHighlightsTitle: undefined,
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
        label: "PUI（ASPリンク）",
        url: "https://example.com/pui",
      },
    ],
    affiliateContent: [],
    affiliateHighlightsTitle: undefined,
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
        label: "Powl（ASPリンク）",
        url: "https://example.com/powl",
      },
    ],
    affiliateContent: [],
    affiliateHighlightsTitle: undefined,
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
        label: "トリマ（ASPリンク）",
        url: "https://example.com/torima",
      },
    ],
    affiliateContent: [],
    affiliateHighlightsTitle: undefined,
    affiliateHighlights: [],
    affiliateCampaignNote: "",
    tags: ["移動で貯まる", "通勤・通学向け", "動画でブースト"],
  },
];

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((service) => service.category === category);
}

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}

export function getAllServices(): Service[] {
  return services;
}
