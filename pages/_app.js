// dependencies
import { RecoilRoot } from "recoil";
// styles
import "../styles/globals.css";
// components
import MenuProvider from "../features/Menu/MenuProvider";

// main component
function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <MenuProvider>
        <Component {...pageProps} />
      </MenuProvider>
    </RecoilRoot>
  );
}

export default MyApp;
