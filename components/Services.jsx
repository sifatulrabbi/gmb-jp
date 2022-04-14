// dependencies
import React from "react";
import { v4 } from "uuid";
// components
import Section from "./Section";
import CircleLogo from "./CustomIcons/CircleLogo";

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
          className="w-full p-2 h-[42px] border-b-2 border-[#E6E6E6] last:border-transparent text-center"
        >
          {content}
        </div>
      ))}
    </div>
  );
}

// main component
function Services() {
  return (
    <Section
      className="bg-gray-200/70"
      asideTitle={{ content: "Chapter 6" }}
      mainTitle={{ className: "font-biz", content: "集客の景色が変わる" }}
      body={{
        content: (
          <>
            <div className="pl-6 font-biz">
              <p>
                独自ランキングファクター
                <br />
                GoogleマイビジネスAPI-Developer
                <br />
                <small className="text-sm">業界屈指の継続率</small>
              </p>
            </div>
            <div className="flex w-full flex-col justify-start items-center font-biz mt-12 mb-6">
              <span className="block font-bold text-4xl md:text-5xl lg:text-6xl">
                GMB/JAPAN
              </span>
              <span className="block text-xs lg:text-base font-bold">
                ジーエムビージャパン
              </span>
            </div>
            <ServicesCard />
          </>
        ),
      }}
    />
  );
}

export default Services;
