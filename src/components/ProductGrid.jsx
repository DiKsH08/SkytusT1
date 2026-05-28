import { useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";

const FILTERS = ["All", "Furniture", "Bedding", "Kitchen", "Electronics", "Home Decor", "Garden", "Rugs", "Lighting"];

const ProductGrid = ({ products, onAddToCart }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  /* Filter by category */
  let filtered =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category === activeFilter);

  /* Sort */
  filtered = [...filtered].sort((a, b) => {
    if (sortBy === "price-asc")  return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "rating")     return b.rating - a.rating;
    return 0; // default: original order
  });

  return (
    <section className="product-grid-section" aria-label="Product listing">

      {/* Section title + View All */}
      <div className="grid-header">
        <h2 className="grid-title">Featured Products</h2>
        <a href="#!" className="grid-view-all">View All →</a>
      </div>

      {/* Filter chips */}
      <div className="grid-filters" role="group" aria-label="Category filters">
        <span className="filter-label">Filter:</span>
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`filter-chip ${activeFilter === f ? "active" : ""}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}

        {/* Sort dropdown */}
        <select
          style={{
            marginLeft: "auto",
            padding: "5px 10px",
            borderRadius: "6px",
            border: "1.5px solid #d0d0d0",
            fontSize: "13px",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          aria-label="Sort products"
        >
          <option value="default">Sort: Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Avg. Rating</option>
        </select>
      </div>

      {/* Result count */}
      <p className="grid-result-count">
        Showing <strong>{filtered.length}</strong> of <strong>{products.length}</strong> products
      </p>

      {/* Cards grid — rendered with map() */}
      <div className="products-grid">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <p style={{ textAlign: "center", color: "#888", padding: "40px 0" }}>
          No products found in "{activeFilter}".
        </p>
      )}
    </section>
  );
};

export default ProductGrid;
