// dependencies
import React from "react";

// main component
// Create a section component with custom content and classes
function Section({ className, asideTitle, mainTitle, body, wrapperClass }) {
  return (
    <section
      className={`w-full flex justify-start items-start px-6 md:pl-[15vw] font-yumin border-black ${className}`}
    >
      {/* section main */}
      <div
        className={`w-full h-full border-l-[1px] border-inherit pt-[12vh] flex flex-col justify-start items-start ${wrapperClass}`}
      >
        {/* section header */}
        <div
          className={`flex relative -ml-[1px] pl-6 w-full border-l-[3px] border-black ${mainTitle.className}`}
        >
          <h2 className="text-2xl md:text-4xl text-anim-slide-right">
            {mainTitle.content}
          </h2>
          <span
            className={`block absolute writing-vertical top-0 -left-5 uppercase text-xs tracking-widest whitespace-nowrap font-biz ${asideTitle.className}`}
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
