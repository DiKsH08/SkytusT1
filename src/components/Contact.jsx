import { useState } from "react";
import Section from "./Section";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (field) => (e) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const contactDetails = [
    ["Email", "pateldiksh69@gmail.com"],
    ["Location", "Gujarat, India"],
    ["University", "Uka Tarsadia University"],
    ["Available for", "Internships & Projects"],
  ];

  const inputStyle = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid #2a2a2a",
    padding: "10px 0",
    color: "#e8e8e8",
    fontSize: "14px",
    outline: "none",
    fontFamily: "'Space Grotesk', sans-serif",
  };

  return (
    <Section
      id="contact"
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
          04 / CONTACT
        </p>

        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
          }}
        >
          Let's Talk
        </h2>

        <p style={{ color: "#555", marginBottom: "4rem", fontSize: "15px" }}>
          Open to internships, collaborations, and interesting projects.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                style={{
                  display: "block",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "11px",
                  color: "#444",
                  letterSpacing: "0.1em",
                  marginBottom: "8px",
                }}
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={handleChange("name")}
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderBottomColor = "#555")}
                onBlur={(e) => (e.target.style.borderBottomColor = "#2a2a2a")}
              />
            </div>

            {/* Email */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                style={{
                  display: "block",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "11px",
                  color: "#444",
                  letterSpacing: "0.1em",
                  marginBottom: "8px",
                }}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                required
                value={formData.email}
                onChange={handleChange("email")}
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderBottomColor = "#555")}
                onBlur={(e) => (e.target.style.borderBottomColor = "#2a2a2a")}
              />
            </div>

            {/* Message */}
            <div style={{ marginBottom: "2rem" }}>
              <label
                style={{
                  display: "block",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "11px",
                  color: "#444",
                  letterSpacing: "0.1em",
                  marginBottom: "8px",
                }}
              >
                Message
              </label>
              <textarea
                placeholder="What's on your mind?"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange("message")}
                style={{ ...inputStyle, resize: "none" }}
                onFocus={(e) => (e.target.style.borderBottomColor = "#555")}
                onBlur={(e) => (e.target.style.borderBottomColor = "#2a2a2a")}
              />
            </div>

            <button
              type="submit"
              style={{
                padding: "12px 32px",
                background: sent ? "#1a1a1a" : "#fff",
                color: sent ? "#555" : "#000",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                transition: "all 0.3s",
              }}
            >
              {sent ? "Message Sent ✓" : "Send Message →"}
            </button>
          </form>

          {/* Contact Info */}
          <div style={{ paddingTop: "1rem" }}>
            {contactDetails.map(([k, v]) => (
              <div
                key={k}
                style={{ borderTop: "1px solid #1a1a1a", padding: "1.25rem 0" }}
              >
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
                <p style={{ fontSize: "14px", color: "#888" }}>{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </Section>
  );
};

export default Contact;
