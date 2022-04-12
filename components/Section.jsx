// dependencies
import React from "react";

// main component
// Create a section component with custom content and classes
function Section({ className, asideTitle, mainTitle, body }) {
  return (
    <section className={`bg-white flex flex-row ${className}`}>
      {/* side section title */}
      <aside
        className={`text-xs uppercase font-feature-vrt2 writing-vertical h-max px-1 mt-[10vh] tracking-wider 
        ${asideTitle.className}`}
      >
        {asideTitle.content}
      </aside>

      {/* section main */}
      <main className="pt-[10vh] w-full border-l-[1px] border-black">
        {/* section main title */}
        <h2
          className={`text-2xl border-l-[1px] border-black px-6 min-h-[6rem] 
          ${mainTitle.className}`}
        >
          {mainTitle.content}
        </h2>

        {/* section body */}
        <div className={`px-6 ${body.className}`}>{body.content}</div>
      </main>
    </section>
  );
}

export default Section;
