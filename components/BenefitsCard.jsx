// dependencies
import React from "react";
import { useInViewport } from "react-in-viewport";
// components
import { AiOutlineArrowRight } from "react-icons/ai";
import MessyLines from "./CustomIcons/MessyLines";

// main component
function BenefitsCard({ name, summary }) {
  const elementRef = React.useRef(null);
  const { inViewport } = useInViewport(
    elementRef,
    {},
    { disconnectOnLeave: false },
    { name, summary }
  );

  return (
    <div
      ref={elementRef}
      className="flex flex-row justify-center items-center border-b-[1px] py-6 border-black gap-4 lg:gap-[4vw] last:border-transparent"
    >
      {/* card left part */}
      <div className="relative px-4 lg:px-6">
        <h5
          className={`writing-vertical font-medium text-center opacity-0 -transform-y-4 ${
            inViewport ? "anim-text-slide-down" : ""
          }`}
          dangerouslySetInnerHTML={{ __html: name }}
        ></h5>
        <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 z-[-1]">
          <MessyLines />
        </div>
      </div>

      <AiOutlineArrowRight className="block text-[5rem]" />

      {/* card right part */}
      <p
        className={`tracking-wider leading-relaxed opacity-0 -transform-y-4 ${
          inViewport ? "anim-text-slide-down" : ""
        }`}
      >
        {summary}
      </p>
    </div>
  );
}

export default BenefitsCard;
