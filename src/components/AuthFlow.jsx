import React, { useState, useRef } from 'react';
import { Mail, Lock, User, Calendar, Check } from 'lucide-react';

export default function AuthFlow({ onComplete }) {
  const [subView, setSubView] = useState('login'); // 'login' | 'signup' | 'forgot' | 'verification' | 'new-password' | 'success'
  const [otp, setOtp] = useState(['', '', '', '']);
  const otpRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleOtpChange = (index, value) => {
    if (value.length > 1) value = value[0];
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto tab to next input
    if (value !== '' && index < 3) {
      otpRefs[index + 1].current.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    // Backspace auto-focus previous
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      otpRefs[index - 1].current.focus();
    }
  };

  // Determine vertical dot indicator positioning in sidebar
  const getDotPosition = () => {
    if (subView === 'login') return '115px';
    if (subView === 'signup') return '320px';
    // forgot, verification, new-password all correspond to the Forgot Password path
    return '520px';
  };

  return (
    <div className="auth-screen">
      <div className={`auth-card ${subView === 'success' ? 'success-view' : ''}`}>
        
        {/* Background bubbles decoration */}
        <div className="auth-bubble auth-bubble-1" />
        <div className="auth-bubble auth-bubble-2" />
        <div className="auth-bubble auth-bubble-3" />

        {/* Left Vertical Sidebar Tabs */}
        <div className="auth-sidebar">
          {/* Active slider dot */}
          <div className="auth-sidebar-dot" style={{ top: getDotPosition() }} />

          <span 
            className={`auth-sidebar-tab ${subView === 'login' ? 'active' : ''}`}
            onClick={() => setSubView('login')}
          >
            Login
          </span>
          <span 
            className={`auth-sidebar-tab ${subView === 'signup' ? 'active' : ''}`}
            onClick={() => setSubView('signup')}
          >
            Sign Up
          </span>
          <span 
            className={`auth-sidebar-tab ${['forgot', 'verification', 'new-password'].includes(subView) ? 'active' : ''}`}
            onClick={() => setSubView('forgot')}
          >
            Forgot Password
          </span>
        </div>

        {/* Right White Form Container Card */}
        <div className="auth-inner-card">
          
          {/* Watermark background text */}
          <div className="auth-watermark">
            {subView === 'login' && 'Login'}
            {subView === 'signup' && 'SignUp'}
            {['forgot', 'verification', 'new-password'].includes(subView) && 'Verify'}
          </div>

          {/* VIEW: LOGIN */}
          {subView === 'login' && (
            <>
              {/* Illustration SVG */}
              <div className="auth-illustration-container">
                <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Purple tree */}
                  <path d="M40 70 C40 30, 80 30, 80 45 C80 25, 120 25, 120 50 C120 35, 150 40, 150 70 Z" fill="#b5518b" opacity="0.8" />
                  <rect x="92" y="70" width="8" height="25" fill="#5c2645" />
                  {/* Bench */}
                  <rect x="50" y="80" width="70" height="4" fill="#a9538c" rx="2" />
                  <line x1="60" y1="80" x2="60" y2="95" stroke="#a9538c" strokeWidth="2" />
                  <line x1="110" y1="80" x2="110" y2="95" stroke="#a9538c" strokeWidth="2" />
                  <rect x="55" y="74" width="60" height="2" fill="#5c2645" />
                  {/* Girl standing */}
                  <circle cx="140" cy="55" r="5" fill="#1c1c1c" />
                  <path d="M140 60 L140 80 L135 95 M140 80 L145 95 M140 63 L132 75 M140 63 L148 70" stroke="#1c1c1c" strokeWidth="2" />
                  <path d="M135 60 H145 L142 80 H138 Z" fill="#b5518b" />
                </svg>
              </div>

              <div className="auth-header-text">
                <span className="auth-subtitle">Welcome Back</span>
                <h2 className="auth-title-large">Login</h2>
              </div>

              <form className="auth-form" onSubmit={(e) => { e.preventDefault(); setSubView('success'); }}>
                <div className="auth-input-group">
                  <label className="auth-input-label">Email</label>
                  <div className="auth-input-wrapper">
                    <Mail size={16} />
                    <input type="email" placeholder="email@example.com" required defaultValue="charlotte@example.com" />
                  </div>
                </div>

                <div className="auth-input-group">
                  <label className="auth-input-label">Password</label>
                  <div className="auth-input-wrapper">
                    <Lock size={16} />
                    <input type="password" placeholder="••••••••" required defaultValue="password123" />
                  </div>
                </div>

                <div className="auth-options-row">
                  <label className="auth-checkbox-label">
                    <input type="checkbox" defaultChecked />
                    Remember me
                  </label>
                  <button type="button" className="auth-forgot-link" onClick={() => setSubView('forgot')}>
                    Forgot Password?
                  </button>
                </div>

                <button type="submit" className="auth-btn-primary">
                  Sign In
                </button>
              </form>
            </>
          )}

          {/* VIEW: SIGN UP */}
          {subView === 'signup' && (
            <>
              {/* Illustration SVG */}
              <div className="auth-illustration-container">
                <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Oval mirror stand */}
                  <ellipse cx="100" cy="55" rx="20" ry="35" stroke="#b5518b" strokeWidth="3" />
                  <line x1="100" y1="90" x2="100" y2="100" stroke="#b5518b" strokeWidth="3" />
                  <line x1="85" y1="100" x2="115" y2="100" stroke="#b5518b" strokeWidth="3" />
                  <ellipse cx="100" cy="55" rx="17" ry="32" fill="#EAE6DF" opacity="0.3" />
                  {/* Girl reflecting */}
                  <circle cx="135" cy="55" r="5" fill="#1c1c1c" />
                  <path d="M135 60 L135 80 L130 95 M135 80 L140 95" stroke="#1c1c1c" strokeWidth="2" />
                  <path d="M132 60 H138 L142 80 H128 Z" fill="#b5518b" />
                  <path d="M135 63 L126 70 M135 63 L144 75" stroke="#1c1c1c" strokeWidth="2" />
                </svg>
              </div>

              <div className="auth-header-text">
                <span className="auth-subtitle">Create Account</span>
                <h2 className="auth-title-large">Sign Up</h2>
              </div>

              <form className="auth-form" onSubmit={(e) => { e.preventDefault(); setSubView('verification'); }}>
                <div className="auth-input-group">
                  <label className="auth-input-label">Name</label>
                  <div className="auth-input-wrapper">
                    <User size={16} />
                    <input type="text" placeholder="Your Name" required />
                  </div>
                </div>

                <div className="auth-input-group">
                  <label className="auth-input-label">Date of Birth</label>
                  <div className="auth-input-wrapper">
                    <Calendar size={16} />
                    <input type="text" placeholder="DD/MM/YYYY" required />
                  </div>
                </div>

                <div className="auth-input-group">
                  <label className="auth-input-label">Email</label>
                  <div className="auth-input-wrapper">
                    <Mail size={16} />
                    <input type="email" placeholder="email@example.com" required />
                  </div>
                </div>

                <div className="auth-input-group">
                  <label className="auth-input-label">Password</label>
                  <div className="auth-input-wrapper">
                    <Lock size={16} />
                    <input type="password" placeholder="Min. 6 characters" required />
                  </div>
                </div>

                <div className="auth-input-group">
                  <label className="auth-input-label">Confirm Password</label>
                  <div className="auth-input-wrapper">
                    <Lock size={16} />
                    <input type="password" placeholder="Confirm Password" required />
                  </div>
                </div>

                <label className="auth-checkbox-label" style={{ marginTop: '4px' }}>
                  <input type="checkbox" required />
                  I accept the Terms & Conditions
                </label>

                <button type="submit" className="auth-btn-primary">
                  Sign Up
                </button>
              </form>
            </>
          )}

          {/* VIEW: FORGOT PASSWORD */}
          {subView === 'forgot' && (
            <>
              {/* Illustration SVG */}
              <div className="auth-illustration-container">
                <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Phone screen mockup */}
                  <rect x="75" y="20" width="50" height="80" rx="6" stroke="#b5518b" strokeWidth="2.5" fill="#FAF9F6" />
                  <line x1="90" y1="23" x2="110" y2="23" stroke="#b5518b" strokeWidth="2" />
                  {/* Shield with lock */}
                  <path d="M100 45 L112 50 V60 C112 70 100 75 100 75 C100 75 88 70 88 60 V50 Z" fill="#b5518b" opacity="0.8" />
                  <circle cx="100" cy="58" r="3" fill="#FFFFFF" />
                  {/* Girl standing */}
                  <circle cx="150" cy="55" r="5" fill="#1c1c1c" />
                  <path d="M150 60 L150 82 M150 82 L145 98 M150 82 L155 98" stroke="#1c1c1c" strokeWidth="2" />
                  <path d="M147 60 H153 L155 82 H145 Z" fill="#b5518b" />
                  <path d="M150 65 Q135 60 127 50" stroke="#1c1c1c" strokeWidth="2" fill="none" />
                </svg>
              </div>

              <div className="auth-header-text">
                <span className="auth-subtitle">Forgot Password</span>
                <h2 className="auth-title-large">Authentication</h2>
              </div>

              <form className="auth-form" onSubmit={(e) => { e.preventDefault(); setSubView('verification'); }}>
                <div className="auth-input-group">
                  <label className="auth-input-label">Email</label>
                  <div className="auth-input-wrapper">
                    <Mail size={16} />
                    <input type="email" placeholder="Enter your email" required />
                  </div>
                </div>

                <button type="submit" className="auth-btn-primary">
                  Send Code
                </button>
              </form>
            </>
          )}

          {/* VIEW: VERIFICATION CODE */}
          {subView === 'verification' && (
            <>
              {/* Illustration SVG */}
              <div className="auth-illustration-container">
                <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Phone screen */}
                  <rect x="75" y="20" width="50" height="80" rx="6" stroke="#b5518b" strokeWidth="2.5" fill="#FAF9F6" />
                  {/* Checkmark bubble */}
                  <circle cx="100" cy="58" r="16" fill="#E2F0D9" />
                  <path d="M94 58 L98 62 L106 53" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  {/* Girl standing */}
                  <circle cx="45" cy="55" r="5" fill="#1c1c1c" />
                  <path d="M45 60 L45 82 M45 82 L40 98 M45 82 L50 98" stroke="#1c1c1c" strokeWidth="2" />
                  <path d="M42 60 H48 L50 82 H40 Z" fill="#b5518b" />
                  <path d="M45 65 Q60 60 72 58" stroke="#1c1c1c" strokeWidth="2" fill="none" />
                </svg>
              </div>

              <div className="auth-header-text">
                <span className="auth-subtitle">Verify Identity</span>
                <h2 className="auth-title-large">Authentication</h2>
              </div>

              <form className="auth-form" onSubmit={(e) => { e.preventDefault(); setSubView('new-password'); }}>
                <label className="auth-input-label" style={{ textAlign: 'center', display: 'block' }}>
                  Enter Verification Code
                </label>
                
                <div className="auth-otp-row">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={otpRefs[index]}
                      type="text"
                      className="auth-otp-input"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      maxLength={1}
                      pattern="\d*"
                      required
                      autoFocus={index === 0}
                    />
                  ))}
                </div>

                <div className="auth-resend-text">
                  If you didn't receive a code. <span className="auth-resend-link" onClick={() => alert('Verification code resent!')}>Resend</span>
                </div>

                <button type="submit" className="auth-btn-primary">
                  Send
                </button>
              </form>
            </>
          )}

          {/* VIEW: SET PASSWORD (NEW PASSWORD) */}
          {subView === 'new-password' && (
            <>
              {/* Illustration SVG */}
              <div className="auth-illustration-container">
                <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Phone screen */}
                  <rect x="75" y="20" width="50" height="80" rx="6" stroke="#b5518b" strokeWidth="2.5" fill="#FAF9F6" />
                  {/* Lock graphic */}
                  <rect x="90" y="52" width="20" height="15" fill="#b5518b" rx="2" />
                  <path d="M94 52 V46 C94 42 100 42 100 42 C100 42 106 42 106 46 V52" stroke="#b5518b" strokeWidth="2.5" fill="none" />
                  {/* Girl standing */}
                  <circle cx="150" cy="55" r="5" fill="#1c1c1c" />
                  <path d="M150 60 L150 82 M150 82 L145 98 M150 82 L155 98" stroke="#1c1c1c" strokeWidth="2" />
                  <path d="M147 60 H153 L155 82 H145 Z" fill="#b5518b" />
                </svg>
              </div>

              <div className="auth-header-text">
                <span className="auth-subtitle">Secure Account</span>
                <h2 className="auth-title-large">New Password</h2>
              </div>

              <form className="auth-form" onSubmit={(e) => { e.preventDefault(); setSubView('success'); }}>
                <div className="auth-input-group">
                  <label className="auth-input-label">Enter New Password</label>
                  <div className="auth-input-wrapper">
                    <Lock size={16} />
                    <input type="password" placeholder="Enter atleast 6-digit password" required />
                  </div>
                </div>

                <div className="auth-input-group">
                  <label className="auth-input-label">Confirm Password</label>
                  <div className="auth-input-wrapper">
                    <Lock size={16} />
                    <input type="password" placeholder="Confirm password" required />
                  </div>
                </div>

                <button type="submit" className="auth-btn-primary">
                  Send
                </button>
              </form>
            </>
          )}

          {/* VIEW: SUCCESS */}
          {subView === 'success' && (
            <div style={{ margin: 'auto 0', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <div className="auth-success-circle">
                <Check size={40} strokeWidth={3} />
              </div>
              
              <h2 className="auth-success-title">Password Updated Successfully</h2>
              
              <p className="auth-success-desc">
                Your password has been changed successfully.
              </p>

              <button className="auth-btn-primary" onClick={onComplete} style={{ marginTop: '20px', borderRadius: '30px' }}>
                Continue Shopping
              </button>
            </div>
          )}

          {/* Social login option icons (Not rendered in success or code-verification subviews) */}
          {!['success', 'verification'].includes(subView) && (
            <div className="auth-social-row">
              <button type="button" className="auth-social-btn" aria-label="Login with Facebook" onClick={() => setSubView('success')}>
                <svg width="16" height="16" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button type="button" className="auth-social-btn" aria-label="Login with Google" onClick={() => setSubView('success')}>
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-6.887 4.114-4.664 0-8.44-3.776-8.44-8.44s3.776-8.44 8.44-8.44c2.096 0 4.004.757 5.485 2.01l3.056-3.056C17.76.996 15.176 0 12.24 0 5.48 0 0 5.48 0 12.24s5.48 12.24 12.24 12.24c6.48 0 12.24-4.66 12.24-12.24 0-.825-.075-1.62-.225-2.395H12.24z" fill="#EA4335" />
                </svg>
              </button>
              <button type="button" className="auth-social-btn" aria-label="Login with Twitter" onClick={() => setSubView('success')}>
                <svg width="16" height="16" fill="#1DA1F2" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
