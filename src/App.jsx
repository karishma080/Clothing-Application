import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FilterBar from './components/FilterBar';
import ProductCard from './components/ProductCard';
import ProductDetails from './components/ProductDetails';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import CheckoutOverlay from './components/CheckoutOverlay';
import SplashView from './components/SplashView';
import OnboardingView from './components/OnboardingView';
import GetStartedView from './components/GetStartedView';
import AuthFlow from './components/AuthFlow';
import AppHomeView from './components/AppHomeView';
import CategorySelectionView from './components/CategorySelectionView';
import MaterialDetailsView from './components/MaterialDetailsView';
import GenderCategoryView from './components/GenderCategoryView';
import CartView from './components/CartView';
import OrderReviewView from './components/OrderReviewView';
import MobileCheckoutView from './components/MobileCheckoutView';
import PaymentMethodView from './components/PaymentMethodView';
import GPaySplashView from './components/GPaySplashView';
import OrderSuccessfulView from './components/OrderSuccessfulView';
import TrackOrderView from './components/TrackOrderView';
import ProfileView from './components/ProfileView';
import EditProfileView from './components/EditProfileView';
import ProfileUpdatedView from './components/ProfileUpdatedView';
import { products } from './data';
import { SlidersHorizontal, ArrowUpDown, XCircle } from 'lucide-react';

