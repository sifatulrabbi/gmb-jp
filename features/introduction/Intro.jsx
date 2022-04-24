// dependencies
import React from "react";
import { useInViewport } from "react-in-viewport";
// components
import Section from "../../components/Section";
import MessyLines from "../../components/CustomIcons/MessyLines";
import { v4 } from "uuid";
import Image from "next/image";
import { personThinking } from "../../images";

function IntroText({ content, gridAreaName, index }) {
  const elementRef = React.useRef(null);
  const { inViewport } = useInViewport(
    elementRef,
    {},
    { disconnectOnLeave: false },
    { content, gridAreaName }
  );

  return (
    <div
      ref={elementRef}
      className={`relative writing-vertical flex justify-center items-center w-full
      ${gridAreaName}`}
    >
      <p
        className={`z-[2] opacity-0 translate-y-4 ${
          inViewport ? "intro-text" : ""
        }`}
        style={{ animationDelay: `${index / 5}s` }}
        dangerouslySetInnerHTML={{ __html: content }}
      ></p>
      <div
        className={`-z-1 flex items-center absolute w-full min-w-[120px] max-w-[440px] h-auto bottom-0 scale-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
          inViewport ? "intro-messy-lines" : ""
        }`}
      >
        <MessyLines />
      </div>
    </div>
  );
}

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
            {[
              {
                content: "やり方がよくわからない",
                gridAreaName: "intro-section-text1 mt-[100px] md:-mt-[180px]",
              },
              {
                content: "他のSNSと一緒でしょ?",
                gridAreaName: "intro-section-text2 md:mt-4",
              },
              {
                content: "いちおう登録したが<br/>手 応 え が ない",
                gridAreaName: "intro-section-text3 mt-[100px] md:-mt-[180px]",
              },
            ].map((item, index) => (
              <IntroText key={v4()} {...item} index={index} />
            ))}
            <div
              className={`mx-auto max-w-[60vw] w-full h-full intro-section-img flex justify-center items-end`}
            >
              <Image src={personThinking} alt="" />
            </div>
          </div>
        ),
      }}
    />
  );
}

export default Intro;
