import React from 'react';
import { ChevronRight, MapPin, CreditCard, ShoppingBag, Bell, MessageSquare, HelpCircle, Phone, Power, User, Home, Shirt, ShoppingCart } from 'lucide-react';

export default function ProfileView({ onNavigateHome, onNavigateCart, onNavigateCategory, onEditProfile }) {
  const menuItems = [
    { title: 'Edit Profile', icon: User, onClick: onEditProfile },
    { title: 'Manage Address', icon: MapPin },
    { title: 'Payment Methods', icon: CreditCard },
    { title: 'Order History', icon: ShoppingBag },
    { title: 'Notifications', icon: Bell },
    { title: 'FAQs', icon: MessageSquare },
    { title: 'Help & Support', icon: HelpCircle },
    { title: 'Contact Us', icon: Phone },
  ];

  return (
    <div className="app-home-screen bg-white" style={{ fontFamily: 'var(--font-sans)', color: '#1C1C1C' }}>
      <div className="app-home-card flex-col" style={{ backgroundColor: '#fff', position: 'relative' }}>
        
        {/* Header */}
        <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '700', margin: 0 }}>Profile</h2>
        </div>

        {/* Scrollable Body */}
        <div className="hide-scrollbar" style={{ padding: '0 20px 100px 20px', overflowY: 'auto', flex: 1 }}>
          
          {/* User Info Card */}
          <div style={{ backgroundColor: '#FCF8FC', borderRadius: '16px', padding: '24px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '24px' }}>
            <img 
              src="/profilew.png" 
              alt="Profile" 
              style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', border: '2px solid #ccc', marginBottom: '12px' }}
              onError={(e) => { e.target.src = 'https://i.pravatar.cc/150?img=5'; }}
            />
            <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>Karishh</div>
            <div style={{ fontSize: '12px', color: '#9E9E9E' }}>karish546@gmail.com</div>
          </div>

          {/* Menu Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {menuItems.map((item, idx) => (
              <div key={idx} onClick={item.onClick} style={{ display: 'flex', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #F5F5F5', cursor: 'pointer' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: '#AB5A8C', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px' }}>
                  <item.icon size={16} color="#fff" />
                </div>
                <div style={{ flex: 1, fontSize: '14px', fontWeight: '500' }}>{item.title}</div>
                <ChevronRight size={18} color="#9E9E9E" />
              </div>
            ))}
            
            {/* Logout */}
            <div style={{ display: 'flex', alignItems: 'center', padding: '12px 0', cursor: 'pointer', marginTop: '4px' }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: '#E53935', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px' }}>
                <Power size={16} color="#fff" />
              </div>
              <div style={{ flex: 1, fontSize: '14px', fontWeight: '600', color: '#E53935' }}>Logout</div>
            </div>
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
