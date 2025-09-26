import React from "react";
import GlobalParticles from "../components/GlobalParticles";
import HeroParticles from "../components/HeroParticles";
import About from "./About";
import Gallery from "../components/Gallery/Gallery";
import ContactPage from "./Contact";
import Members from "../components/Members";
import EventModal from "./EventModal";
import { events } from "./eventsData"; // ✅ import events here

function Home() {
  const hasEvents = Array.isArray(events) && events.length > 0;

  return (
    <div>
      {/* Show modal only if events exist */}
      {hasEvents && <EventModal />}

      {/* Global Particles (always in background) */}
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
