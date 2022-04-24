// dependencies
import React from "react";
// components
import MenuLinks from "./MenuLinks";
import MenuExtraLinks from "./MenuExtraLinks";
import Image from "next/image";
import { logoImgWhite } from "../../images";

// main component
function Menu({ show }) {
  return (
    <div
      className={`font-japanese z-50 fixed top-0 right-0 left-0 bottom-0 bg-[#292929] text-white flex justify-start items-center overflow-hidden ${
        show ? "menu-anim-fade-in" : "menu-anim-fade-out"
      }`}
    >
      <div
        className={`absolute top-0 left-0 bottom-0 w-max -translate-x-[1rem] opacity-0 ${
          show ? "menu-anim-left-down" : "menu-anim-left-up"
        }`}
      >
        <span
          className={`writing-vertical hero-display leading-[.8] font-poppins opacity-10`}
        >
          GMB/JAPAN
        </span>
        <span className="absolute left-1/2 top-[20%] text-[#8f8f8f] w-max mx-auto text-lg leading-loose tracking-[10px] writing-vertical font-feature-vrt2 font-biz font-bold">
          集客の景色が変わる
        </span>
        <div className="font-poppins text-4xl md:text-5xl absolute top-[70px] left-4 min-w-[180px] w-[15vw]">
          <Image src={logoImgWhite} alt="GMB/JAPAN" />
        </div>
      </div>

      <section className="w-full h-full border-l-[1px] border-gray-100/20 ml-[30%] md:ml-[15vw] pb-8 flex flex-col justify-end">
        <MenuLinks />
        <MenuExtraLinks />
      </section>
    </div>
  );
}

export default Menu;
