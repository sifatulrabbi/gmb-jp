// dependencies
import Image from "next/image";
import React from "react";
// components
import { topLogo } from "../../static";

// main component
function Menu({ show }) {
  return (
    <div
      className={`"z-50 absolute top-0 right-0 left-0 bottom-0 bg-[#292929] text-white flex justify-start items-center overflow-hidden`}
    >
      <div className="origin-left rotate-90 absolute top-0 leading-[1] left-0 translate-x-[50px] -translate-y-[50px]">
        <span className="font-english text-[120px] opacity-10">GMB/JAPAN</span>
      </div>
      {/* left side */}
      <section className="w-[35%] h-full border-r-[1px] border-[#393939] relative flex justify-center items-center">
        <p className="text-[#8f8f8f] font-bold text-lg leading-loose tracking-[10px] writing-vertical font-feature-vrt2">
          社長の隣に、編集者を
        </p>
      </section>

      {/* right side */}
      <section>
        {/* right top side */}
        <div></div>

        {/* right bottom side */}
        <div></div>
      </section>
    </div>
  );
}

export default Menu;
