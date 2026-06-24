import React from 'react';
import { Heart, Star } from 'lucide-react';

export default function ProductCard({ 
  product, 
  onProductClick, 
  onWishlistToggle, 
  isWishlisted, 
  onQuickAdd 
}) {
  const { name, category, price, rating, images, colors, isTrending, isNew } = product;

  return (
    <article className="product-card">
      <div className="product-image-container">
        {/* Badges */}
        <div className="product-badges">
          {isTrending && <span className="product-badge gold-badge">Trending</span>}
          {isNew && <span className="product-badge">New</span>}
        </div>

        {/* Wishlist Heart */}
        <button 
          className={`product-wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onWishlistToggle(product.id);
          }}
          aria-label="Add to wishlist"
        >
          <Heart size={18} strokeWidth={1.8} />
        </button>

        {/* Double Image Hover */}
        <img 
          src={images[0]} 
          alt={name} 
          className="product-image" 
          onClick={() => onProductClick(product.id)}
        />
        {images[1] && (
          <img 
            src={images[1]} 
            alt={`${name} secondary view`} 
            className="product-image-alternate"
            onClick={() => onProductClick(product.id)}
          />
        )}

        {/* Quick Add Overlay */}
        <button 
          className="product-quick-add"
          onClick={(e) => {
            e.stopPropagation();
            onQuickAdd(product);
          }}
        >
          + Quick Add
        </button>
      </div>

      <div className="product-info">
        <div className="product-meta-row">
          <span className="product-card-category">{category}</span>
          <span className="product-card-rating">
            <Star size={12} fill="currentColor" />
            {rating.toFixed(1)}
          </span>
        </div>

        <h3 className="product-card-name" onClick={() => onProductClick(product.id)}>
          {name}
        </h3>
        
        <span className="product-card-price">${price}</span>

        {/* Color swatches indicator */}
        <div className="product-color-swatches">
          {colors.map((color, idx) => (
            <span 
              key={idx} 
              className="product-color-swatch" 
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
