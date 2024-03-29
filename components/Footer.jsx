// dependencies
import React from "react";
// components
import Section from "./Section";
import Link from "next/link";
import Image from "next/image";
import { logoImg, personTalk } from "../images";
import { AiOutlineArrowRight } from "react-icons/ai";

function FooterBottom() {
  return (
    <section className="flex flex-col justify-start items-start font-biz px-6 mt-12 mb-16 md:pl-[15vw]">
      <h4 className="text-xl mb-4">集客の景色が変わる</h4>
      <p>
        独自ランキングファクター
        <br />
        GoogleマイビジネスAPI-Developer
        <small className="text-sm block">業界屈指の継続率</small>
      </p>
      <div className="flex flex-col justify-start items-center font-biz mt-12 mb-6">
        <Image src={logoImg} alt="" />
      </div>
    </section>
  );
}

// main component
function Footer() {
  return (
    <footer>
      {/* footer top */}
      <Section
        className="bg-[#292929] text-white pr-0"
        wrapperClass="lg:flex-row"
        asideTitle={{ content: "" }}
        mainTitle={{
          className: "border-white pr-6",
          content: (
            <span>
              飛躍的な効果がある
              <br />
              マイビジ点検とは?
            </span>
          ),
        }}
        body={{
          className: "w-full pr-0",
          content: (
            <div className="relative w-full mb-12 lg:max-w-[25vw] ml-auto">
              <Image src={personTalk} alt="" />
              <Link href="https://gmb-jp.com/tenken/mybiji">
                <a className="absolute bottom-0 right-10 lg:right-[10vw] bg-[#3C3C3C] p-4 rounded-full lg:p-6 transition-transform duration-300 ease hover:scale-110">
                  <AiOutlineArrowRight className="text-white text-xl" />
                </a>
              </Link>
            </div>
          ),
        }}
      />
      {/* footer bottom */}
      <FooterBottom />
    </footer>
  );
}

export default Footer;
