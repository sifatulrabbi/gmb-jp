// dependencies
import React from "react";
// components
import { topIntro } from "../../static";
import Image from "next/image";
import Section from "../../components/Section";
import MessyLines from "../../components/MessyLines";

// main component
function Intro() {
  return (
    <Section
      className="bg-gray-200/60"
      asideTitle={{ content: "Introduction" }}
      mainTitle={{ content: "Googleマイビジネス やってますか？" }}
      body={{
        content: (
          <div className="grid grid-cols-3">
            <div className="relative writing-vertical flex justify-center items-center mt-[100px]">
              <p>やり方がよくわからない</p>
              <div className="absolute w-full h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <MessyLines />
              </div>
            </div>
            <div className="relative writing-vertical flex justify-center items-center">
              <p>他のSNSと一緒でしょ?</p>
              <div className="absolute w-full h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <MessyLines />
              </div>
            </div>
            <div className="relative writing-vertical flex justify-center items-center mt-[100px]">
              <p>
                いちおう登録したが
                <br />手 応 え が な い
              </p>
              <div className="absolute w-full h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <MessyLines />
              </div>
            </div>
            <figure className="mx-auto col-span-3">
              <Image
                src={topIntro}
                layout="intrinsic"
                alt="Googleマイビジネス やってますか?"
                className="object-cover"
              />
            </figure>
          </div>
        ),
      }}
    />
  );
}

export default Intro;
