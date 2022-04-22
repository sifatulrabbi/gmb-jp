// dependencies
import React from "react";
import { v4 } from "uuid";
import { useInViewport } from "react-in-viewport";
// components
import Section from "./Section";
import CircleLogo from "./CustomIcons/CircleLogo";
import { logoImg } from "../images";
import Image from "next/image";

function ServicesCard() {
  return (
    <div className="font-biz shadow-lg -mx-1 bg-white relative">
      <div className="absolute z-[10] w-16 top-[5%] left-[20%]">
        <CircleLogo />
      </div>
      {[
        "",
        "",
        "",
        "「コンテンツを積み上げてい",
        "くと“資産”になるんです」",
        "",
        "",
        "",
        "",
        "",
        "代表取締役 岡 健作 さま",
        "株式会社スタディーハッカー",
        "",
      ].map((content) => (
        <div
          key={v4()}
          className={`w-full p-2 h-[42px] border-b-2 border-[#E6E6E6] last:border-transparent text-center`}
        >
          {content}
        </div>
      ))}
    </div>
  );
}

// main component
function Services() {
  const elementRef = React.useRef(null);
  const { inViewport } = useInViewport(
    elementRef,
    {},
    { disconnectOnLeave: false }
  );

  return (
    <Section
      className="bg-gray-200/70 border-white"
      asideTitle={{ content: "" }}
      mainTitle={{
        className: "font-biz border-white",
        content: "集客の景色が変わる",
      }}
      body={{
        content: (
          <>
            <div ref={elementRef} className="pl-6 font-biz">
              <p
                className={`opacity-0 -translate-y-4 ${
                  inViewport ? "anim-text-slide-down-delay" : ""
                }`}
              >
                独自ランキングファクター
              </p>
              <p
                className={`opacity-0 -translate-y-4 ${
                  inViewport ? "anim-text-slide-down-delay" : ""
                }`}
              >
                GoogleマイビジネスAPI-Developer
              </p>
              <p
                className={`text-sm opacity-0 -translate-y-4 ${
                  inViewport ? "anim-text-slide-down-delay" : ""
                }`}
              >
                業界屈指の継続率
              </p>
            </div>
            <div className="flex w-full flex-col justify-start items-center font-biz mt-12 mb-6">
              <Image src={logoImg} alt="" />
            </div>
            <ServicesCard />
          </>
        ),
      }}
    />
  );
}

export default Services;
