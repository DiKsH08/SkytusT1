import { useState, useCallback } from "react";

import Header      from "./components/Header";
import Banner      from "./components/Banner";
import CategoryBar from "./components/CategoryBar";
import ProductGrid from "./components/ProductGrid";
import Footer      from "./components/Footer";
import products    from "./data/products";

import "./App.css";

/* Trust-badges strip */
const TRUST = [
  { icon: "🚚", text: "Free Shipping $49+"      },
  { icon: "↩️", text: "Easy 30-Day Returns"     },
  { icon: "🔒", text: "Secure Checkout"          },
  { icon: "⭐", text: "4.8★ Customer Rating"     },
  { icon: "💬", text: "24/7 Customer Support"    },
];

function App() {
  /* Cart state – lifted up so Header & ProductGrid share it */
  const [cart, setCart]       = useState([]);
  const [toast, setToast]     = useState(null);

  const handleAddToCart = useCallback((product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });

    /* Show toast */
    setToast(product.name);
    setTimeout(() => setToast(null), 2000);
  }, []);

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      {/* ── HEADER (logo, search, nav) ── */}
      <Header cartCount={cartCount} />

      <main>
        {/* ── HERO BANNER / CAROUSEL ── */}
        <Banner />

        {/* ── TRUST BADGES ── */}
        <div className="trust-strip">
          <div className="trust-strip-inner">
            {TRUST.map(({ icon, text }) => (
              <div key={text} className="trust-item">
                <span>{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── CATEGORY ICON BAR + DEALS STRIP ── */}
        <CategoryBar />

        {/* ── PRODUCT GRID (12 products, filter, sort) ── */}
        <ProductGrid
          products={products}
          onAddToCart={handleAddToCart}
        />
      </main>

      {/* ── FOOTER ── */}
      <Footer />

      {/* ── CART TOAST NOTIFICATION ── */}
      {toast && (
        <div className="toast" role="status" aria-live="polite">
          <span className="toast-icon">✅</span>
          <span>Added to cart: <strong>{toast}</strong></span>
        </div>
      )}
    </>
  );
}

export default App;
