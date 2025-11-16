import type { Service } from "@/types/service";
import { FALLBACK_IMAGE_HTML, createImageHTML } from "./shared";

export const gamingServices: Service[] = [
  {
    id: "game-1",
    name: "Steam",
    description:
      "PC向けゲーム配信プラットフォームセールで大幅割引が頻繁に行われ、お得にゲームが購入できる",
    category: "gaming",
    affiliateLinks: [
      {
        label: "Steam",
        url: "https://store.steampowered.com/",
      },
    ],
    bigImage: [
      {
        html: FALLBACK_IMAGE_HTML,
        alt: "Steam",
      },
    ],
    smallImage: [
      {
        html: FALLBACK_IMAGE_HTML,
        alt: "Steam",
      },
    ],
    affiliateContent: [
      "Steamは、世界最大級のPCゲーム配信プラットフォーム",
      "定期的に開催されるセールでは、人気タイトルが最大90%オフになることも",
      "ウィッシュリストに入れておけば、セール時に通知が届きます",
    ],
    affiliateHighlights: [
      "定期的な大型セール（サマーセール、ウィンターセールなど）",
      "最大90%オフの大幅割引",
      "豊富なゲームラインナップ",
      "ウィッシュリスト機能でセール情報をチェック",
    ],
    affiliateCampaignNote: "ウィンターセール開催中！",
    tags: ["PCゲーム", "セール", "大幅割引"],
  },
  {
    id: "game-2",
    name: "Nintendo Switch Online",
    description:
      "Nintendo Switchのオンラインサービスファミコン・スーパーファミコンのゲームが遊び放題",
    category: "gaming",
    affiliateLinks: [
      {
        label: "Nintendo Switch Online",
        url: "https://www.nintendo.co.jp/hardware/switch/onlineservice/",
      },
    ],
    bigImage: [
      {
        html: FALLBACK_IMAGE_HTML,
        alt: "Nintendo Switch Online",
      },
    ],
    smallImage: [
      {
        html: FALLBACK_IMAGE_HTML,
        alt: "Nintendo Switch Online",
      },
    ],
    affiliateContent: [
      "Nintendo Switch Onlineは、Nintendo Switchのオンラインサービス",
      "月額306円（税込）で、オンラインプレイやファミコン・スーパーファミコンのゲームが遊び放題",
      "12ヶ月プランなら月額約204円とさらにお得",
    ],
    affiliateHighlights: [
      "月額306円でオンラインプレイが楽しめる",
      "ファミコン・スーパーファミコンのゲームが遊び放題",
      "12ヶ月プランなら月額約204円",
      "セーブデータのクラウドバックアップ",
    ],
    affiliateCampaignNote: "12ヶ月プランが一番お得！",
    tags: ["オンラインプレイ", "レトロゲーム", "月額制"],
  },
  {
    id: "game-3",
    name: "PlayStation Plus",
    description:
      "PlayStationのサブスクリプションサービスフリープレイやオンラインマルチプレイが楽しめる",
    category: "gaming",
    affiliateLinks: [
      {
        label: "PlayStation Plus",
        url: "https://www.playstation.com/ja-jp/ps-plus/",
      },
    ],
    bigImage: [
      {
        html: FALLBACK_IMAGE_HTML,
        alt: "PlayStation Plus",
      },
    ],
    smallImage: [
      {
        html: FALLBACK_IMAGE_HTML,
        alt: "PlayStation Plus",
      },
    ],
    affiliateContent: [
      "PlayStation Plusは、PlayStationのサブスクリプションサービス",
      "毎月2〜3本のフリープレイゲームが提供され、オンラインマルチプレイも楽しめます",
      "上位プランでは、PS5・PS4・PS3・PSPのゲームが遊び放題のカタログも利用可能",
    ],
    affiliateHighlights: [
      "毎月2〜3本のフリープレイゲーム",
      "オンラインマルチプレイが楽しめる",
      "上位プランでゲームカタログが遊び放題",
      "セーブデータのクラウドバックアップ",
    ],
    affiliateCampaignNote: "12ヶ月プランが一番お得！",
    tags: ["オンラインプレイ", "フリープレイ", "月額制"],
  },
];
