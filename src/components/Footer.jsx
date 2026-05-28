import "./Footer.css";

const LINKS = {
  "Get to Know Us": [
    "About Overstock",
    "Careers",
    "Press Center",
    "Sustainability",
    "Investor Relations",
  ],
  "Shop With Us": [
    "Today's Deals",
    "Gift Cards",
    "Club O Rewards",
    "Bulk Orders",
    "Sell on Overstock",
  ],
  "Customer Service": [
    "Help Center",
    "Track My Order",
    "Returns & Refunds",
    "Contact Us",
    "Accessibility",
  ],
  "Let Us Help You": [
    "Your Account",
    "Your Orders",
    "Shipping Rates",
    "Privacy Policy",
    "Terms of Use",
  ],
};

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">

      {/* Back to top button */}
      <button className="footer-top-btn" onClick={scrollTop}>
        ↑ Back to Top
      </button>

      {/* Main link grid */}
      <div className="footer-main">
        {Object.entries(LINKS).map(([heading, items]) => (
          <div key={heading} className="footer-col">
            <h3>{heading}</h3>
            <ul>
              {items.map((item) => (
                <li key={item}>
                  <a href="#!">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <hr className="footer-divider" />

      {/* Logo + social + newsletter */}
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "28px 20px",
          display: "flex",
          gap: 40,
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        {/* Brand blurb */}
        <div style={{ flex: "1 1 220px" }}>
          <div style={{ color: "#f90", fontSize: 24, fontWeight: 800 }}>
            🛒 Overstock
          </div>
          <p style={{ color: "#888", fontSize: 12.5, marginTop: 8, lineHeight: 1.6 }}>
            Your destination for incredible deals on furniture, home décor,
            bedding, rugs, and more. Save more. Live better.
          </p>
          <div className="footer-social">
            {["📘","🐦","📸","▶️","📌"].map((icon, i) => (
              <a key={i} href="#!" className="social-icon" aria-label={`Social link ${i + 1}`}>
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div style={{ flex: "1 1 260px" }}>
          <h3 style={{ color: "#fff", marginBottom: 8, fontSize: 15 }}>
            📬 Get Exclusive Deals
          </h3>
          <p style={{ color: "#888", fontSize: 12.5, marginBottom: 10, lineHeight: 1.5 }}>
            Subscribe to our newsletter and get up to 20% off your next order.
          </p>
          <div className="newsletter-form">
            <input
              className="newsletter-input"
              type="email"
              placeholder="Enter your email"
              aria-label="Email for newsletter"
            />
            <button className="newsletter-btn">Subscribe</button>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="payment-icons" aria-label="Accepted payment methods">
          💳 🏦 🅿️ 💵
        </div>
        <div className="footer-bottom-links">
          <a href="#!">Privacy Notice</a>
          <a href="#!">Terms of Use</a>
          <a href="#!">Cookie Settings</a>
          <a href="#!">Accessibility</a>
          <a href="#!">Sitemap</a>
        </div>
        <p>© {new Date().getFullYear()} Overstock.com, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
