// dependencies
import React from "react";

// main component
// Create a section component with custom content and classes
function Section({ className, asideTitle, mainTitle, body }) {
  return (
    <section
      className={`w-full h-max flex justify-start items-start px-6 ${className}`}
    >
      {/* section main */}
      <div className="border-l-[1px] border-black pt-16 flex flex-col justify-start items-start">
        {/* section header */}
        <div
          className={`flex relative pl-6 w-full border-l-2 border-black ${mainTitle.className}`}
        >
          <h2 className="text-2xl">{mainTitle.content}</h2>
          <span
            className={`block absolute writing-vertical top-0 -left-5 uppercase text-xs tracking-wider ${asideTitle.className}`}
          >
            {asideTitle.content && asideTitle.content}
          </span>
        </div>

        {/* section body */}
        <div className={`w-full h-max mt-6 ${body.className}`}>
          {body.content}
        </div>
      </div>
    </section>
  );
}

export default Section;
