// dependencies
import React from "react";
// components
import Image from "next/image";
import { heroImg, topLogo } from "../static";

// main component
function Hero() {
  return (
    <div className="w-full h-screen flex flex-col">
      {/* hero top */}
      <div className="flex flex-row items-start gap-12">
        {/* hero left logo image */}
        <div className="max-w-[20%]">
          <span className="writing-vertical text-[80px] leading-[1] pt-4">
            GBM/JAPAN
          </span>
        </div>

        {/* hero right */}
        <div className="flex flex-col gap-8 mt-[20vh] pr-4">
          {/* hero right top text */}
          <h1 className="font-medium text-3xl">
            集客の景色を
            <br />
            変えます
          </h1>

          {/* hero right image */}
          <div className="overflow-hidden">
            <Image
              src={heroImg}
              alt=""
              layout="intrinsic"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* hero bottom */}
      <div className="w-full flex">
        <p className="text-xs uppercase font-feature-vrt2 writing-vertical h-max px-1 text-transparent">
          About
        </p>
        <ul className="flex flex-col pl-4 pb-12 border-l-[1px] border-black">
          <li>
            <span>GMBJAPAN</span>は
          </li>
          <li>あなたのお店に</li>
          <li>お客様を呼ぶ仕掛けを作ります</li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
