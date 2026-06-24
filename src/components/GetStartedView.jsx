import React from 'react';

export default function GetStartedView({ onNext }) {
  return (
    <div className="get-started-screen">
      <div className="get-started-card">
        {/* Top Graphic Banner */}
        <div className="get-started-header-banner">
          {/* Dark border stripe line */}
          <div className="get-started-banner-border" />
          {/* Main pink diagonal shape */}
          <div className="get-started-banner-diagonal" />

          {/* Clothes Hanger SVG Vector Illustration */}
          <div className="get-started-hangers">
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 400 320" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ position: 'absolute', top: 0, left: 0, zIndex: 3 }}
            >
              {/* Main Rod */}
              <line x1="0" y1="68" x2="400" y2="190" stroke="#1c1c1c" strokeWidth="3" />

              {/* Sparkles / Magic Stars on White Field (Bottom Left) */}
              <g className="illustrator-sparkles">
                {/* Star 1 */}
                <path d="M 70,230 Q 70,240 80,240 Q 70,240 70,250 Q 70,240 60,240 Q 70,240 70,230 Z" fill="#b5518b" />
                {/* Star 2 */}
                <path d="M 95,255 Q 95,262 102,262 Q 95,262 95,269 Q 95,262 88,262 Q 95,262 95,255 Z" fill="#eedbe6" stroke="#b5518b" strokeWidth="1" />
                {/* Star 3 */}
                <path d="M 62,268 Q 62,273 67,273 Q 62,273 62,278 Q 62,273 57,273 Q 62,273 62,268 Z" fill="#b5518b" />
              </g>

              {/* Sparkles on Diagonal Pink Field */}
              <g opacity="0.6">
                <path d="M 330,80 Q 330,85 335,85 Q 330,85 330,90 Q 330,85 325,85 Q 330,85 330,80 Z" fill="#ffffff" />
                <path d="M 120,40 Q 120,45 125,45 Q 120,45 120,50 Q 120,45 115,45 Q 120,45 120,40 Z" fill="#ffffff" />
              </g>

              {/* HANGER 1: Purple Dress (Left, hanging lower) */}
              <g className="hanger-1" style={{ transformOrigin: '80px 92px' }}>
                {/* Hook */}
                <path d="M 80,92 C 80,72 90,75 86,65 C 83,58 75,62 75,70" stroke="#1c1c1c" strokeWidth="2" fill="none" />
                {/* Hanger Triangle */}
                <path d="M 80,92 L 50,110 L 110,110 Z" stroke="#1c1c1c" strokeWidth="2" fill="none" />
                {/* Purple Dress Body */}
                <path d="M 68,110 
                         C 68,125 60,130 60,145 
                         C 60,165 48,190 48,220 
                         L 112,220 
                         C 112,190 100,165 100,145 
                         C 100,130 92,125 92,110 
                         Z" 
                      fill="#7952B3" 
                />
                {/* Straps / Top fold details */}
                <path d="M 68,110 L 92,110" stroke="#5d3c94" strokeWidth="2" />
                <path d="M 60,145 C 80,152 100,145 100,145" stroke="#5d3c94" strokeWidth="1" fill="none" />
                {/* Hemline details */}
                <path d="M 48,220 C 64,224 80,224 96,220 C 104,220 112,220 112,220" stroke="#5d3c94" strokeWidth="2" fill="none" />
              </g>

              {/* HANGER 2: White Shirt & Tie (Middle, hanging mid-level) */}
              <g className="hanger-2" style={{ transformOrigin: '200px 129px' }}>
                {/* Hook */}
                <path d="M 200,129 C 200,109 210,112 206,102 C 203,95 195,99 195,107" stroke="#1c1c1c" strokeWidth="2" fill="none" />
                {/* Hanger Triangle */}
                <path d="M 200,129 L 175,145 L 225,145 Z" stroke="#1c1c1c" strokeWidth="2" fill="none" />
                {/* Shirt Body */}
                <path d="M 182,145 
                         L 170,165 
                         L 182,165 
                         L 182,215 
                         L 218,215 
                         L 218,165 
                         L 230,165 
                         L 218,145 
                         Z" 
                      fill="#E9ECEF" 
                      stroke="#ced4da"
                      strokeWidth="1.5"
                />
                {/* Collar */}
                <path d="M 190,145 L 200,155 L 210,145" stroke="#adb5bd" strokeWidth="2" fill="none" />
                {/* Blue Tie */}
                <path d="M 198,155 L 202,155 L 204,185 L 200,195 L 196,185 Z" fill="#4A69BD" />
                {/* Pocket detail */}
                <path d="M 208,168 L 214,168 L 214,176 L 208,176 Z" fill="#dee2e6" />
              </g>

              {/* HANGER 3: Black Dress (Right, hanging higher) */}
              <g className="hanger-3" style={{ transformOrigin: '320px 166px' }}>
                {/* Hook */}
                <path d="M 320,166 C 320,146 330,149 326,139 C 323,132 315,136 315,144" stroke="#1c1c1c" strokeWidth="2" fill="none" />
                {/* Hanger Triangle */}
                <path d="M 320,166 L 290,183 L 350,183 Z" stroke="#1c1c1c" strokeWidth="2" fill="none" />
                {/* Black Dress Body */}
                <path d="M 308,183 
                         C 308,198 298,202 298,220 
                         C 298,245 280,265 272,295 
                         L 368,295 
                         C 360,265 342,245 342,220 
                         C 342,202 332,198 332,183 
                         Z" 
                      fill="#1E1E1E" 
                />
                {/* Flare accents & shadows */}
                <path d="M 302,295 C 310,290 320,290 330,295 C 340,290 350,295 368,295" stroke="#333" strokeWidth="2" />
                {/* Waist belt outline */}
                <rect x="306" y="214" width="28" height="6" fill="#111" rx="1" />
              </g>
            </svg>
          </div>
        </div>

        {/* Text and Get Started Content */}
        <div className="get-started-content">
          <span className="get-started-welcome">Welcome to</span>
          <h2 className="get-started-brand">ELVORA!</h2>
          <p className="get-started-desc">
            Our clothing materials are carefully selected to provide the perfect combination of comfort, style, and durability. With ELVORA, you can easily discover and choose the perfect fabric to match your unique fashion sense.
          </p>

          <button className="get-started-btn" onClick={onNext}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
