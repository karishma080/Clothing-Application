import React, { useState } from 'react';
import { ArrowLeft, Camera, PenLine, ChevronDown, Lock, Home, Shirt, ShoppingCart, User } from 'lucide-react';

export default function EditProfileView({ onBack, onSave, onNavigateHome, onNavigateCart, onNavigateCategory }) {
  const [formData, setFormData] = useState({
    name: 'Karishh',
    email: 'karish546@gmail.com',
    phone: '8888888899',
    dob: '05 Apr 2006',
    gender: 'Select Gender'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="app-home-screen bg-white" style={{ fontFamily: 'var(--font-sans)', color: '#1C1C1C' }}>
      <div className="app-home-card flex-col" style={{ backgroundColor: '#fff', position: 'relative' }}>
        
        {/* Header */}
        <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <button onClick={onBack} style={{ position: 'absolute', left: '20px', background: '#F5F5F5', border: 'none', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <ArrowLeft size={18} color="#000" />
          </button>
          <h2 style={{ fontSize: '16px', fontWeight: '700', margin: 0 }}>Edit Profile</h2>
        </div>

        {/* Scrollable Body */}
        <div className="hide-scrollbar" style={{ padding: '10px 20px 100px 20px', overflowY: 'auto', flex: 1 }}>
          
          {/* Avatar Section */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px', position: 'relative' }}>
            <div style={{ position: 'absolute', right: 0, top: 0, display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
              <span style={{ fontSize: '12px', fontWeight: '600', color: '#555' }}>Edit</span>
              <PenLine size={12} color="#555" />
            </div>

            <div style={{ position: 'relative', marginTop: '10px' }}>
              <img 
                src={formData.gender === 'Male' ? '/profilem.png' : formData.gender === 'Others' ? '/profileo.png' : '/profilew.png'} 
                alt="Profile" 
                style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', border: '2px solid #ccc' }}
                onError={(e) => { e.target.src = 'https://i.pravatar.cc/150?img=5'; }}
              />
              <div style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: '#000', width: 24, height: 24, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff' }}>
                <Camera size={12} color="#fff" />
              </div>
            </div>
            <div style={{ fontSize: '16px', fontWeight: '600', marginTop: '12px' }}>Karishh</div>
          </div>

          {/* Form */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '600', marginBottom: '8px' }}>Full Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #E0E0E0', backgroundColor: '#EBEBEB', fontSize: '12px', fontWeight: '500', color: '#555' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '600', marginBottom: '8px' }}>E-mail Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #E0E0E0', backgroundColor: '#EBEBEB', fontSize: '12px', fontWeight: '500', color: '#555' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '600', marginBottom: '8px' }}>Phone Number</label>
              <div style={{ display: 'flex', alignItems: 'center', borderRadius: '8px', border: '1px solid #E0E0E0', backgroundColor: '#EBEBEB', padding: '0 16px', height: '42px' }}>
                <span style={{ fontSize: '14px', marginRight: '6px' }}>🇮🇳</span>
                <span style={{ fontSize: '12px', fontWeight: '600', color: '#555', marginRight: '8px' }}>+91</span>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{ flex: 1, border: 'none', backgroundColor: 'transparent', fontSize: '12px', fontWeight: '500', color: '#555', outline: 'none' }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '600', marginBottom: '8px' }}>Date Of Birth</label>
              <input 
                type="text" 
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #E0E0E0', backgroundColor: '#EBEBEB', fontSize: '12px', fontWeight: '500', color: '#555' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '600', marginBottom: '8px' }}>Gender</label>
              <div style={{ position: 'relative' }}>
                <select 
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #E0E0E0', backgroundColor: '#EBEBEB', fontSize: '12px', fontWeight: '500', color: '#555', appearance: 'none' }}
                >
                  <option value="Select Gender">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
                <ChevronDown size={16} color="#555" style={{ position: 'absolute', right: '16px', top: '13px', pointerEvents: 'none' }} />
              </div>
            </div>

          </div>

          <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center' }}>
            <button 
              onClick={onSave}
              style={{ width: '80%', maxWidth: '250px', backgroundColor: '#DF3FF2', color: '#fff', border: 'none', borderRadius: '12px', padding: '14px', fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            >
              <Lock size={14} /> Save Changes
            </button>
          </div>

        </div>

        {/* Bottom Navigation */}
        <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20, backgroundColor: '#AB5A8C', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 24px', zIndex: 10 }}>
          <Home size={22} color="#fff" strokeWidth={2.5} style={{ opacity: 0.8, cursor: 'pointer' }} onClick={onNavigateHome} />
          <Shirt size={22} color="#fff" strokeWidth={2.5} style={{ opacity: 0.8, cursor: 'pointer' }} onClick={onNavigateCategory} />
          <ShoppingCart size={22} color="#fff" strokeWidth={2.5} style={{ opacity: 0.8, cursor: 'pointer' }} onClick={onNavigateCart} />
          
          <div style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '6px 12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <User size={18} color="#000" strokeWidth={2.5} />
            <span style={{ fontSize: '12px', fontWeight: '600', color: '#000' }}>Profile</span>
          </div>
        </div>

      </div>
    </div>
  );
}
