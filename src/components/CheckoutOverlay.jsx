import React, { useState } from 'react';
import { X, CreditCard, ChevronRight, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

const FREE_SHIPPING_THRESHOLD = 300;

export default function CheckoutOverlay({
  isOpen,
  onClose,
  cartItems,
  onOrderSuccess
}) {
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Success
  const [shippingForm, setShippingForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    phone: ''
  });
  const [paymentForm, setPaymentForm] = useState({
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: ''
  });
  const [orderId] = useState(() => `ELV-${Math.floor(100000 + Math.random() * 900000)}`);
  const [formErrors, setFormErrors] = useState({});

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 15;
  const total = subtotal + shipping;

  const handleShippingChange = (e) => {
    setShippingForm({ ...shippingForm, [e.target.name]: e.target.value });
    if (formErrors[e.target.name]) {
      setFormErrors({ ...formErrors, [e.target.name]: '' });
    }
  };

  const handlePaymentChange = (e) => {
    let { name, value } = e.target;
    // Format card number with spaces
    if (name === 'cardNumber') {
      value = value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim().substring(0, 19);
    }
    // Format expiry date
    if (name === 'cardExpiry') {
      value = value.replace(/\D/g, '').replace(/(.{2})/, '$1/').trim().substring(0, 5);
    }
    // Limit CVV to 3 digits
    if (name === 'cardCvv') {
      value = value.replace(/\D/g, '').substring(0, 3);
    }
    setPaymentForm({ ...paymentForm, [name]: value });
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const validateShipping = () => {
    const errors = {};
    if (!shippingForm.name.trim()) errors.name = 'Full name is required';
    if (!shippingForm.email.trim() || !/\S+@\S+\.\S+/.test(shippingForm.email)) errors.email = 'Valid email is required';
    if (!shippingForm.address.trim()) errors.address = 'Address is required';
    if (!shippingForm.city.trim()) errors.city = 'City is required';
    if (!shippingForm.zip.trim()) errors.zip = 'ZIP code is required';
    if (!shippingForm.phone.trim()) errors.phone = 'Phone number is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validatePayment = () => {
    const errors = {};
    if (paymentForm.cardNumber.replace(/\s/g, '').length < 16) errors.cardNumber = 'Valid 16-digit card number is required';
    if (!paymentForm.cardName.trim()) errors.cardName = 'Cardholder name is required';
    if (paymentForm.cardExpiry.length < 5) errors.cardExpiry = 'MM/YY required';
    if (paymentForm.cardCvv.length < 3) errors.cardCvv = 'CVV required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (validateShipping()) {
        setStep(2);
      }
    } else if (step === 2) {
      if (validatePayment()) {
        // Trigger confetti
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 }
        });
        setStep(3);
      }
    }
  };

  const handleComplete = () => {
    onOrderSuccess();
    setStep(1);
    setShippingForm({ name: '', email: '', address: '', city: '', zip: '', phone: '' });
    setPaymentForm({ cardNumber: '', cardName: '', cardExpiry: '', cardCvv: '' });
    onClose();
  };

  return (
    <div className={`modal-backdrop ${isOpen ? 'open' : ''}`}>
      <div className="checkout-modal">
        {/* Main form area */}
        <div className="checkout-main">
          {step < 3 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div className="checkout-steps">
                <span className={`checkout-step ${step >= 1 ? 'active' : ''}`}>Shipping</span>
                <ChevronRight size={14} style={{ color: '#9E9E9E', alignSelf: 'center' }} />
                <span className={`checkout-step ${step >= 2 ? 'active' : ''}`}>Payment</span>
              </div>
              <button onClick={onClose} style={{ color: '#1C1C1C' }}>
                <X size={20} />
              </button>
            </div>
          )}

          {step === 1 && (
            <>
              <h2 className="checkout-form-title">Shipping Details</h2>
              <div className="checkout-form">
                <div className="form-group-full">
                  <label className="form-label">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={shippingForm.name} 
                    onChange={handleShippingChange} 
                    className="form-input"
                    placeholder="E.g., Charlotte Sterling"
                  />
                  {formErrors.name && <span style={{ color: '#D32F2F', fontSize: '11px' }}>{formErrors.name}</span>}
                </div>

                <div>
                  <label className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={shippingForm.email} 
                    onChange={handleShippingChange} 
                    className="form-input"
                    placeholder="charlotte@example.com"
                  />
                  {formErrors.email && <span style={{ color: '#D32F2F', fontSize: '11px' }}>{formErrors.email}</span>}
                </div>

                <div>
                  <label className="form-label">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={shippingForm.phone} 
                    onChange={handleShippingChange} 
                    className="form-input"
                    placeholder="+1 (555) 019-2834"
                  />
                  {formErrors.phone && <span style={{ color: '#D32F2F', fontSize: '11px' }}>{formErrors.phone}</span>}
                </div>

                <div className="form-group-full">
                  <label className="form-label">Address</label>
                  <input 
                    type="text" 
                    name="address"
                    value={shippingForm.address} 
                    onChange={handleShippingChange} 
                    className="form-input"
                    placeholder="Apartment, suite, unit, street address"
                  />
                  {formErrors.address && <span style={{ color: '#D32F2F', fontSize: '11px' }}>{formErrors.address}</span>}
                </div>

                <div>
                  <label className="form-label">City</label>
                  <input 
                    type="text" 
                    name="city"
                    value={shippingForm.city} 
                    onChange={handleShippingChange} 
                    className="form-input"
                    placeholder="New York"
                  />
                  {formErrors.city && <span style={{ color: '#D32F2F', fontSize: '11px' }}>{formErrors.city}</span>}
                </div>

                <div>
                  <label className="form-label">ZIP / Postal Code</label>
                  <input 
                    type="text" 
                    name="zip"
                    value={shippingForm.zip} 
                    onChange={handleShippingChange} 
                    className="form-input"
                    placeholder="10001"
                  />
                  {formErrors.zip && <span style={{ color: '#D32F2F', fontSize: '11px' }}>{formErrors.zip}</span>}
                </div>
              </div>

              <div className="checkout-actions">
                <button className="checkout-back-btn" onClick={onClose}>
                  Cancel
                </button>
                <button className="checkout-next-btn" onClick={handleNextStep}>
                  Continue to Payment
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="checkout-form-title">Payment Method</h2>
              
              {/* Animated Live Card Preview */}
              <div className="card-preview">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div className="card-preview-chip" />
                  <CreditCard size={24} style={{ opacity: 0.8 }} />
                </div>
                <div className="card-preview-number">
                  {paymentForm.cardNumber || '•••• •••• •••• ••••'}
                </div>
                <div className="card-preview-row">
                  <div>
                    <div className="card-preview-label">Card Holder</div>
                    <div className="card-preview-value">
                      {paymentForm.cardName.toUpperCase() || 'CHARLOTTE STERLING'}
                    </div>
                  </div>
                  <div>
                    <div className="card-preview-label">Expires</div>
                    <div className="card-preview-value">
                      {paymentForm.cardExpiry || 'MM/YY'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="checkout-form">
                <div className="form-group-full">
                  <label className="form-label">Card Number</label>
                  <input 
                    type="text" 
                    name="cardNumber"
                    value={paymentForm.cardNumber} 
                    onChange={handlePaymentChange} 
                    className="form-input"
                    placeholder="4111 2222 3333 4444"
                  />
                  {formErrors.cardNumber && <span style={{ color: '#D32F2F', fontSize: '11px' }}>{formErrors.cardNumber}</span>}
                </div>

                <div className="form-group-full">
                  <label className="form-label">Cardholder Name</label>
                  <input 
                    type="text" 
                    name="cardName"
                    value={paymentForm.cardName} 
                    onChange={handlePaymentChange} 
                    className="form-input"
                    placeholder="Charlotte Sterling"
                  />
                  {formErrors.cardName && <span style={{ color: '#D32F2F', fontSize: '11px' }}>{formErrors.cardName}</span>}
                </div>

                <div>
                  <label className="form-label">Expiration Date</label>
                  <input 
                    type="text" 
                    name="cardExpiry"
                    value={paymentForm.cardExpiry} 
                    onChange={handlePaymentChange} 
                    className="form-input"
                    placeholder="MM/YY"
                  />
                  {formErrors.cardExpiry && <span style={{ color: '#D32F2F', fontSize: '11px' }}>{formErrors.cardExpiry}</span>}
                </div>

                <div>
                  <label className="form-label">CVV</label>
                  <input 
                    type="password" 
                    name="cardCvv"
                    value={paymentForm.cardCvv} 
                    onChange={handlePaymentChange} 
                    className="form-input"
                    placeholder="•••"
                  />
                  {formErrors.cardCvv && <span style={{ color: '#D32F2F', fontSize: '11px' }}>{formErrors.cardCvv}</span>}
                </div>
              </div>

              <div className="checkout-actions">
                <button className="checkout-back-btn" onClick={() => setStep(1)}>
                  Back to Shipping
                </button>
                <button className="checkout-next-btn" onClick={handleNextStep}>
                  Complete Purchase (${total.toFixed(2)})
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <div className="success-screen">
              <div className="success-icon-wrapper">
                <Check size={36} strokeWidth={3} />
              </div>
              <h3>Order Confirmed</h3>
              <p>Thank you for shopping with ELVORA. Your payment was processed successfully, and we have sent a receipt to {shippingForm.email}.</p>

              <div className="success-details">
                <div className="success-details-row">
                  <span>Order Number:</span>
                  <strong>{orderId}</strong>
                </div>
                <div className="success-details-row">
                  <span>Estimated Delivery:</span>
                  <strong>3-5 Business Days</strong>
                </div>
                <div className="success-details-row">
                  <span>Ship To:</span>
                  <strong>{shippingForm.name}, {shippingForm.city}</strong>
                </div>
                <div className="success-details-row" style={{ borderTop: '1px dashed #E6E2D6', paddingTop: '10px', marginTop: '10px' }}>
                  <span>Total Amount Paid:</span>
                  <strong>${total.toFixed(2)}</strong>
                </div>
              </div>

              <button className="success-cta-btn" onClick={handleComplete}>
                Continue Browsing
              </button>
            </div>
          )}
        </div>

        {/* Sidebar Order Summary (Only visible during forms) */}
        {step < 3 && (
          <div className="checkout-sidebar">
            <h3 className="checkout-side-title">Order Summary</h3>
            <ul className="checkout-side-items">
              {cartItems.map((item, index) => (
                <li key={index} className="checkout-side-item">
                  <img src={item.product.images[0]} alt={item.product.name} />
                  <div className="checkout-side-item-info">
                    <div className="checkout-side-item-name">{item.product.name}</div>
                    <div className="checkout-side-item-meta">Size: {item.size} | Qty: {item.quantity}</div>
                  </div>
                  <div className="checkout-side-item-price">${(item.product.price * item.quantity).toFixed(2)}</div>
                </li>
              ))}
            </ul>

            <div className="checkout-side-summary">
              <div className="price-row" style={{ marginBottom: '8px' }}>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="price-row" style={{ marginBottom: '8px' }}>
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : '$15.00'}</span>
              </div>
              <div className="price-row total" style={{ fontSize: '18px', paddingTop: '12px', marginTop: '4px' }}>
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
