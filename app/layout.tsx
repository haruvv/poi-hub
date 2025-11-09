import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "お得ナビ Hub",
  description: "ムダなくお得を積み上げるための、シンプルな30秒お得診断サイト。",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
