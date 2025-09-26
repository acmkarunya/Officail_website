import { useEffect } from "react";

const HeroParticles = () => {
  useEffect(() => {
    window.particlesJS("particles-js-hero", {
      particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: {
          value: 0.5,
          anim: { enable: true, speed: 1, opacity_min: 0.3 }
        },
        size: { value: 4, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.6,
          width: 1,
        },
        move: { enable: true, speed: 1.5 },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
        },
        modes: { repulse: { distance: 120 }, push: { particles_nb: 4 } },
      },
      retina_detect: true,
    });
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh", // full screen hero
        overflow: "hidden",
      }}
    >
      {/* Particles Layer */}
      <div
        id="particles-js-hero"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      />

      {/* Hero Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          top: "40%",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1 style={{ fontSize: "48px", margin: 0 }}>KITS ACM</h1>
        <p style={{ fontSize: "20px", marginTop: "10px" }}>Welcome</p>
      </div>
    </section>
  );
};

export default HeroParticles;
