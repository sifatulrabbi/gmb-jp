// dependencies
import React from "react";
import { useRecoilState } from "recoil";
import { menuState } from "./menuState";
// components
import Menu from "../../components/Menu/Menu";
import MenuBtn from "../../components/Menu/MenuBtn";

// main component
function MenuProvider({ children }) {
  const [menu, setMenu] = useRecoilState(menuState);

  function toggleMenu() {
    setMenu((prev) => ({ ...prev, show: !prev.show }));
  }

  return (
    <>
      <MenuBtn show={menu.show} toggleMenu={toggleMenu} />
      {menu.show && <Menu show={menu.show} />}
    </>
  );
}

export default MenuProvider;