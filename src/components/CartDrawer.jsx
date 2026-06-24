import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';

const FREE_SHIPPING_THRESHOLD = 300;

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  onProductClick
}) {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discount = subtotal * (discountPercent / 100);
  const total = subtotal - discount;
  const shippingLeft = FREE_SHIPPING_THRESHOLD - subtotal;
  const shippingProgress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);

  const handleApplyPromo = () => {
    setPromoError('');
    setPromoSuccess('');
    if (promoCode.trim().toUpperCase() === 'ELVORA10') {
      setDiscountPercent(10);
      setPromoSuccess('10% discount applied successfully!');
    } else if (promoCode.trim() === '') {
      setPromoError('Please enter a code.');
    } else {
      setPromoError('Invalid promo code. Try "ELVORA10".');
    }
  };

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
          <h2 className="drawer-title">Shopping Bag ({cartItems.length})</h2>
          <button className="drawer-close-btn" onClick={onClose} aria-label="Close cart">
            <X size={22} />
          </button>
        </div>

        <div className="drawer-body">
          {cartItems.length === 0 ? (
            <div className="drawer-empty-state">
              <ShoppingBag size={48} strokeWidth={1} />
              <h3>Your bag is empty</h3>
              <p>Items you add to your shopping bag will appear here.</p>
              <button className="drawer-shop-now-btn" onClick={onClose}>
                Shop New Arrivals
              </button>
            </div>
          ) : (
            <>
              {/* Shipping Progress Gauge */}
              <div className="shipping-bar-container">
                <div className="shipping-bar-text">
                  {shippingLeft > 0 ? (
                    <>You are <span>${shippingLeft.toFixed(2)}</span> away from free shipping.</>
                  ) : (
                    <span>Congratulations! You qualify for free shipping.</span>
                  )}
                </div>
                <div className="shipping-bar-bg">
                  <div 
                    className="shipping-bar-fill" 
                    style={{ width: `${shippingProgress}%` }}
                  />
                </div>
              </div>

              {/* Items List */}
              <ul className="drawer-items-list">
                {cartItems.map((item, index) => (
                  <li key={`${item.product.id}-${item.size}-${item.color.name}-${index}`} className="drawer-item">
                    <img 
                      src={item.product.images[0]} 
                      alt={item.product.name} 
                      className="drawer-item-img"
                      onClick={() => {
                        onProductClick(item.product.id);
                        onClose();
                      }}
                    />
                    <div className="drawer-item-info">
                      <div>
                        <h4 
                          className="drawer-item-title"
                          onClick={() => {
                            onProductClick(item.product.id);
                            onClose();
                          }}
                        >
                          {item.product.name}
                        </h4>
                        <div className="drawer-item-meta">
                          Size: <span>{item.size}</span> | Color: <span style={{ textTransform: 'capitalize' }}>{item.color.name}</span>
                        </div>
                      </div>
                      
                      <div className="drawer-item-controls">
                        <div className="quantity-adjuster">
                          <button 
                            className="quantity-btn"
                            onClick={() => onUpdateQuantity(item.product.id, item.size, item.color.name, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="quantity-value">{item.quantity}</span>
                          <button 
                            className="quantity-btn"
                            onClick={() => onUpdateQuantity(item.product.id, item.size, item.color.name, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        <button 
                          className="drawer-item-remove"
                          onClick={() => onRemoveItem(item.product.id, item.size, item.color.name)}
                          aria-label="Remove item"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div className="drawer-item-price">${(item.product.price * item.quantity).toFixed(2)}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="drawer-footer">
            {/* Promo Code Input */}
            <div className="promo-code-box">
              <input 
                type="text" 
                placeholder="Enter promo code (e.g. ELVORA10)" 
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button className="promo-code-btn" onClick={handleApplyPromo}>
                Apply
              </button>
            </div>
            {promoSuccess && <div className="promo-feedback success">{promoSuccess}</div>}
            {promoError && <div className="promo-feedback error">{promoError}</div>}

            {/* Calculations */}
            <div className="price-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="price-row">
              <span>Shipping</span>
              <span>{subtotal >= FREE_SHIPPING_THRESHOLD ? 'FREE' : '$15.00'}</span>
            </div>
            {discountPercent > 0 && (
              <div className="price-row" style={{ color: '#2E7D32' }}>
                <span>Discount ({discountPercent}%)</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
            )}
            <div className="price-row total">
              <span>Total</span>
              <span>
                ${(total + (subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 15)).toFixed(2)}
              </span>
            </div>

            <button className="checkout-btn" onClick={onCheckout}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
