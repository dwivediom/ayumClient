import Document, {  Html, Head, Main, NextScript } from "next/document";
 import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
        </Head>
        <body className="bg-gray-800">
        <Script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"  strategy='beforeInteractive'/>
          <Script src="https://cdn.tailwindcss.com" strategy='beforeInteractive' />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;