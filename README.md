# 🛒 Overstock – E-Commerce Landing Page Clone

A UI-only Amazon/Flipkart-style e-commerce landing page built with **ReactJS**.  
No backend, no authentication, no payment integration.

---

## 📁 Project Structure

```
overstock/
├── public/
│   └── index.html              ← HTML root template
├── src/
│   ├── components/
│   │   ├── Header.jsx          ← Logo, SearchBar, nav links, cart icon
│   │   ├── Header.css
│   │   ├── SearchBar.jsx       ← Category dropdown + search input
│   │   ├── SearchBar.css
│   │   ├── Banner.jsx          ← Auto-playing carousel (3 slides)
│   │   ├── Banner.css
│   │   ├── CategoryBar.jsx     ← Category icon grid + Deal-of-Day strip
│   │   ├── CategoryBar.css
│   │   ├── ProductCard.jsx     ← Single product card with Add to Cart
│   │   ├── ProductCard.css
│   │   ├── ProductGrid.jsx     ← Grid of cards + filter chips + sort
│   │   ├── ProductGrid.css
│   │   ├── Footer.jsx          ← Multi-column footer + newsletter
│   │   └── Footer.css
│   ├── data/
│   │   └── products.js         ← Array of 12 product objects
│   ├── App.jsx                 ← Root component, cart state
│   ├── App.css                 ← Global styles, toast
│   └── index.js                ← ReactDOM entry point
├── package.json
└── README.md
```

---

## ✅ ReactJS Concepts Used

| Concept | Where Used |
|---|---|
| Functional Components | Every component |
| Props | ProductCard, ProductGrid, Header |
| useState | Cart, search, wishlist, carousel, filter, sort |
| useCallback | handleAddToCart in App.jsx |
| useEffect | Banner auto-play timer |
| Rendering lists with map() | ProductGrid → ProductCard |
| Lifting state up | Cart state in App.jsx |

---

## 🚀 How to Run

```bash
# 1. Enter the project folder
cd overstock

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The app opens at **http://localhost:3000**

---

## 🎨 UI Sections

- **Header** – Logo, search bar with category dropdown, account/cart buttons, sticky nav
- **Banner** – Auto-playing 3-slide carousel with arrows + dot indicators
- **Trust Strip** – Free shipping, returns, secure checkout badges
- **Category Bar** – 12 category icon buttons + Deal-of-the-Day strip
- **Product Grid** – 12 product cards with filter chips and sort dropdown
- **Footer** – 4-column links, newsletter subscribe, social icons, copyright

---

## 📦 Notes

- UI only – no backend, no auth, no real payments
- All images from Unsplash (free to use)
- Responsive: desktop → tablet → mobile
- Cart count updates live in header
- Toast notification on Add to Cart
