import React, { useState } from 'react';

const JoinModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    phone: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  // உன்னோட கூகுள் ஸ்கிரிப்ட் URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzFM5o4RNIvwq5CW-vKVTR_4sZZCAgpUgiGoVdpBx0aSsym8kW1FWjzsp1_HQ3V3tMnyw/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setIsLoading(false);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', businessName: '', phone: '' });
        onClose();
      }, 3000);

    } catch (error) {
      console.error('Error saving data:', error);
      alert('Something went wrong. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3 animate-fade-in"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 2000, backdropFilter: 'blur(5px)' }}
    >
      <div 
        className="bg-white rounded-4 shadow-lg p-4 p-md-5 position-relative w-100" 
        style={{ maxWidth: '480px' }}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="position-absolute top-0 end-0 m-3 btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm"
          style={{ width: '36px', height: '36px', border: 'none' }}
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="text-center mb-4">
          <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-1.5 rounded-pill fw-semibold mb-2" style={{ fontSize: '12px' }}>
            🚀 Join GenFounders
          </span>
          <h3 className="fw-bold text-dark fs-3 mb-1">Become a Member</h3>
          <p className="text-secondary small mb-0">Fill in your details to get started with our network.</p>
        </div>

        {isSubmitted ? (
          <div className="alert alert-success border-0 shadow-sm py-4 text-center rounded-4" role="alert">
            <h5 className="fw-bold text-success mb-2">🎉 Welcome Aboard, {formData.name}!</h5>
            <p className="text-secondary small mb-0">Your details have been saved to our sheet successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            
            {/* Name */}
            <div className="mb-3">
              <label className="form-label fw-semibold text-dark small">Full Name</label>
              <input 
                type="text" 
                className="form-control py-2.5 px-3 rounded-3 border-light bg-light shadow-sm custom-input" 
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label fw-semibold text-dark small">Email Address</label>
              <input 
                type="email" 
                className="form-control py-2.5 px-3 rounded-3 border-light bg-light shadow-sm custom-input" 
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            {/* Business Name */}
            <div className="mb-3">
              <label className="form-label fw-semibold text-dark small">Business / Company Name</label>
              <input 
                type="text" 
                className="form-control py-2.5 px-3 rounded-3 border-light bg-light shadow-sm custom-input" 
                placeholder="Enter your business or company name"
                value={formData.businessName}
                onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                required
              />
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label className="form-label fw-semibold text-dark small">Phone Number</label>
              <input 
                type="tel" 
                className="form-control py-2.5 px-3 rounded-3 border-light bg-light shadow-sm custom-input" 
                placeholder="Enter your active phone number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </div>

            {/* Submit Button with SVG Icon */}
            <button 
              type="submit" 
              className="btn btn-danger w-100 py-3 rounded-pill fw-semibold shadow-lg text-white d-flex align-items-center justify-content-center gap-2"
              style={{ 
                background: 'linear-gradient(135deg, #dc3545 0%, #b02a37 100%)', 
                border: 'none',
                transition: 'all 0.3s ease'
              }}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Submit & Join Now</span>
                </>
              )}
            </button>
          </form>
        )}

      </div>

      <style>{`
        .custom-input:focus {
          box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.15) !important;
          background-color: #fff !important;
          outline: none;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.25s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default JoinModal;