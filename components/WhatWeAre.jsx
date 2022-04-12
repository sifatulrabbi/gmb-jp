// dependencies
import React from "react";
// components
import Section from "./Section";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import WhatAreWeIllustration1 from "./WhatAreWeIllustration1";
import WhatAreWeIllustration2 from "./WhatAreWeIllustration2";

// main component
function WhatWeAre() {
  return (
    <div className="flex flex-col">
      {/* first section */}
      <Section
        className="bg-[#292929] text-white pr-0"
        asideTitle={{ className: "text-transparent", content: "What are we" }}
        mainTitle={{
          className: "border-white pr-6",
          content: "マイビジ集客の決定版 GMBクラブとは?",
        }}
        body={{
          className: "px-0",
          content: (
            <Link href="/">
              <a className="block w-full relative mt-8 mb-14">
                <WhatAreWeIllustration1 />
                <button className="bg-[#3C3C3C] h-[50px] w-[50px] rounded-full flex justify-center items-center absolute right-8 bottom-0 translate-y-1/2">
                  <AiOutlineArrowRight className="text-xl" />
                  <span className="block absolute text-transparent">
                    さらに詳しく読む
                  </span>
                </button>
              </a>
            </Link>
          ),
        }}
      />

      {/* second section */}
      <Section
        className="bg-[#3C3C3C] text-white pr-0"
        asideTitle={{ className: "text-transparent", content: "What are we" }}
        mainTitle={{
          className: "border-white pr-6",
          content: (
            <span>
              なぜ経営者が
              <br />
              発信するのか?
            </span>
          ),
        }}
        body={{
          className: "px-0",
          content: (
            <Link href="/">
              <a className="block w-full relative mt-8 mb-14">
                <WhatAreWeIllustration2 />
                <button className="bg-[#292929] h-[50px] w-[50px] rounded-full flex justify-center items-center absolute right-8 bottom-0 translate-y-1/2">
                  <AiOutlineArrowRight className="text-xl" />
                  <span className="block absolute text-transparent">
                    さらに詳しく読む
                  </span>
                </button>
              </a>
            </Link>
          ),
        }}
      />
    </div>
  );
}

export default WhatWeAre;
