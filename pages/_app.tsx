import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/images/favicon.ico" />
        <title>My Portfolio</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
