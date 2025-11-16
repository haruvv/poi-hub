import type { NextActionItem } from "@/components/next-actions/NextActionsSection";
import type { ServiceCategory } from "@/types/service";

/**
 * カテゴリごとの「次にやると良いこと」のルールを定義
 */
export function getNextActionsForCategory(category: ServiceCategory): {
  title?: string;
  description?: string;
  items: NextActionItem[];
} {
  switch (category) {
    case "poi-katsu":
      return {
        title: "次にやっておきたいこと",
        description:
          "ポイ活で貯めたポイントや浮いたお金は、還元率高めのクレカと組み合わせると、さらにお得に増やせる！",
        items: [
          {
            title: "ポイント還元率の高いクレカを1枚持つ",
            description:
              "ポイントサイト経由の買い物に加えて、高還元クレカで支払えばポイント二重取り！同じ買い物でも、お得度が大きく変わる",
            href: "/diagnosis/credit-card",
            label: "おすすめクレカを見る",
          },
        ],
      };

    case "credit-card":
      return {
        title: "さらにお得にするには",
        description:
          "カードの還元だけに頼まず、支払い前にポイントサイトを一枚かませれば、同じ決済でももらえるポイントをもう一段底上げできる",
        items: [
          {
            title: "ポイントサイト経由でポイント二重取り",
            description:
              "Amazonや楽天で買い物する前にポイントサイトをサッと経由するだけで、カードのポイントに加えてサイト側のポイントもダブルでもらえる",
            href: "/diagnosis/poi-katsu",
            label: "ポイ活サイトを見る",
          },
        ],
      };

    case "oripa":
      return {
        title: "オリパの軍資金を増やす",
        description:
          "オリパ用の軍資金の一部を、ポイントサイトやお小遣いアプリで稼いでおけば、実質の持ち出しを抑えながら楽しめる！",
        items: [
          {
            title: "ポイ活で軍資金を稼ぐ",
            description:
              "無料登録やアンケートでコツコツ貯めたポイントを換金してオリパ資金に回せば、お財布へのダメージを抑えつつ楽しめる",
            href: "/diagnosis/poi-katsu",
            label: "ポイ活を始める",
          },
        ],
      };

    case "investment":
      return {
        title: "投資に回すお金を作る",
        description:
          "いきなり生活を削るのではなく、日々の支出をポイ活やクレカで最適化して、普段のままでも投資に回せるお金をひねり出すイメージ",
        items: [
          {
            title: "固定費をクレカ払いに変更",
            description:
              "電気・ガス・スマホ料金などの固定費を高還元クレカ払いにまとめておけば、何もしなくても毎月自動でポイントが積み上がっていく",
            href: "/diagnosis/credit-card",
            label: "おすすめクレカを見る",
          },
          {
            title: "ポイ活で投資資金を捻出",
            description:
              "スキマ時間に案件やアンケートでポイントを貯めておけば、その分をそのまま積立投資の原資に回せる生活とは切り離した“追加のタネ銭”づくりにちょうどいい",
            href: "/diagnosis/poi-katsu",
            label: "ポイ活を始める",
          },
        ],
      };

    case "meal":
      return {
        title: "外食・デリバリーをもっとお得に",
        description:
          "忙しいときは外食やテイクアウトに頼りつつ、平日用には惣菜や冷凍弁当の宅配をうまく組み合わせると、時間とお金のどちらも少しラクになります外食が多い方は「飲食店でポイントが貯まりやすいクレジットカード」、平日ごはんを宅配に任せたい方は「初回割引や定期便のキャンペーン」を活用すると、ムダなくお得を積み重ねやすくなります",
        items: [
          {
            title: "飲食店でポイントが貯まるクレカ",
            description:
              "外食の支払いを、飲食店でポイントアップするクレジットカードにまとめておくと、同じお店・同じ金額でも自然とポイントが貯まりやすくなります「このカードでご飯代を払う」と決めておくだけで、お出かけや外食がちょっとしたポイ活になります",
            href: "/diagnosis/credit-card",
            label: "おすすめクレカを見る",
          },
          {
            title: "食事宅配はキャンペーンと併用する",
            description:
              "惣菜セットや冷凍弁当の宅配サービスは、初回割引や定期便キャンペーンが組まれていることが多く、上手に選ぶと「コンビニでちょこちょこ買うより安いのにラク」という状態をつくりやすくなるまずはお試しセットや初回限定プランから試して、家族構成やライフスタイルに合うサービスを拾っていきたい",
            href: "/diagnosis/meal",
            label: "食事宅配サービスを比較する",
          },
        ],
      };

    case "shopping":
      return {
        title: "ネットショッピングをさらにお得に",
        description:
          "ネット通販は、ポイントサイト経由＋高還元クレカ払いの二段構えにしておくと、同じ買い物でもポイントの入り方がまるで違う",
        items: [
          {
            title: "ポイントサイト経由で買い物",
            description:
              "Amazon・楽天・Yahoo!ショッピングなどで注文する前にポイントサイトを一度はさむだけで、数％ぶんのポイントバックが上乗せされる",
            href: "/diagnosis/poi-katsu",
            label: "ポイ活を始める",
          },
          {
            title: "高還元率のクレカを使う",
            description:
              "ネットショッピングに強い高還元クレカを1枚決めて集中的に使えば、月々の通販代から効率よくポイントを回収できる",
            href: "/diagnosis/credit-card",
            label: "おすすめクレカを見る",
          },
        ],
      };

    case "gaming":
      return {
        title: "ゲーム課金をお得にする",
        description:
          "課金する前にポイ活やクレカをうまくかませておけば、実際に財布から出ていくお金をじわっと圧縮できる",
        items: [
          {
            title: "ポイ活で課金資金を稼ぐ",
            description:
              "無料登録やアンケートでコツコツ貯めたポイントをギフトコードに交換しておけば、現金を使わずにゲーム内課金に回せる",
            href: "/diagnosis/poi-katsu",
            label: "ポイ活を始める",
          },
        ],
      };

    case "subscription":
      return {
        title: "サブスク料金をもっとお得に",
        description:
          "サブスク料金をクレカ払いにまとめて、ポイントサイトと組み合わせれば、毎月の固定費からもポイントを回収できる",
        items: [
          {
            title: "クレカ払いでお得にサブスクを始める",
            description:
              "動画配信・音楽・学習サービスなどのサブスク料金を、還元率の高いクレカ払いにまとめておけば毎月自動でポイントが積み上がる",
            href: "/diagnosis/credit-card",
            label: "おすすめクレカを見る",
          },
          {
            title: "ポイントサイトついでにポイントGET",
            description:
              "サブスクの申し込みをポイントサイト経由にしておけば、初月分やキャンペーン期間のポイントバックが上乗せされる",
            href: "/diagnosis/poi-katsu",
            label: "ポイ活を始める",
          },
        ],
      };

    default:
      return {
        items: [],
      };
  }
}
