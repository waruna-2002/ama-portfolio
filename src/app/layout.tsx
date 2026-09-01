import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ama Dananjana | Fashion Merchandising & Apparel Strategy",
  description: "Modern Fashion-Tech Portfolio bridging creative vision, commercial strategy, and textile science.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}