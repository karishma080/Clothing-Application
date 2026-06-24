import React, { useState } from 'react';
import { Home, Shirt, ShoppingCart, User, Wifi, Battery, Signal, SlidersHorizontal, Search } from 'lucide-react';

/* ─── Gender sidebar config ─── */
const GENDERS = [
  { id: 'Women',   label: "Women's", emoji: '👗', color: '#e07098', bg: 'linear-gradient(135deg,#f9c6df,#e07098)', image: '/women.png'   },
  { id: 'Men',     label: "Men's",   emoji: '👔', color: '#4878c8', bg: 'linear-gradient(135deg,#c6ddf9,#4878c8)', image: '/men.png'     },
  { id: 'Kids',    label: "Kid's",   emoji: '🎒', color: '#e8a800', bg: 'linear-gradient(135deg,#fff2b0,#e8a800)', image: '/kids.png'    },
  { id: 'Boys',    label: "Boys'",   emoji: '🚀', color: '#3090e0', bg: 'linear-gradient(135deg,#b0e4ff,#3090e0)', image: '/boys.png'    },
  { id: 'Girls',   label: "Girls'",  emoji: '🌸', color: '#d040b0', bg: 'linear-gradient(135deg,#ffb8ef,#d040b0)', image: '/girls.png'   },
  { id: 'Couples', label: 'Couples', emoji: '💑', color: '#e07030', bg: 'linear-gradient(135deg,#ffd8b0,#e07030)', image: '/couples.png' },
];

