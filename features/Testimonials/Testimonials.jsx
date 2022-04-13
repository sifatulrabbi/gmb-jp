// dependencies
import React from "react";
// states
import { useRecoilValue } from "recoil";
import { testimonialState } from "./testimonialsState";
// components
import { AiOutlineArrowRight } from "react-icons/ai";
import { v4 } from "uuid";

// main component
function Testimonials() {
  const testimonials = useRecoilValue(testimonialState);

  return (
    <section className="w-full h-max  font-bliz bg-gray-200/70">
      {/* top part */}
      <div className="w-full flex flex-col justify-start items-start px-6">
        <div className="w-full border-l-[1px] border-black">
          <h2 className="text-2xl -ml-[1px] pl-6 w-full border-l-[3px] border-black mt-16 mb-8 flex flex-row items-center gap-4">
            お客さまの声 <AiOutlineArrowRight />
          </h2>
        </div>
      </div>

      {/* bottom part */}
      <div
        className="w-full bg-white grid grid-cols-6 py-12 px-6"
        style={{ justifyItems: "center" }}
      >
        {testimonials.map((testimonial, index) => (
          <p
            key={v4()}
            className="flex flex-col justify-between gap-4 items-center w-full px-2 border-r-2 last:border-transparent border-gray-300 tracking-widest"
          >
            <span className="writing-vertical">{testimonial}</span>
            <span>{index + 1}</span>
          </p>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
