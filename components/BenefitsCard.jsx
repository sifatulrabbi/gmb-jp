// dependencies
import React from "react";
// components
import { AiOutlineArrowRight } from "react-icons/ai";
import MessyLines from "./CustomIcons/MessyLines";

// main component
function BenefitsCard({ name, summary }) {
  return (
    <div className="flex flex-row justify-center items-center border-b-[1px] py-6 border-black gap-4 lg:gap-[4vw] last:border-transparent">
      {/* card left part */}
      <div className="relative px-4 lg:px-6">
        <h5
          className="writing-vertical font-medium text-center"
          dangerouslySetInnerHTML={{ __html: name }}
        ></h5>
        <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 z-[-1]">
          <MessyLines />
        </div>
      </div>

      <AiOutlineArrowRight className="block text-[5rem]" />

      {/* card right part */}
      <p className="tracking-wider leading-relaxed">{summary}</p>
    </div>
  );
}

export default BenefitsCard;
