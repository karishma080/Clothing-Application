import React, { useState, useEffect } from 'react';
import { ShoppingBag, Heart, Search, X } from 'lucide-react';

export default function Navbar({ 
  cartCount, 
  wishlistCount, 
  onCartClick, 
  onWishlistClick, 
  searchQuery, 
  setSearchQuery,
  onLogoClick,
  onCategoryFilter
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <button onClick={() => { onCategoryFilter(''); onLogoClick(); }}>
              Collections
            </button>
          </li>
          <li>
            <button onClick={() => { onCategoryFilter('Dresses'); }}>
              Dresses
            </button>
          </li>
          <li>
            <button onClick={() => { onCategoryFilter('Outerwear'); }}>
              Outerwear
            </button>
          </li>
          <li>
            <button onClick={() => { onCategoryFilter('Knitwear'); }}>
              Knitwear
            </button>
          </li>
        </ul>

        {/* Logo */}
        <div className="logo" onClick={() => { onCategoryFilter(''); onLogoClick(); }}>
          ELVORA<span>.</span>
        </div>

        {/* Action Buttons */}
        <div className="nav-actions">
          {/* Search Toggle */}
          <div className="shop-search-bar" style={{ display: showSearch ? 'block' : 'none', marginRight: '10px' }}>
            <input 
              type="text" 
              placeholder="Search garments..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <Search size={16} />
            <button 
              onClick={() => { setShowSearch(false); setSearchQuery(''); }}
              style={{ position: 'absolute', right: '12px', top: '52%', transform: 'translateY(-50%)', color: '#9E9E9E' }}
            >
              <X size={14} />
            </button>
          </div>

          {!showSearch && (
            <button 
              className="nav-icon-btn" 
              onClick={() => setShowSearch(true)} 
              aria-label="Search items"
            >
              <Search size={20} strokeWidth={1.8} />
            </button>
          )}

          {/* Wishlist Button */}
          <button 
            className="nav-icon-btn" 
            onClick={onWishlistClick}
            aria-label="View Wishlist"
          >
            <Heart size={20} strokeWidth={1.8} />
            {wishlistCount > 0 && (
              <span className="nav-badge gold">{wishlistCount}</span>
            )}
          </button>

          {/* Cart/Bag Button */}
          <button 
            className="nav-icon-btn" 
            onClick={onCartClick}
            aria-label="View Shopping Bag"
          >
            <ShoppingBag size={20} strokeWidth={1.8} />
            {cartCount > 0 && (
              <span className="nav-badge">{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
