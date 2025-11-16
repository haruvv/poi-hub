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
              "ポイントサイト経由の買い物に加えて、高還元クレカで支払えばポイント二重取り！同じ買い物でも、お得度が大きく変わる。",
            href: "/diagnosis/credit-card",
            label: "おすすめクレカを見る",
          },
        ],
      };

    case "credit-card":
      return {
        title: "さらにお得にするには",
        description:
          "TODO: カードで支払う前に、ポイントサイト経由でさらにポイントを積む方法",
        items: [
          {
            title: "ポイントサイト経由でポイント二重取り",
            description:
              "TODO: ネットショッピングの前にポイントサイトを経由するだけで、カードのポイント＋サイトのポイントがもらえる説明",
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
              "無料登録やアンケートでコツコツ貯めたポイントを換金してオリパ資金に回せば、お財布へのダメージを抑えつつ楽しめる。",
            href: "/diagnosis/poi-katsu",
            label: "ポイ活を始める",
          },
        ],
      };

    case "investment":
      return {
        title: "投資に回すお金を作る",
        description:
          "TODO: 日々の支出をポイ活やクレカで最適化して、投資資金を確保する方法",
        items: [
          {
            title: "固定費をクレカ払いに変更",
            description:
              "TODO: 光熱費・通信費などの固定費をクレカ払いにして、毎月自動でポイントが貯まる説明",
            href: "/diagnosis/credit-card",
            label: "おすすめクレカを見る",
          },
          {
            title: "ポイ活で投資資金を捻出",
            description:
              "TODO: 隙間時間でポイ活をして、投資に回せるお金を増やす説明",
            href: "/diagnosis/poi-katsu",
            label: "ポイ活を始める",
          },
        ],
      };

    case "meal":
      return {
        title: "外食・デリバリーをもっとお得に",
        description:
          "TODO: 飲食店やデリバリーで使えるポイントサイト／クレカと組み合わせる方法",
        items: [
          {
            title: "飲食店でポイントが貯まるクレカ",
            description:
              "TODO: 外食が多い人向けに、飲食店での還元率が高いクレカの説明",
            href: "/diagnosis/credit-card",
            label: "おすすめクレカを見る",
          },
          {
            title: "デリバリーはポイントサイト経由で",
            description:
              "TODO: 出前館やUber Eatsなどをポイントサイト経由で注文すると、さらにポイントが貯まる説明",
            href: "/diagnosis/poi-katsu",
            label: "ポイ活サイトを見る",
          },
        ],
      };

    case "shopping":
      return {
        title: "ネットショッピングをさらにお得に",
        description:
          "TODO: ポイントサイト経由＋クレカ払いでポイント多重取りする方法",
        items: [
          {
            title: "ポイントサイト経由で買い物",
            description:
              "TODO: Amazon・楽天などの買い物前にポイントサイトを経由するだけで、数%のポイントバック説明",
            href: "/diagnosis/poi-katsu",
            label: "ポイ活を始める",
          },
          {
            title: "高還元率のクレカを使う",
            description:
              "TODO: ネットショッピング特化の高還元クレカで、さらにポイントを貯める説明",
            href: "/diagnosis/credit-card",
            label: "おすすめクレカを見る",
          },
        ],
      };

    case "gaming":
      return {
        title: "ゲーム課金をお得にする",
        description:
          "TODO: ポイントサイトやクレカを活用して、実質的な課金額を減らす方法",
        items: [
          {
            title: "ポイ活で課金資金を稼ぐ",
            description:
              "TODO: 無料でポイントを貯めて、そのポイントをギフトコードに交換して課金する説明",
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
