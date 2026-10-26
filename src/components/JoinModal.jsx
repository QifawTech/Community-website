import React, { useState } from 'react';

const JoinModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Google Apps Script Web App URL (Updated with your deployed URL)
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzHjPGNfVa1EpIjtUaV0jK1bCsY2lNDSvQilTkwO-iSvQbEkAxdFH6IE4wH3mzHFMx68Q/exec';

    try {
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setLoading(false);
      setSubmitted(true);
    } catch (error) {
      console.error('Error!', error.message);
      setLoading(false);
      alert('Something went wrong. Please try again.');
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', company: '', phone: '' });
    onClose();
  };

  return (
    <div className="modal-backdrop-custom">
      <div className="modal-dialog-custom">
        <div className="modal-content bg-white text-dark p-4 p-md-5 rounded-4 shadow-lg position-relative border-0">
          
          {/* Close Button */}
          <button 
            onClick={handleResetAndClose}
            className="btn btn-sm btn-light rounded-circle position-absolute top-0 end-0 m-3 d-flex align-items-center justify-content-center border shadow-sm"
            style={{ width: '36px', height: '36px', zIndex: 10 }}
          >
            ✕
          </button>

          {!submitted ? (
            <div>
              {/* Header with Badge */}
              <div className="text-center mb-4">
                <div className="d-inline-block px-3 py-1 rounded-pill bg-light text-danger fw-semibold small mb-2 border">
                  🚀 Join GenFounders
                </div>
                <h3 className="fw-bold mb-1 text-dark" style={{ letterSpacing: '-0.5px' }}>
                  Become a Member
                </h3>
                <p className="text-muted small mb-0">
                  Fill in your details to get started with our network.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                {/* Full Name */}
                <div>
                  <label className="form-label small fw-semibold text-secondary">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className="form-control bg-light text-dark border-0 py-2.5 px-3 rounded-3"
                    placeholder="Enter your full name"
                    style={{ fontSize: '14px' }}
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="form-label small fw-semibold text-secondary">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="form-control bg-light text-dark border-0 py-2.5 px-3 rounded-3"
                    placeholder="Enter your email address"
                    style={{ fontSize: '14px' }}
                  />
                </div>

                {/* Business / Company Name */}
                <div>
                  <label className="form-label small fw-semibold text-secondary">Business / Company Name</label>
                  <input 
                    type="text" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    required 
                    className="form-control bg-light text-dark border-0 py-2.5 px-3 rounded-3"
                    placeholder="Enter your business or company name"
                    style={{ fontSize: '14px' }}
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="form-label small fw-semibold text-secondary">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                    className="form-control bg-light text-dark border-0 py-2.5 px-3 rounded-3"
                    placeholder="Enter your active phone number"
                    style={{ fontSize: '14px' }}
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={loading} 
                  className="btn btn-danger w-100 py-3 rounded-pill fw-semibold shadow-sm text-white mt-3"
                  style={{ backgroundColor: '#dc3545', border: 'none', fontSize: '15px' }}
                >
                  {loading ? 'Submitting...' : 'Submit & Join Now'}
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-4">
              <div className="fs-1 mb-2">🎉</div>
              <h4 className="fw-bold text-dark mb-2">Welcome Aboard!</h4>
              <p className="text-muted small mb-4">
                Your registration has been successfully recorded. We are excited to have you in GenFounders!
              </p>
              <button 
                onClick={handleResetAndClose} 
                className="btn btn-outline-dark px-4 py-2 rounded-pill small fw-semibold"
              >
                Close & Explore
              </button>
            </div>
          )}

        </div>
      </div>

      {/* Custom Smooth Animation Styles */}
      <style>{`
        .modal-backdrop-custom {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3000;
          animation: fadeInBackdrop 0.3s ease-out forwards;
        }

        .modal-dialog-custom {
          width: 100%;
          max-width: 480px;
          margin: 1rem;
          animation: scaleUpModal 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeInBackdrop {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleUpModal {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(15px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default JoinModal;