// dependencies
import React from "react";
// components
import Hero from "../components/Hero";
import Intro from "../features/introduction/Intro";
import Benefits from "../features/benefits/Benefits";
import WhatWeAre from "../components/WhatWeAre";
import MainWork from "../features/mainWork/MainWork";
import ChapterFive from "../components/ChapterFive";
import Services from "../components/Services";
import Testimonials from "../features/Testimonials/Testimonials";
import Footer from "../components/Footer";
import AccordionsContainer from "../features/accordions/AccordionsContainer";

// main component
export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <AccordionsContainer />
      <Benefits />
      <WhatWeAre />
      <MainWork />
      <ChapterFive />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}