/* ─── Sub-category data per gender ─── */
/* Each item has: label, emoji (fallback), bg (fallback gradient), image (optional local path) */
const SUBCATS = {
  Women: [
    { label: 'Anarkali\nKurtis',  emoji: '👘', bg: 'linear-gradient(135deg,#fce4ec,#f48fb1)', image: '/anarkali.png'      },
    { label: 'Salwar\nSuits',     emoji: '🥻', bg: 'linear-gradient(135deg,#f3e5f5,#ce93d8)', image: '/salwar suit.png'   },
    { label: 'Silk Sarees',       emoji: '🌺', bg: 'linear-gradient(135deg,#fdf0f8,#e07098)', image: '/silksaree.png'     },
    { label: 'Tops &\nTunics',    emoji: '👚', bg: 'linear-gradient(135deg,#e8f5e9,#81c784)', image: '/topsandtunics.png' },
    { label: 'Short\nKurtis',     emoji: '👗', bg: 'linear-gradient(135deg,#fff3e0,#ffb74d)', image: '/shortkurtis.png'   },
    { label: 'Shirts',            emoji: '👕', bg: 'linear-gradient(135deg,#e3f2fd,#64b5f6)', image: '/shirtwomen.png'    },
    { label: 'Gowns',             emoji: '💃', bg: 'linear-gradient(135deg,#fce4ec,#e91e63)', image: '/gowns.png'         },
    { label: 'Cotton\nSarees',    emoji: '🧵', bg: 'linear-gradient(135deg,#f1f8e9,#aed581)', image: '/cottonsaree.png'   },
    { label: 'Pants',             emoji: '👖', bg: 'linear-gradient(135deg,#e8eaf6,#7986cb)', image: '/pantsw.png'        },
    { label: 'Jeans',             emoji: '👖', bg: 'linear-gradient(135deg,#e3f2fd,#1976d2)', image: '/jeansw.png'        },
    { label: 'T-Shirts',          emoji: '👕', bg: 'linear-gradient(135deg,#f3e5f5,#9c27b0)', image: '/floralshirt.png'   },
    { label: 'Maxi\nDresses',     emoji: '🌸', bg: 'linear-gradient(135deg,#fdf0f8,#b5518b)', image: '/maxidress.png'     },
  ],
  Men: [
    { label: 'Trendy\nShirts',    emoji: '👔', bg: 'linear-gradient(135deg,#dbeafe,#1e40af)', image: '/men/trendy shirt.png'    },
    { label: 'Relaxed\nPants',    emoji: '👖', bg: 'linear-gradient(135deg,#e0e7ff,#4338ca)', image: '/men/relaxed pants.png'   },
    { label: 'Floral\nShirts',    emoji: '🌺', bg: 'linear-gradient(135deg,#dcfce7,#16a34a)', image: '/men/floral shirts.png'   },
    { label: "Mens\nTees",        emoji: '👕', bg: 'linear-gradient(135deg,#fef3c7,#d97706)', image: '/men/mens tees.png'       },
    { label: 'Everyday\nPolos',   emoji: '🎽', bg: 'linear-gradient(135deg,#cffafe,#0891b2)', image: '/men/everyday polos.png'  },
    { label: 'Co-ords',           emoji: '🤝', bg: 'linear-gradient(135deg,#ede9fe,#7c3aed)', image: '/men/co-ords.png'         },
    { label: 'Baggy\nJeans',      emoji: '👖', bg: 'linear-gradient(135deg,#bfdbfe,#2563eb)', image: '/men/baggy jean.png'      },
    { label: 'Tracks',            emoji: '🏃', bg: 'linear-gradient(135deg,#dcfce7,#15803d)', image: '/men/tracks.png'          },
    { label: 'Trousers',          emoji: '👖', bg: 'linear-gradient(135deg,#f1f5f9,#475569)', image: '/men/trousers.png'        },
    { label: 'Comfy\nShorts',     emoji: '🩳', bg: 'linear-gradient(135deg,#fefce8,#ca8a04)', image: '/men/comfy shorts.png'    },
    { label: 'Short\nKurtas',     emoji: '🧥', bg: 'linear-gradient(135deg,#fff1f2,#e11d48)', image: '/men/short kurtas.png'    },
    { label: 'Linen\nVests',      emoji: '🌾', bg: 'linear-gradient(135deg,#fdf6ec,#b45309)', image: '/men/linen vests.png'     },
  ],
  Kids: [
    { label: 'One-Sie',           emoji: '🧸', bg: 'linear-gradient(135deg,#fef9c3,#fbbf24)', image: '/kids/one-sie.png'          },
    { label: 'Frocks',            emoji: '👗', bg: 'linear-gradient(135deg,#fce7f3,#ec4899)', image: '/kids/frocks.png'           },
    { label: 'Lehenga\nCholi',    emoji: '🌺', bg: 'linear-gradient(135deg,#f3e8ff,#a855f7)', image: '/kids/lehanga choli.png'    },
    { label: 'Night Wear',        emoji: '🌙', bg: 'linear-gradient(135deg,#e0e7ff,#6366f1)', image: '/kids/night wear.png'       },
    { label: 'Skirt &\nTop Sets', emoji: '👘', bg: 'linear-gradient(135deg,#dcfce7,#22c55e)', image: '/kids/skirtandtopsets.png'  },
    { label: 'Rompers',           emoji: '🎀', bg: 'linear-gradient(135deg,#ffedd5,#f97316)', image: '/kids/rompers.png'          },
    { label: 'Kurta Sets',        emoji: '🧵', bg: 'linear-gradient(135deg,#fef2f2,#ef4444)', image: '/kids/kurtasets.png'        },
    { label: 'Denim Sets',        emoji: '👖', bg: 'linear-gradient(135deg,#dbeafe,#3b82f6)', image: '/kids/denimsets.png'        },
    { label: 'Jackets',           emoji: '🧥', bg: 'linear-gradient(135deg,#f1f5f9,#64748b)', image: '/kids/jackets.png'          },
  ],
  Boys: [
    { label: 'T-Shirts',    emoji: '👕', bg: 'linear-gradient(135deg,#dbeafe,#2563eb)', image: '/boys/tshirt.png'     },
    { label: 'Shorts',      emoji: '🩳', bg: 'linear-gradient(135deg,#dcfce7,#16a34a)', image: '/boys/shorts.png'     },
    { label: 'Jeans',       emoji: '👖', bg: 'linear-gradient(135deg,#e0e7ff,#4338ca)', image: '/boys/jeans.png'      },
    { label: 'Shirts',      emoji: '👔', bg: 'linear-gradient(135deg,#fff7ed,#ea580c)', image: '/boys/shirt.png'      },
    { label: 'Kurtas',      emoji: '🧥', bg: 'linear-gradient(135deg,#fdf4ff,#c026d3)', image: '/boys/kurtas.png'     },
    { label: 'Tracks',      emoji: '🏃', bg: 'linear-gradient(135deg,#ccfbf1,#0d9488)', image: '/boys/tracks.png'     },
    { label: 'Hoodies',     emoji: '🦊', bg: 'linear-gradient(135deg,#fef9c3,#d97706)', image: '/boys/hoodies.png'    },
    { label: 'Jackets',     emoji: '🧥', bg: 'linear-gradient(135deg,#f1f5f9,#475569)', image: '/boys/jackets.png'    },
    { label: 'Denim Sets',  emoji: '👖', bg: 'linear-gradient(135deg,#bfdbfe,#1d4ed8)', image: '/boys/denim sets.png' },
  ],
  Girls: [
    { label: 'Frocks',          emoji: '🌸', bg: 'linear-gradient(135deg,#fce7f3,#ec4899)', image: '/girls/frocks.png'        },
    { label: 'Maxi\nDresses',   emoji: '👗', bg: 'linear-gradient(135deg,#f3e8ff,#a855f7)', image: '/girls/maxidress.png'     },
    { label: 'Tops &\nSkirts',  emoji: '💃', bg: 'linear-gradient(135deg,#fff7ed,#f97316)', image: '/girls/topsandskirts.png' },
    { label: 'Lehenga\nCholi',  emoji: '🌺', bg: 'linear-gradient(135deg,#fdf4ff,#c026d3)', image: '/girls/lehanga choli.png' },
    { label: 'Night Wear',      emoji: '🌙', bg: 'linear-gradient(135deg,#e0e7ff,#6366f1)', image: '/girls/night wear.png'   },
    { label: 'Kurta Sets',      emoji: '🧵', bg: 'linear-gradient(135deg,#dcfce7,#16a34a)', image: '/girls/kurta sets.png'   },
    { label: 'Rompers',         emoji: '🎀', bg: 'linear-gradient(135deg,#ccfbf1,#0d9488)', image: '/girls/rompers.png'      },
    { label: 'Cardigans',       emoji: '🧶', bg: 'linear-gradient(135deg,#fef9c3,#ca8a04)', image: '/girls/cardigans.png'    },
    { label: 'Co-ords',         emoji: '🤝', bg: 'linear-gradient(135deg,#fce4ec,#f43f5e)', image: '/girls/co-ords.png'      },
  ],
  Couples: [
    { label: 'Coord\nSets',        emoji: '💑', bg: 'linear-gradient(135deg,#fce7f3,#ec4899)', image: '/couples/co-ords.png'     },
    { label: 'Matching\nT-Shirts', emoji: '👕', bg: 'linear-gradient(135deg,#dbeafe,#2563eb)', image: '/couples/tshirts.png'     },
    { label: 'Linen Sets',         emoji: '🌾', bg: 'linear-gradient(135deg,#fdf6ec,#b45309)', image: '/couples/linen sets.png'  },
    { label: 'Ethnic\nWear',       emoji: '🌺', bg: 'linear-gradient(135deg,#fdf4ff,#c026d3)', image: '/couples/ethnic wear.png' },
    { label: 'Denim\nDuo',         emoji: '👖', bg: 'linear-gradient(135deg,#e0e7ff,#4338ca)', image: '/couples/denim duo.png'   },
    { label: 'Party\nWear',        emoji: '🎉', bg: 'linear-gradient(135deg,#fff1f2,#e11d48)', image: '/couples/party wear.png'  },
  ],
};

