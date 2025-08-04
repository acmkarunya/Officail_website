import React from "react";
import ParticleBackground from "../components/ParticleBackground";
import Team from "./Team";
import Gallery from '../components/Gallery/Gallery';

function Home() {
  return (
    <div>
    <ParticleBackground />
<Gallery/>
    <Team/>
    </div>
  )
}

export default Home;
