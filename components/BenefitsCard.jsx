// dependencies
import React from "react";
// components
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import { bgMessyLines } from "../static";

// main component
function BenefitsCard({ name, summary }) {
  return (
    <div className="flex flex-row justify-center items-center border-b-[1px] py-6 border-black gap-4 last:border-transparent">
      {/* card left part */}
      <div className="flex flex-row relative pl-6 gap-4 items-center">
        <h5
          className="writing-vertical font-medium text-center"
          dangerouslySetInnerHTML={{ __html: name }}
        ></h5>
        <AiOutlineArrowRight className="text-xl" />
        <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">
          <Image
            src={bgMessyLines}
            alt={name}
            layout="intrinsic"
            className="object-cover"
          />
        </div>
      </div>

      {/* card right part */}
      <p className="tracking-wider leading-relaxed">{summary}</p>
    </div>
  );
}

export default BenefitsCard;
