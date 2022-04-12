// dependencies
import React from "react";
import { v4 } from "uuid";
// states
import { useRecoilValue } from "recoil";
import { introState } from "./introState";
// components
import { topIntro } from "../../static";
import Image from "next/image";
import Section from "../../components/Section";

// main component
function Intro() {
  const intro = useRecoilValue(introState);

  return (
    <Section
      className="bg-gray-200/60"
      asideTitle={{ content: "Introduction" }}
      mainTitle={{ content: "Googleマイビジネス やってますか？" }}
      body={{
        content: (
          <>
            <ul className="flex flex-row justify-around items-center mt-[6vh]">
              {intro.map((item) => (
                <li
                  key={v4()}
                  className="writing-vertical font-feature-vrt2 text-right font-japanese"
                  dangerouslySetInnerHTML={{ __html: item }}
                ></li>
              ))}
            </ul>
            <div className="px-4">
              <Image src={topIntro} alt="" layout="intrinsic" />
            </div>
          </>
        ),
      }}
    />
  );
}

export default Intro;
