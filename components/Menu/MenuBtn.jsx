import React from "react";

export function MenuBtn() {
  return (
    <button
      className={`h-[56px] fixed flex w-[64px] gap-[3px] right-6 justify-center`}
      onClick={toggleMenu}
    >
      <div
        className={`h-full relative w-[1px] bg-black before:absolute before:top-0 before:right-0 before:left-0 before:bottom-0 before:bg-black ${
          show ? "origin-center rotate-[30deg] before:-rotate-[30deg]" : ""
        }`}
      ></div>
    </button>
  );
}
