/**
 * ページ種別ごとの広告表示ポリシーを定義
 */

export type PageType = 
  | 'article'           // 記事/コラムページ
  | 'service-lp'        // サービス個別LPページ
  | 'category-list'     // カテゴリ一覧/ランキングページ
  | 'diagnosis'         // 診断ページ
  | 'top';              // トップページ

export interface AdPolicy {
  showTopAd: boolean;        // 記事タイトル直下/ページ上部の広告
  showInContentAd: boolean;  // コンテンツ中盤の広告
  showBottomAd: boolean;     // ページ下部/記事末尾の広告
}

/**
 * ページ種別に応じた広告表示ポリシーを取得
 */
export function getAdPolicy(pageType: PageType): AdPolicy {
  switch (pageType) {
    case 'article':
      // 記事ページ：しっかり広告を表示
      return {
        showTopAd: true,
        showInContentAd: true,
        showBottomAd: true,
      };

    case 'service-lp':
      // サービスLPページ：広告なし（アフィリエイト導線を優先）
      return {
        showTopAd: false,
        showInContentAd: false,
        showBottomAd: false,
      };

    case 'category-list':
      // カテゴリ一覧/ランキングページ：下部のみ控えめに表示
      return {
        showTopAd: false,
        showInContentAd: false,
        showBottomAd: true,
      };

    case 'diagnosis':
      // 診断ページ：広告なし（診断フローに集中）
      return {
        showTopAd: false,
        showInContentAd: false,
        showBottomAd: false,
      };

    case 'top':
      // トップページ：下部のみ表示
      return {
        showTopAd: false,
        showInContentAd: false,
        showBottomAd: true,
      };

    default:
      // デフォルト：広告なし
      return {
        showTopAd: false,
        showInContentAd: false,
        showBottomAd: false,
      };
  }
}

/**
 * 広告スロットIDの定義
 * 実際の広告スロットIDは、AdSenseの管理画面で作成したものに置き換えてください
 */
export const AD_SLOTS = {
  article: {
    top: 'XXXXXXXXXX',        // TODO: 実際のスロットIDに置き換え
    inContent: 'XXXXXXXXXX',  // TODO: 実際のスロットIDに置き換え
    bottom: 'XXXXXXXXXX',     // TODO: 実際のスロットIDに置き換え
  },
  general: {
    bottom: 'XXXXXXXXXX',     // TODO: 実際のスロットIDに置き換え
  },
};

