// dependencies
import React from "react";
import { v4 } from "uuid";

// main component
function MenuBtn({ show, toggleMenu }) {
  return (
    <button
      className={`relative z-[1000] h-[7vw] min-h-[60px] flex w-[64px] gap-[3px] right-6 justify-center menu-btn ${
        show ? "show" : ""
      }`}
      onClick={toggleMenu}
    >
      {[0, 1, 2, 3, 4].map((item) => (
        <div
          key={v4()}
          className={`menu-btn-bar h-full relative w-[1px] bg-black 
          before:absolute before:top-0 before:right-0 before:left-0 before:bottom-0 before:bg-black 
          ${
            show
              ? "rotate-[35deg] before:-rotate-[70deg] bg-[#a0a0a0] before:bg-[#a0a0a0]"
              : "rotate-0 before:rotate-0"
          }`}
          style={{ animationDelay: `${item / 20}s` }}
        ></div>
      ))}
      <div
        className={`menu-btn-text uppercase tracking-widest text-sm font-biz writing-vertical hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0`}
      >
        Menu
      </div>
    </button>
  );
}

export default MenuBtn;
