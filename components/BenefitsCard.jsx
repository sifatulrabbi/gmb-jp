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
      className={`flex flex-row justify-center items-center py-6 gap-4 lg:gap-[4vw] last:border-transparent relative ${
        inViewport ? "benefit-card-container" : ""
      }`}
    >
      {/* card left part */}
      <div className="relative px-4 lg:px-6">
        <h5
          className={`writing-vertical font-medium text-center opacity-0 translate-y-6 left`}
          dangerouslySetInnerHTML={{ __html: name }}
        ></h5>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] w-[130%] flex items-center">
          <MessyLines />
        </div>
      </div>
      <div
        className="w-max opacity-0 -translate-x-6 right"
        style={{ animationDelay: "0.5s" }}
      >
        <AiOutlineArrowRight className="block text-[1rem] lg:text-[2rem]" />
      </div>
      <p
        className={`tracking-wider leading-relaxed opacity-0 -translate-x-6 right text-sm md:text-2xl`}
        dangerouslySetInnerHTML={{ __html: summary }}
        style={{ animationDelay: "0.6s" }}
      ></p>
    </div>
  );
}

export default BenefitsCard;
