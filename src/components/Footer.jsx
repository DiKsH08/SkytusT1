const Footer = () => {
  return (
    <footer
      style={{
        padding: "2rem",
        textAlign: "center",
        borderTop: "1px solid #111",
        fontFamily: "'DM Mono', monospace",
        fontSize: "12px",
        color: "#333",
      }}
    >
      © {new Date().getFullYear()} Diksh Patel · Built with React
    </footer>
  );
};

export default Footer;
