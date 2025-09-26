// src/components/ParticleBackgroundGlobal.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackgroundGlobal() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles-global"
      init={particlesInit}
      options={{
        background: { color: { value: "transparent" } },
        particles: {
          number: { value: 40 },
          color: { value: "#ffffff" },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 0.3 },
          opacity: { value: 0.2 },
        },
        detectRetina: true,
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -2, // always behind
      }}
    />
  );
}
