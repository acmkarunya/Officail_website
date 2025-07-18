import { useEffect } from 'react';

const ParticleBackground = () => {
  useEffect(() => {
    // Load particles config
    window.particlesJS('particles-js', {
      particles: {
        number: { value: 115, density: { enable: true, value_area: 800 } },
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
          repulse: {
            distance: 120,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          grab: {
            distance: 200,
            line_linked: { opacity: 1 }
          }
        }
      },
      retina_detect: true
    });
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <div
        id="particles-js"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: '#0f0f0f',
          zIndex: 0
        }}
      />
      <div
        className="content"
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          color: 'white',
          marginTop: '40vh',
          fontFamily: 'Arial, sans-serif'
        }}
      >
        <h1>ACM KARUNYA</h1>
        <p>Coming soon</p>
      </div>
    </div>
  );
};

export default ParticleBackground;
