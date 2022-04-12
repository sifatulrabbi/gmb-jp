// dependencies
import React from "react";
// components
import LongArrow from "./CustomIcons/LongArrow";

// main component
function MainWorkCard({ Icon, name, summary, index }) {
  return (
    <div className="w-full">
      {/* top part */}
      <div className="w-full grid grid-cols-[auto_1fr] mb-8 items-center">
        <div className="text-white bg-black px-4 py-1 uppercase">
          Step {index}
        </div>
        <LongArrow />
      </div>

      {/* main body */}
      <div className="flex flex-col justify-center items-center gap-8">
        {/* name */}
        <h4 className="writing-vertical font-medium tracking-[5px] text-lg">
          {name}
        </h4>
        {/* icon */}
        <div className="max-w-[136px] h-auto">
          <Icon />
        </div>
        {/* body */}
        <div
          className="w-full text-left tracking-wider leading-relaxed"
          dangerouslySetInnerHTML={{ __html: summary }}
        ></div>
      </div>
    </div>
  );
}

export default MainWorkCard;
