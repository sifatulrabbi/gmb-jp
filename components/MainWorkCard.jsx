// dependencies
import React from "react";
import { useInViewport } from "react-in-viewport";
// components
import LongArrow from "./CustomIcons/LongArrow";

// main component
function MainWorkCard({ Icon, name, summary, index }) {
  const elementRef = React.useRef(null);
  const { inViewport } = useInViewport(
    elementRef,
    {},
    { disconnectOnLeave: false },
    { name, summary }
  );

  return (
    <div ref={elementRef} className="w-full">
      {/* top part */}
      <div className="w-full grid grid-cols-[auto_1fr] mb-8 items-center justify-start text-base">
        <div className="text-white bg-black px-4 py-1 uppercase whitespace-nowrap font-biz">
          Step {index + 1}
        </div>
        <div
          className={`overflow-hidden w-0 ${
            inViewport ? "anim-grow-right" : ""
          }`}
        >
          <LongArrow />
        </div>
      </div>

      {/* main body */}
      <div className="w-full lg:border-r-[1px]">
        <div className="flex flex-col mx-auto justify-center items-center gap-8 max-w-sm">
          {/* name */}
          <h4
            className={`writing-vertical font-medium tracking-[5px] text-lg font-japanese translate-y-4 opacity-0 ${
              inViewport ? "animate-[textSlideUp_0.5s_ease_0.4s_forwards]" : ""
            }`}
          >
            {name}
          </h4>
          {/* icon */}
          <div
            className={`max-w-[136px] w-[30vw] h-auto opacity-0 translate-y-4 ${
              inViewport ? "animate-[textSlideUp_0.8s_ease_0.7s_forwards]" : ""
            }`}
          >
            <Icon />
          </div>
          {/* body */}
          <div
            className={`w-full text-left tracking-wider leading-relaxed font-biz translate-y-4 opacity-0 ${
              inViewport ? "animate-[textSlideUp_0.7s_ease_1.0s_forwards]" : ""
            }`}
            dangerouslySetInnerHTML={{ __html: summary }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default MainWorkCard;
