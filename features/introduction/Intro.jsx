// dependencies
import React from "react";
// components
import PersonThinking from "../../components/CustomIcons/PersonThinking";
import Section from "../../components/Section";
import MessyLines from "../../components/CustomIcons/MessyLines";

// main component
function Intro() {
  return (
    <Section
      className="bg-gray-200/60"
      asideTitle={{ content: "Introduction" }}
      mainTitle={{ content: "Googleマイビジネス やってますか？" }}
      body={{
        content: (
          <div className="intro-section text-lg lg:text-2xl">
            <div className="relative writing-vertical flex justify-center items-center mt-[100px] intro-section-text1">
              <p className="z-[2]">やり方がよくわからない</p>
              <div className="-z-1 absolute w-full max-w-[240px] h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <MessyLines />
              </div>
            </div>
            <div className="relative writing-vertical flex justify-center items-center intro-section-text2">
              <p className="z-[2]">他のSNSと一緒でしょ?</p>
              <div className="-z-1 absolute w-full max-w-[240px] h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <MessyLines />
              </div>
            </div>
            <div className="relative writing-vertical flex justify-center items-center mt-[100px] intro-section-text3">
              <p className="z-[2]">
                いちおう登録したが
                <br />手 応 え が な い
              </p>
              <div className="-z-1 absolute w-full max-w-[240px] h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <MessyLines />
              </div>
            </div>
            <div className="mx-auto w-full h-full intro-section-img flex justify-center items-end">
              <PersonThinking />
            </div>
          </div>
        ),
      }}
    />
  );
}

export default Intro;
