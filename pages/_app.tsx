import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/navbar/navbar";


const App =({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/images/favIcon.jpeg" />
        <title>My Portfolio</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
export default App