import React from 'react';
import { Check, ShoppingBag, Home, Shirt, ShoppingCart, User } from 'lucide-react';

export default function OrderSuccessfulView({ onTrackOrder, onContinueShopping, onNavigateHome, onNavigateCategory, onNavigateProfile }) {
  return (
    <div className="app-home-screen bg-white" style={{ fontFamily: 'var(--font-sans)', color: '#1C1C1C' }}>
      <div className="app-home-card flex-col" style={{ backgroundColor: '#fff', position: 'relative' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, padding: '20px' }}>
          
          <div style={{ width: 100, height: 100, borderRadius: '50%', backgroundColor: '#D9D9D9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
            <Check size={50} color="#218A1D" strokeWidth={5} />
          </div>

          <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>Order Successful !</h2>
          <p style={{ fontSize: '11px', color: '#666', marginBottom: '40px' }}>Your order has been placed successfully</p>

          <div style={{ width: '100%', maxWidth: '300px' }}>
            <div style={{ backgroundColor: '#D9D9D9', padding: '14px', borderRadius: '8px', textAlign: 'center', fontSize: '13px', fontWeight: '500', marginBottom: '16px', color: '#333' }}>
              Order ID : #12345
            </div>

            <button 
              onClick={onTrackOrder}
              style={{ width: '100%', backgroundColor: '#AB5A8C', color: '#fff', border: 'none', borderRadius: '8px', padding: '14px', fontSize: '14px', fontWeight: '600', marginBottom: '40px' }}
            >
              Track Order
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }} onClick={onContinueShopping}>
            <ShoppingBag size={32} color="#AB5A8C" style={{ marginBottom: '8px' }} />
            <span style={{ fontSize: '12px', fontWeight: '500', color: '#333' }}>Continue Shopping</span>
          </div>

        </div>

        {/* Bottom Navigation */}
        <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20, backgroundColor: '#AB5A8C', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 24px', zIndex: 10 }}>
          <Home size={22} color="#fff" strokeWidth={2.5} style={{ opacity: 0.8, cursor: 'pointer' }} onClick={onNavigateHome} />
          <Shirt size={22} color="#fff" strokeWidth={2.5} style={{ opacity: 0.8, cursor: 'pointer' }} onClick={onNavigateCategory} />
          
          <div style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '6px 12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ShoppingCart size={18} color="#000" strokeWidth={2.5} />
            <span style={{ fontSize: '12px', fontWeight: '600', color: '#000' }}>My Cart</span>
          </div>
          
          <User size={22} color="#fff" strokeWidth={2.5} style={{ opacity: 0.8, cursor: 'pointer' }} onClick={onNavigateProfile} />
        </div>

      </div>
    </div>
  );
}
