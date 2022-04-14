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
        wrapperClass="pb-[10vh]"
        asideTitle={{ className: "text-transparent", content: "Chapter 4" }}
        mainTitle={{
          className: "mb-10",
          content: (
            <p>
              <span className="font-medium tracking-wider">GMB</span>
              クラブの主な仕事
            </p>
          ),
        }}
        body={{
          className: "pb-8",
          content: (
            <ul className="grid grid-cols-1 justify-start text-sm lg:text-base items-start gap-8 pl-6 lg:grid-cols-2">
              {mainWork.map((work, index) => (
                <li key={v4()} className="w-full">
                  <MainWorkCard {...work} index={index} />
                </li>
              ))}
            </ul>
          ),
        }}
      />
    </>
  );
}

export default MainWork;
