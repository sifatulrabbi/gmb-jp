// dependencies
import React from "react";
// components
import Section from "./Section";
import PersonTalk from "./CustomIcons/PersonTalk";
import { AiOutlineArrowRight } from "react-icons/ai";

// main component
function ChapterFive() {
  return (
    <Section
      className="bg-[#292929] text-white pr-0"
      wrapperClass="lg:flex-row"
      asideTitle={{ content: "Chapter 5" }}
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
          </div>
        ),
      }}
    />
  );
}

export default ChapterFive;
