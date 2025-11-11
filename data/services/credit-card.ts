import type { Service } from "@/types/service";
import { FALLBACK_IMAGE_HTML } from "./shared";

export const creditCardServices: Service[] = [
  {
    id: "card-1",
    name: "楽天カード",
    description:
      "年会費永年無料でポイントが貯めやすい定番クレジットカード！楽天サービスをよく使う人なら持っておいて損なし！",
    category: "credit-card",
    affiliateLinks: [
      {
        label: "楽天カード",
        url: "https://hb.afl.rakuten.co.jp/hsc/4e193c72.3c734530.4e193b0e.2701e3e3/?link_type=hybrid_url&ut=eyJwYWdlIjoic2hvcCIsInR5cGUiOiJoeWJyaWRfdXJsIiwiY29sIjoxLCJjYXQiOjEsImJhbiI6MTY3NDAyLCJhbXAiOmZhbHNlfQ%3D%3D",
      },
    ],
    bigImage: [
      {
        html: `<a href="https://hb.afl.rakuten.co.jp/hsc/4e193c72.3c734530.4e193b0e.2701e3e3/?link_type=pict&ut=eyJwYWdlIjoic2hvcCIsInR5cGUiOiJwaWN0IiwiY29sIjoxLCJjYXQiOjEsImJhbiI6MTY3NDAyLCJhbXAiOmZhbHNlfQ%3D%3D" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"><img src="https://hbb.afl.rakuten.co.jp/hsb/4e193c72.3c734530.4e193b0e.2701e3e3/?me_id=2101008&me_adv_id=167402&t=pict" border="0" style="margin:2px" alt="楽天カード バナー" title="楽天カード"></a>`,
        alt: "楽天カード サンプルバナー",
      },
    ],
    smallImage: [
      {
        html: `<a href="https://hb.afl.rakuten.co.jp/hsc/4e193c72.3c734530.4e193b0e.2701e3e3/?link_type=pict&ut=eyJwYWdlIjoic2hvcCIsInR5cGUiOiJwaWN0IiwiY29sIjoxLCJjYXQiOjEsImJhbiI6MTY3NDAyLCJhbXAiOmZhbHNlfQ%3D%3D" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"><img src="https://hbb.afl.rakuten.co.jp/hsb/4e193c72.3c734530.4e193b0e.2701e3e3/?me_id=2101008&me_adv_id=167402&t=pict" border="0" style="margin:2px" alt="楽天カード 小バナー" title="楽天カード"></a>`,
        alt: "楽天カード サンプル小バナー",
      },
    ],
    affiliateContent: [
      "楽天カードは年会費永年無料で使いやすい、定番中の定番クレジットカード！",
      "楽天市場での利用でポイントアップ、街のお店や公共料金支払いでも楽天ポイントがどんどん貯まるので、日常使いするだけで自然とお得になります！",
      "楽天トラベルや楽天モバイルなど、楽天の各サービスと組み合わせることでポイント還元をさらに伸ばしやすく、「楽天経済圏」と相性抜群の1枚です！",
      "新規入会時期によってはポイントプレゼントキャンペーンが実施されていることも多く、初めてのクレジットカードとしても選びやすい条件が揃っています！",
      "シンプルに「年会費無料でポイントが貯まりやすいカードが欲しい」という人にとって、最初の1枚・メインカード候補として十分おすすめできるカードです！",
    ],
    affiliateHighlights: [
      "年会費永年無料で気軽に持てる！",
      "楽天市場でポイントアップしやすくネットショッピングに強い！",
      "街のお店や公共料金の支払いでも楽天ポイントが貯まる！",
      "楽天経済圏との相性が良く、まとめるほどお得度アップ！",
      "新規入会キャンペーンでお得にスタートしやすい！",
    ],
    affiliateCampaignNote: "入会&3回利用で5,000ポイントプレゼント！",
    tags: [
      "年会費無料",
      "楽天ポイント",
      "ネットショッピング向け",
      "初心者向け",
      "メインカード候補",
    ],
  },
  {
    id: "card-2",
    name: "三井住友カード",
    description:
      "Visa/Mastercard/JCB の 3 ブランドから選べる王道カード。安心のセキュリティと使い勝手が魅力。",
    category: "credit-card",
    affiliateLinks: [
      {
        label: "三井住友カード",
        url: "https://example.com/smbc-card",
      },
    ],
    bigImage: [
      {
        html: FALLBACK_IMAGE_HTML,
        alt: "三井住友カード サンプルバナー",
      },
    ],
    smallImage: [
      {
        html: FALLBACK_IMAGE_HTML,
        alt: "三井住友カード サンプル小バナー",
      },
    ],
    affiliateContent: [],
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
    affiliateLinks: [
      {
        label: "セゾンカード",
        url: "https://example.com/saison-card",
      },
    ],
    bigImage: [
      {
        html: FALLBACK_IMAGE_HTML,
        alt: "セゾンカード サンプルバナー",
      },
    ],
    smallImage: [
      {
        html: FALLBACK_IMAGE_HTML,
        alt: "セゾンカード サンプル小バナー",
      },
    ],
    affiliateContent: [],
    affiliateHighlights: [],
    affiliateCampaignNote: "",
    tags: ["年会費無料", "高還元", "ポイント無期限"],
  },
];
