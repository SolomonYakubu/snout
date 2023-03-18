import "../styles/globals.css";
import type { AppProps } from "next/app";

import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Snout </title>
        <style>
          @import
          url(&quot;https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&display=swap)
        </style>
        <meta property="og:title" content="Snout " />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <meta
          property="og:description"
          content="Introducing Snout, the revolutionary new crypto token that takes inspiration from man's best friend - the dog! Just like a dog's snout, Snout is designed to be a powerful tool that helps you sniff out opportunities in the world of crypto.  Just like a dog's nose can detect even the faintest scents, Snout uses sophisticated algorithms to identify promising investment opportunities and help you make informed decisions about where to invest your money."
        />
        <meta property="og:url" content="" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