/* ─── Sidebar avatar ─── */
function GenderAvatar({ gender, active, onClick }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <button
      className={`gcv-sidebar-item ${active ? 'active' : ''}`}
      onClick={onClick}
      aria-label={gender.id}
    >
      <div
        className="gcv-avatar"
        style={{ background: gender.bg, borderColor: active ? '#b5518b' : 'transparent' }}
      >
        {/* Emoji always shows as base layer */}
        <span className="gcv-avatar-emoji">{gender.emoji}</span>
        {/* Image fades in on top when loaded */}
        {!imgFailed && (
          <img
            src={gender.image}
            alt={gender.id}
            className="gcv-avatar-img"
            style={{ opacity: imgLoaded ? 1 : 0 }}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgFailed(true)}
          />
        )}
      </div>
      <span className="gcv-sidebar-label">{gender.label}</span>
    </button>
  );
}

/* ─── Sub-category card ─── */
/* Gradient + emoji always visible. If image path given, image overlays on load. */
function SubCatCard({ item, onClick }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);
  const hasImage = item.image && !imgFailed;

  return (
    <div className="gcv-subcat-card" onClick={onClick}>
      <div className="gcv-subcat-box" style={{ background: item.bg }}>
        {/* Decorative circle — always visible */}
        <div className="gcv-subcat-deco" />

        {/* Emoji — shows when no image or image loading */}
        {(!hasImage || !imgLoaded) && (
          <span className="gcv-subcat-emoji">{item.emoji}</span>
        )}

        {/* Actual product image — fills box, fades in */}
        {hasImage && (
          <img
            src={item.image}
            alt={item.label}
            className="gcv-subcat-img"
            style={{ opacity: imgLoaded ? 1 : 0 }}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgFailed(true)}
          />
        )}

        {/* Dark gradient at bottom for label readability when image shows */}
        {hasImage && imgLoaded && <div className="gcv-subcat-img-overlay" />}
      </div>
      <span className="gcv-subcat-label">{item.label}</span>
    </div>
  );
}

