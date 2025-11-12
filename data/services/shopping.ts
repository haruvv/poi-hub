import type { Service } from "@/types/service";
import { FALLBACK_IMAGE_HTML, createImageHTML } from "./shared";

export const shoppingServices: Service[] = [
  {
    id: "shop-1",
    name: "楽天市場",
    description:
      "楽天ポイントが貯まるネットショッピング。ポイント還元率が高く、セールやキャンペーンも豊富。",
    category: "shopping",
    affiliateLinks: [
      {
        label: "楽天市場",
        url: "https://hb.afl.rakuten.co.jp/hgc/g00q0727.3wc25d9f.g00q0727.3wc26f27/?pc=https%3A%2F%2Fwww.rakuten.co.jp%2F",
      },
    ],
    bigImage: [
      {
        html: FALLBACK_IMAGE_HTML,
        alt: "楽天市場",
      },
    ],
    smallImage: [
      {
        html: FALLBACK_IMAGE_HTML,
        alt: "楽天市場",
      },
    ],
    affiliateContent: [
      "楽天市場は、国内最大級のショッピングモール。",
      "豊富な商品ラインナップと高い還元率が魅力です。",
      "楽天ポイントは楽天グループ全体で使えるため、貯まったポイントの使い道も豊富。",
    ],
    affiliateHighlights: [
      "楽天ポイントがザクザク貯まる",
      "セールやキャンペーンが豊富",
      "楽天グループ全体でポイントが使える",
      "送料無料のショップも多数",
    ],
    affiliateCampaignNote: "お買い物マラソン開催中！",
    tags: ["ポイント高還元", "セール", "豊富な品揃え"],
  },
  {
    id: "shop-2",
    name: "Amazon",
    description:
      "Amazonプライム会員なら送料無料・お急ぎ便が使い放題。豊富な商品と迅速な配送が魅力。",
    category: "shopping",
    affiliateLinks: [
      {
        label: "Amazon",
        url: "https://amzn.to/3VX9YZk",
      },
    ],
    bigImage: [
      {
        html: FALLBACK_IMAGE_HTML,
        alt: "Amazon",
      },
    ],
    smallImage: [
      {
        html: FALLBACK_IMAGE_HTML,
        alt: "Amazon",
      },
    ],
    affiliateContent: [
      "Amazonは、世界最大級のオンラインショッピングサイト。",
      "プライム会員なら送料無料・お急ぎ便・Prime Videoなど特典が豊富。",
      "タイムセールやAmazonブラックフライデーなどお得なセールも開催されます。",
    ],
    affiliateHighlights: [
      "プライム会員なら送料無料・お急ぎ便が使い放題",
      "豊富な商品ラインナップ",
      "Prime VideoやPrime Musicも楽しめる",
      "タイムセールでお得に買い物",
    ],
    affiliateCampaignNote: "プライム会員30日間無料体験実施中！",
    tags: ["送料無料", "お急ぎ便", "プライム特典"],
  },
  {
    id: "shop-3",
    name: "Yahoo!ショッピング",
    description:
      "PayPayポイントが貯まるネットショッピング。5のつく日やゾロ目の日はポイント還元率アップ。",
    category: "shopping",
    affiliateLinks: [
      {
        label: "Yahoo!ショッピング",
        url: "https://shopping.yahoo.co.jp/",
      },
    ],
    bigImage: [
      {
        html: FALLBACK_IMAGE_HTML,
        alt: "Yahoo!ショッピング",
      },
    ],
    smallImage: [
      {
        html: FALLBACK_IMAGE_HTML,
        alt: "Yahoo!ショッピング",
      },
    ],
    affiliateContent: [
      "Yahoo!ショッピングは、PayPayポイントが貯まるネットショッピングサイト。",
      "5のつく日やゾロ目の日はポイント還元率がアップするキャンペーンを実施。",
      "貯まったPayPayポイントは、PayPay加盟店で1ポイント＝1円として使えます。",
    ],
    affiliateHighlights: [
      "PayPayポイントが貯まる",
      "5のつく日・ゾロ目の日はポイントアップ",
      "豊富な商品ラインナップ",
      "PayPay加盟店で使える",
    ],
    affiliateCampaignNote: "5のつく日はポイント5倍！",
    tags: ["PayPayポイント", "ポイントアップデー", "豊富な品揃え"],
  },
];
