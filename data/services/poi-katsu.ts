import type { Service } from "@/types/service";

export const poiKatsuServices: Service[] = [
  {
    id: "poi-1",
    name: "アメフリ",
    description:
      "高還元案件と毎日ポイントがもらえるガチャでサクサク貯まるポイ活サイト！！“ベストポイント”企画で他社よりお得な案件も狙えるから、ガチ勢にもおすすめ！！",
    category: "poi-katsu",
    affiliateLinks: [
      {
        label: "ハピタス",
        url: "https://example.com/hapitas",
      },
    ],
    bigImage: [],
    smallImage: undefined,
    listingIncentive: "",
    affiliateContent: [],
    affiliateHighlights: [],
    affiliateCampaignNote: "",
    tags: ["高還元", "毎日ガチャ", "ガチ勢におすすめ"],
  },
  {
    id: "poi-2",
    name: "ワラウ",
    description:
      "運営20年以上・会員数260万人超の老舗ポイ活サイト。広告利用も、ミニゲームも、アンケートも一気にこなせます。",
    category: "poi-katsu",
    affiliateLinks: [
      {
        label: "ワラウ",
        url: "https://px.a8.net/svt/ejp?a8mat=45I5TH+73EZAQ+3ZZC+5YZ77",
      },
    ],
    bigImage: [
      {
        html: `<a href="https://px.a8.net/svt/ejp?a8mat=45I5TH+73EZAQ+3ZZC+5ZU29" rel="nofollow"><img border="0" width="300" height="250" alt="ワラウ バナー" src="https://www26.a8.net/svt/bgt?aid=251110133429&wid=001&eno=01&mid=s00000018660001007000&mc=1"></a><img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=45I5TH+73EZAQ+3ZZC+5ZU29" alt="">`,
        alt: "ワラウ バナー",
      },
    ],
    smallImage: {
      html: `<a href="https://px.a8.net/svt/ejp?a8mat=45I5TH+73EZAQ+3ZZC+60H7L" rel="nofollow"><img border="0" width="125" height="125" alt="ワラウ 小バナー" src="https://www20.a8.net/svt/bgt?aid=251110133429&wid=001&eno=01&mid=s00000018660001010000&mc=1"></a><img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=45I5TH+73EZAQ+3ZZC+60H7L" alt="">`,
      alt: "ワラウ 小バナー",
    },
    listingIncentive: "登録後、最大300円分の特典がもらえる！",
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
  {
    id: "poi-3",
    name: "モッピー",
    description:
      "案件もゲームも盛りだくさん！「しっかり貯めたい」人の心強い定番サイト。毎日チェックで効率アップ。",
    category: "poi-katsu",
    affiliateLinks: [
      {
        label: "モッピー",
        url: "https://example.com/moppy",
      },
    ],
    bigImage: [],
    smallImage: undefined,
    listingIncentive: "",
    affiliateContent: [],
    affiliateHighlights: [],
    affiliateCampaignNote: "",
    tags: ["高額案件", "ミッション充実", "手軽"],
  },
];
