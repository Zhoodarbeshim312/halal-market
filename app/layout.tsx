import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.scss";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Halal Market",
  description:
    "Halal Market — онлайн-маркет качественных халяльных продуктов и товаров",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable}`}>{children}</body>
    </html>
  );
}
