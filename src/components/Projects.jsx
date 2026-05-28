import Section from "./Section";
import ProjectRow from "./ProjectRow";
import { PROJECTS } from "./data";

const Projects = () => {
  return (
    <Section
      id="projects"
      style={{ padding: "8rem 2rem", maxWidth: "900px", margin: "0 auto" }}
    >
      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "12px",
          color: "#444",
          marginBottom: "1rem",
          letterSpacing: "0.12em",
        }}
      >
        03 / PROJECTS
      </p>

      <h2
        style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 700,
          marginBottom: "4rem",
          letterSpacing: "-0.02em",
        }}
      >
        Selected Work
      </h2>

      <div style={{ display: "grid", gap: "1px", background: "#1a1a1a" }}>
        {PROJECTS.map((project, i) => (
          <ProjectRow key={i} {...project} index={i} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
