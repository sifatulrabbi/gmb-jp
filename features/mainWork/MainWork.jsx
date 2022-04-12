// dependencies
import React from "react";
// states
import { useRecoilValue } from "recoil";
import { mainWorkState } from "./mainWorkState";
// components
import Section from "../../components/Section";
import MainWorkCard from "../../components/MainWorkCard";
import { v4 } from "uuid";

// main component
function MainWork() {
  const mainWork = useRecoilValue(mainWorkState);

  return (
    <>
      <Section
        asideTitle={{ className: "text-transparent", content: "Chapter 4" }}
        mainTitle={{
          content: (
            <p>
              <span className="font-medium tracking-wider">GMB</span>
              クラブの主な仕事
            </p>
          ),
        }}
        body={{
          content: (
            <ul className="flex flex-col justify-start items-start gap-16 pl-6">
              {mainWork.map((work, index) => (
                <MainWorkCard key={v4()} {...work} index={index} />
              ))}
            </ul>
          ),
        }}
      />
    </>
  );
}

export default MainWork;