export default function App() {
  // Navigation & Product Detail states
  const [currentView, setCurrentView] = useState('splash'); // 'splash' | 'onboarding' | 'get-started' | 'auth' | 'app-home' | 'home' | 'details' | 'app-category' | 'app-material-wear' | 'app-gender-category'
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [previousView, setPreviousView] = useState('app-home');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [selectedGender, setSelectedGender] = useState('Women');

  // Bag, Wishlist & Overlay drawers states
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // Filters & Sorting states
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState(''); // '' | 'price-low' | 'price-high' | 'rating'
  const [activeFilters, setActiveFilters] = useState({
    category: '',
    sizes: [],
    colors: []
  });

  // Derived count badges
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlist.length;

  // Active product details
  const activeProduct = useMemo(() => {
    return products.find(p => p.id === selectedProductId) || null;
  }, [selectedProductId]);

  // Wishlist item details
  const wishlistItems = useMemo(() => {
    return products.filter(p => wishlist.includes(p.id));
  }, [wishlist]);

  // Catalog filtering and sorting logic
  const filteredProducts = useMemo(() => {
    return products
      .filter(product => {
        // Search Matching
        if (searchQuery.trim() !== '') {
          const tokens = searchQuery.toLowerCase().split(/\s+/).filter(t => t.trim() !== '');
          const matchesAllTokens = tokens.every(token => {
            const matchName = product.name.toLowerCase().includes(token);
            const matchCat = product.category.toLowerCase().includes(token);
            const matchDesc = product.description.toLowerCase().includes(token);
            const matchMaterial = product.details?.material?.toLowerCase().includes(token);
            const matchGender = product.gender?.toLowerCase() === token || 
                                (product.gender?.toLowerCase() === 'unisex' && (token === 'men' || token === 'women'));
            return matchName || matchCat || matchDesc || matchMaterial || matchGender;
          });
          if (!matchesAllTokens) return false;
        }

        // Category Filter
        if (activeFilters.category && product.category !== activeFilters.category) {
          return false;
        }

        // Size Filter (product matches if it has any of the selected sizes)
        if (activeFilters.sizes.length > 0) {
          const hasSize = product.sizes.some(size => activeFilters.sizes.includes(size));
          if (!hasSize) return false;
        }

        // Color Filter (product matches if any of its colors' hex codes are selected)
        // Note: activeFilters.colors holds swatches like "#FAF9F6" (Cream/White)
        // and products colors have individual exact hex codes. Let's do a loose matching or name matching
        if (activeFilters.colors.length > 0) {
          // Map product color names to our filter categories loosely
          const hasColor = product.colors.some(color => {
            const hex = color.hex.toLowerCase();
            return activeFilters.colors.some(filterHex => {
              // Exact matches or close representation matches
              if (filterHex === '#FAF9F6') { // Cream/White
                return ['#faf9f6', '#ffffff', '#f5f5f7', '#eae6df', '#f3e5d8', '#f7f5f0', '#eee9e0'].includes(hex);
              }
              if (filterHex === '#1C1C1E') { // Charcoal/Black
                return ['#1c1c1e', '#2c2c2e', '#0e0e10', '#121212', '#1d2330'].includes(hex);
              }
              if (filterHex === '#C5A880') { // Tan/Gold
                return ['#c5a880', '#d4af37', '#cdbb9e', '#a87c53', '#dccbba'].includes(hex);
              }
              if (filterHex === '#5C6053') { // Sage/Olive
                return ['#5c6053', '#a8b4a2'].includes(hex);
              }
              if (filterHex === '#B8A99A') { // Taupe/Sand
                return ['#b8a99a', '#d2c5b5', '#9d8f81', '#cbc6bd'].includes(hex);
              }
              if (filterHex === '#1D2330') { // Navy
                return ['#1d2330', '#1d2330'].includes(hex);
              }
              return false;
            });
          });
          if (!hasColor) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortOption === 'price-low') return a.price - b.price;
        if (sortOption === 'price-high') return b.price - a.price;
        if (sortOption === 'rating') return b.rating - a.rating;
        return 0; // Default sorting (catalog order)
      });
  }, [searchQuery, activeFilters, sortOption]);

  // Wishlist handler
  const handleWishlistToggle = (productId) => {
    setWishlist(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  // Add to Bag handlers
  const handleAddToBag = (product, size, color) => {
    setCart(prev => {
      // Check if item with same size/color already in cart
      const existingIdx = prev.findIndex(item => 
        item.product.id === product.id && 
        item.size === size && 
        item.color.name === color.name
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      } else {
        return [...prev, { product, size, color, quantity: 1 }];
      }
    });
    setCartOpen(true);
  };

  const handleQuickAdd = (product) => {
    // Choose default size and color
    const defaultSize = product.sizes.includes('M') ? 'M' : product.sizes[0];
    const defaultColor = product.colors[0];
    handleAddToBag(product, defaultSize, defaultColor);
  };

  // Cart modifications
  const handleUpdateQuantity = (productId, size, colorName, newQuantity) => {
    if (newQuantity <= 0) return;
    setCart(prev => prev.map(item => 
      (item.product.id === productId && item.size === size && item.color.name === colorName)
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const handleRemoveItem = (productId, size, colorName) => {
    setCart(prev => prev.filter(item => 
      !(item.product.id === productId && item.size === size && item.color.name === colorName)
    ));
  };

  // Checkout callbacks
  const handleOrderSuccess = () => {
    setCart([]);
  };

  const handleCategoryFilter = (category) => {
    setActiveFilters(prev => ({
      ...prev,
      category: category
    }));
  };

  const clearAllFilters = () => {
    setActiveFilters({
      category: '',
      sizes: [],
      colors: []
    });
    setSortOption('');
    setSearchQuery('');
  };

  const handleProductClick = (id) => {
    setSelectedProductId(id);
    setPreviousView(currentView);
    setCurrentView('details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectFabric = (fabricName) => {
    setSelectedMaterial(fabricName);
    setCurrentView('app-material-wear');
  };

  const handleSelectGender = (genderName) => {
    if (genderName) {
      setSelectedGender(genderName);
      setCurrentView('app-gender-category');
    } else {
      clearAllFilters();
      setCurrentView('home');
    }
  };

  const handleSelectGenderCard = (genderName) => {
    setSelectedGender(genderName);
    setCurrentView('app-gender-category');
  };

  const handleSelectSubCategory = (gender, subcat) => {
    clearAllFilters();
    setSearchQuery(`${gender} ${subcat}`);
    setCurrentView('home');
  };

  const handleCategorySearchSubmit = (query) => {
    clearAllFilters();
    setSearchQuery(query);
    setCurrentView('home');
  };

  const handleBackToHome = () => {
    setCurrentView(previousView === 'details' ? 'app-home' : previousView);
  };

  if (currentView === 'splash') {
    return <SplashView onNext={() => setCurrentView('onboarding')} />;
  }

  if (currentView === 'onboarding') {
    return <OnboardingView onNext={() => setCurrentView('get-started')} />;
  }

  if (currentView === 'get-started') {
    return <GetStartedView onNext={() => setCurrentView('auth')} />;
  }

  if (currentView === 'auth') {
    return <AuthFlow onComplete={() => setCurrentView('app-home')} />;
  }

  if (currentView === 'app-cart') {
    return (
      <CartView
        cartItems={cart}
        onBack={() => setCurrentView(previousView)}
        onProceedCheckout={() => setCurrentView('app-order-review')}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={(id) => {
          // If items use an ID we can remove them. In our mockup we don't have perfect alignment of ids, 
          // but we map cart items dynamically. 
        }}
      />
    );
  }

  if (currentView === 'app-order-review') {
    return (
      <OrderReviewView
        cartItems={cart}
        onBack={() => setCurrentView('app-cart')}
        onEditCart={() => setCurrentView('app-cart')}
        onPlaceOrder={() => {
          setCurrentView('app-checkout-mobile');
        }}
      />
    );
  }

  if (currentView === 'app-checkout-mobile') {
    return (
      <MobileCheckoutView
        onBack={() => setCurrentView('app-order-review')}
        onProceed={() => setCurrentView('app-payment-method')}
      />
    );
  }

  if (currentView === 'app-payment-method') {
    return (
      <PaymentMethodView
        onBack={() => setCurrentView('app-checkout-mobile')}
        onProceedUpi={() => setCurrentView('app-gpay-splash')}
      />
    );
  }

  if (currentView === 'app-gpay-splash') {
    return (
      <GPaySplashView
        onComplete={() => {
          handleOrderSuccess();
          setCurrentView('app-order-success');
        }}
      />
    );
  }

  if (currentView === 'app-order-success') {
    return (
      <OrderSuccessfulView 
        onTrackOrder={() => setCurrentView('app-track-order')}
        onContinueShopping={() => setCurrentView('app-home')}
        onNavigateHome={() => setCurrentView('app-home')}
        onNavigateCategory={() => setCurrentView('app-category')}
        onNavigateProfile={() => setCurrentView('app-profile')}
      />
    );
  }

  if (currentView === 'app-track-order') {
    return (
      <TrackOrderView 
        onBack={() => setCurrentView('app-order-success')}
        onHome={() => setCurrentView('app-home')}
        onNavigateHome={() => setCurrentView('app-home')}
        onNavigateCategory={() => setCurrentView('app-category')}
        onNavigateProfile={() => setCurrentView('app-profile')}
      />
    );
  }

  if (currentView === 'app-profile') {
    return (
      <ProfileView 
        onNavigateHome={() => setCurrentView('app-home')}
        onNavigateCart={() => { setPreviousView(currentView); setCurrentView('app-cart'); }}
        onNavigateCategory={() => setCurrentView('app-category')}
        onEditProfile={() => setCurrentView('app-edit-profile')}
      />
    );
  }

  if (currentView === 'app-edit-profile') {
    return (
      <EditProfileView 
        onBack={() => setCurrentView('app-profile')}
        onSave={() => setCurrentView('app-profile-updated')}
        onNavigateHome={() => setCurrentView('app-home')}
        onNavigateCart={() => { setPreviousView(currentView); setCurrentView('app-cart'); }}
        onNavigateCategory={() => setCurrentView('app-category')}
      />
    );
  }

  if (currentView === 'app-profile-updated') {
    return (
      <ProfileUpdatedView 
        onBackToProfile={() => setCurrentView('app-profile')}
      />
    );
  }

  if (currentView === 'app-home') {
    return (
      <AppHomeView 
        onProductClick={handleProductClick}
        onCartOpen={() => { setPreviousView(currentView); setCurrentView('app-cart'); }}
        onWishlistOpen={() => setWishlistOpen(true)}
        onShopOpen={() => setCurrentView('home')}
        onCategoryOpen={() => setCurrentView('app-category')}
        onProfileOpen={() => setCurrentView('app-profile')}
      />
    );
  }

  if (currentView === 'app-category') {
    return (
      <CategorySelectionView
        onSelectFabric={handleSelectFabric}
        onSelectGender={handleSelectGender}
        onNavigateHome={() => setCurrentView('app-home')}
        onCartOpen={() => { setPreviousView(currentView); setCurrentView('app-cart'); }}
        onProfileOpen={() => setCurrentView('app-profile')}
        onSearchSubmit={handleCategorySearchSubmit}
      />
    );
  }

  if (currentView === 'app-material-wear') {
    return (
      <MaterialDetailsView
        material={selectedMaterial}
        onSelectGenderCard={handleSelectGenderCard}
        onBack={() => setCurrentView('app-category')}
        onCartOpen={() => { setPreviousView(currentView); setCurrentView('app-cart'); }}
        onProfileOpen={() => setCurrentView('app-profile')}
        onNavigateHome={() => setCurrentView('app-home')}
      />
    );
  }

  if (currentView === 'app-gender-category') {
    return (
      <GenderCategoryView
        initialGender={selectedGender}
        onSelectSubCategory={handleSelectSubCategory}
        onNavigateHome={() => setCurrentView('app-home')}
        onNavigateCategory={() => setCurrentView('app-category')}
        onCartOpen={() => { setPreviousView(currentView); setCurrentView('app-cart'); }}
        onProfileOpen={() => setCurrentView('app-profile')}
      />
    );
  }

  return (
    <div id="root">
      <Navbar 
        cartCount={cartCount} 
        wishlistCount={wishlistCount}
        onCartClick={() => setCartOpen(true)}
        onWishlistClick={() => setWishlistOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onLogoClick={handleBackToHome}
        onCategoryFilter={handleCategoryFilter}
      />

      <main className="main-content">
        {currentView === 'home' ? (
          <>
            {/* Editorial Hero Banner */}
            <HeroSection onShopClick={() => {
              const shopSection = document.getElementById('shop-feed');
              if (shopSection) {
                shopSection.scrollIntoView({ behavior: 'smooth' });
              }
            }} />

            {/* Brand Intro Statement */}
            <section className="brand-intro">
              <div className="container">
                <div className="brand-intro-wrapper">
                  <span className="brand-badge">Boutique Atelier</span>
                  <h2 className="heading-serif">Understated Elegance & Responsible Luxury</h2>
                  <p>
                    ELVORA represents the pinnacle of intentional fashion. We compose modern wardrobe essentials hand-tailored from organic, fair-trade fibers including Grade-A cashmere, Belgian flax linen, and sandwashed mulberry silk. Cut in limited production batches to ensure premium care and zero waste.
                  </p>
                </div>
              </div>
            </section>

            {/* Shop Feed Section */}
            <section id="shop-feed" className="shop-layout container">
              <div className="shop-header">
                <div className="shop-title-section">
                  <h2 className="heading-serif">
                    {activeFilters.category ? `${activeFilters.category} Collection` : 'All Collections'}
                  </h2>
                  <p>Curated list of premium tailoring items</p>
                </div>

                <div className="shop-controls">
                  <button 
                    className={`filter-toggle-btn ${filtersOpen ? 'active' : ''}`}
                    onClick={() => setFiltersOpen(!filtersOpen)}
                  >
                    <SlidersHorizontal size={14} />
                    Filters
                  </button>

                  <div className="sort-select-wrapper">
                    <select 
                      className="sort-select"
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value)}
                    >
                      <option value="">Sort By: Default</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Top Rated</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Filter Panel */}
              <FilterBar 
                isOpen={filtersOpen}
                activeFilters={activeFilters}
                onFilterChange={setActiveFilters}
                onClearFilters={clearAllFilters}
                productsCount={filteredProducts.length}
              />

              {/* Product Grid */}
              <div className="product-grid-section">
                {filteredProducts.length === 0 ? (
                  <div className="no-results">
                    <XCircle size={40} strokeWidth={1.5} />
                    <h3>No items found</h3>
                    <p>We couldn't find any products matching your current filters. Try refining them.</p>
                    <button className="drawer-shop-now-btn" style={{ marginTop: '16px' }} onClick={clearAllFilters}>
                      Reset All Filters
                    </button>
                  </div>
                ) : (
                  <div className="product-grid">
                    {filteredProducts.map(product => (
                      <ProductCard 
                        key={product.id}
                        product={product}
                        onProductClick={handleProductClick}
                        onWishlistToggle={handleWishlistToggle}
                        isWishlisted={wishlist.includes(product.id)}
                        onQuickAdd={handleQuickAdd}
                      />
                    ))}
                  </div>
                )}
              </div>
            </section>
          </>
        ) : (
          /* Detailed View */
          <ProductDetails 
            product={activeProduct}
            onBack={handleBackToHome}
            onAddToBag={handleAddToBag}
            onWishlistToggle={handleWishlistToggle}
            isWishlisted={wishlist.includes(selectedProductId)}
          />
        )}
      </main>

      {/* Floating Overlays / Drawers */}
      <CartDrawer 
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => {
          setCartOpen(false);
          setCheckoutOpen(true);
        }}
        onProductClick={handleProductClick}
      />

      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlistItems={wishlistItems}
        onRemoveWishlist={handleWishlistToggle}
        onProductClick={handleProductClick}
        onAddToCart={handleQuickAdd}
      />

      <CheckoutOverlay 
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        cartItems={cart}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Col */}
            <div>
              <div className="footer-logo">
                ELVORA<span>.</span>
              </div>
              <p className="footer-tagline">
                Modern, sustainable tailoring crafted in limited edition lines with an emphasis on craftsmanship and materials.
              </p>
              <div className="footer-socials">
                <a href="#" className="footer-social-link" aria-label="Instagram">IG</a>
                <a href="#" className="footer-social-link" aria-label="Pinterest">PI</a>
                <a href="#" className="footer-social-link" aria-label="Twitter">TW</a>
              </div>
            </div>

            {/* Links Col 1 */}
            <div className="footer-col">
              <h4>Shop</h4>
              <ul className="footer-links">
                <li><button onClick={() => { handleCategoryFilter(''); handleBackToHome(); }}>All Collections</button></li>
                <li><button onClick={() => { handleCategoryFilter('Dresses'); handleBackToHome(); }}>Dresses</button></li>
                <li><button onClick={() => { handleCategoryFilter('Outerwear'); handleBackToHome(); }}>Outerwear</button></li>
                <li><button onClick={() => { handleCategoryFilter('Knitwear'); handleBackToHome(); }}>Knitwear</button></li>
              </ul>
            </div>

            {/* Links Col 2 */}
            <div className="footer-col">
              <h4>Services</h4>
              <ul className="footer-links">
                <li><a href="#">Sizing Assistant</a></li>
                <li><a href="#">Atelier Consultations</a></li>
                <li><a href="#">Returns & Shipping</a></li>
                <li><a href="#">Care & Repairs</a></li>
              </ul>
            </div>

            {/* Newsletter Subscription */}
            <div className="footer-newsletter">
              <h4>The Atelier Letter</h4>
              <p>Subscribe to receive seasonal collection previews, journal entries, and private studio events access.</p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter email address" 
                  className="newsletter-input" 
                  aria-label="Email for newsletter"
                />
                <button className="newsletter-btn" onClick={() => alert('Thank you for subscribing to the Atelier Letter.')}>
                  Join
                </button>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} ELVORA Studio. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
