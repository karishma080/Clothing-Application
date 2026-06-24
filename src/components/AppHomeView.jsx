import React, { useState, useMemo } from 'react';
import { Bell, Heart, Search, Mic, Star, Home, Shirt, ShoppingCart, User, Sparkles } from 'lucide-react';
import { products } from '../data';

// Separate categories images map
const CATEGORY_ITEMS = [
  { name: "Tops", image: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=150&auto=format&fit=crop&q=80" },
  { name: "Tracks", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=150&auto=format&fit=crop&q=80" },
  { name: "Gowns", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=150&auto=format&fit=crop&q=80" },
  { name: "Skirts", image: "/skirt.png" },
  { name: "Shorts", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=150&auto=format&fit=crop&q=80" },
  { name: "Coats", image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=150&auto=format&fit=crop&q=80" }
];

export default function AppHomeView({
  onProductClick,
  onCartOpen,
  onWishlistOpen,
  onShopOpen,
  onCategoryOpen,
  onProfileOpen
}) {
  const [dealPrice, setDealPrice] = useState(2009);
  const [searchQuery, setSearchQuery] = useState('');

  // Top Rated products list (Floral Printed Shirt, Designer Silk Kurthi, Ice Blue Denim Jacket)
  // We reference these specifically and fetch details from the database
  const topRatedProducts = useMemo(() => {
    // Return items that correspond to top rated listing
    return [
      {
        id: 9,
        name: "Floral Printed Shirt",
        rating: 4.8,
        price: 599,
        discount: "-15%",
        image: "/floral-shirt.png"
      },
      {
        id: 10,
        name: "Designer Silk Kurthi",
        rating: 4.7,
        price: 1500,
        discount: "-20%",
        image: "/silk-kurthi.png"
      },
      {
        id: 11,
        name: "Ice Blue Denim Jacket",
        rating: 5.0,
        price: 1200,
        discount: "-20%",
        image: "/denim-jacket.png"
      }
    ].filter(p => {
      // Filter list based on search or dealPrice
      if (p.price > dealPrice) return false;
      if (searchQuery.trim() !== '') {
        return p.name.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return true;
    });
  }, [dealPrice, searchQuery]);

  const handleApplyDeal = () => {
    alert(`Deal applied! Showing top rated items under ₹${dealPrice}.`);
  };

  return (
    <div className="app-home-screen">
      <div className="app-home-card animate-pop">
        
        {/* Scrollable Body */}
        <div className="app-home-scroll-body hide-scrollbar">
          
          {/* Purple Wave Header */}
          <header className="app-home-header">
            {/* Background Sparkles */}
            <div style={{ position: 'absolute', top: '15px', left: '15%', opacity: 0.4 }}><Sparkles size={12} /></div>
            <div style={{ position: 'absolute', top: '45px', right: '25%', opacity: 0.3 }}><Sparkles size={14} /></div>
            <div style={{ position: 'absolute', bottom: '15px', left: '8%', opacity: 0.2 }}><Sparkles size={10} /></div>

            <div className="app-home-header-top">
              <div className="app-home-header-logo">Elvora</div>
              <div className="app-home-header-icons">
                <button className="app-home-header-btn" onClick={() => alert('No new notifications')} aria-label="Notifications">
                  <Bell size={18} />
                </button>
                <button className="app-home-header-btn" onClick={onWishlistOpen} aria-label="Wishlist">
                  <Heart size={18} />
                </button>
              </div>
            </div>

            <div className="app-home-header-welcome">
              <span>👋</span> Good Morning, 👩
            </div>

            <div className="app-home-search-bar">
              <Search className="app-home-search-bar-icon-left" size={16} />
              <input 
                type="text" 
                placeholder="Search products, brands..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Mic className="app-home-search-bar-icon-right" size={16} onClick={() => alert('Voice search activated')} />
            </div>
          </header>

          {/* Categories Section */}
          <section className="app-home-section">
            <div className="app-home-categories-row hide-scrollbar">
              {CATEGORY_ITEMS.map((cat, idx) => (
                <div key={idx} className="app-home-category-item" onClick={onShopOpen}>
                  <div className="app-home-category-circle">
                    <img src={cat.image} alt={cat.name} />
                  </div>
                  <span className="app-home-category-text">{cat.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Summer Collection Banner */}
          <section className="app-home-banner">
            <div className="app-home-banner-circle banner-circle-1" />
            <div className="app-home-banner-circle banner-circle-2" />
            <div className="app-home-banner-circle banner-circle-3" />

            <div className="app-home-banner-subtitle">Special Season</div>
            <h3 className="app-home-banner-title">🌟 Summer Collection</h3>
            <p className="app-home-banner-desc">Upto 50% OFF on Premium items</p>
            
            <button className="app-home-banner-btn" onClick={onShopOpen}>
              Shop Now &rarr;
            </button>
          </section>

          <div className="app-home-banner-indicators">
            <span className="app-home-banner-indicator" />
            <span className="app-home-banner-indicator active" />
            <span className="app-home-banner-indicator" />
            <span className="app-home-banner-indicator" />
            <span className="app-home-banner-indicator" />
          </div>

          {/* Special Offer Deal Slider */}
          <section className="app-home-deal-box">
            <div className="app-home-deal-row">
              <span className="app-home-deal-title">Special Offer</span>
              <span className="app-home-deal-value">₹ {dealPrice.toLocaleString('en-IN')}</span>
            </div>
            
            <input 
              type="range" 
              min="0" 
              max="5000" 
              value={dealPrice}
              onChange={(e) => setDealPrice(parseInt(e.target.value))}
              className="app-home-slider"
            />

            <div className="app-home-slider-labels">
              <span>₹ 0</span>
              <span>₹ 5,000</span>
            </div>

            <button className="app-home-deal-btn" onClick={handleApplyDeal}>
              Apply Deal
            </button>
          </section>

          {/* Top Rated Horizontal Scroll Grid */}
          <section className="app-home-section" style={{ paddingBottom: '10px' }}>
            <div className="app-home-deal-row" style={{ marginBottom: '16px' }}>
              <span className="app-home-section-title" style={{ margin: 0 }}>Top Rated</span>
              <span onClick={onShopOpen} style={{ fontSize: '12px', fontWeight: '600', color: '#b5518b', cursor: 'pointer' }}>
                See All &gt;
              </span>
            </div>

            {topRatedProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '20px 0', fontSize: '13px', color: '#9E9E9E' }}>
                No items match filter price.
              </div>
            ) : (
              <div className="app-home-products-scroller hide-scrollbar">
                {topRatedProducts.map(p => (
                  <div key={p.id} className="app-home-product-mini-card">
                    <span className="app-home-product-discount-badge">{p.discount}</span>
                    <div className="app-home-product-mini-img-box" onClick={() => onProductClick(p.id)}>
                      <img src={p.image} alt={p.name} />
                    </div>
                    <div className="app-home-product-mini-info">
                      <h4 className="app-home-product-mini-name" onClick={() => onProductClick(p.id)}>{p.name}</h4>
                      <div className="app-home-product-mini-rating">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={8} fill={i < Math.floor(p.rating) ? "currentColor" : "none"} stroke="currentColor" />
                        ))}
                      </div>
                      <span className="app-home-product-mini-price">₹ {p.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Premium Travel Collection Promotional Banner */}
          <section className="app-home-travel-banner">
            <div className="app-home-travel-info">
              <span className="app-home-travel-tag">New Arrival</span>
              <h4 className="app-home-travel-title">Premium Travel Collection</h4>
              <button className="app-home-travel-btn" onClick={onShopOpen}>
                Explore Now
              </button>
            </div>
            
            <div className="app-home-travel-img-box">
              <img src="/travel-collection.png" alt="Travel model" />
            </div>
            
            <div className="app-home-travel-discount-tag">
              20%<br/>OFF
            </div>
          </section>

        </div>

        {/* Bottom Nav Bar */}
        <nav className="app-home-nav-bar">
          <button className="app-home-nav-item active">
            <Home size={18} fill="currentColor" />
            <span className="app-home-nav-text">Home</span>
          </button>
          
          <button className="app-home-nav-item" onClick={onCategoryOpen} aria-label="Shop Categories">
            <Shirt size={20} />
          </button>
          
          <button className="app-home-nav-item" onClick={onCartOpen} aria-label="Shopping Cart">
            <ShoppingCart size={20} />
          </button>
          
          <button className="app-home-nav-item" onClick={onProfileOpen} aria-label="Profile Account">
            <User size={20} />
          </button>
        </nav>

      </div>
    </div>
  );
}
