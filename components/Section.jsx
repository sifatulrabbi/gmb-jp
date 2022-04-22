// dependencies
import React from "react";
import { useInViewport } from "react-in-viewport";

// main component
// Create a section component with custom content and classes
function Section({
  className = "",
  animations = {
    section: "",
    wrapper: "",
    mainTitle: "",
    asideTitle: "",
    body: "",
  },
  asideTitle = { className: "", content: <></> },
  mainTitle = { className: "", content: <></> },
  body = { className: "", content: <></> },
  wrapperClass = "",
}) {
  const sectionElementRef = React.useRef(null);
  const { inViewport } = useInViewport(
    sectionElementRef,
    {},
    { disconnectOnLeave: false },
    { className, animations, asideTitle, mainTitle, body, wrapperClass }
  );

  return (
    <section
      ref={sectionElementRef}
      className={`w-[100vw] flex justify-start items-start px-6 md:pl-[15vw] font-yumin 
      ${className} 
      ${inViewport ? animations.section : ""}`}
    >
      {/* section main */}
      <div
        className={`w-full h-full pt-[12vh] flex flex-col justify-start items-start 
        ${wrapperClass} 
        ${inViewport ? animations.wrapper : ""}`}
      >
        {/* section header */}
        <div
          className={`flex relative -ml-[1px] pl-6 w-full border-l-[3px] border-black scale-0 
          ${mainTitle.className} 
          ${inViewport ? "grow-anim" : ""}`}
        >
          <h2
            className={`text-2xl md:text-4xl -translate-x-4 opacity-0 ${
              inViewport ? "text-anim-slide-right" : ""
            }`}
          >
            {mainTitle.content}
          </h2>
          <span
            className={`block absolute writing-vertical top-0 -left-5 uppercase text-xs tracking-widest whitespace-nowrap font-biz 
            ${asideTitle.className} 
            ${inViewport ? "text-anim-slide-left" : ""}`}
          >
            {asideTitle.content && asideTitle.content}
          </span>
        </div>

        {/* section body */}
        <div className={`w-full h-max mt-6 md:text-xl ${body.className}`}>
          {body.content}
        </div>
      </div>
    </section>
  );
}

export default Section;
