import "./CategoryBar.css";

const CATEGORIES = [
  { emoji: "🛋️",  label: "Furniture"   },
  { emoji: "🛏️",  label: "Bedding"     },
  { emoji: "🍳",  label: "Kitchen"     },
  { emoji: "💡",  label: "Lighting"    },
  { emoji: "🪴",  label: "Garden"      },
  { emoji: "🔌",  label: "Electronics" },
  { emoji: "🪞",  label: "Home Decor"  },
  { emoji: "🧺",  label: "Storage"     },
  { emoji: "🛁",  label: "Bath"        },
  { emoji: "🪟",  label: "Curtains"    },
  { emoji: "🪑",  label: "Chairs"      },
  { emoji: "🎨",  label: "Art & Decor" },
];

const DEALS = [
  { name: "Ergonomic Chair",    discount: "38% Off" },
  { name: "Cookware Set",       discount: "40% Off" },
  { name: "Bohemian Rug",       discount: "42% Off" },
  { name: "Velvet Accent Chair",discount: "40% Off" },
  { name: "Bedding Set",        discount: "35% Off" },
];

const CategoryBar = () => (
  <>
    {/* Icon category strip */}
    <div className="category-bar">
      <div className="category-bar-inner">
        <h2 className="category-bar-title">Shop by Category</h2>
        <div className="category-icons">
          {CATEGORIES.map(({ emoji, label }) => (
            <button key={label} className="category-icon-btn" aria-label={`Shop ${label}`}>
              <span className="cat-emoji">{emoji}</span>
              <span className="cat-label">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>

    {/* Deal-of-the-day strip */}
    <div className="deal-strip">
      <div className="deal-strip-inner">
        <span className="deal-label">⚡ Deal of the Day</span>
        <div className="deal-items">
          {DEALS.map(({ name, discount }) => (
            <div key={name} className="deal-item">
              <strong>{discount}</strong>
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default CategoryBar;
