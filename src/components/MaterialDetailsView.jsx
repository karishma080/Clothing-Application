import React from 'react';
import { Home, Shirt, ShoppingCart, User, Wifi, Battery, Signal, ArrowLeft, ArrowRight } from 'lucide-react';

/* ─── Fabric colour palettes ─── */
const FABRIC_THEMES = {
  Cotton: {
    cardBg:    'linear-gradient(145deg, #f9f1e8 0%, #edd9c0 100%)',
    headerBg:  'linear-gradient(135deg, #c9956b 0%, #a0714a 100%)',
    accent:    '#c9956b',
    dark:      '#6b3e1e',
    icon:      '🌿',
    stripBg:   'linear-gradient(90deg, #d4a574, #b8825a)',
  },
  Linen: {
    cardBg:    'linear-gradient(145deg, #f5f0e6 0%, #e5d5b0 100%)',
    headerBg:  'linear-gradient(135deg, #b8975a 0%, #8f7035 100%)',
    accent:    '#b8975a',
    dark:      '#6b5020',
    icon:      '🌾',
    stripBg:   'linear-gradient(90deg, #c8a860, #a07840)',
  },
  Wool: {
    cardBg:    'linear-gradient(145deg, #edf3f0 0%, #bcd4c8 100%)',
    headerBg:  'linear-gradient(135deg, #4a8068 0%, #2a5a48 100%)',
    accent:    '#4a8068',
    dark:      '#2a4e40',
    icon:      '🧶',
    stripBg:   'linear-gradient(90deg, #5a9078, #3a6858)',
  },
  Silk: {
    cardBg:    'linear-gradient(145deg, #fdf0f8 0%, #f0c8e4 100%)',
    headerBg:  'linear-gradient(135deg, #b5518b 0%, #8a2a60 100%)',
    accent:    '#b5518b',
    dark:      '#6a2050',
    icon:      '✨',
    stripBg:   'linear-gradient(90deg, #c56098, #9a3070)',
  },
  Denim: {
    cardBg:    'linear-gradient(145deg, #edf3fa 0%, #c0d4ee 100%)',
    headerBg:  'linear-gradient(135deg, #4a6fa5 0%, #2a4880 100%)',
    accent:    '#4a6fa5',
    dark:      '#1e3a68',
    icon:      '👖',
    stripBg:   'linear-gradient(90deg, #5a7fb5, #3a5890)',
  },
};

/* ─── Gender visual configs ─── */
const GENDER_CONFIG = {
  Women:   { emoji: '👗', color1: '#f9c6df', color2: '#e07098', textColor: '#7a1050', label: 'Women' },
  Men:     { emoji: '👔', color1: '#c6ddf9', color2: '#4878c8', textColor: '#0a2860', label: 'Men'   },
  Kids:    { emoji: '🎒', color1: '#fff2b0', color2: '#e8a800', textColor: '#604000', label: 'Kids'  },
  Boys:    { emoji: '🚀', color1: '#b0e4ff', color2: '#3090e0', textColor: '#082858', label: 'Boys'  },
  Girls:   { emoji: '🌸', color1: '#ffb8ef', color2: '#d040b0', textColor: '#600048', label: 'Girls' },
  Couples: { emoji: '💑', color1: '#ffd8b0', color2: '#e07030', textColor: '#602000', label: 'Couples' },
};

/* ─── Sub-category descriptions ─── */
const CARDS_DATA = {
  Women:   { Cotton:'Kurtis, Dresses & Tops', Linen:'Kurtis, Dresses & Tops', Wool:'Sweaters & Cardigans', Silk:'Sarees, Dresses & Kurtis', Denim:'Jeans, Jackets & Dresses' },
  Men:     { Cotton:'Shirts, T-Shirts & Trousers', Linen:'Shirts & Trousers', Wool:'Sweaters & Pullovers', Silk:'Kurtas & Sherwanis', Denim:'Jeans, Jackets & Shirts' },
  Kids:    { Cotton:'Dresses & Sets', Linen:'Dresses & Sets', Wool:'Sweaters & Sets', Silk:'Dresses & Kurta Sets', Denim:'Jackets & Sets' },
  Boys:    { Cotton:'T-Shirts, Shirts & Shorts', Linen:'Shirts & Shorts', Wool:'Sweaters & Hoodies', Silk:'Kurtas & Dhoti Sets', Denim:'Jeans & Jackets' },
  Girls:   { Cotton:'Dresses, Tops & Skirts', Linen:'Dresses & Skirts', Wool:'Sweaters & Cardigans', Silk:'Dresses & Lehengas', Denim:'Dresses & Overalls' },
  Couples: { Cotton:'Matching Outfits', Linen:'Matching Outfits', Wool:'Matching Outfits', Silk:'Matching Outfits', Denim:'Matching Outfits' },
};

const GENDER_ORDER = ['Women', 'Men', 'Kids', 'Boys', 'Girls', 'Couples'];

