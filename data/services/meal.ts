import type { Service } from "@/types/service";
import { FALLBACK_IMAGE_HTML } from "./shared";

export const mealServices: Service[] = [
  {
    id: "meal-tsukurioki-jp",
    name: "つくりおき.jp",
    description:
      "忙しい共働き・子育て世帯向けに、シェフと管理栄養士監修のお惣菜を毎週お届けしてくれる冷蔵タイプの食事宅配サービス！",
    category: "meal",
    affiliateLinks: [
      {
        label: "つくりおき.jp公式サイト",
        url: "test",
      },
    ],
    bigImage: [
      {
        html: "test",
        alt: "つくりおき.jp",
      },
    ],
    smallImage: [
      {
        html: "test",
        alt: "つくりおき.jp",
      },
    ],
    affiliateContent: [
      "つくりおき.jpは、調理経験豊富なシェフと管理栄養士が監修したお惣菜を、専用キッチンで手作りして毎週届けてくれる食事宅配サービス！",
      "冷蔵で届くから、そのままお皿に盛り付けるだけで夕食準備がほぼ完了！家族分を一気に用意できて、忙しい平日のキッチン時間を一気に短縮できます！",
      "1食あたり798円〜（送料・税込）で、手作りクオリティと栄養バランスを重視したメニューが楽しめるから、外食続きやコンビニ食より安心感もコスパも高いのが魅力！",
      "注文やお休み、変更はLINEからサクッと完結！定期縛りもないので、忙しい週だけ使う・隔週で使うなど、生活リズムに合わせて柔軟に続けやすいサービスです！",
      "共働き世帯や子育て中の30〜40代を中心に支持されていて、家事代行やミールキットと比較しても『完全におまかせで夕食が整う』手軽さが強みのサービスです！",
    ],
    affiliateHighlights: [
      "シェフ＆管理栄養士監修で栄養バランスばっちり！",
      "冷蔵で届いて盛り付けるだけだから夕食が最短5分！",
      "1食798円〜で外食や総菜よりコスパ良く続けやすい！",
      "LINEで注文・休止・変更が完結して運用がとにかく楽！",
      "定期縛りなしで忙しい週だけ使える柔軟さ！",
    ],
    affiliateCampaignNote: "test",
    tags: [
      "共働き向け",
      "子育て世帯",
      "時短ごはん",
      "手作り惣菜",
      "LINEで簡単",
    ],
  },
  {
    id: "meal-2",
    name: "ホットペッパーグルメ",
    description:
      "クーポンが豊富なグルメサイト。ネット予約でPontaポイントが貯まる。",
    category: "meal",
    affiliateLinks: [
      {
        label: "ホットペッパーグルメ",
        url: "https://www.hotpepper.jp/",
      },
    ],
    bigImage: [
      {
        html: FALLBACK_IMAGE_HTML,
        alt: "ホットペッパーグルメ",
      },
    ],
    smallImage: [
      {
        html: FALLBACK_IMAGE_HTML,
        alt: "ホットペッパーグルメ",
      },
    ],
    affiliateContent: [
      "ホットペッパーグルメは、リクルートが運営するグルメサイト。",
      "クーポンが豊富で、お得に外食を楽しめます。",
      "ネット予約でPontaポイントが貯まり、貯まったポイントは次回の予約に使えます。",
    ],
    affiliateHighlights: [
      "クーポンが豊富でお得",
      "ネット予約でPontaポイントが貯まる",
      "掲載店舗数が多い",
      "予約が簡単",
    ],
    affiliateCampaignNote: "限定クーポン配布中！",
    tags: ["クーポン", "予約", "Pontaポイント"],
  },
  {
    id: "meal-3",
    name: "ぐるなび",
    description: "老舗グルメサイト。ネット予約で楽天ポイントが貯まる。",
    category: "meal",
    affiliateLinks: [
      {
        label: "ぐるなび",
        url: "https://www.gnavi.co.jp/",
      },
    ],
    bigImage: [
      {
        html: FALLBACK_IMAGE_HTML,
        alt: "ぐるなび",
      },
    ],
    smallImage: [
      {
        html: FALLBACK_IMAGE_HTML,
        alt: "ぐるなび",
      },
    ],
    affiliateContent: [
      "ぐるなびは、老舗のグルメサイト。",
      "全国の飲食店情報が豊富で、ネット予約で楽天ポイントが貯まります。",
      "貯まった楽天ポイントは、楽天グループ全体で使えます。",
    ],
    affiliateHighlights: [
      "老舗グルメサイトの安心感",
      "ネット予約で楽天ポイントが貯まる",
      "全国の飲食店情報が豊富",
      "予約が簡単",
    ],
    affiliateCampaignNote: "楽天ポイント還元キャンペーン実施中！",
    tags: ["予約", "楽天ポイント", "老舗"],
  },
];
