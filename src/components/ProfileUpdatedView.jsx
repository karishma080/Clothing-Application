import React from 'react';
import { Check } from 'lucide-react';

export default function ProfileUpdatedView({ onBackToProfile }) {
  return (
    <div className="app-home-screen bg-white" style={{ fontFamily: 'var(--font-sans)', color: '#1C1C1C' }}>
      <div className="app-home-card flex-col" style={{ backgroundColor: '#fff', position: 'relative' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, padding: '20px' }}>
          
          <div style={{ width: 100, height: 100, borderRadius: '50%', backgroundColor: '#D9D9D9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px' }}>
            <Check size={50} color="#218A1D" strokeWidth={5} />
          </div>

          <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', textAlign: 'center', lineHeight: '1.3' }}>Profile Updated<br/>Successfully !</h2>
          <p style={{ fontSize: '10px', color: '#666', marginBottom: '40px', textAlign: 'center', lineHeight: '1.4' }}>Your profile has been successfully<br/>updated.</p>

          <div style={{ width: '100%', maxWidth: '300px' }}>
            <button 
              onClick={onBackToProfile}
              style={{ width: '100%', backgroundColor: '#DF3FF2', color: '#fff', border: 'none', borderRadius: '8px', padding: '14px', fontSize: '14px', fontWeight: '600' }}
            >
              Back to Profile
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
