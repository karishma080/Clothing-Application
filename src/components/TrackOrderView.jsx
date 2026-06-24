import React from 'react';
import { ArrowLeft, Check, Home, Shirt, ShoppingCart, User } from 'lucide-react';

export default function TrackOrderView({ onBack, onHome, onNavigateHome, onNavigateCategory, onNavigateProfile }) {
  const items = [
    { name: 'Silk Saree', price: 1299, qty: 1, image: '/silksaree.png' },
    { name: 'Floral Maxi Dress', price: 899, qty: 1, image: '/maxidress.png' },
    { name: 'Linen Shirt', price: 699, qty: 1, image: '/men.png' }
  ];

  return (
    <div className="app-home-screen bg-white" style={{ fontFamily: 'var(--font-sans)', color: '#1C1C1C' }}>
      <div className="app-home-card flex-col" style={{ backgroundColor: '#fff', position: 'relative' }}>
        
        {/* Header */}
        <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <button onClick={onBack} style={{ position: 'absolute', left: '20px', background: '#F5F5F5', border: 'none', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <ArrowLeft size={18} color="#000" />
          </button>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 8px 0' }}>Track Order</h2>
            <div style={{ backgroundColor: '#AB5A8C', color: '#fff', fontSize: '11px', fontWeight: '600', padding: '4px 16px', borderRadius: '12px' }}>
              Order Id:#12345
            </div>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="hide-scrollbar" style={{ padding: '10px 20px 100px 20px', overflowY: 'auto', flex: 1 }}>
          
          {/* Order Items Summary */}
          <div style={{ backgroundColor: '#F9F9F9', borderRadius: '12px', padding: '16px', marginBottom: '24px' }}>
            {items.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: idx !== items.length - 1 ? '16px' : '0' }}>
                <img src={item.image} alt={item.name} style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: '6px', marginRight: '12px' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '12px', fontWeight: '600' }}>{item.name}</div>
                  <div style={{ fontSize: '10px', color: '#666' }}>Qty:{item.qty}</div>
                </div>
                <div style={{ fontSize: '12px', fontWeight: '600' }}>₹ {item.price}</div>
              </div>
            ))}
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
              <div style={{ fontSize: '10px', fontWeight: '500', color: '#333' }}>Expected Delivery :Apr 5,2026</div>
              <div style={{ backgroundColor: '#AB5A8C', color: '#fff', fontSize: '12px', fontWeight: '600', padding: '4px 12px', borderRadius: '12px' }}>
                ₹ 2,339
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div style={{ paddingLeft: '16px', marginBottom: '24px', position: 'relative' }}>
            {/* Timeline Line */}
            <div style={{ position: 'absolute', left: '26px', top: '20px', bottom: '20px', width: '2px', backgroundColor: '#E0E0E0', zIndex: 0 }}></div>
            
            <div style={{ display: 'flex', marginBottom: '20px', position: 'relative', zIndex: 1 }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', border: '2px solid #AB5A8C', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px', marginTop: '4px' }}>
                <div style={{ width: 14, height: 14, borderRadius: '50%', backgroundColor: '#AB5A8C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Check size={10} color="#fff" strokeWidth={3} />
                </div>
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '600' }}>Order Placed</div>
                <div style={{ fontSize: '10px', color: '#666' }}>Apr 1, 2026, 9.30 AM</div>
              </div>
            </div>

            <div style={{ display: 'flex', marginBottom: '20px', position: 'relative', zIndex: 1 }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', border: '2px solid #AB5A8C', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px', marginTop: '4px' }}>
                <div style={{ width: 14, height: 14, borderRadius: '50%', backgroundColor: '#AB5A8C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Check size={10} color="#fff" strokeWidth={3} />
                </div>
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '600' }}>Order Processed</div>
                <div style={{ fontSize: '10px', color: '#666' }}>Apr 1, 2026, 11.30 AM</div>
              </div>
            </div>

            <div style={{ display: 'flex', marginBottom: '20px', position: 'relative', zIndex: 1 }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', border: '2px solid #AB5A8C', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px', marginTop: '4px' }}>
                <div style={{ width: 14, height: 14, borderRadius: '50%', backgroundColor: '#AB5A8C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Check size={10} color="#fff" strokeWidth={3} />
                </div>
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '600' }}>Out of Delivery</div>
                <div style={{ fontSize: '10px', color: '#666' }}>Today , 10.00 AM</div>
              </div>
            </div>

            <div style={{ display: 'flex', position: 'relative', zIndex: 1 }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', backgroundColor: '#EBE0E8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px', marginTop: '4px' }}>
                <Home size={12} color="#AB5A8C" />
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '600' }}>Delivered</div>
                <div style={{ fontSize: '10px', color: '#666' }}>Estimated Delivery by 2.00 PM</div>
              </div>
            </div>
          </div>

          {/* Delivery Info Box */}
          <div style={{ backgroundColor: '#F5F5F5', borderRadius: '12px', padding: '16px' }}>
            <h4 style={{ fontSize: '13px', fontWeight: '700', marginBottom: '8px', margin: 0 }}>Your order is on the way !</h4>
            <p style={{ fontSize: '10px', color: '#555', marginBottom: '16px', lineHeight: '1.4' }}>
              The delivery agent is about to arrive at your location.<br/>Please prepare to receive your package.
            </p>
            <button style={{ width: '100%', backgroundColor: '#DF3FF2', color: '#fff', border: 'none', borderRadius: '8px', padding: '12px', fontSize: '12px', fontWeight: '600' }}>
              Contact Delivery Agent
            </button>
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
