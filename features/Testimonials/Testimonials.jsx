// dependencies
import React from "react";
import { useInViewport } from "react-in-viewport";
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
  const elementRef = React.useRef(null);
  const { inViewport } = useInViewport(
    elementRef,
    {},
    { disconnectOnLeave: false }
  );

  return (
    <section ref={elementRef} className="w-full h-max font-bliz bg-gray-200/70">
      {/* top part */}
      <div className="w-full flex flex-col justify-start items-start px-6 md:pl-[15vw]">
        <div className="w-full">
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
          <Link key={v4()} href="https://gmb-jp.com/tenken/review/">
            <a
              className={`flex flex-col justify-between gap-[5vh] items-center w-full px-2 
                border-l-[1px] last:border-r-2 border-gray-300 tracking-widest 
                md:text-xl md:gap-[5vw] hover:bg-gray-100 duration-200 ease-out 
                opacity-0 translate-y-5
                ${
                  inViewport
                    ? `animate-[textSlideUp_0.8s_ease_0.5s_forwards]`
                    : ""
                }`}
            >
              <span className="writing-vertical">顧問編集者とは?</span>
              <span className="text-xs md:text-sm lg:text-base">1</span>
            </a>
          </Link>
          <Link key={v4()} href="https://gmb-jp.com/tenken/review/">
            <a
              className={`flex flex-col justify-between gap-[5vh] items-center w-full px-2 
                border-l-[1px] last:border-r-2 border-gray-300 tracking-widest 
                md:text-xl md:gap-[5vw] hover:bg-gray-100 duration-200 ease-out 
                opacity-0 translate-y-5
                ${
                  inViewport
                    ? `animate-[textSlideUp_0.8s_ease_0.7s_forwards]`
                    : ""
                }`}
            >
              <span className="writing-vertical">
                顧問編集者は具体的に何をするのか?
              </span>
              <span className="text-xs md:text-sm lg:text-base">2</span>
            </a>
          </Link>
          <Link key={v4()} href="https://gmb-jp.com/tenken/review/">
            <a
              className={`flex flex-col justify-between gap-[5vh] items-center w-full px-2 
                border-l-[1px] last:border-r-2 border-gray-300 tracking-widest 
                md:text-xl md:gap-[5vw] hover:bg-gray-100 duration-200 ease-out 
                opacity-0 translate-y-5
                ${
                  inViewport
                    ? `animate-[textSlideUp_0.8s_ease_0.9s_forwards]`
                    : ""
                }`}
            >
              <span className="writing-vertical">
                なぜ「経営者」が発信するのか?
              </span>
              <span className="text-xs md:text-sm lg:text-base">3</span>
            </a>
          </Link>
          <Link key={v4()} href="https://gmb-jp.com/tenken/review/">
            <a
              className={`flex flex-col justify-between gap-[5vh] items-center w-full px-2 
                border-l-[1px] last:border-r-2 border-gray-300 tracking-widest 
                md:text-xl md:gap-[5vw] hover:bg-gray-100 duration-200 ease-out 
                opacity-0 translate-y-5
                ${
                  inViewport
                    ? `animate-[textSlideUp_0.8s_ease_1.1s_forwards]`
                    : ""
                }`}
            >
              <span className="writing-vertical">
                なぜ「企業側」に編集者が必要なのか?
              </span>
              <span className="text-xs md:text-sm lg:text-base">4</span>
            </a>
          </Link>
          <Link key={v4()} href="https://gmb-jp.com/tenken/review/">
            <a
              className={`flex flex-col justify-between gap-[5vh] items-center w-full px-2 
                border-l-[1px] last:border-r-2 border-gray-300 tracking-widest 
                md:text-xl md:gap-[5vw] hover:bg-gray-100 duration-200 ease-out 
                opacity-0 translate-y-5
                ${
                  inViewport
                    ? `animate-[textSlideUp_0.8s_ease_1.3s_forwards]`
                    : ""
                }`}
            >
              <span className="writing-vertical">どんな効果があるのか?</span>
              <span className="text-xs md:text-sm lg:text-base">5</span>
            </a>
          </Link>
          <Link key={v4()} href="https://gmb-jp.com/tenken/review/">
            <a
              className={`flex flex-col justify-between gap-[5vh] items-center w-full px-2 
                border-l-[1px] last:border-r-2 border-gray-300 tracking-widest 
                md:text-xl md:gap-[5vw] hover:bg-gray-100 duration-200 ease-out 
                opacity-0 translate-y-5
                ${
                  inViewport
                    ? `animate-[textSlideUp_0.8s_ease_1.5s_forwards]`
                    : ""
                }`}
            >
              <span className="writing-vertical">お客さまの声</span>
              <span className="text-xs md:text-sm lg:text-base">6</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
