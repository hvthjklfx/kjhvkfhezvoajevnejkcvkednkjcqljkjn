import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project September",
  description: "16-week recomposition & metabolic blueprint",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">{children}</body>
    </html>
  );
}
