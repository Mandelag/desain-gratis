import 'normalize.css/normalize.css';

import Head from 'next/head';

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="trusted auction" />
        <meta name="description" content="trusted auction in Indonesia" />
        <meta name="description" content="everyone can create an auction" />
        <meta name="description" content="easy auction" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
