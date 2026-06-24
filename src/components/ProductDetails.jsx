import React, { useState } from 'react';
import { ArrowLeft, Heart, Star, ChevronDown, ShoppingBag } from 'lucide-react';

export default function ProductDetails({ 
  product, 
  onBack, 
  onAddToBag, 
  onWishlistToggle, 
  isWishlisted 
}) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(0); // 0: details, 1: size/fit, 2: sustainability

  const handleAddToBag = () => {
    setAdding(true);
    setTimeout(() => {
      setAdding(false);
      setAdded(true);
      onAddToBag(product, selectedSize, selectedColor);
      setTimeout(() => setAdded(false), 2000);
    }, 800);
  };

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="product-details-container container">
      <button className="back-btn" onClick={onBack}>
        <ArrowLeft size={16} />
        Back to collections
      </button>

      <div className="details-grid">
        {/* Media Gallery */}
        <div className="details-media">
          <div className="details-thumbnails">
            {product.images.map((img, idx) => (
              <img 
                key={idx}
                src={img} 
                alt={`${product.name} thumbnail ${idx + 1}`}
                className={`details-thumbnail ${idx === activeImageIdx ? 'active' : ''}`}
                onClick={() => setActiveImageIdx(idx)}
              />
            ))}
          </div>

          <div className="details-main-image-container">
            <img 
              src={product.images[activeImageIdx]} 
              alt={product.name} 
              className="details-main-image"
            />
          </div>
        </div>

        {/* Info & Options */}
        <div className="details-info">
          <span className="details-category">{product.category}</span>
          <h1 className="details-name">{product.name}</h1>

          <div className="details-rating-row">
            <div className="details-stars">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                  stroke="currentColor" 
                />
              ))}
            </div>
            <span className="details-reviews-count">
              {product.reviewsCount} verified reviews
            </span>
          </div>

          <div className="details-price">${product.price}</div>

          <p className="details-description">{product.description}</p>

          {/* Color Selector */}
          <div className="details-selector-group">
            <div className="selector-label">
              Color: <span>{selectedColor.name}</span>
            </div>
            <div className="details-colors">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  className={`details-color-btn ${selectedColor.name === color.name ? 'active' : ''}`}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => setSelectedColor(color)}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="details-selector-group">
            <div className="selector-label">
              Size: <span>{selectedSize}</span>
            </div>
            <div className="details-sizes">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`details-size-btn ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="details-actions">
            <button 
              className="add-to-bag-btn" 
              onClick={handleAddToBag}
              disabled={adding}
            >
              <ShoppingBag size={18} />
              {adding ? 'Adding to bag...' : added ? 'Added!' : 'Add to Bag'}
            </button>

            <button 
              className={`details-wishlist-btn ${isWishlisted ? 'active' : ''}`}
              onClick={() => onWishlistToggle(product.id)}
              aria-label="Add to wishlist"
            >
              <Heart size={20} />
            </button>
          </div>

          {/* Accordion details */}
          <div className="accordion">
            <div className={`accordion-item ${openAccordion === 0 ? 'active' : ''}`}>
              <button className="accordion-trigger" onClick={() => toggleAccordion(0)}>
                Details & Care
                <ChevronDown size={14} className="accordion-icon" />
              </button>
              <div className="accordion-content">
                <p><strong>Composition:</strong> {product.details.material}</p>
                <p style={{ marginTop: '8px' }}>Dry clean or gentle hand wash cold. Do not tumble dry. Iron on low heat setting.</p>
              </div>
            </div>

            <div className={`accordion-item ${openAccordion === 1 ? 'active' : ''}`}>
              <button className="accordion-trigger" onClick={() => toggleAccordion(1)}>
                Size & Fit
                <ChevronDown size={14} className="accordion-icon" />
              </button>
              <div className="accordion-content">
                <p>{product.details.fit}</p>
              </div>
            </div>

            <div className={`accordion-item ${openAccordion === 2 ? 'active' : ''}`}>
              <button className="accordion-trigger" onClick={() => toggleAccordion(2)}>
                Sustainability
                <ChevronDown size={14} className="accordion-icon" />
              </button>
              <div className="accordion-content">
                <p>{product.details.sustainability}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
