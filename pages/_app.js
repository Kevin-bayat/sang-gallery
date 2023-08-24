import "../shared/styles/globals.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          httpEquiv="Content-Type"
          content="Type=text/html; charset=UTF-8"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:locale" content="fa_IR" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/sang-logo.png" />
        <title>گالری سنگ</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
