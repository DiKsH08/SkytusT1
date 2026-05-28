import { useState } from "react";
import "./SearchBar.css";

const CATEGORIES = [
  "All",
  "Furniture",
  "Bedding",
  "Kitchen",
  "Lighting",
  "Rugs",
  "Garden",
  "Electronics",
  "Home Decor",
];

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      alert(`Searching "${query}" in ${category}`);
    }
  };

  return (
    <form className="searchbar" onSubmit={handleSearch} role="search">

      {/* Category dropdown */}
      <select
        className="search-category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        aria-label="Search category"
      >
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      {/* Text input */}
      <input
        className="search-input"
        type="text"
        placeholder="Search Overstock..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search products"
      />

      {/* Submit button */}
      <button className="search-btn" type="submit" aria-label="Search">
        🔍
      </button>
    </form>
  );
};

export default SearchBar;
