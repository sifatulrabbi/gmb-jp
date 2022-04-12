// dependencies
import React from "react";
// components
import Section from "./Section";
import PersonTalk from "./CustomIcons/PersonTalk";
import { AiOutlineArrowRight } from "react-icons/ai";

// main component
function ChapterTwo() {
  return (
    <Section
      className="bg-[#292929] text-white pr-0"
      asideTitle={{ className: "text-transparent", content: "Chapter 2" }}
      mainTitle={{
        className: "border-white pr-6",
        content: (
          <span>
            飛躍的な効果がある
            <br />
            マイビジ点検とは?
          </span>
        ),
      }}
      body={{
        className: "w-full pr-0",
        content: (
          <div className="relative w-full mb-12">
            <PersonTalk />
            <button className="bg-[#3C3C3C] h-[50px] w-[50px] rounded-full flex justify-center items-center absolute right-8 bottom-0 translate-y-1/2">
              <AiOutlineArrowRight className="text-xl" />
            </button>
          </div>
        ),
      }}
    />
  );
}

export default ChapterTwo;
