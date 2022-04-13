// dependencies
import React from "react";
// components
import Section from "./Section";
import PersonTalk from "./CustomIcons/PersonTalk";

function FooterBottom() {
  return (
    <section className="flex flex-col justify-start items-start font-biz px-6 mt-12 mb-16">
      <h4 className="text-xl mb-4">集客の景色が変わる</h4>
      <p>
        独自ランキングファクター
        <br />
        GoogleマイビジネスAPI-Developer
        <small className="text-sm">業界屈指の継続率</small>
      </p>
      <div className="flex flex-col justify-start items-center font-biz mt-12 mb-6">
        <span className="block font-bold text-5xl mb-2">GMB/JAPAN</span>
        <span className="block text-xs text-right w-full font-bold">
          ジーエムビージャパン
        </span>
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
        className="bg-[#292929] text-white"
        asideTitle={{ content: "Chapter 2" }}
        mainTitle={{
          className: "border-white",
          content: (
            <span>
              飛躍的な効果がある
              <br />
              マイビジ点検とは?
            </span>
          ),
        }}
        body={{
          className: "mb-12",
          content: <PersonTalk />,
        }}
      />
      {/* footer bottom */}
      <FooterBottom />
    </footer>
  );
}

export default Footer;
