import React from "react";
import GlobalParticles from "../components/GlobalParticles";
import HeroParticles from "../components/HeroParticles";
import About from "./About";
import Gallery from "../components/Gallery/Gallery";
import ContactPage from "./Contact";
import Members from "../components/Members";
import EventModal from "./EventModal";
import UpcomingEventPage from "./UpcomingEventPage";

function Home() {
  return (
    <div>
      {/* Global Particles (always in background) */}
      <EventModal />
      <GlobalParticles />

      {/* Hero Section with its own particles */}
      <HeroParticles />

      {/* Other sections */}
      <About />
      <Gallery />
      <Members />
      <ContactPage />
    </div>
  );
}

export default Home;
