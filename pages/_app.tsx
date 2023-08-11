import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head"; // Import the Head component

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo-lmp.svg" />{" "}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
