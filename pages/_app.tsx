import 'normalize.css/normalize.css';
import '../styles/vars.css';

import Head from 'next/head';

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Keenan Mandela Gebze" />
        <meta name="description" content="Keenan Gebze's blog" />
        <meta name="application-name" content="desain.gratis" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
