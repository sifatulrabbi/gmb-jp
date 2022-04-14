// dependencies
import React from "react";
import { useInViewport } from "react-in-viewport";
// components
import PersonThinking from "../../components/CustomIcons/PersonThinking";
import Section from "../../components/Section";
import MessyLines from "../../components/CustomIcons/MessyLines";
import { v4 } from "uuid";

function IntroText({ content, gridAreaName }) {
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
      className={`relative writing-vertical flex justify-center items-center 
      ${gridAreaName}`}
    >
      <p
        className={`z-[2] opacity-0 -transform-y-4 ${
          inViewport ? "anim-text-slide-down" : ""
        }`}
        dangerouslySetInnerHTML={{ __html: content }}
      ></p>
      <div className="-z-1 absolute w-full max-w-[240px] h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
                gridAreaName: "intro-section-text1 mt-[100px]",
              },
              {
                content: "他のSNSと一緒でしょ?",
                gridAreaName: "intro-section-text2",
              },
              {
                content: "いちおう登録したが<br/>手 応 え が ない",
                gridAreaName: "intro-section-text3 mt-[100px]",
              },
            ].map((item) => (
              <IntroText key={v4()} {...item} />
            ))}
            <div
              className={`mx-auto w-full h-full intro-section-img flex justify-center items-end`}
            >
              <PersonThinking />
            </div>
          </div>
        ),
      }}
    />
  );
}

export default Intro;
