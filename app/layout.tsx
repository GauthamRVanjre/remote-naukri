import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

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
      <meta
        name="google-site-verification"
        content="MDKmyGrPdT0K6FE8MIEs-WrbTo-NAA-2t_kYsBI13KY"
      />
      <meta name="google-adsense-account" content="ca-pub-4511349409485589" />
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4511349409485589"
        crossOrigin="anonymous"
      />
      <Analytics />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
