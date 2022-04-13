// dependencies
import React from "react";
// components
import Hero from "../components/Hero";
import Intro from "../features/introduction/Intro";
import Benefits from "../features/benefits/Benefits";
import WhatWeAre from "../components/WhatWeAre";
import MainWork from "../features/mainWork/MainWork";
import ChapterTwo from "../components/ChapterTwo";
import Services from "../components/Services";
import Testimonials from "../features/Testimonials/Testimonials";
import Footer from "../components/Footer";

// main component
export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Benefits />
      <WhatWeAre />
      <MainWork />
      <ChapterTwo />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}
