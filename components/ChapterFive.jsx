// dependencies
import React from "react";
// components
import Section from "./Section";
import { personTalk } from "../images";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

// main component
function ChapterFive() {
  return (
    <Section
      className="bg-[#292929] text-white pr-0"
      wrapperClass="lg:flex-row"
      asideTitle={{ content: "Chapter 2" }}
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
            <Image src={personTalk} alt="" />
            <Link href="https://gmb-jp.com/tenken/mybiji">
              <a className="absolute bottom-0 right-4 bg-[#3C3C3C] p-4 rounded-full lg:p-6">
                <AiOutlineArrowRight className="text-white text-xl" />
              </a>
            </Link>
          </div>
        ),
      }}
    />
  );
}

export default ChapterFive;
