import type { Service } from "@/types/service";
import { createImageHTML } from "./shared";

export const oripaServices: Service[] = [
  {
    id: "oripa-1",
    name: "どっかん！トレカ",
    description: "当選カード2倍封入で“引ける感”強め！高還元がうれしい！",
    category: "oripa",
    affiliateLinks: [
      {
        label: "どっかん！トレカ公式サイト",
        url: "https://px.a8.net/svt/ejp?a8mat=45I7DK+5HNXMA+5PLE+5YZ75",
      },
    ],
    bigImage: [
      {
        html: `<a href="https://px.a8.net/svt/ejp?a8mat=45I7DK+5HNXMA+5PLE+5YZ75" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=251112152332&wid=001&eno=01&mid=s00000026645001003000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=45I7DK+5HNXMA+5PLE+5YZ75" alt="">`,
        alt: "どっかん！トレカ",
      },
    ],
    smallImage: [
      {
        html: `<a href="https://px.a8.net/svt/ejp?a8mat=45I7DK+5HNXMA+5PLE+5YZ75" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=251112152332&wid=001&eno=01&mid=s00000026645001003000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=45I7DK+5HNXMA+5PLE+5YZ75" alt="">`,
        alt: "どっかん！トレカ",
      },
    ],
    affiliateContent: [
      "当選カードを2倍封入で当たりの手応えが濃い！",
      "秋葉原の人気ショップ提携で厚い封入と高還元を体感できる！",
      "ログボやクーポンで今日から始めやすく、鑑定済み美品が早く届くのも安心！",
    ],
    affiliateHighlights: [
      "2倍封入で満足感が高い！",
      "厚封入×高還元で回すのが気持ちいい！",
      "ログボ・クーポン・会員ランクでお得が続く！",
      "鑑定済み美品×配送が早くて安心！",
    ],
    affiliateCampaignNote: "",
    tags: ["オリパ", "ポケカ", "遊戯王", "ワンピ", "高還元", "ログボ"],
  },
  {
    id: "oripa-2",
    name: "オリくじ（オンラインオリパ）",
    description: "登録だけで0円ガチャ！ログボでタダ遊びスタート！",
    category: "oripa",
    affiliateLinks: [
      {
        label: "オリくじ公式サイト",
        url: "https://px.a8.net/svt/ejp?a8mat=45I7DK+691VG2+5I52+5Z6WX",
      },
    ],
    bigImage: [
      {
        html: `<a href="https://px.a8.net/svt/ejp?a8mat=45I7DK+691VG2+5I52+5Z6WX" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www26.a8.net/svt/bgt?aid=251112152378&wid=001&eno=01&mid=s00000025679001004000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=45I7DK+691VG2+5I52+5Z6WX" alt="">`,
        alt: "オリくじ",
      },
    ],
    smallImage: [
      {
        html: `<a href="https://px.a8.net/svt/ejp?a8mat=45I7DK+691VG2+5I52+5Z6WX" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www26.a8.net/svt/bgt?aid=251112152378&wid=001&eno=01&mid=s00000025679001004000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=45I7DK+691VG2+5I52+5Z6WX" alt="">`,
        alt: "オリくじ",
      },
    ],
    affiliateContent: [
      "新規登録でパックやBOXが狙える0円ガチャが人気！",
      "毎日ログボで入金なしでも回せてスキマ時間にちょうどいい！",
      "当選報告が多く、演出も派手で“引いてて楽しい”が続く！",
    ],
    affiliateHighlights: [
      "0円ガチャでまず一回遊べる！",
      "ログボで継続しやすい無料導線！",
      "当選報告が多くて雰囲気が熱い！",
      "派手めの演出で開封が盛り上がる！",
    ],
    affiliateCampaignNote: "",
    tags: ["オリパ", "無料", "ログボ", "高還元", "当選報告", "口コミ"],
  },
  {
    id: "oripa-3",
    name: "オリパワン",
    description: "即日で届く！逆転演出で最後までドキドキ！",
    category: "oripa",
    affiliateLinks: [
      { label: "オリパワン公式サイト", url: "https://oripaone.jp/" },
    ],
    bigImage: [
      {
        html: createImageHTML(
          "https://pub.a8.net/a8v2/A8ImageAction.do?eid=s00000026471&id=202507181242036220",
          "オリパワン"
        ),
        alt: "オリパワン",
      },
    ],
    smallImage: [
      {
        html: createImageHTML(
          "https://pub.a8.net/a8v2/A8ImageAction.do?eid=s00000026471&id=202507221025155360",
          "オリパワン"
        ),
        alt: "オリパワン",
      },
    ],
    affiliateContent: [
      "最短翌日到着で熱が冷めない開封体験！コンディションもきれい！",
      "“ガチャ演出ならオリパワン”と言いたくなる逆転カットインが熱い！",
      "総還元率100％超ガチャやJP機能で“回すほどお得”を実感！",
    ],
    affiliateHighlights: [
      "到着が早くてすぐ開封できる！",
      "逆転演出で心拍数が上がる！",
      "アド報告が多く期待値を感じやすい！",
      "JP機能で継続ほど旨みが増す！",
    ],
    affiliateCampaignNote: "",
    tags: ["オリパ", "即日", "高還元", "演出", "当選報告", "JP機能"],
  },
  {
    id: "oripa-4",
    name: "ポケクロ（ポケットクロス）",
    description: "高還元！50円〜10万円まで“今の気分”で選べる！",
    category: "oripa",
    affiliateLinks: [
      {
        label: "ポケクロ公式サイト",
        url: "https://pokeca.com/original_packs?aid=0201",
      },
    ],
    bigImage: [
      {
        html: createImageHTML(
          "https://pub.a8.net/a8v2/A8ImageAction.do?eid=s00000025989&id=202406271642549340",
          "ポケクロ（ポケットクロス）"
        ),
        alt: "ポケクロ（ポケットクロス）",
      },
    ],
    smallImage: [
      {
        html: createImageHTML(
          "https://pub.a8.net/a8v2/A8ImageAction.do?eid=s00000025989&id=202406271643135890",
          "ポケクロ（ポケットクロス）"
        ),
        alt: "ポケクロ（ポケットクロス）",
      },
    ],
    affiliateContent: [
      "今話題のポケカ中心オリパ！まずはライトに始めやすい！",
      "初回やログイン系で“アドりやすい入り口”が用意されている！",
      "50円〜10万円まで幅広く、その日の気分と予算で選べる！",
    ],
    affiliateHighlights: [
      "最初の一歩からアドを狙いやすい！",
      "広レンジで“軽め/本気”を切り替えやすい！",
      "神引き報告が多くテンションが上がる！",
      "最後まで逆転できる演出でワクワク！",
    ],
    affiliateCampaignNote: "",
    tags: ["オリパ", "ポケカ", "高還元", "神引き", "無料", "口コミ"],
  },
  {
    id: "oripa-5",
    name: "DOPA！（ドーパ）",
    description: "当選報告が多くて安心！高還元×種類豊富で選ぶのが楽しい！",
    category: "oripa",
    affiliateLinks: [
      {
        label: "DOPA！公式サイト",
        url: "https://dopa-game.jp/?utm_source=a8&utm_medium=affiliate&utm_campaign=pokemon_card&argument=XNYk30Vl&dmai=a650309615ed64",
      },
    ],
    bigImage: [
      {
        html: createImageHTML(
          "https://pub.a8.net/a8v2/A8ImageAction.do?eid=s00000024954&id=202504211426441130",
          "DOPA！（ドーパ）"
        ),
        alt: "DOPA！（ドーパ）",
      },
    ],
    smallImage: [
      {
        html: createImageHTML(
          "https://pub.a8.net/a8v2/A8ImageAction.do?eid=s00000024954&id=202309232327523950",
          "DOPA！（ドーパ）"
        ),
        alt: "DOPA！（ドーパ）",
      },
    ],
    affiliateContent: [
      "当選報告が多く“安心して回せる”雰囲気！",
      "低額〜高額まで種類が豊富でその日の気分で選べる！",
      "ハズレでもポイント還元が厚く、送料無料で届くのがうれしい！",
    ],
    affiliateHighlights: [
      "高還元でアド感を実感しやすい！",
      "オリパの選択肢が幅広くて迷うのが楽しい！",
      "ハズレPT還元が太くて再挑戦しやすい！",
      "送料無料×発送スムーズでストレスが少ない！",
    ],
    affiliateCampaignNote: "",
    tags: [
      "オリパ",
      "ポケカ",
      "遊戯王",
      "ワンピ",
      "高還元",
      "当選報告",
      "送料無料",
    ],
  },
];
