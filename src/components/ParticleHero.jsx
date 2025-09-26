import { useEffect } from "react";

const ParticleHero = () => {
  useEffect(() => {
     window.particlesJS("particles-js", {
      particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle", stroke: { width: 0, color: "#000" }, polygon: { nb_sides: 5 } },
        opacity: {
          value: 0.5,
          random: false,
          anim: { enable: true, speed: 1, opacity_min: 0.5, sync: false }
        },
        size: {
          value: 4,
          random: true,
          anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.6,
          width: 1
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
          resize: true
        },
        modes: {
          repulse: { distance: 120, duration: 0.4 },
          push: { particles_nb: 4 },
          grab: { distance: 200, line_linked: { opacity: 1 } }
        }
      },
      retina_detect: true
    });
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh", // 👈 full screen height
        overflow: "hidden",
      }}
    >
      {/* Particles Canvas */}
      <div
        id="particles-js"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "#0f0f0f",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />

      {/* Hero Content on top */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "48px", margin: 0 }}>KITS ACM</h1>
        <p style={{ fontSize: "20px", marginTop: "10px" }}>STUDENT CHAPTER</p>
      </div>
    </section>
  );
};

export default ParticleHero;
