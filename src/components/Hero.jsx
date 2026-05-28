const Hero = ({ onNav }) => {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 2rem",
        maxWidth: "900px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <div>
        

        <h1
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: "1.5rem",
            letterSpacing: "-0.03em",
          }}
        >
          Diksh
          <br />
          <span style={{ color: "#444" }}>Mukeshbhai</span>
          <br />
          Patel
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#666",
            maxWidth: "480px",
            lineHeight: 1.8,
            marginBottom: "2.5rem",
          }}
        >
          B.Tech (IT) student at{" "}
          <span style={{ color: "#aaa" }}>Uka Tarsadia University</span> · 3rd
          Year · Semester 5 · Building things for the web with HTML, CSS, JS &
          React.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button
            onClick={() => onNav("Projects")}
            style={{
              padding: "12px 28px",
              background: "#fff",
              color: "#000",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 500,
              transition: "opacity 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.opacity = 0.85)}
            onMouseOut={(e) => (e.target.style.opacity = 1)}
          >
            View Projects →
          </button>

          <button
            onClick={() => onNav("Contact")}
            style={{
              padding: "12px 28px",
              background: "transparent",
              color: "#fff",
              border: "1px solid #2a2a2a",
              cursor: "pointer",
              fontSize: "14px",
              fontFamily: "'Space Grotesk', sans-serif",
              transition: "border-color 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.borderColor = "#555")}
            onMouseOut={(e) => (e.target.style.borderColor = "#2a2a2a")}
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Decorative */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          opacity: 0.04,
          fontSize: "120px",
          fontFamily: "'DM Mono', monospace",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {"</>"}
      </div>
    </section>
  );
};

export default Hero;
