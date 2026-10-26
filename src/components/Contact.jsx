import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section className="py-5 bg-white position-relative overflow-hidden" id="contact">
      
      {/* Background Decorative Glow */}
      <div 
        className="position-absolute top-50 start-50 translate-middle rounded-circle opacity-25 pointer-event-none"
        style={{ width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(220,53,69,0.06) 0%, rgba(255,255,255,0) 70%)', zIndex: 0 }}
      ></div>

      <div className="container py-lg-5 position-relative z-1">
        
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 rounded-pill fw-semibold mb-3 shadow-sm" style={{ fontSize: '13px' }}>
              📬 Get In Touch
            </span>
            <h2 className="fw-bold text-dark mb-3 lh-base" style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', letterSpacing: '-0.5px' }}>
              Let's Build Something <span className="text-danger">Great Together</span>
            </h2>
            <p className="text-secondary fs-6 lh-lg">
              Have questions or want to collaborate? Drop us a message and our team will get back to you within 24 hours.
            </p>
          </div>
        </div>

        <div className="row g-4 align-items-stretch justify-content-center">
          
          {/* Left Side: Professional Contact Details */}
          <div className="col-lg-5">
            <div className="p-4 p-md-5 bg-light rounded-4 shadow-sm border border-light h-100 d-flex flex-column justify-content-between transition-all hover-box">
              <div>
                <h3 className="fw-bold text-dark fs-4 mb-4">Contact Information</h3>
                <p className="text-secondary small mb-4 lh-base">
                  Fill out the form or reach out to us directly through our official channels below.
                </p>
                
                {/* Community Name */}
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="bg-white text-danger rounded-3 p-3 shadow-sm d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '50px', height: '50px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </div>
                  <div>
                    <span className="fw-bold text-dark d-block mb-1" style={{ fontSize: '15px' }}>Community Name</span>
                    <span className="text-secondary" style={{ fontSize: '14.5px' }}>GenFounders</span>
                  </div>
                </div>

                {/* Email Address */}
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="bg-white text-danger rounded-3 p-3 shadow-sm d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '50px', height: '50px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <span className="fw-bold text-dark d-block mb-1" style={{ fontSize: '15px' }}>Email Address</span>
                    <span className="text-secondary" style={{ fontSize: '14.5px' }}>info@genfounders.in</span>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="bg-white text-danger rounded-3 p-3 shadow-sm d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '50px', height: '50px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="fw-bold text-dark d-block mb-1" style={{ fontSize: '15px' }}>Phone Number</span>
                    <span className="text-secondary" style={{ fontSize: '14.5px' }}>9965604236</span>
                  </div>
                </div>

                {/* Office Address */}
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-white text-danger rounded-3 p-3 shadow-sm d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '50px', height: '50px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <span className="fw-bold text-dark d-block mb-1" style={{ fontSize: '15px' }}>Office Address</span>
                    <span className="text-secondary lh-sm" style={{ fontSize: '14px' }}>P8,TS.No.8, First Floor, Beside Zackria Complex, Junction, Central Bustand, Trichy - 620001</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Professional Contact Form with Success State */}
          <div className="col-lg-7">
            <div className="p-4 p-md-5 bg-light rounded-4 shadow-sm border border-light h-100 position-relative">
              
              <h3 className="fw-bold text-dark fs-4 mb-4">Send Us a Message</h3>
              
              {isSubmitted ? (
                <div className="alert alert-success border-0 shadow-sm py-4 text-center rounded-4 animate-fade-in" role="alert">
                  <h4 className="fw-bold text-success mb-2">🎉 Thank You, {formData.name}!</h4>
                  <p className="text-secondary small mb-0">Your message has been sent successfully. We will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold text-dark small">Your Name</label>
                    <input 
                      type="text" 
                      className="form-control py-3 px-3 rounded-3 border-0 bg-white shadow-sm custom-input" 
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold text-dark small">Email Address</label>
                    <input 
                      type="email" 
                      className="form-control py-3 px-3 rounded-3 border-0 bg-white shadow-sm custom-input" 
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold text-dark small">Your Message</label>
                    <textarea 
                      rows="4" 
                      className="form-control py-3 px-3 rounded-3 border-0 bg-white shadow-sm custom-input" 
                      placeholder="Write your message or query here..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-danger w-100 py-3 rounded-pill fw-semibold shadow-lg text-white"
                    style={{ 
                      background: 'linear-gradient(135deg, #dc3545 0%, #b02a37 100%)', 
                      border: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.target.style.transform = 'translateY(0px)'}
                  >
                    Send Message 🚀
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>

      {/* Custom Styles */}
      <style>{`
        .custom-input:focus {
          box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.15) !important;
          outline: none;
        }
        .hover-box {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-box:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05) !important;
        }
      `}</style>
    </section>
  );
};

export default Contact;