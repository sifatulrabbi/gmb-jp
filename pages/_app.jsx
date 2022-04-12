// dependencies
import { RecoilRoot } from "recoil";
import Head from "next/head";
// styles
import "../styles/globals.css";
// components
import MenuProvider from "../features/Menu/MenuProvider";

// main component
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>GMB/JAPAN</title>
      </Head>

      <RecoilRoot>
        <MenuProvider>
          <Component {...pageProps} />
        </MenuProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
