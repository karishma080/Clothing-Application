import React, { useState } from 'react';
import { ArrowLeft, Lock } from 'lucide-react';

export default function PaymentMethodView({ onBack, onProceedUpi }) {
  const [selectedMethod, setSelectedMethod] = useState('UPI');

  const handleProceed = () => {
    if (selectedMethod === 'UPI') {
      onProceedUpi();
    } else {
      alert(`Proceeding with ${selectedMethod}`);
    }
  };

  return (
    <div className="app-home-screen bg-white" style={{ fontFamily: 'var(--font-sans)', color: '#1C1C1C' }}>
      <div className="app-home-card flex-col" style={{ backgroundColor: '#fff' }}>
        
        {/* Header */}
        <div className="app-order-review-header" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <button className="icon-btn circle-bg" onClick={onBack} style={{ position: 'absolute', left: '20px', background: '#F5F5F5', border: 'none', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ArrowLeft size={18} color="#000" />
          </button>
          <h2 className="header-title" style={{ fontSize: '16px', fontWeight: '600', margin: 0 }}>Checkout</h2>
        </div>

        {/* Scrollable Body */}
        <div className="app-order-review-body hide-scrollbar" style={{ padding: '0 20px', overflowY: 'auto', flex: 1 }}>
          
          <h3 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '24px', marginTop: '16px' }}>Payment Method</h3>
          
          {/* UPI */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', cursor: 'pointer' }} onClick={() => setSelectedMethod('UPI')}>
            <div style={{ width: 16, height: 16, borderRadius: '50%', border: '1px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '12px' }}>
              {selectedMethod === 'UPI' && <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#000' }} />}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: '500' }}>UPI</div>
              <div style={{ fontSize: '10px', color: '#9E9E9E' }}>Pay Using any UPI app</div>
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="UPI" style={{ height: '16px' }} />
            </div>
          </div>
          <div style={{ height: 1, backgroundColor: '#F0F0F0', margin: '0 0 16px 28px' }} />

          {/* Credit/Debit Card */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: selectedMethod === 'Card' ? '16px' : '16px', cursor: 'pointer' }} onClick={() => setSelectedMethod('Card')}>
            <div style={{ width: 16, height: 16, borderRadius: '50%', border: '1px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '12px' }}>
              {selectedMethod === 'Card' && <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#000' }} />}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: '500' }}>Credit/Debit Card</div>
              <div style={{ fontSize: '10px', color: '#9E9E9E' }}>Visa, Mastercard, Rupay</div>
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" style={{ height: '10px' }} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" style={{ height: '14px' }} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.png" alt="Rupay" style={{ height: '12px' }} />
            </div>
          </div>

          {/* Card Form Expanded */}
          <div style={{ paddingLeft: '28px', marginBottom: '16px' }}>
            <input 
              type="text" 
              placeholder="1234 5678 9012 1341" 
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: 'none', backgroundColor: '#F2F2F2', fontSize: '12px', marginBottom: '16px', fontFamily: 'monospace' }} 
              readOnly
            />
            
            <div style={{ fontSize: '11px', fontWeight: '500', marginBottom: '8px' }}>Expiry Date</div>
            <input 
              type="text" 
              placeholder="MM/YY" 
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: 'none', backgroundColor: '#F2F2F2', fontSize: '12px', marginBottom: '16px' }} 
              readOnly
            />

            <div style={{ fontSize: '11px', fontWeight: '500', marginBottom: '8px' }}>Card Holder Name</div>
            <input 
              type="text" 
              placeholder="Karishh" 
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: 'none', backgroundColor: '#F2F2F2', fontSize: '12px', marginBottom: '16px' }} 
              readOnly
            />
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9E9E9E', fontSize: '10px' }}>
              <Lock size={10} style={{ marginRight: '4px' }} /> Your card details are secure with us.
            </div>
          </div>
          <div style={{ height: 1, backgroundColor: '#F0F0F0', margin: '0 0 16px 28px' }} />

          {/* Net Banking */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', cursor: 'pointer' }} onClick={() => setSelectedMethod('NetBanking')}>
            <div style={{ width: 16, height: 16, borderRadius: '50%', border: '1px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '12px' }}>
              {selectedMethod === 'NetBanking' && <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#000' }} />}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: '500' }}>Net Banking</div>
              <div style={{ fontSize: '10px', color: '#9E9E9E' }}>All major banks supported</div>
            </div>
            <div style={{ color: '#5C5CA1' }}>🏦</div>
          </div>
          <div style={{ height: 1, backgroundColor: '#F0F0F0', margin: '0 0 16px 28px' }} />

          {/* Cash on delivery */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', cursor: 'pointer' }} onClick={() => setSelectedMethod('COD')}>
            <div style={{ width: 16, height: 16, borderRadius: '50%', border: '1px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '12px' }}>
              {selectedMethod === 'COD' && <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#000' }} />}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: '500' }}>Cash on delivery</div>
              <div style={{ fontSize: '10px', color: '#9E9E9E' }}>Pay when you receive</div>
            </div>
            <div style={{ color: '#4CAF50' }}>💵</div>
          </div>

          <div style={{ height: 100 }}></div>
        </div>

        {/* Sticky Footer */}
        <div className="app-sticky-footer order-footer" style={{ padding: '20px', background: '#fff', borderTop: 'none', boxShadow: '0 -4px 20px rgba(0,0,0,0.05)' }}>
          <button 
            className="app-btn-primary full-width" 
            onClick={handleProceed}
            style={{ backgroundColor: '#DF3FF2', color: '#fff', borderRadius: '8px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '600', border: 'none', width: '100%' }}
          >
            <Lock size={16} style={{ marginRight: '8px' }} /> Proceed to Payment
          </button>
        </div>

      </div>
    </div>
  );
}
