import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "페스티벌 궁합 테스트",
  description: "음악·분위기·복장 취향으로 찾는 나의 2026 페스티벌 페르소나",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/melo-favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/melo-favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/images/melo-apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preload" href="/images/melo-mascot.png" as="image" />
        <link rel="preload" href="/images/melo-emotion.png" as="image" />
        <link rel="preload" href="/images/melo-energetic.png" as="image" />
        <link rel="preload" href="/images/melo-free.png" as="image" />
        <link rel="preload" href="/images/melo-heal.png" as="image" />
      </head>
      <body>{children}</body>
    </html>
  );
}
