import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* TODO: add favicons for differenct browsers - https://realfavicongenerator.net/ */}
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <CSSReset />
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
