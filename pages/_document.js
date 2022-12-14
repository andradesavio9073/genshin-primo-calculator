import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <link rel="icon" href="/favicon.ico" />
        {/* Roboto Font for Mui */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta name="theme-color" content="#29c9e5" />
        <meta property="og:site_name" content="Primo Planner" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
