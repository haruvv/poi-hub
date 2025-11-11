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
      "安心感と使いやすさ重視ならこれ！コンビニや飲食店でお得にポイントが貯めやすい王道クレジットカード！",
    category: "credit-card",
    affiliateLinks: [
      {
        label: "三井住友カード",
        url: "https://www.smbc-card.com/camp/numberless_gold-numberless/index2.jsp?dk=cpc-goo-brd-pr-214660",
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
    affiliateContent: [
      "安心感・知名度・使いやすさがそろった定番クレジットカード！初めての1枚にも、サブカードにも選びやすいバランスの良さが魅力です！",
      "ナンバーレスタイプならカード番号や有効期限が表面に印字されておらず、紛失や盗み見への不安をグッと減らせるのもポイント！ネット利用もアプリ管理でスムーズです！",
      "対象のコンビニ・飲食店などでポイント還元アップが狙えるキャンペーンや特典も多く、日常の支払いをまとめるだけで自然とお得になりやすい設計になっています！",
      "国際ブランドや券種の選択肢も豊富で、「信頼できるカードを長く使いたい」という人にしっかり応えてくれる1枚です！",
    ],
    affiliateHighlights: [
      "大手カードブランドならではの信頼感とセキュリティの高さ！",
      "ナンバーレスデザイン対応で情報を守りやすく安心して使える！",
      "コンビニ・飲食店など日常利用でポイントを貯めやすい！",
      "キャッシュレス初心者からベテランまで使いやすいシンプル設計！",
    ],
    affiliateCampaignNote: "新規入会&条件達成で最大23,600円相当プレゼント！",
    tags: ["安心感重視", "ナンバーレス", "ポイント優待", "日常使い向け"],
  },
  {
    id: "card-4",
    name: "JCB カードW",
    description:
      "39歳までの申込限定で年会費永年無料！いつでもポイント2倍の高還元カード！",
    category: "credit-card",
    affiliateLinks: [
      {
        label: "JCB カードW",
        url: "https://www.jcb.co.jp/promotion/ordercard/w/?50195353150100&tk_id=cojp_oswsp_lst_2016o_os3080&utm_medium=lst__oss&utm_source=google__oss&utm_term=00075993__oss__B_google&utm_campaign=00075993__oss__B&gad_source=1&gad_campaignid=22603979417&gbraid=0AAAAADmu3AjzEhiW3jt6JanSmr-_CNpRa&gclid=CjwKCAiA2svIBhB-EiwARWDPjv9gcZ93ETvIyGv4btpOjSonAHeUvmPT81t5mhZETiY515isACwV5BoCtKsQAvD_BwE",
      },
    ],
    bigImage: [
      {
        html: FALLBACK_IMAGE_HTML,
        alt: "JCB カードW サンプルバナー",
      },
    ],
    smallImage: [
      {
        html: FALLBACK_IMAGE_HTML,
        alt: "JCB カードW サンプル小バナー",
      },
    ],
    affiliateContent: [
      "39歳までに申し込めば年会費はずっと無料で、通常のJCBカードに比べて常にポイント2倍相当の高還元が狙えるお得な1枚！",
      "Amazonやセブン-イレブン、スターバックスなどJCB優待店での利用なら、さらにポイントアップが狙えるので、ネットショッピングやコンビニ利用が多い人との相性抜群！",
      "オンライン申込限定カードなので、スマホやPCからスムーズに手続きできて、管理もアプリ中心で完結しやすいスマートな設計！",
      "年会費無料で高還元を取りにいきたい人や、日常の支払いをまとめて効率よくポイントを貯めたい人に、メイン候補としておすすめしやすいカードです！",
    ],
    affiliateHighlights: [
      "39歳までの申込で年会費永年無料！",
      "いつでもポイント2倍相当の高還元設計！",
      "Amazonやコンビニなど優待店でさらにお得！",
      "オンライン申込限定でスマートに使える！",
      "日常決済を集約してポイント重視で選びたい人向け！",
    ],
    affiliateCampaignNote: "今なら最大45,000円キャッシュバック！",
    tags: [
      "年会費無料",
      "高還元",
      "ポイント重視",
      "オンライン申込限定",
      "若年層向け",
    ],
  },
];
