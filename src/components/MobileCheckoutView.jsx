import React, { useState } from 'react';
import { ArrowLeft, User, Mail, Phone, Plus, Lock } from 'lucide-react';

export default function MobileCheckoutView({ onBack, onProceed }) {
  const [selectedAddress, setSelectedAddress] = useState('Home');

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
          
          <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px', marginTop: '16px' }}>Contact Information</h3>
          
          <div style={{ backgroundColor: '#FCF8FC', borderRadius: '12px', padding: '16px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <User size={16} color="#B566A6" style={{ marginRight: '12px' }} />
              <div>
                <div style={{ fontSize: '10px', color: '#B566A6', marginBottom: '2px' }}>Full Name</div>
                <div style={{ fontSize: '13px', fontWeight: '500' }}>Karishh</div>
              </div>
            </div>
            <div style={{ height: 1, backgroundColor: '#EAD3E8', margin: '0 0 16px 28px' }} />
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <Mail size={16} color="#B566A6" style={{ marginRight: '12px' }} />
              <div>
                <div style={{ fontSize: '10px', color: '#B566A6', marginBottom: '2px' }}>E-mail</div>
                <div style={{ fontSize: '13px', fontWeight: '500' }}>karish546@gmail.com</div>
              </div>
            </div>
            <div style={{ height: 1, backgroundColor: '#EAD3E8', margin: '0 0 16px 28px' }} />
            
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Phone size={16} color="#B566A6" style={{ marginRight: '12px' }} />
              <div>
                <div style={{ fontSize: '10px', color: '#B566A6', marginBottom: '2px' }}>Phone Number</div>
                <div style={{ fontSize: '13px', fontWeight: '500' }}>+91 8888888899</div>
              </div>
            </div>
          </div>

          <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px' }}>Shipping Address</h3>
          
          <div style={{ backgroundColor: '#FCF8FC', borderRadius: '12px', padding: '16px', marginBottom: '24px' }}>
            {/* Home */}
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px', cursor: 'pointer', backgroundColor: selectedAddress === 'Home' ? '#EAE0E9' : 'transparent', padding: '8px', borderRadius: '8px', marginLeft: '-8px', marginRight: '-8px' }} onClick={() => setSelectedAddress('Home')}>
              <div style={{ width: 16, height: 16, borderRadius: '50%', border: '1px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '12px', marginTop: '2px' }}>
                {selectedAddress === 'Home' && <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#000' }} />}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '500', marginRight: '8px' }}>Home</span>
                  <span style={{ fontSize: '9px', backgroundColor: '#CD71CA', color: '#fff', padding: '2px 8px', borderRadius: '10px' }}>Primary</span>
                </div>
                <div style={{ fontSize: '11px', color: '#7E7E7E', lineHeight: '1.4' }}>193 A,xyz street,<br/>Namakkal,637001,India</div>
              </div>
            </div>
            <div style={{ height: 1, backgroundColor: '#EAD3E8', margin: '0 0 16px 28px' }} />
            
            {/* Work */}
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px', cursor: 'pointer', backgroundColor: selectedAddress === 'Work' ? '#EAE0E9' : 'transparent', padding: '8px', borderRadius: '8px', marginLeft: '-8px', marginRight: '-8px' }} onClick={() => setSelectedAddress('Work')}>
              <div style={{ width: 16, height: 16, borderRadius: '50%', border: '1px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '12px', marginTop: '2px' }}>
                {selectedAddress === 'Work' && <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#000' }} />}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '13px', fontWeight: '500', marginBottom: '4px' }}>Work</div>
                <div style={{ fontSize: '11px', color: '#7E7E7E', lineHeight: '1.4' }}>456, Residency Road,<br/>Bangalore,560001,India</div>
              </div>
            </div>
            <div style={{ height: 1, backgroundColor: '#EAD3E8', margin: '0 0 16px 28px' }} />
            
            {/* Other */}
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px', cursor: 'pointer', backgroundColor: selectedAddress === 'Other' ? '#EAE0E9' : 'transparent', padding: '8px', borderRadius: '8px', marginLeft: '-8px', marginRight: '-8px' }} onClick={() => setSelectedAddress('Other')}>
              <div style={{ width: 16, height: 16, borderRadius: '50%', border: '1px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '12px', marginTop: '2px' }}>
                {selectedAddress === 'Other' && <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#000' }} />}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '13px', fontWeight: '500', marginBottom: '4px' }}>Other</div>
                <div style={{ fontSize: '11px', color: '#7E7E7E' }}>Add new address</div>
              </div>
              <Plus size={16} color="#000" style={{ marginTop: '2px' }} />
            </div>
            
            {/* Add New Address button */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
              <button style={{ color: '#CD71CA', fontSize: '12px', fontWeight: '600', display: 'flex', alignItems: 'center', background: 'none', border: 'none' }}>
                <Plus size={14} style={{ marginRight: '4px' }} /> Add New Address
              </button>
            </div>
          </div>
          
          <div style={{ height: 100 }}></div>
        </div>

        {/* Sticky Footer */}
        <div className="app-sticky-footer order-footer" style={{ padding: '20px', background: '#fff', borderTop: 'none', boxShadow: '0 -4px 20px rgba(0,0,0,0.05)' }}>
          <button 
            className="app-btn-primary full-width" 
            onClick={onProceed}
            style={{ backgroundColor: '#DF3FF2', color: '#fff', borderRadius: '8px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '600', border: 'none', width: '100%' }}
          >
            <Lock size={16} style={{ marginRight: '8px' }} /> Proceed to Payment
          </button>
        </div>

      </div>
    </div>
  );
}
