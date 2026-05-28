import Section from "./Section";

const About = () => {
  const details = [
    ["University", "Uka Tarsadia"],
    ["Degree", "B.Tech (IT)"],
    ["Year", "3rd Year"],
    ["Semester", "5th Sem"],
  ];

  return (
    <Section
      id="about"
      style={{ padding: "8rem 2rem", maxWidth: "900px", margin: "0 auto" }}
    >
      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "12px",
          color: "#444",
          marginBottom: "3rem",
          letterSpacing: "0.12em",
        }}
      >
        01 / ABOUT
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
        }}
        className="about-grid"
      >
        {/* Left */}
        <div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Crafting
            <br />
            digital
            <br />
            experiences.
          </h2>
          <div
            style={{ width: "40px", height: "2px", background: "#fff", marginBottom: "2rem" }}
          />
        </div>

        {/* Right */}
        <div>
          <p
            style={{
              color: "#777",
              lineHeight: 2,
              marginBottom: "1.5rem",
              fontSize: "15px",
            }}
          >
            I'm Diksh Patel — a passionate Information Technology student
            pursuing my B.Tech from Uka Tarsadia University, currently in my
            3rd year (Semester 5).
          </p>
          <p
            style={{
              color: "#777",
              lineHeight: 2,
              marginBottom: "2rem",
              fontSize: "15px",
            }}
          >
            I love turning ideas into real, interactive web experiences. My
            focus is frontend development — writing clean HTML, expressive CSS,
            and dynamic JavaScript, with React as my go-to framework.
          </p>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
          >
            {details.map(([k, v]) => (
              <div key={k} style={{ borderTop: "1px solid #1a1a1a", paddingTop: "0.75rem" }}>
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "11px",
                    color: "#444",
                    letterSpacing: "0.1em",
                    marginBottom: "4px",
                  }}
                >
                  {k}
                </p>
                <p style={{ fontSize: "14px", color: "#ccc" }}>{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </Section>
  );
};

export default About;
