// dependencies
import Link from "next/link";
import React from "react";
//states
import { useRecoilValue } from "recoil";
import { v4 } from "uuid";
import { menuState } from "../../features/menu/menuState";
// components
import { AiOutlineArrowRight } from "react-icons/ai";

// main component
function MenuExtraLinks() {
  const { extraLinks } = useRecoilValue(menuState);

  return (
    <div className="flex flex-col justify-start items-start gap-8 mt-[12vh]">
      {extraLinks.map(({ name, path }) => (
        <Link key={v4()} href={path}>
          <a className="flex flex-row justify-start items-center text-lg font-medium gap-4 p-4 border-l-[1px]">
            {name}
            <span className="flex justify-center items-center p-1 border-[1px] border-gray-300 rounded-full">
              <AiOutlineArrowRight className="text-sm" />
            </span>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default MenuExtraLinks;
