import React, { useEffect } from "react";

const About = () => {
  // Preload images on mount
  useEffect(() => {
    const images = [
      "/kits.jpeg",
      "/acm.png",
      "/events/inauguration/in.jpg",
    ];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px 20px",
        background: "transparent",
        color: "white",
      }}
    >
      {/* Top Row */}
      <div
        style={{
          width: "90%",
          margin: "120px auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          alignItems: "center",
        }}
      >
        {/* Left Image */}
        <div style={{ textAlign: "center" }}>
          <img
            src="/kits.jpeg"
            alt="Karunya Institute"
            style={{
              width: "100%",
              maxWidth: "550px",
              borderRadius: "16px",
              objectFit: "cover",
              boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
            }}
          />
          <p style={{ marginTop: "12px", fontSize: "15px", color: "#bbb" }}>
            Karunya Institute of Technology and Sciences
          </p>
        </div>

        {/* Right Text */}
        <div
          style={{
            lineHeight: "1.8",
            fontSize: "17px",
            color: "#ddd",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "34px",
              marginBottom: "20px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            About KITS
          </h2>
          <p>
            Karunya Institute of Technology and Sciences (KITS), established
            in 1986 in Coimbatore, Tamil Nadu, is a nationally recognized
            university committed to excellence in teaching, research, and
            innovation. Founded with the vision of raising leaders with
            competence, compassion, and character, Karunya offers cutting-edge
            programs in engineering, technology, sciences, and management.
            With modern infrastructure, advanced labs, and strong industry
            collaborations, KITS provides an ecosystem where ideas become
            impactful solutions. Beyond academics, it nurtures values and
            leadership, empowering students to address real-world challenges
            and make a meaningful difference in society.
          </p>
        </div>
      </div>

      {/* Bottom Row */}
      <div
        style={{
          width: "90%",
          margin: "60px auto ",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          alignItems: "center",
        }}
      >
        {/* Left Text */}
        <div
          style={{
            lineHeight: "1.8",
            fontSize: "17px",
            color: "#ddd",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "34px",
              marginBottom: "20px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            About ACM
          </h2>
          <p>
            The Association for Computing Machinery (ACM) is the world’s
            largest educational and scientific computing society, uniting
            computing professionals, researchers, and students globally.
            Founded in 1947, ACM advances computing as a science and profession
            through conferences, publications, digital libraries, and special
            interest groups.
          </p>
          <p style={{ marginTop: "15px" }}>
            With a mission to drive innovation and share knowledge, ACM fosters
            collaboration, research, and professional growth. Its student
            chapters worldwide provide a platform for learning, networking,
            and hands-on experience, empowering the next generation of leaders
            in technology and computing.
          </p>
        </div>

        {/* Right Image */}
        <div style={{ textAlign: "center" }}>
          <img
            src="/acm.png"
            alt="ACM Karunya Event"
            style={{
              width: "100%",
              maxWidth: "550px",
              borderRadius: "16px",
              objectFit: "cover",
              boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
            }}
          />
        </div>
      </div>

      <div
        style={{
          width: "90%",
          margin: "120px auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          alignItems: "center",
        }}
      >
        {/* Left Image */}
        <div style={{ textAlign: "center" }}>
          <img
            src="/events/inauguration/in.jpg"
            alt="Karunya Institute"
            style={{
              width: "100%",
              maxWidth: "550px",
              borderRadius: "16px",
              objectFit: "cover",
              boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
            }}
          />
          <p style={{ marginTop: "12px", fontSize: "15px", color: "#bbb" }}>
            <b>KITS ACM STUDENT CHAPTER 25-26</b>
          </p>
        </div>

        {/* Right Text */}
        <div
          style={{
            lineHeight: "1.8",
            fontSize: "17px",
            color: "#ddd",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "34px",
              marginBottom: "20px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            About KITS ACM Student Chapter
          </h2>
          <p>
            The KITS ACM Student Chapter is a vibrant community of learners,
            innovators, and tech enthusiasts at Karunya Institute of Technology
            and Sciences. Functioning under the Division of Artificial
            Intelligence and Machine Learning (AIML), the chapter serves as a
            platform for students to explore cutting-edge technologies, enhance
            their technical skills, and collaborate on impactful projects.
            Through workshops, hackathons, seminars, and knowledge-sharing
            events, the chapter fosters creativity, leadership, and teamwork.
            It provides students with opportunities to connect with industry
            experts, participate in global ACM initiatives, and contribute to
            solving real-world challenges. With a vision to inspire innovation
            and nurture talent, the KITS ACM Student Chapter empowers students
            to grow as future leaders in technology and research.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
