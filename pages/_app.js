import { MenuBtn } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MenuBtn />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
