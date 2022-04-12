// dependencies
import React from "react";
// components
import Hero from "../components/Hero";
import Intro from "../features/introduction/Intro";

// main component
export default function Home() {
  return (
    <div className="h-full w-full">
      <Hero />
      <Intro />
    </div>
  );
}
