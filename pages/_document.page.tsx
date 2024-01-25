/* eslint-disable react/no-danger */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="google-site-verification" content="a1zdOgstToYFnC3_1MkaAHBrIsNUi5_pHG_iGialTNU" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Montserrat:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&family=Public+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body style={{ fontFamily: "Inter" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}