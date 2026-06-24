import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function OnboardingView({ onNext }) {
  return (
    <div className="onboarding-screen">
      <div className="onboarding-card">
        {/* Left Text Panel */}
        <div className="onboarding-left">
          <div className="onboarding-brand-script">Elvora</div>
          
          <div className="onboarding-text-group">
            <h2 className="onboarding-heading">
              Shop the most modern essentials
            </h2>
            
            <button 
              className="onboarding-arrow-btn" 
              onClick={onNext}
              aria-label="Next slide"
            >
              <ArrowRight size={20} strokeWidth={2} />
            </button>
          </div>
          
          {/* Placeholder bottom spacing for layout balancing */}
          <div style={{ height: '32px' }} />
        </div>

        {/* Right Image Panel */}
        <div className="onboarding-right">
          <img 
            src="/onboarding-model.png" 
            alt="ELVORA Fashion Model" 
            className="onboarding-model-img"
          />
        </div>
      </div>
    </div>
  );
}
