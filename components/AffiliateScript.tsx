"use client";

import { useEffect, useRef } from "react";

interface AffiliateScriptProps {
  scriptHtml: string;
}

/**
 * スクリプトタグ型のアフィリエイトリンクを動的に読み込んで実行するコンポーネント
 * JANetなどの外部スクリプトを含むアフィリエイトリンクに対応
 */
export function AffiliateScript({ scriptHtml }: AffiliateScriptProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 既存の内容をクリア
    containerRef.current.innerHTML = "";

    // 一時的なコンテナを作成
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = scriptHtml;

    // スクリプトタグを動的に再作成して実行可能にする
    const scripts = Array.from(tempDiv.querySelectorAll("script"));

    // 外部スクリプトとインラインスクリプトを分離
    const externalScripts: HTMLScriptElement[] = [];
    const inlineScripts: HTMLScriptElement[] = [];

    scripts.forEach((oldScript) => {
      if (oldScript.src) {
        externalScripts.push(oldScript);
      } else {
        inlineScripts.push(oldScript);
      }
    });

    // 外部スクリプトを順番に読み込む
    const loadScriptsSequentially = async () => {
      for (const oldScript of externalScripts) {
        await new Promise<void>((resolve, reject) => {
          const newScript = document.createElement("script");

          // 属性をコピー
          Array.from(oldScript.attributes).forEach((attr) => {
            newScript.setAttribute(attr.name, attr.value);
          });

          // 読み込み完了を待つ
          newScript.onload = () => resolve();
          newScript.onerror = () => reject();

          // 古いスクリプトを新しいスクリプトに置き換え
          if (oldScript.parentNode) {
            oldScript.parentNode.replaceChild(newScript, oldScript);
          }
        });
      }

      // 外部スクリプトが全て読み込まれた後、インラインスクリプトを実行
      inlineScripts.forEach((oldScript) => {
        const newScript = document.createElement("script");

        // 属性をコピー
        Array.from(oldScript.attributes).forEach((attr) => {
          newScript.setAttribute(attr.name, attr.value);
        });

        // インラインスクリプトの内容をコピー
        if (oldScript.textContent) {
          newScript.textContent = oldScript.textContent;
        }

        // 古いスクリプトを新しいスクリプトに置き換え
        if (oldScript.parentNode) {
          oldScript.parentNode.replaceChild(newScript, oldScript);
        }
      });

      // コンテナに追加
      if (containerRef.current) {
        containerRef.current.appendChild(tempDiv);
      }
    };

    loadScriptsSequentially().catch((error) => {
      console.error("Failed to load affiliate script:", error);
    });

    // クリーンアップ（コンポーネントのアンマウント時）
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [scriptHtml]);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center min-h-[100px]"
    />
  );
}
