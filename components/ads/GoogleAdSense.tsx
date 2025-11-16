'use client';

import { useEffect, useRef } from 'react';

interface GoogleAdSenseProps {
  adSlot: string;
  adFormat?: 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical';
  fullWidthResponsive?: boolean;
  className?: string;
}

/**
 * Google AdSense 広告コンポーネント
 * 
 * @param adSlot - 広告スロットID（data-ad-slot）
 * @param adFormat - 広告フォーマット（デフォルト: 'auto'）
 * @param fullWidthResponsive - レスポンシブ広告を有効にするか（デフォルト: true）
 * @param className - 追加のCSSクラス
 */
export const GoogleAdSense = ({
  adSlot,
  adFormat = 'auto',
  fullWidthResponsive = true,
  className = '',
}: GoogleAdSenseProps) => {
  const adRef = useRef<HTMLModElement>(null);
  const isLoadedRef = useRef(false);

  useEffect(() => {
    // 既に広告が読み込まれている場合はスキップ
    if (isLoadedRef.current) {
      return;
    }

    try {
      // AdSenseスクリプトが読み込まれているか確認
      if (typeof window === 'undefined' || !(window as any).adsbygoogle) {
        return;
      }

      // ins要素が存在し、まだ広告が読み込まれていないか確認
      const insElement = adRef.current;
      if (!insElement) {
        return;
      }

      // data-adsbygoogle-status 属性をチェック（既に広告が読み込まれているか）
      const adStatus = insElement.getAttribute('data-adsbygoogle-status');
      if (adStatus === 'done' || adStatus === 'filled') {
        isLoadedRef.current = true;
        return;
      }

      // 広告を読み込む
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      isLoadedRef.current = true;
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, [adSlot]);

  return (
    <div className={`adsense-container ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2028703181823597"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
      />
    </div>
  );
};

