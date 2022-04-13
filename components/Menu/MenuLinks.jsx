// dependencies
import React from "react";
import Link from "next/link";
import { v4 } from "uuid";
// states
import { useRecoilValue } from "recoil";
import { menuState } from "../../features/menu/menuState";

// main component
function MenuLinks() {
  const { links, show } = useRecoilValue(menuState);

  return (
    <div className={`px-2 flex flex-col justify-start items-start`}>
      {links.map(({ name, path }) => (
        <Link key={v4()} href={path}>
          <a
            className={`px-4 py-2 text-lg font-medium ${
              show
                ? "opacity-0 -translate-y-[1rem] scale-y-[0.8] menu-anim-text-down"
                : "opacity-1 -translate-y-0 scale-y-[1] menu-anim-text-up"
            }`}
          >
            {name}
          </a>
        </Link>
      ))}
    </div>
  );
}

export default MenuLinks;
