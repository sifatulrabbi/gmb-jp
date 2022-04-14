// dependencies
import React from "react";
// components
import LongArrow from "./CustomIcons/LongArrow";

// main component
function MainWorkCard({ Icon, name, summary, index }) {
  return (
    <div className="w-full">
      {/* top part */}
      <div className="w-full grid grid-cols-[auto_1fr] mb-8 items-center justify-start text-base">
        <div className="text-white bg-black px-4 py-1 uppercase whitespace-nowrap font-biz">
          Step {index + 1}
        </div>
        <LongArrow />
      </div>

      {/* main body */}
      <div className="w-full lg:border-r-[1px]">
        <div className="flex flex-col mx-auto justify-center items-center gap-8 max-w-sm">
          {/* name */}
          <h4 className="writing-vertical font-medium tracking-[5px] text-lg font-japanese">
            {name}
          </h4>
          {/* icon */}
          <div className="max-w-[136px] h-auto">
            <Icon />
          </div>
          {/* body */}
          <div
            className="w-full text-left tracking-wider leading-relaxed font-biz"
            dangerouslySetInnerHTML={{ __html: summary }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default MainWorkCard;
