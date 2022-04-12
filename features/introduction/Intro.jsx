// dependencies
import React from "react";
import { v4 } from "uuid";
// states
import { useRecoilValue } from "recoil";
import { introState } from "./introState";
// components
import { topIntro } from "../../static";
import Image from "next/image";

// main component
function Intro() {
  const intro = useRecoilValue(introState);

  return (
    <section className="bg-gray-200/60 flex flex-row">
      {/* side section title */}
      <aside className="text-xs font-english uppercase font-feature-vrt2 writing-vertical h-max px-1 mt-[10vh]">
        Introduction
      </aside>

      {/* section main */}
      <main className="pt-[10vh] border-l-[1px] border-black">
        {/* section main title */}
        <h2 className="text-2xl border-l-[1px] border-black px-6 min-h-[6rem]">
          Googleマイビジネス
          <br />
          やってますか？
        </h2>

        {/* section body */}
        <ul className="flex flex-row justify-around items-center mt-[6vh] px-6">
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
      </main>
    </section>
  );
}

export default Intro;
