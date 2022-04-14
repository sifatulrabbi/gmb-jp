import Link from "next/link";
import React from "react";

function MenuDesktopLinks() {
  return (
    <ul className="flex flex-row justify-center items-center gap-6">
      <li>
        <Link href="/">
          <a className="">
            <span className="text-sm uppercase">Chapter 1</span>
          </a>
        </Link>
      </li>
    </ul>
  );
}

export default MenuDesktopLinks;
