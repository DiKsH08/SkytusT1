import { useState } from "react";
import "./ProductCard.css";

/* Renders a row of filled/half/empty stars */
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars.push("★");
    else if (rating >= i - 0.5) stars.push("½");
    else stars.push("☆");
  }
  return <span className="stars">{stars.join("")}</span>;
};

/* Percentage saved helper */
const savings = (orig, curr) => Math.round(((orig - curr) / orig) * 100);

/* Fallback image if URL breaks */
const FALLBACK = "https://placehold.co/400x400/f3f3f3/999?text=No+Image";

const ProductCard = ({ product, onAddToCart }) => {
  const [wished, setWished] = useState(false);
  const [added, setAdded]   = useState(false);
  const [imgSrc, setImgSrc] = useState(product.image);

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <article className="product-card" aria-label={product.name}>

      {/* Badge */}
      <span className="product-badge" style={{ background: product.badgeColor }}>
        {product.badge}
      </span>

      {/* Wishlist */}
      <button
        className={`product-wishlist ${wished ? "wished" : ""}`}
        onClick={() => setWished((w) => !w)}
        aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
      >
        {wished ? "❤️" : "🤍"}
      </button>

      {/* Image — onError swaps to fallback */}
      <div className="product-image-wrap">
        <img
          className="product-image"
          src={imgSrc}
          alt={product.name}
          loading="lazy"
          onError={() => setImgSrc(FALLBACK)}
        />
      </div>

      {/* Info */}
      <div className="product-body">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>

        <div className="product-rating">
          <StarRating rating={product.rating} />
          <span className="rating-value">{product.rating}</span>
          <span className="review-count">({product.reviews.toLocaleString()})</span>
        </div>

        <div className="product-pricing">
          <span className="price-current">₹{product.price.toLocaleString('en-IN')}</span>
          <span className="price-original">₹{product.originalPrice.toLocaleString('en-IN')}</span>
          <span className="price-saving">Save {savings(product.originalPrice, product.price)}%</span>
        </div>
      </div>

      {/* Footer */}
      <div className="product-footer">
        <span className="delivery-note">✔ Free delivery available</span>
        <button
          className={`add-to-cart ${added ? "added" : ""}`}
          onClick={handleAdd}
          aria-live="polite"
        >
          {added ? "✔ Added to Cart!" : "Add to Cart"}
        </button>
      </div>
    </article>
  );
};

export default ProductCard;