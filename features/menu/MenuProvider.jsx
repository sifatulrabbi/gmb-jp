// dependencies
import React from "react";
import { useRecoilState } from "recoil";
import { menuState } from "./menuState";
// components
import Menu from "../../components/Menu/Menu";
import MenuBtn from "../../components/Menu/MenuBtn";

// main component
function MenuProvider() {
  const [menu, setMenu] = useRecoilState(menuState);
  const [mount, setMount] = React.useState(false);

  // when mount === false set mount = true instantly
  // when mount === true set mount = false after 900ms
  function handleMount() {
    if (!mount) {
      setMount(true);
    } else {
      setTimeout(() => {
        setMount(false);
      }, 900);
    }
  }

  // toggling the mount and menu
  function toggleMenu() {
    // handleMount before the setMenu
    handleMount();
    setMenu((prev) => ({ ...prev, show: !prev.show }));
  }

  return (
    <>
      <MenuBtn show={menu.show} toggleMenu={toggleMenu} />
      {mount && <Menu show={menu.show} />}
    </>
  );
}

export default MenuProvider;
