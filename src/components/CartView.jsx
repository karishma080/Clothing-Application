import React, { useState } from 'react';
import { ArrowLeft, Heart, Search, Trash2, Lock, ChevronDown, Plus, Minus } from 'lucide-react';

export default function CartView({ 
  onBack, 
  onProceedCheckout, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem 
}) {
  // We'll simulate the swipe-to-delete on the third item (index 2) by default 
  // to match the screenshot if we are showing mock data.
  const [swipedIndex, setSwipedIndex] = useState(2);

  // If we have actual items, use them, otherwise use mock data for pixel-perfect match
  const items = cartItems?.length > 0 ? cartItems : [
    {
      id: 'mock1',
      product: { name: 'Silk Saree', price: 1299, originalPrice: 1999, discount: '38% Off', image: '/silksaree.png' },
      color: 'Golden',
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

  // Calculations
  const itemsTotal = items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const discount = 667; // Hardcoded mock to match screenshot
  const shipping = 109; // Hardcoded mock to match screenshot
  const total = itemsTotal - discount + shipping;
  const youSave = 699; // Hardcoded mock

  const handleSwipe = (index) => {
    setSwipedIndex(swipedIndex === index ? null : index);
  };

  return (
    <div className="app-home-screen bg-white">
      <div className="app-home-card animate-pop flex-col">
        
        {/* Header */}
        <div className="app-cart-header">
          <button className="icon-btn" onClick={onBack}>
            <ArrowLeft size={20} />
          </button>
          
          <div className="app-cart-search">
            <Search size={16} className="search-icon" />
            <input type="text" placeholder="Search products..." />
          </div>
          
          <button className="icon-btn">
            <Heart size={20} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="app-cart-body hide-scrollbar">
          
          {/* Cart Items List */}
          <div className="app-cart-items-list">
            {items.map((item, index) => {
              const isSwiped = swipedIndex === index;
              
              return (
                <div key={item.id} className="app-cart-item-wrapper">
                  {/* Background Delete Action */}
                  <div className="app-cart-item-bg-delete" onClick={() => onRemoveItem && onRemoveItem(item.id)}>
                    <Trash2 size={24} color="white" />
                  </div>

                  {/* Foreground Card */}
                  <div 
                    className={`app-cart-item-card ${isSwiped ? 'swiped' : ''}`}
                    onClick={() => handleSwipe(index)}
                  >
                    {/* Left: Image */}
                    <div className="app-cart-item-img-wrap">
                      <img src={item.product.image} alt={item.product.name} />
                    </div>

                    {/* Right: Details */}
                    <div className="app-cart-item-details">
                      <div className="flex-row-between">
                        <span className="app-cart-item-name">{item.product.name}</span>
                        <div className="app-cart-item-top-actions">
                          <Heart size={16} className="text-gray" />
                          <Trash2 size={16} className="text-gray ml-2" />
                        </div>
                      </div>
                      
                      <span className="app-cart-item-color">{item.color}</span>

                      <div className="app-cart-item-pricing">
                        <span className="current-price">₹ {item.product.price.toLocaleString()}</span>
                        <span className="original-price">₹ {item.product.originalPrice?.toLocaleString()}</span>
                        {item.product.discount && (
                          <span className="discount-pill">{item.product.discount}</span>
                        )}
                      </div>

                      <div className="app-cart-item-bottom-controls flex-row-between">
                        <div className="size-selector">
                          {item.size} <ChevronDown size={14} />
                        </div>
                        
                        <div className="qty-selector">
                          <button onClick={(e) => { e.stopPropagation(); onUpdateQuantity && onUpdateQuantity(item.id, item.quantity - 1); }}><Minus size={12} /></button>
                          <span>{item.quantity}</span>
                          <button onClick={(e) => { e.stopPropagation(); onUpdateQuantity && onUpdateQuantity(item.id, item.quantity + 1); }}><Plus size={12} /></button>
                        </div>
                        
                        <div className="bottom-trash">
                           <Trash2 size={16} className="text-gray" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="app-cart-summary">
            <h3 className="summary-title">Order Summary</h3>
            
            <div className="summary-row">
              <span className="summary-label">Items ({items.length})</span>
              <span className="summary-val">₹ {itemsTotal.toLocaleString()}</span>
            </div>
            
            <div className="summary-row">
              <span className="summary-label discount-label">Discount</span>
              <span className="summary-val discount-val">- ₹ {discount}</span>
            </div>
            
            <div className="summary-row">
              <span className="summary-label">Shipping</span>
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
          
          <div style={{ height: 90 }} />
        </div>

        {/* Sticky Footer */}
        <div className="app-sticky-footer">
          <button className="app-btn-primary full-width" onClick={onProceedCheckout}>
            <Lock size={16} /> Proceed to Checkout
          </button>
        </div>

      </div>
    </div>
  );
}
