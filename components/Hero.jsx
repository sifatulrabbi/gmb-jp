// dependencies
import React from "react";
// components
import Image from "next/image";
import { heroImg } from "../static";
import TopLogo from "./CustomIcons/TopLogo";

// main component
function Hero() {
  return (
    <section className="font-yumin h-max flex min-h-screen">
      <div className="hero-container">
        <div className="hero-left">
          <TopLogo />
        </div>
        <div className="hero-middle">
          <h1 className="font-yumin font-bold hero-h1 flex flex-col hero-text-container">
            <div className="hero-text1">集客の景色を</div>
            <span className="hero-text2">変えます</span>
          </h1>
          <div className="flex justify-end px-6">
            <div className="overflow-hidden hero-img">
              <Image
                src={heroImg}
                alt=""
                layout="intrinsic"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex mt-12 text-lg md:text-2xl hero-bottom">
          <p className="text-xs uppercase font-feature-vrt2 writing-vertical h-max px-1 text-transparent">
            About
          </p>
          <ul className="flex flex-col pl-4 pb-8 border-l-[1px] border-black">
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
    </section>
  );
}

export default Hero;
