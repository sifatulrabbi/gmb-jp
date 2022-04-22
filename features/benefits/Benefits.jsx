// dependencies
import React from "react";
// components
import Image from "next/image";
import { benefitsImg } from "../../static";
import BenefitsCard from "../../components/BenefitsCard";
// states
import { useRecoilValue } from "recoil";
import { benefitsState } from "./benefitsState";
import Section from "../../components/Section";
import { v4 } from "uuid";

function Benefits() {
  const benefits = useRecoilValue(benefitsState);

  return (
    <Section
      asideTitle={{ content: "Chapter 2" }}
      mainTitle={{ content: "GMBクラブに入ると…" }}
      body={{
        content: (
          <>
            <div className="mx-auto max-w-[600px]">
              <Image
                src={benefitsImg}
                alt="GMBクラブに入ると…"
                layout="intrinsic"
              />
            </div>
            <ul className="w-full flex flex-col justify-start items-start md:pr-[12vw] text-lg md:text-3xl mb-[10vh]">
              {benefits.map((benefit) => (
                <BenefitsCard key={v4()} {...benefit} />
              ))}
            </ul>
          </>
        ),
      }}
    />
  );
}

export default Benefits;
