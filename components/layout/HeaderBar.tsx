"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export const HeaderBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      setIsAnimating(true);
    } else {
      // 閉じるアニメーションの時間分待つ
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isMenuOpen]);

  const menuItems = [
    { href: "/", label: "トップページ" },
    { href: "/diagnosis", label: "お得診断" },
    { href: "/diagnosis/poi-katsu", label: "ポイ活サイト" },
    { href: "/diagnosis/credit-card", label: "クレジットカード" },
    { href: "/diagnosis/investment", label: "投資・資産づくり" },
    // { href: "/diagnosis/shopping", label: "お得に買い物" },
    // { href: "/diagnosis/gaming", label: "お得にゲーム" },
    { href: "/diagnosis/meal", label: "お得にご飯" },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-md px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-baseline gap-1.5 hover:opacity-80 transition-opacity"
        >
          <span className="text-xs font-semibold tracking-[0.16em] text-emerald-600 uppercase">
            POIKATSU NAVI
          </span>
          <span className="text-[10px] text-slate-500">ポイ活なび</span>
        </Link>

        {/* メニューボタン */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="メニューを開く"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6 text-slate-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* メニュー */}
      {isAnimating && (
        <>
          {/* オーバーレイ */}
          <div
            className={`fixed inset-0 bg-black/20 z-40 top-[49px] ${
              isMenuOpen
                ? "animate-menu-overlay-fade-in"
                : "animate-menu-overlay-fade-out"
            }`}
            onClick={() => setIsMenuOpen(false)}
          />
          {/* メニューコンテンツ */}
          <nav
            className={`absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg z-50 ${
              isMenuOpen ? "animate-menu-slide-down" : "animate-menu-slide-up"
            }`}
          >
            <div className="mx-auto max-w-md">
              <ul className="py-2">
                {menuItems.map((item, index) => (
                  <li
                    key={item.href}
                    className={
                      isMenuOpen
                        ? "animate-menu-item-fade-in"
                        : "animate-menu-item-fade-out"
                    }
                    style={{
                      animationDelay: isMenuOpen
                        ? `${index * 0.05}s`
                        : `${(menuItems.length - 1 - index) * 0.03}s`,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </>
      )}
    </header>
  );
};
