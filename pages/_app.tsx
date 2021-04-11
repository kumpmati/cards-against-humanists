import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import { useEffect } from "react";
import "../styles/globals.css";
import { printCredits } from "../util";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(printCredits, []);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
