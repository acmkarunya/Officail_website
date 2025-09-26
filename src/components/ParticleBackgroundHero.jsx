// components/ParticleBackgroundHero.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackgroundHero() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles-hero"
      init={particlesInit}
      options={{
        background: { color: { value: "transparent" } },
        particles: {
          number: { value: 120 },
          color: { value: "#00aaff" },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 1.2 },
          links: { enable: true, color: "#00aaff" },
        },
        fullScreen: false,
      }}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: -1, // behind Home text, above global bg
      }}
    />
  );
}