export default function GenderCategoryView({
  initialGender = 'Women',
  onSelectSubCategory,
  onNavigateHome,
  onNavigateCategory,
  onCartOpen,
  onProfileOpen,
}) {
  const [activeGender, setActiveGender] = useState(initialGender);
  const subcats = SUBCATS[activeGender] || [];
  const activeG = GENDERS.find(g => g.id === activeGender);

  return (
    <div className="app-home-screen">
      <div className="app-home-card animate-pop">
        <div className="gcv-root">

          {/* ── Header ── */}
          <div className="gcv-header">
            <div className="gcv-status-bar">
              <span className="gcv-time">9:41</span>
              <div className="gcv-status-icons">
                <Signal size={11} fill="currentColor" stroke="none" />
                <Wifi size={11} />
                <Battery size={13} />
              </div>
            </div>
            <div className="gcv-title-row">
              <div className="gcv-logo-wrap">
                <Shirt size={16} color="#b5518b" />
              </div>
              <span className="gcv-page-title">Top Categories</span>
              <div className="gcv-title-actions">
                <button className="gcv-icon-btn" aria-label="Filter"><SlidersHorizontal size={14} /></button>
                <button className="gcv-icon-btn" aria-label="Search"><Search size={14} /></button>
              </div>
            </div>
          </div>

          {/* ── Body ── */}
          <div className="gcv-body">

            {/* Left sidebar */}
            <nav className="gcv-sidebar hide-scrollbar">
              {GENDERS.map((g) => (
                <GenderAvatar
                  key={g.id}
                  gender={g}
                  active={activeGender === g.id}
                  onClick={() => setActiveGender(g.id)}
                />
              ))}
            </nav>

            {/* Main content */}
            <div className="gcv-main hide-scrollbar">
              {/* Section heading */}
              <div className="gcv-section-head" style={{ borderBottomColor: activeG?.color || '#b5518b' }}>
                <span className="gcv-section-emoji">{activeG?.emoji}</span>
                <h3 className="gcv-section-heading">{activeG?.label}</h3>
              </div>

              {/* 3-column grid */}
              <div className="gcv-subcat-grid">
                {subcats.map((item, i) => (
                  <SubCatCard
                    key={i}
                    item={item}
                    onClick={() => onSelectSubCategory && onSelectSubCategory(activeGender, item.label)}
                  />
                ))}
              </div>

              {/* Decorative bottom banner — fills empty space, never white */}
              <div
                className="gcv-bottom-banner"
                style={{
                  background: `linear-gradient(135deg, ${activeG?.color}22 0%, ${activeG?.color}44 100%)`,
                  borderColor: activeG?.color + '55',
                }}
              >
                <span className="gcv-bottom-banner-emoji">{activeG?.emoji}</span>
                <div className="gcv-bottom-banner-text">
                  <span className="gcv-bottom-banner-title" style={{ color: activeG?.color }}>
                    Explore All {activeG?.label} Styles
                  </span>
                  <span className="gcv-bottom-banner-sub">
                    Premium sustainable fashion for everyone
                  </span>
                </div>
              </div>

              {/* Spacer for nav bar */}
              <div style={{ height: 70, flexShrink: 0 }} />
            </div>

          </div>

          {/* ── Bottom Nav ── */}
          <nav className="app-home-nav-bar">
            <button className="app-home-nav-item" onClick={onNavigateHome} aria-label="Home">
              <Home size={20} />
            </button>
            <button className="app-home-nav-item active" onClick={onNavigateCategory} aria-label="Category">
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
