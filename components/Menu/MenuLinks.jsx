// dependencies
import React from "react";
import Link from "next/link";
import { v4 } from "uuid";
// states
import { useRecoilValue } from "recoil";
import { menuState } from "../../features/Menu/menuState";

// main component
function MenuLinks() {
  const { links } = useRecoilValue(menuState);

  return (
    <div className="px-2 flex flex-col justify-start items-start">
      {links.map(({ name, path }) => (
        <Link key={v4()} href={path}>
          <a className="px-4 py-2 text-lg font-medium">{name}</a>
        </Link>
      ))}
    </div>
  );
}

export default MenuLinks;
