import type { Service, ServiceCategory } from "@/types/service";

export const services: Service[] = [
  // ポイ活カテゴリ
  {
    id: "poi-1",
    name: "ハピタス",
    description:
      "いつものネットショッピングがそのままポイントに！迷ったらハピタス！ポイ活デビューにちょうどいい定番サイト！",
    category: "poi-katsu",
    affiliateUrl: "https://example.com/hapitas",
    tags: ["高還元", "手数料ほぼなし", "初心者"],
  },
  {
    id: "poi-2",
    name: "モッピー",
    description:
      "案件もゲームも盛りだくさんでワクワク！「しっかり貯めたい！」人の心強い相棒サイト！",
    category: "poi-katsu",
    affiliateUrl: "https://example.com/moppy",
    tags: ["高額案件", "ミッション充実", "手軽"],
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
  // ポイント貯めて交換できるアプリカテゴリ
  {
    id: "walk-1",
    name: "Cashwalk",
    description:
      "歩くだけでコインが貯まり、ギフト券に交換できるシンプルな歩数計アプリ。動画広告なしで続けやすいのが魅力。",
    category: "point-exchange",
    affiliateUrl: "https://example.com/cashwalk",
    tags: ["広告なし", "歩くだけ", "お手軽"],
  },
  {
    id: "walk-2",
    name: "PUI",
    description:
      "歩数やミッション達成でポイントが貯まり、キャラ育成やイベント要素でゲーム感覚で続けられる歩数計アプリ。",
    category: "point-exchange",
    affiliateUrl: "https://example.com/pui",
    tags: ["キャラ育成", "初心者向け", "使いやすい"],
  },
  {
    id: "walk-3",
    name: "Powl",
    description:
      "アンケート回答やミニゲーム、サービス利用でポイントを貯めて、少額からギフト券などに交換できるお小遣いアプリ。",
    category: "point-exchange",
    affiliateUrl: "https://example.com/powl",
    tags: ["アンケートで貯まる", "ミニゲーム", "少額交換"],
  },
  {
    id: "walk-4",
    name: "トリマ",
    description:
      "歩数と移動距離でマイルが貯まり、動画視聴で効率アップできる「通勤・通学」と相性の良いポイ活アプリ。",
    category: "point-exchange",
    affiliateUrl: "https://example.com/torima",
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
