import 'normalize.css/normalize.css';
import '../styles/vars.css';

import Head from 'next/head';

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
 // Use the layout defined at the page level, if available
 const getLayout = Component.getLayout || ((page) => page)

 return getLayout(
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
