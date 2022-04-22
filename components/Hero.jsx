// dependencies
import React from "react";
// components
import Image from "next/image";
import { heroImg } from "../static";
import TopLogo from "./CustomIcons/TopLogo";

// main component
function Hero() {
  return (
    <section className="font-yumin h-max flex min-h-screen w-full">
      <div className="hero-container">
        <div className="hero-left">
          <TopLogo />
        </div>
        <div className="hero-middle">
          <div className="w-full h-full flex justify-center items-end md:items-center">
            <h1 className="font-yumin font-bold hero-h1 flex flex-col hero-text-container mb-8">
              <div className="hero-text1">集客の景色を</div>
              <span className="hero-text2">変えます</span>
            </h1>
          </div>
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
        <div className="w-full flex mt-12 text-lg md:text-2xl hero-bottom pl-6">
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
