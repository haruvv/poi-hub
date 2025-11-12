// プレースホルダー用の画像HTML（画像がない場合のデフォルト表示）
export const FALLBACK_IMAGE_HTML = [
  '<div style="position:relative;width:100%;padding-top:62%;border-radius:16px;background:linear-gradient(135deg,#e5e7eb,#cbd5f5);box-shadow:inset 0 0 12px rgba(15,23,42,0.12);overflow:hidden;">',
  '<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">',
  '<div style="width:38%;padding-top:38%;border-radius:50%;background:rgba(148,163,184,0.28);box-shadow:0 6px 18px rgba(15,23,42,0.12);"></div>',
  "</div>",
  "</div>",
].join("");

/**
 * 画像URLから<img>タグのHTMLを生成するヘルパー関数
 *
 * @param url - 画像のURL（アフィリエイト画像URLなど）
 * @param alt - 画像の代替テキスト（オプション）
 * @param className - 追加するCSSクラス（オプション、デフォルト: "w-full h-auto"）
 * @returns <img>タグのHTML文字列
 *
 * @example
 * // 基本的な使い方
 * createImageHTML("https://example.com/image.png", "サービス名")
 * // => '<img src="https://example.com/image.png" alt="サービス名" class="w-full h-auto" />'
 *
 * // アフィリエイト画像の場合
 * createImageHTML("https://pub.a8.net/a8v2/A8ImageAction.do?eid=xxx", "DOPA")
 */
export function createImageHTML(
  url: string,
  alt: string = "",
  className: string = "w-full h-auto"
): string {
  const altAttr = alt ? ` alt="${alt}"` : "";
  const classAttr = className ? ` class="${className}"` : "";
  return `<img src="${url}"${altAttr}${classAttr} />`;
}
