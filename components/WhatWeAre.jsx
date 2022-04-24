// dependencies
import React from "react";
// components
import Section from "./Section";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { personDestination, personsChat } from "../images";

// main component
function WhatWeAre() {
  return (
    <div className="grid lg:grid-cols-2 lg:flex-row items-start lg:max-w-[90vw] lg:mx-auto lg:pl-[10vw]">
      {/* first section */}
      <Section
        className="bg-[#292929] text-white pr-0 h-full justify-between lg:pl-[8vw] border-transparent"
        asideTitle={{ content: "Introduction" }}
        mainTitle={{
          className: "border-white pr-6",
          content: "マイビジ集客の決定版 GMBクラブとは?",
        }}
        body={{
          className: "px-0 h-full flex items-end",
          content: (
            <div className="flex items-end w-full relative mt-8 mb-14">
              <div className="w-full h-auto">
                <Image src={personsChat} alt="" />
              </div>
              <Link href="https://gmb-jp.com/tenken/gmbclub/">
                <a className="bg-[#3C3C3C] h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] rounded-full flex justify-center items-center absolute right-8 bottom-0 translate-y-1/2 transition-transform duration-300 ease hover:scale-110">
                  <AiOutlineArrowRight className="text-xl" />
                  <span className="block absolute text-transparent">
                    さらに詳しく読む
                  </span>
                </a>
              </Link>
            </div>
          ),
        }}
      />

      {/* second section */}
      <Section
        className="bg-[#3C3C3C] text-white pr-0 lg:pl-[8vw] border-transparent"
        asideTitle={{ content: "Chapter 3" }}
        mainTitle={{
          className: "border-white pr-6",
          content: (
            <span>
              飛躍的な効果がある
              <br />
              勝ち組パターンとは？
            </span>
          ),
        }}
        body={{
          className: "px-0",
          content: (
            <div className="block w-full relative mt-8 mb-14">
              <Image src={personDestination} alt="" />
              <Link href="https://gmb-jp.com/tenken/katigumi/">
                <a className="bg-[#292929] h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] rounded-full flex justify-center items-center absolute right-8 bottom-0 translate-y-1/2 transition-transform duration-300 ease hover:scale-110">
                  <AiOutlineArrowRight className="text-xl" />
                  <span className="block absolute text-transparent">
                    さらに詳しく読む
                  </span>
                </a>
              </Link>
            </div>
          ),
        }}
      />
    </div>
  );
}

export default WhatWeAre;
