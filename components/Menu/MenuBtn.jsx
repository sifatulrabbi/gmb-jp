// dependencies
import React from "react";
import { v4 } from "uuid";

function MenuBtn({ show, toggleMenu }) {
  return (
    <button
      className={`h-[56px] fixed flex w-[64px] gap-[3px] right-6 justify-center`}
      onClick={toggleMenu}
    >
      {[1, 2, 3, 4, 5].map(() => (
        <div
          key={v4()}
          className={`h-full relative w-[1px] bg-black before:absolute 
          before:top-0 before:right-0 before:left-0 before:bottom-0 before:bg-black 
          transition-transform duration-300 ease-out origin-center 
          ${
            show
              ? "rotate-[35deg] before:-rotate-[70deg]"
              : "rotate-0 before:rotate-0"
          }`}
        ></div>
      ))}
    </button>
  );
}

export default MenuBtn;
