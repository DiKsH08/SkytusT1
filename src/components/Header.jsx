import { useState } from "react";
import SearchBar from "./SearchBar";
import "./Header.css";

const Header = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">

      {/* ── Top announcement bar ── */}
      <div className="header-topbar">
        <span>🚚 Free Shipping on Orders Over $49!</span>
        <div className="topbar-links">
          <a href="#!">Track Order</a>
          <a href="#!">Help</a>
          <a href="#!">Download App</a>
        </div>
      </div>

      {/* ── Main header row ── */}
      <div className="header-main">

        {/* Logo */}
        <div className="header-logo">
          <span className="logo-icon">🛒</span>
          <div className="logo-text">
            <span className="logo-name">Overstock</span>
            <span className="logo-tagline">More For Your Home</span>
          </div>
        </div>

        {/* Search (its own component) */}
        <div className="header-search">
          <SearchBar />
        </div>

        {/* Right-side action buttons */}
        <div className="header-actions">

          <button className="action-btn">
            <span className="action-icon">👤</span>
            <div className="action-label">
              <span className="action-sub">Hello, Sign in</span>
              <span className="action-main">Account &amp; Lists</span>
            </div>
          </button>

          <button className="action-btn">
            <span className="action-icon">📦</span>
            <div className="action-label">
              <span className="action-sub">Returns</span>
              <span className="action-main">&amp; Orders</span>
            </div>
          </button>

          <button className="action-btn cart-btn">
            <span className="action-icon">🛒</span>
            <span className="cart-count">{cartCount}</span>
            <span className="action-main">Cart</span>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      {/* ── Category navigation bar ── */}
      <nav className={`header-nav ${menuOpen ? "nav-open" : ""}`}>
        <ul className="nav-list">
          {[
            "Today's Deals",
            "Furniture",
            "Bedding",
            "Kitchen",
            "Lighting",
            "Rugs",
            "Garden",
            "Electronics",
            "Home Decor",
            "Clearance",
          ].map((item) => (
            <li key={item} className="nav-item">
              <a href="#!" className="nav-link">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
