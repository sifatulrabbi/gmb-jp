// dependencies
import React from "react";
// components
import Hero from "../components/Hero";
import Intro from "../features/introduction/Intro";
import Benefits from "../features/benefits/Benefits";
import WhatWeAre from "../components/WhatWeAre";

// main component
export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Benefits />
      <WhatWeAre />
    </>
  );
}
