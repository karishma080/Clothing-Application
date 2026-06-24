import React from 'react';
import { ArrowLeft, MapPin, ShieldCheck, Lock } from 'lucide-react';

export default function OrderReviewView({ 
  onBack, 
  onPlaceOrder, 
  onEditCart, 
  cartItems 
}) {
  // If we have actual items, use them, otherwise use mock data for pixel-perfect match
  const items = cartItems?.length > 0 ? cartItems : [
    {
      id: 'mock1',
      product: { name: 'Silk Saree', price: 1299, originalPrice: 1999, discount: '38% Off', image: '/silksaree.png' },
      color: 'Purple',
      size: 'M',
      quantity: 1
    },
    {
      id: 'mock2',
      product: { name: 'Floral Maxi Dress', price: 899, originalPrice: 1299, discount: '31% Off', image: '/maxidress.png' },
      color: 'Pink',
      size: 'M',
      quantity: 1
    },
    {
      id: 'mock3',
      product: { name: 'Linen Shirt', price: 699, originalPrice: 999, discount: '30% Off', image: '/men/linen vests.png' },
      color: 'White',
      size: 'M',
      quantity: 1
    }
  ];

  // Calculations (mocked to match screenshot)
  const itemsTotal = 2897; 
  const discount = 667; 
  const shipping = 999; 
  const total = 2339;
  const youSave = 699;

  return (
    <div className="app-home-screen bg-white">
      <div className="app-home-card animate-pop flex-col">
        
        {/* Header */}
        <div className="app-order-review-header">
          <button className="icon-btn circle-bg" onClick={onBack}>
            <ArrowLeft size={18} />
          </button>
          <h2 className="header-title">Order Review</h2>
          <div style={{ width: 36 }}></div> {/* Spacer for centering */}
        </div>

        {/* Scrollable Body */}
        <div className="app-order-review-body hide-scrollbar">
          
          {/* Delivery Address */}
          <div className="section-header">
            <h3>Delivery Address</h3>
            <button className="text-link">Change</button>
          </div>
          
          <div className="address-card">
            <MapPin className="pin-icon" size={16} fill="currentColor" />
            <div className="address-details">
              <span className="name">Karishh</span>
              <span className="address-line">193 A,xyz street,</span>
              <span className="address-line">Namakkal,637001,India</span>
              <span className="phone">+91 8888888899</span>
            </div>
          </div>

          {/* Order Items */}
          <div className="section-header mt-4">
            <h3>Order Items({items.length})</h3>
            <button className="text-link" onClick={onEditCart}>Edit Cart</button>
          </div>

          <div className="order-items-list">
            {items.map((item) => (
              <div key={item.id} className="order-item-compact">
                <div className="img-wrap">
                  <img src={item.product.image} alt={item.product.name} />
                </div>
                
                <div className="item-info">
                  <span className="item-name">{item.product.name}</span>
                  <span className="item-meta">{item.color} . {item.size}</span>
                  <span className="item-qty">Qty:{item.quantity}</span>
                </div>
                
                <div className="item-pricing">
                  <span className="current-price">₹ {item.product.price.toLocaleString()}</span>
                  <div className="original-price-row">
                    <span className="original-price">₹ {item.product.originalPrice?.toLocaleString()}</span>
                    {item.product.discount && (
                      <span className="discount-pill">{item.product.discount}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Price Details */}
          <div className="app-cart-summary clean-bg mt-4">
            <h3 className="summary-title">Price Details</h3>
            
            <div className="summary-row">
              <span className="summary-label">Items Total</span>
              <span className="summary-val">₹ {itemsTotal.toLocaleString()}</span>
            </div>
            
            <div className="summary-row">
              <span className="summary-label discount-label">Discount</span>
              <span className="summary-val discount-val">- ₹ {discount}</span>
            </div>
            
            <div className="summary-row">
              <span className="summary-label">Shipping Fee</span>
              <span className="summary-val">₹ {shipping}</span>
            </div>

            <div className="summary-divider" />
            
            <div className="summary-row total-row">
              <span className="summary-label">Total</span>
              <span className="summary-val">₹ {total.toLocaleString()}</span>
            </div>
            
            <div className="summary-save-text">
              You save ₹ {youSave} on this order
            </div>
          </div>
          
          <div style={{ height: 110 }} />
        </div>

        {/* Sticky Footer */}
        <div className="app-sticky-footer order-footer">
          <button className="app-btn-primary full-width" onClick={onPlaceOrder}>
            <Lock size={16} /> Place an Order
          </button>
          <div className="secure-payment-note">
            <ShieldCheck size={14} /> Secure Payment
          </div>
        </div>

      </div>
    </div>
  );
}
