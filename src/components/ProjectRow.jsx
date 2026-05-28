import { useState } from "react";

const ProjectRow = ({ title, desc, tags, link, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => link !== "#" && window.open(link, "_blank")}
      style={{
        background: hovered ? "#111" : "#0a0a0a",
        padding: "2rem",
        cursor: "pointer",
        transition: "background 0.2s",
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        gap: "2rem",
        alignItems: "start",
      }}
    >
      {/* Index */}
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "12px",
          color: "#333",
          paddingTop: "4px",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Content */}
      <div>
        <h3
          style={{
            fontSize: "18px",
            fontWeight: 500,
            marginBottom: "0.5rem",
            color: hovered ? "#fff" : "#ccc",
            transition: "color 0.2s",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: "14px",
            color: "#555",
            lineHeight: 1.7,
            marginBottom: "1rem",
            maxWidth: "500px",
          }}
        >
          {desc}
        </p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {tags.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "11px",
                color: "#444",
                border: "1px solid #1e1e1e",
                padding: "3px 10px",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <span
        style={{
          fontSize: "18px",
          color: hovered ? "#fff" : "#333",
          transition: "color 0.2s, transform 0.2s",
          transform: hovered ? "translate(4px, -4px)" : "translate(0,0)",
          display: "inline-block",
        }}
      >
        ↗
      </span>
    </div>
  );
};

export default ProjectRow;
