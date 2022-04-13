// dependencies
import React from "react";
// components
import MenuLinks from "./MenuLinks";
import MenuExtraLinks from "./MenuExtraLinks";

// main component
function Menu({ show }) {
  return (
    <div
      className={`font-japanese z-50 fixed top-0 right-0 left-0 bottom-0 bg-[#292929] text-white flex justify-start items-center overflow-hidden ${
        show ? "menu-anim-fade-in" : "menu-anim-fade-out"
      }`}
    >
      <section className="min-w-[120px] max-w-[120px] h-full border-r-[1px] border-[#393939] p-4 relative flex-col justify-start items-center">
        <div
          className={`leading-[1] absolute left-0 -translate-x-[1rem] opacity-0 ${
            show ? "menu-anim-left-down" : "menu-anim-left-up"
          }`}
        >
          <span className="block text-[110px] writing-vertical pt-12 font-biz opacity-10">
            GMB/JAPAN
          </span>
        </div>
        {/* left side */}
        <h4
          className={`text-4xl mt-8 mb-8 font-biz -translate-x-[1rem] opacity-0 ${
            show ? "menu-anim-left-down" : "menu-anim-left-up"
          }`}
        >
          GMB/JAPAN
        </h4>
        <p
          className={`text-[#8f8f8f] w-max mx-auto font-medium text-lg leading-loose tracking-[10px] writing-vertical font-feature-vrt2 font-biz -translate-x-[1rem] opacity-0 ${
            show ? "menu-anim-left-down" : "menu-anim-left-up"
          }`}
        >
          社長の隣に、編集者を
        </p>
      </section>

      {/* right side */}
      <section className="w-full pt-8">
        {/* right top side */}
        <MenuLinks />
        {/* right bottom side */}
        <MenuExtraLinks />
      </section>
    </div>
  );
}

export default Menu;
