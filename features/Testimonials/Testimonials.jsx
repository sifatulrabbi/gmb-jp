// dependencies
import React from "react";
// states
import { useRecoilValue } from "recoil";
import { testimonialState } from "./testimonialsState";
// components
import { AiOutlineArrowRight } from "react-icons/ai";
import { v4 } from "uuid";
import Link from "next/link";

// main component
function Testimonials() {
  const testimonials = useRecoilValue(testimonialState);

  return (
    <section className="w-full h-max font-bliz bg-gray-200/70">
      {/* top part */}
      <div className="w-full flex flex-col justify-start items-start px-6 md:pl-[15vw]">
        <div className="w-full border-l-[1px] border-black">
          <h2 className="text-2xl -ml-[1px] pl-6 w-full border-l-[3px] border-black mt-16 mb-8 flex flex-row items-center gap-4 md:text-4xl">
            お客さまの声 <AiOutlineArrowRight />
          </h2>
        </div>
      </div>

      {/* bottom part */}
      <div className="bg-white flex justify-center items-center md:pl-[15vw] md:pr-[10vw] md:py-[10vh]">
        <div
          className="w-full grid grid-cols-6 py-12 px-6"
          style={{ justifyItems: "center" }}
        >
          {testimonials.map((testimonial, index) => (
            <Link key={v4()} href="/">
              <a className="flex flex-col justify-between gap-4 items-center w-full px-2 border-l-2 last:border-r-2 border-gray-300 tracking-widest md:text-xl md:gap-[5vw] hover:bg-gray-100 duration-200 ease-out">
                <span className="writing-vertical">{testimonial}</span>
                <span>{index + 1}</span>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
