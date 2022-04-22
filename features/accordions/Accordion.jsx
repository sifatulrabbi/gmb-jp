import React from "react";
import { useRecoilState } from "recoil";
import { accordionState } from "./accordionState";

function Accordion({ title, body, dark, id }) {
  const [activeId, setActiveId] = useRecoilState(accordionState);

  function updateActive() {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  }

  return (
    <div
      className={`flex flex-col justify-start items-start border-2 overflow-hidden transition-[height] duration-[0.4s] ease
       ${dark ? "border-[#424242]" : "border-[#B9B8B8]"} 
       ${id === activeId ? "h-[540px]" : "h-[80px]"}`}
    >
      <button
        className={`${dark ? "bg-[#424242]" : "bg-[#B9B8B8]"} 
        text-white w-full text-left px-4 text-xl md:text-2xl lg:text-3xl min-h-[80px]`}
        onClick={updateActive}
      >
        {title}
      </button>
      <div
        className="p-5 tracking-wider leading-relaxed"
        dangerouslySetInnerHTML={{ __html: body }}
      ></div>
    </div>
  );
}

export default Accordion;
