import React from 'react';

const FILTER_CATEGORIES = ["Dresses", "Outerwear", "Knitwear", "Pants", "Accessories"];
const FILTER_SIZES = ["XS", "S", "M", "L", "XL"];
const FILTER_COLORS = [
  { name: "Cream/White", hex: "#FAF9F6" },
  { name: "Charcoal/Black", hex: "#1C1C1E" },
  { name: "Tan/Gold", hex: "#C5A880" },
  { name: "Sage/Olive", hex: "#5C6053" },
  { name: "Taupe/Sand", hex: "#B8A99A" },
  { name: "Navy", hex: "#1D2330" }
];

export default function FilterBar({
  isOpen,
  activeFilters,
  onFilterChange,
  onClearFilters,
  productsCount
}) {
  const handleCategoryToggle = (category) => {
    const isSelected = activeFilters.category === category;
    onFilterChange({
      ...activeFilters,
      category: isSelected ? '' : category
    });
  };

  const handleSizeToggle = (size) => {
    const sizes = [...activeFilters.sizes];
    const index = sizes.indexOf(size);
    if (index > -1) {
      sizes.splice(index, 1);
    } else {
      sizes.push(size);
    }
    onFilterChange({ ...activeFilters, sizes });
  };

  const handleColorToggle = (colorHex) => {
    const colors = [...activeFilters.colors];
    const index = colors.indexOf(colorHex);
    if (index > -1) {
      colors.splice(index, 1);
    } else {
      colors.push(colorHex);
    }
    onFilterChange({ ...activeFilters, colors });
  };

  return (
    <div className={`filter-panel ${isOpen ? 'open' : ''}`}>
      <div className="filter-grid">
        {/* Category Column */}
        <div className="filter-column">
          <h3>Category</h3>
          <ul className="filter-options">
            {FILTER_CATEGORIES.map(category => {
              const isActive = activeFilters.category === category;
              return (
                <li 
                  key={category} 
                  className={`filter-option ${isActive ? 'active' : ''}`}
                  onClick={() => handleCategoryToggle(category)}
                >
                  <div className="filter-checkbox" />
                  {category}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Size Column */}
        <div className="filter-column">
          <h3>Size</h3>
          <div className="filter-size-grid">
            {FILTER_SIZES.map(size => {
              const isActive = activeFilters.sizes.includes(size);
              return (
                <button
                  key={size}
                  className={`filter-size-btn ${isActive ? 'active' : ''}`}
                  onClick={() => handleSizeToggle(size)}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>

        {/* Color Column */}
        <div className="filter-column" style={{ gridColumn: 'span 2' }}>
          <h3>Color Palette</h3>
          <div className="filter-color-dots">
            {FILTER_COLORS.map(color => {
              const isActive = activeFilters.colors.includes(color.hex);
              return (
                <button
                  key={color.name}
                  className={`filter-color-dot ${isActive ? 'active' : ''}`}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => handleColorToggle(color.hex)}
                  title={color.name}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="filter-actions">
        <span style={{ marginRight: 'auto', fontSize: '13px', color: '#9E9E9E', alignSelf: 'center' }}>
          Showing {productsCount} items
        </span>
        <button className="filter-clear-btn" onClick={onClearFilters}>
          Clear All Filters
        </button>
      </div>
    </div>
  );
}
