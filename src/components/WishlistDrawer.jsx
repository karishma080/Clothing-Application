import React from 'react';
import { X, Heart, ShoppingBag } from 'lucide-react';

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlistItems,
  onRemoveWishlist,
  onProductClick,
  onAddToCart
}) {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`drawer-backdrop ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <h2 className="drawer-title">Wishlist ({wishlistItems.length})</h2>
          <button className="drawer-close-btn" onClick={onClose} aria-label="Close wishlist">
            <X size={22} />
          </button>
        </div>

        <div className="drawer-body">
          {wishlistItems.length === 0 ? (
            <div className="drawer-empty-state">
              <Heart size={48} strokeWidth={1} />
              <h3>Your wishlist is empty</h3>
              <p>Save items you like to view or purchase them later.</p>
              <button className="drawer-shop-now-btn" onClick={onClose}>
                Explore Garments
              </button>
            </div>
          ) : (
            <ul className="drawer-items-list">
              {wishlistItems.map((product) => (
                <li key={product.id} className="drawer-item">
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    className="drawer-item-img"
                    onClick={() => {
                      onProductClick(product.id);
                      onClose();
                    }}
                  />
                  <div className="drawer-item-info">
                    <div>
                      <h4 
                        className="drawer-item-title"
                        onClick={() => {
                          onProductClick(product.id);
                          onClose();
                        }}
                      >
                        {product.name}
                      </h4>
                      <div className="drawer-item-meta">{product.category}</div>
                    </div>
                    
                    <div className="drawer-item-controls" style={{ marginTop: 'auto' }}>
                      <button 
                        className="drawer-item-remove"
                        onClick={() => onRemoveWishlist(product.id)}
                        aria-label="Remove from wishlist"
                      >
                        Remove
                      </button>

                      <button
                        className="drawer-shop-now-btn"
                        style={{ padding: '6px 12px', fontSize: '11px' }}
                        onClick={() => {
                          onAddToCart(product);
                          onRemoveWishlist(product.id);
                        }}
                      >
                        Add to Bag
                      </button>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="drawer-item-price">${product.price}</div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
