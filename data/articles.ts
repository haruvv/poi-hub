/**
 * 記事/コラムのデータ定義
 * 実際の記事は後で追加・編集します
 */

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  content: ArticleContent[];
}

export interface ArticleContent {
  type: 'heading' | 'paragraph' | 'list';
  content: string | string[];
}

/**
 * 記事データ（仮データ）
 * 実際の記事内容は後で差し替えます
 */
export const articles: Article[] = [
  {
    slug: 'point-site-beginner-guide',
    title: 'TODO: ポイントサイト初心者ガイド的なタイトル',
    excerpt: 'TODO: ポイントサイトの基本的な使い方や始め方についての導入文（100〜150文字程度）',
    publishedAt: '2024-01-15',
    category: 'ポイ活入門',
    content: [
      {
        type: 'heading',
        content: 'TODO: ポイントサイトとは？',
      },
      {
        type: 'paragraph',
        content: 'TODO: ポイントサイトの基本的な説明テキスト。後で差し替えます。',
      },
      {
        type: 'heading',
        content: 'TODO: ポイントサイトの仕組み',
      },
      {
        type: 'paragraph',
        content: 'TODO: どのようにポイントが貯まるのか、企業から報酬が出る仕組みなどの説明。',
      },
      {
        type: 'list',
        content: [
          'TODO: 仕組み1の説明',
          'TODO: 仕組み2の説明',
          'TODO: 仕組み3の説明',
        ],
      },
      {
        type: 'heading',
        content: 'TODO: 初心者が始めるべき案件',
      },
      {
        type: 'paragraph',
        content: 'TODO: 初心者におすすめの案件やポイントの貯め方について。',
      },
    ],
  },
  {
    slug: 'credit-card-point-comparison',
    title: 'TODO: クレジットカードのポイント還元率比較記事タイトル',
    excerpt: 'TODO: 主要クレジットカードのポイント還元率や特徴を比較する記事の導入文',
    publishedAt: '2024-01-20',
    category: 'クレカ',
    content: [
      {
        type: 'heading',
        content: 'TODO: ポイント還元率とは',
      },
      {
        type: 'paragraph',
        content: 'TODO: ポイント還元率の基本的な説明。',
      },
      {
        type: 'heading',
        content: 'TODO: 高還元率カードの比較',
      },
      {
        type: 'paragraph',
        content: 'TODO: 各カードの還元率比較と特徴。',
      },
    ],
  },
  {
    slug: 'oripa-safe-guide',
    title: 'TODO: 安全にオリパを楽しむためのガイド記事タイトル',
    excerpt: 'TODO: オリパの選び方や注意点についての導入文',
    publishedAt: '2024-01-25',
    category: 'オリパ',
    content: [
      {
        type: 'heading',
        content: 'TODO: 信頼できるオリパサイトの見分け方',
      },
      {
        type: 'paragraph',
        content: 'TODO: 安全なオリパサイトを選ぶポイント。',
      },
    ],
  },
];

/**
 * スラッグから記事を取得
 */
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

/**
 * すべての記事を取得
 */
export function getAllArticles(): Article[] {
  return articles.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

