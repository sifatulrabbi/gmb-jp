// dependencies
import React from "react";
// components
import Image from "next/image";
import { heroImg } from "../static";

// main component
function Hero() {
  return (
    <section className="font-yumin w-full h-max flex flex-col mb-8 min-h-screen">
      <div className="max-w-[20%] absolute">
        <span className="block writing-vertical hero-display leading-[0.75] pt-4 font-poppins">
          GBM/JAPAN
        </span>
      </div>
      {/* hero top */}
      <div className="flex flex-col items-start gap-6 md:ml-[15vw]">
        {/* hero right */}
        <div className="w-full flex flex-col gap-8 mt-[20vh] pr-4 pl-[90px] md:pl-0 justify-center items-center md:flex-row">
          {/* hero right top text */}
          <h1 className="font-yumin font-bold hero-h1 flex flex-col">
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
        <div className="w-full flex mt-12 text-lg md:text-2xl">
          <p className="text-xs uppercase font-feature-vrt2 writing-vertical h-max px-1 text-transparent">
            About
          </p>
          <ul className="flex flex-col pl-4 pb-4 border-l-[1px] border-black">
            <li className="text-anim-slide-right">
              <span>GMBJAPAN</span>は
            </li>
            <li className="text-anim-slide-right">あなたのお店に</li>
            <li className="text-anim-slide-right">
              お客様を呼ぶ仕掛けを作ります
            </li>
          </ul>
        </div>
      </div>
      {/* hero bottom */}
    </section>
  );
}

export default Hero;
