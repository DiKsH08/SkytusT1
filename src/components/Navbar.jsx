import { useState, useEffect } from "react";
import { NAV_LINKS } from "./data";

const Navbar = ({ active, onNav }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (name) => {
    onNav(name);
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 2rem",
          background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #1a1a1a" : "none",
          transition: "all 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        {/* Logo */}
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "14px",
            color: "#666",
            letterSpacing: "0.1em",
          }}
        >
          diksh<span style={{ color: "#fff" }}>.dev</span>
        </span>

        {/* Desktop Links */}
        <div style={{ display: "flex", gap: "2.5rem" }}>
          {NAV_LINKS.map((n) => (
            <button
              key={n}
              onClick={() => handleNav(n)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "13px",
                letterSpacing: "0.05em",
                color: active === n ? "#fff" : "#555",
                fontFamily: "'Space Grotesk', sans-serif",
                transition: "color 0.2s",
                position: "relative",
                paddingBottom: "4px",
              }}
            >
              {n}
              {active === n && (
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "1px",
                    background: "#fff",
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            fontSize: "20px",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
          className="hamburger"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            background: "#0a0a0a",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          {NAV_LINKS.map((n) => (
            <button
              key={n}
              onClick={() => handleNav(n)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "24px",
                color: active === n ? "#fff" : "#555",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              {n}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          nav > div { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
