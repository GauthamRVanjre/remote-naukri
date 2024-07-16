import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import Adsense from "./components/Adsense";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Adsense pId="pub-4511349409485589" />
      </head>
      <Analytics />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
