import { useRef, useState, useEffect } from "react";
import Section from "./Section";
import useIntersection from "./useIntersection";
import { SKILLS } from "./data";

const Skills = () => {
  const skillsRef = useRef(null);
  const skillsVisible = useIntersection(skillsRef);
  const [barAnimated, setBarAnimated] = useState(false);

  useEffect(() => {
    if (skillsVisible) setBarAnimated(true);
  }, [skillsVisible]);

  return (
    <Section
      id="skills"
      style={{ padding: "8rem 2rem", background: "#0d0d0d" }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "12px",
            color: "#444",
            marginBottom: "1rem",
            letterSpacing: "0.12em",
          }}
        >
          02 / SKILLS
        </p>

        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            marginBottom: "4rem",
            letterSpacing: "-0.02em",
          }}
        >
          Tech Stack
        </h2>

        <div
          ref={skillsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2.5rem",
          }}
          className="skills-grid"
        >
          {SKILLS.map(({ name, level, icon }) => (
            <div key={name}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <span style={{ fontSize: "14px", color: "#aaa" }}>
                  {icon} {name}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "12px",
                    color: "#555",
                  }}
                >
                  {level}%
                </span>
              </div>

              <div
                style={{
                  height: "1px",
                  background: "#1a1a1a",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "1px",
                    background: "#fff",
                    width: barAnimated ? `${level}%` : "0%",
                    transition: "width 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: "0.2s",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
};

export default Skills;
