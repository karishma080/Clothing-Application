import React, { useState } from 'react';
import { Search, Mic, Layers, Users, Home, Shirt, ShoppingCart, User, Wifi, Battery, Signal, ArrowRight } from 'lucide-react';

const FABRICS = [
  {
    id: 'cotton',
    name: 'Cotton',
    desc: 'Soft, breathable & everyday comfort',
    images: [
      '/fashion/women_cotton.png',
      '/fashion/men_cotton.png',
      '/fashion/kids_cotton.png',
      '/fashion/boys_cotton.png',
      '/fashion/girls_cotton.png',
      '/fashion/couples_cotton.png',
    ]
  },
  {
    id: 'linen',
    name: 'Linen',
    desc: 'Lightweight & airy feel',
    images: [
      '/fashion/women_linen.png',
      '/fashion/men_linen.png',
      '/fashion/kids_linen.png',
      '/fashion/boys_linen.png',
      '/fashion/girls_linen.png',
      '/fashion/couples_linen.png',
    ]
  },
  {
    id: 'wool',
    name: 'Wool',
    desc: 'Warm & Cozy',
    images: [
      '/fashion/women_wool.png',
      '/fashion/men_wool.png',
      '/fashion/kids_wool.png',
      '/fashion/boys_wool.png',
      '/fashion/girls_wool.png',
      '/fashion/couples_wool.png',
    ]
  },
  {
    id: 'silk',
    name: 'Silk',
    desc: 'Smooth & luxurious',
    images: [
      '/fashion/women_silk.png',
      '/fashion/men_silk.png',
      '/fashion/kids_silk.png',
      '/fashion/boys_silk.png',
      '/fashion/girls_silk.png',
      '/fashion/couples_silk.png',
    ]
  },
  {
    id: 'denim',
    name: 'Denim',
    desc: 'Durable & timeless',
    images: [
      '/fashion/women_denim.png',
      '/fashion/men_denim.png',
      '/fashion/kids_denim.png',
      '/fashion/boys_denim.png',
      '/fashion/girls_denim.png',
      '/fashion/couples_denim.png',
    ]
  }
];

const GENDERS = [
  {
    id: 'women',
    name: 'Women',
    desc: "Explore Women's Wear",
    image: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'men',
    name: 'Men',
    desc: "Explore Men's Wear",
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'kids',
    name: 'Kids',
    desc: "Explore Kid's Wear",
    image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'couples',
    name: 'Couples',
    desc: 'Matching styles',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80'
  }
];

export default function CategorySelectionView({
  onSelectFabric,
  onSelectGender,
  onNavigateHome,
  onCartOpen,
  onProfileOpen,
  onSearchSubmit
}) {
  const [searchVal, setSearchVal] = useState('');

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter' && searchVal.trim() !== '') {
      onSearchSubmit(searchVal);
    }
  };

  return (
    <div className="app-home-screen">
      <div className="app-home-card animate-pop">
        <div className="category-selection-view">
          {/* Scrollable Body */}
          <div className="category-scroll-body hide-scrollbar">
            
            {/* Status Bar */}
            <div className="category-status-bar">
              <span className="category-time">9:41</span>
              <div className="category-status-icons">
                <Signal size={12} fill="currentColor" stroke="none" />
                <Wifi size={12} />
                <Battery size={14} />
              </div>
            </div>

            {/* Title */}
            <h2 className="category-title">Fabric Filters</h2>

            {/* Grey Capsule Search Bar */}
            <div className="category-search-bar">
              <Search className="category-search-bar-icon-left" size={16} />
              <input 
                type="text" 
                placeholder="Search clothes by product,material,gender...."
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                onKeyDown={handleSearchKeyDown}
              />
              <Mic 
                className="category-search-bar-icon-right" 
                size={16} 
                onClick={() => alert('Voice search activated')} 
              />
            </div>

            {/* Shop My Material Section */}
            <section className="category-section">
              <div className="category-section-header">
                <div className="category-section-title-wrap">
                  <Layers size={18} />
                  <span>Shop my material</span>
                </div>
              </div>
              <p className="category-section-subtitle">Browse fabrics you love</p>

              <div className="category-fabric-grid">
                {FABRICS.map((fabric) => (
                  <div
                    key={fabric.id}
                    className="category-fabric-card"
                    onClick={() => onSelectFabric(fabric.name)}
                  >
                    {/* 2×3 fashion image collage */}
                    <div className="category-fabric-collage">
                      {fabric.images.map((src, idx) => (
                        <div key={idx} className="category-fabric-collage-cell">
                          <img
                            src={src}
                            alt={fabric.name}
                            className="category-fabric-collage-img"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="category-fabric-info">
                      <span className="category-fabric-name">{fabric.name}</span>
                      <span className="category-fabric-desc">{fabric.desc}</span>
                      <div className="category-arrow-circle">
                        <ArrowRight size={10} strokeWidth={3} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Shop By Gender Section */}
            <section className="category-section" style={{ marginTop: '12px' }}>
              <div className="category-section-header">
                <div className="category-section-title-wrap">
                  <Users size={18} />
                  <span>Shop by Gender</span>
                </div>
                <span className="category-see-all" onClick={() => onSelectGender('')}>
                  See all <ArrowRight size={10} strokeWidth={2.5} style={{ display: 'inline' }} />
                </span>
              </div>

              <div className="category-gender-row hide-scrollbar">
                {GENDERS.map((gender) => (
                  <div 
                    key={gender.id} 
                    className="category-gender-card"
                    onClick={() => onSelectGender(gender.name)}
                  >
                    <img src={gender.image} alt={gender.name} className="category-gender-img" />
                    <div className="category-gender-info">
                      <span className="category-gender-name">{gender.name}</span>
                      <span className="category-gender-desc">{gender.desc}</span>
                      <div className="category-arrow-circle">
                        <ArrowRight size={10} strokeWidth={3} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Bottom Nav Bar */}
          <nav className="app-home-nav-bar">
            <button className="app-home-nav-item" onClick={onNavigateHome} aria-label="Go to Home">
              <Home size={20} />
            </button>
            
            <button className="app-home-nav-item active" aria-label="Shop Categories">
              <Shirt size={16} />
              <span className="app-home-nav-text">Category</span>
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
    </div>
  );
}
