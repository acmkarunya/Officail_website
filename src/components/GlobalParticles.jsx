import { useEffect } from "react";

const GlobalParticles = () => {
  useEffect(() => {
    window.particlesJS("particles-js-global", {
      particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.2 },
        size: { value: 2, random: true },
        move: { enable: true, speed: 0.5 },
        line_linked: {
          enable: false
        }
      },
      interactivity: { events: { resize: true } },
      retina_detect: true,
    });
  }, []);

  return (
    <div
      id="particles-js-global"
      style={{
        position: "fixed",
        inset: 0,
        background: "#0f0f0f",
        zIndex: -2, // always behind everything
      }}
    />
  );
};

export default GlobalParticles;
