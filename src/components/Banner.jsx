import { useState, useEffect, useCallback } from "react";
import "./Banner.css";

const SLIDES = [
  {
    id: 1,
    tag: "Up to 60% Off",
    title: "Transform Your Living Space",
    sub: "Shop handpicked furniture deals — limited time offers on sofas, chairs, shelves & more.",
    cta: "Shop Furniture",
  },
  {
    id: 2,
    tag: "New Arrivals",
    title: "Sleep Better, Live Better",
    sub: "Explore our premium bedding collection. Silky-soft sheets, luxe duvets, and cozy pillows.",
    cta: "Shop Bedding",
  },
  {
    id: 3,
    tag: "Flash Sale Today",
    title: "Kitchen Essentials at Half Price",
    sub: "Cookware, gadgets, and organizers — everything you need for a dream kitchen setup.",
    cta: "Shop Kitchen",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % SLIDES.length),
    []
  );
  const prev = () =>
    setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);

  /* Auto-play every 5 seconds */
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="banner-wrapper" aria-label="Promotional banner">

      {/* Slides */}
      <div
        className="banner-slides"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {SLIDES.map((slide) => (
          <div key={slide.id} className="banner-slide">
            <div className="banner-content">
              <span className="banner-tag">{slide.tag}</span>
              <h2 className="banner-title">{slide.title}</h2>
              <p className="banner-sub">{slide.sub}</p>
              <button className="banner-cta">{slide.cta} →</button>
            </div>
          </div>
        ))}
      </div>

      {/* Prev / Next arrows */}
      <button
        className="banner-arrow left"
        onClick={prev}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        className="banner-arrow right"
        onClick={next}
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dot indicators */}
      <div className="banner-dots" role="tablist">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`banner-dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            role="tab"
            aria-selected={i === current}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
