import React from "react";

const About = () => {
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
      {/* Mobile-only CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            .about-row {
              grid-template-columns: 1fr !important;
              gap: 30px !important;
              text-align: center !important;
            }

            /* Heading first */
            .about-row .heading-block {
              order: 1;
              text-align: center !important;
              grid-column: 1 / -1; /* span across full width */
            }

            /* Image second */
            .about-row .image-block {
              order: 2;
            }

            /* Text last */
            .about-row .text-block {
              order: 3;
            }

            /* Text formatting */
            .about-row .text-block p {
              text-align: justify !important;
              text-justify: inter-word !important;
              hyphens: auto !important;
              word-spacing: 0.05em;
            }

            /* Image resize */
            .about-row img {
              max-width: 90% !important;
              margin: 0 auto !important;
            }
          }
        `}
      </style>

      {/* ================= About KITS ================= */}
      <div
        className="about-row"
        style={{
          width: "90%",
          margin: "120px auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          alignItems: "center",
        }}
      >
        {/* Image */}
        <div className="image-block" style={{ textAlign: "center" }}>
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

        {/* Text with heading */}
        <div
          className="text-block"
          style={{
            lineHeight: "1.8",
            fontSize: "17px",
            color: "#ddd",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <h2
            className="heading-block"
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
            Karunya Institute of Technology and Sciences (KITS), established in
            1986 in Coimbatore, Tamil Nadu, is a nationally recognized
            university committed to excellence in teaching, research, and
            innovation. Founded with the vision of raising leaders with
            competence, compassion, and character, Karunya offers cutting-edge
            programs in engineering, technology, sciences, and management.
          </p>
          <p style={{ marginTop: "15px" }}>
            With modern infrastructure, advanced labs, and strong industry
            collaborations, KITS provides an ecosystem where ideas become
            impactful solutions. Beyond academics, it nurtures values and
            leadership, empowering students to address real-world challenges and
            make a meaningful difference in society.
          </p>
        </div>
      </div>

      {/* ================= About ACM ================= */}
      <div
        className="about-row"
        style={{
          width: "90%",
          margin: "60px auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          alignItems: "center",
        }}
      >
        {/* Text with heading */}
        <div
          className="text-block"
          style={{
            lineHeight: "1.8",
            fontSize: "17px",
            color: "#ddd",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <h2
            className="heading-block"
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
            The Association for Computing Machinery (ACM) is the world’s largest
            educational and scientific computing society, uniting computing
            professionals, researchers, and students globally. Founded in 1947,
            ACM advances computing as a science and profession through
            conferences, publications, digital libraries, and special interest
            groups.
          </p>
          <p style={{ marginTop: "15px" }}>
            With a mission to drive innovation and share knowledge, ACM fosters
            collaboration, research, and professional growth. Its student
            chapters worldwide provide a platform for learning, networking, and
            hands-on experience, empowering the next generation of leaders in
            technology and computing.
          </p>
        </div>

        {/* Image */}
        <div className="image-block" style={{ textAlign: "center" }}>
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

      {/* ================= About KITS ACM Student Chapter ================= */}
      <div
        className="about-row"
        style={{
          width: "90%",
          margin: "120px auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          alignItems: "center",
        }}
      >
        {/* Image */}
        <div className="image-block" style={{ textAlign: "center" }}>
          <img
            src="/acm.jpg"
            alt="KITS ACM"
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

        {/* Text with heading */}
        <div
          className="text-block"
          style={{
            lineHeight: "1.8",
            fontSize: "17px",
            color: "#ddd",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <h2
            className="heading-block"
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
          </p>
          <p style={{ marginTop: "15px" }}>
            Through workshops, hackathons, seminars, and knowledge-sharing
            events, the chapter fosters creativity, leadership, and teamwork. It
            provides students with opportunities to connect with industry
            experts, participate in global ACM initiatives, and contribute to
            solving real-world challenges.
          </p>
          <p style={{ marginTop: "15px" }}>
            With a vision to inspire innovation and nurture talent, the KITS ACM
            Student Chapter empowers students to grow as future leaders in
            technology and research.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
