import Script from "next/script";
import React from "react";

interface AdsenseProps {
  pId: string;
}

const Adsense = ({ pId }: AdsenseProps) => {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
};

export default Adsense;