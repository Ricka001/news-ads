import Script from "next/script";
import Head from "next/head";

export default function Adsense({ pId }) {
  <Script
    async
    src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pId}`}
    crossOrigin="anonymous"
    strategy="afterInteractive"
  />;
  return (
    <div>
      {/* <Head>
        <Adsense pId={"ca-pub-5206967219759359"} />
      </Head> */}
      <body className={inter.className}>{children}</body>
    </div>
  );
}
