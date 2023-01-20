import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin={true}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,300;0,500;0,700;0,800;0,900;1,800&family=Karma:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
