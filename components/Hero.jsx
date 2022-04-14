// dependencies
import React from "react";
// components
import Image from "next/image";
import { heroImg } from "../static";

// main component
function Hero() {
  return (
    <section className="font-yumin w-full h-screen flex flex-col">
      {/* hero top */}
      <div className="flex flex-row items-start gap-12">
        {/* hero left logo image */}
        <div className="max-w-[20%]">
          <span className="writing-vertical text-[90px] leading-[0.75] pt-4 font-poppins">
            GBM/JAPAN
          </span>
        </div>

        {/* hero right */}
        <div className="flex flex-col gap-8 mt-[20vh] pr-4">
          {/* hero right top text */}
          <h1 className="text-3xl font-yumin font-bold">
            <span className="typewriter">集客の景色を</span>
            <span className="typewriter">変えます</span>
          </h1>

          {/* hero right image */}
          <div className="overflow-hidden max-w-[260px]">
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
      <div className="w-full flex mt-12">
        <p className="text-xs uppercase font-feature-vrt2 writing-vertical h-max px-1 text-transparent">
          About
        </p>
        <ul className="flex flex-col pl-4 pb-12 border-l-[1px] border-black">
          <li className="text-anim-slide-right">
            <span>GMBJAPAN</span>は
          </li>
          <li className="text-anim-slide-right">あなたのお店に</li>
          <li className="text-anim-slide-right">
            お客様を呼ぶ仕掛けを作ります
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;
