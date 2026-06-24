import React, { useEffect } from 'react';

export default function GPaySplashView({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000); // splash screen shows for 2 seconds
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="app-home-screen" style={{ backgroundColor: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', position: 'relative' }}>
      
      {/* GPay Logo SVG */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Green Pill */}
          <rect x="52" y="46" width="18" height="40" rx="9" transform="rotate(45 52 46)" fill="#34A853" />
          {/* Blue Pill */}
          <rect x="36" y="26" width="18" height="40" rx="9" transform="rotate(45 36 26)" fill="#4285F4" />
          {/* Yellow Pill */}
          <rect x="52" y="24" width="18" height="40" rx="9" transform="rotate(-45 52 24)" fill="#FBBC04" />
          {/* Red Pill */}
          <rect x="68" y="40" width="18" height="30" rx="9" transform="rotate(-45 68 40)" fill="#EA4335" />
        </svg>
      </div>

      {/* Google Text */}
      <div style={{ position: 'absolute', bottom: '40px', color: '#fff', fontSize: '14px', fontWeight: '500', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: '16px', fontWeight: '600', letterSpacing: '-0.5px' }}>Google</span>
      </div>
      
    </div>
  );
}