/* ─── Single gender card ─── */
function GenderCard({ gender, material, theme, onClick }) {
  const [imgLoaded, setImgLoaded] = React.useState(false);
  const gc   = GENDER_CONFIG[gender];
  const desc = CARDS_DATA[gender]?.[material] || '';

  // Calculate image path: e.g. "Women" + "Cotton" -> "/fashion/women_cotton.png"
  const imagePath = `/fashion/${gender.toLowerCase()}_${material.toLowerCase()}.png`;

  return (
    <div
      className="mdv-card"
      onClick={onClick}
      style={{ background: `linear-gradient(145deg, ${gc.color1} 0%, ${gc.color2}88 100%)` }}
    >
      {/* Top visual area — always rich */}
      <div className="mdv-card-visual">
        {/* Decorative circles */}
        <div className="mdv-deco-circle mdv-deco-1" style={{ background: gc.color2 + '33' }} />
        <div className="mdv-deco-circle mdv-deco-2" style={{ background: gc.color2 + '22' }} />

        {/* Fabric mini-badge top-left */}
        <span className="mdv-fabric-badge" style={{ background: theme.accent }}>
          {theme.icon} {material}
        </span>

        {/* Big centred emoji as base layer */}
        <span className="mdv-big-emoji" style={{ opacity: imgLoaded ? 0.3 : 1, transition: 'opacity 0.3s' }}>
          {gc.emoji}
        </span>

        {/* Actual fashion image on top, blend multiply makes white bg transparent */}
        <img
          src={imagePath}
          alt={`${gender} ${material}`}
          className="mdv-card-img"
          style={{ opacity: imgLoaded ? 1 : 0 }}
          onLoad={() => setImgLoaded(true)}
          onError={(e) => e.target.style.display = 'none'}
        />
      </div>

      {/* Bottom info area */}
      <div className="mdv-card-info" style={{ background: 'rgba(255,255,255,0.72)', borderTopColor: gc.color2 + '50' }}>
        <div className="mdv-info-row">
          <span className="mdv-gender-name" style={{ color: gc.textColor }}>{gc.label}</span>
          <div className="mdv-arrow" style={{ background: theme.accent }}>
            <ArrowRight size={8} color="#fff" strokeWidth={2.5} />
          </div>
        </div>
        <span className="mdv-desc" style={{ color: theme.accent }}>{desc}</span>
      </div>
    </div>
  );
}

export default function MaterialDetailsView({
  material,
  onSelectGenderCard,
  onBack,
  onCartOpen,
  onProfileOpen,
  onNavigateHome
}) {
  const theme = FABRIC_THEMES[material] || FABRIC_THEMES.Cotton;

  return (
    <div className="app-home-screen">
      <div className="app-home-card animate-pop">
        <div className="material-details-view">

          <div className="category-scroll-body hide-scrollbar">

            {/* Status bar */}
            <div className="category-status-bar">
              <span className="category-time">9:41</span>
              <div className="category-status-icons">
                <Signal size={12} fill="currentColor" stroke="none" />
                <Wifi size={12} />
                <Battery size={14} />
              </div>
            </div>

            {/* Back + Title */}
            <div className="material-header-top">
              <button className="material-back-btn" onClick={onBack} aria-label="Go Back">
                <ArrowLeft size={20} />
              </button>
              <div className="material-title-container">
                <h2 className="category-title" style={{ margin: 0 }}>{material} Wear</h2>
                <span className="material-swatch-emoji">{theme.icon}</span>
              </div>
            </div>

            {/* Fabric banner strip */}
            <div className="material-fabric-strip" style={{ background: theme.headerBg }}>
              <span className="material-strip-icon">{theme.icon}</span>
              <div className="material-strip-text">
                <span className="material-strip-title">{material} Collection</span>
                <span className="material-strip-sub">Select a category below to explore</span>
              </div>
            </div>

            {/* 2-column gender grid */}
            <div className="material-gender-grid">
              {GENDER_ORDER.map((gender) => (
                <GenderCard
                  key={gender}
                  gender={gender}
                  material={material}
                  theme={theme}
                  onClick={() => onSelectGenderCard(gender)}
                />
              ))}
            </div>

          </div>

          {/* Bottom nav */}
          <nav className="app-home-nav-bar">
            <button className="app-home-nav-item" onClick={onNavigateHome} aria-label="Home">
              <Home size={20} />
            </button>
            <button className="app-home-nav-item active" onClick={onBack} aria-label="Category">
              <Shirt size={16} />
              <span className="app-home-nav-text">Category</span>
            </button>
            <button className="app-home-nav-item" onClick={onCartOpen} aria-label="Cart">
              <ShoppingCart size={20} />
            </button>
            <button className="app-home-nav-item" onClick={onProfileOpen} aria-label="Profile">
              <User size={20} />
            </button>
          </nav>

        </div>
      </div>
    </div>
  );
}
