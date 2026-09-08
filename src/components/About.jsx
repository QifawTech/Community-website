import React from 'react';
import aboutImage from '../assets/about.jpg'; // உன்னோட லோக்கல் இமேஜ் ஃபைல் பெயர்

const AboutUs = () => {
  return (
    <section className="py-5 bg-white position-relative overflow-hidden" id="about">
      
      {/* Background Soft Glow Decoration */}
      <div 
        className="position-absolute top-50 start-50 translate-middle rounded-circle opacity-50 pointer-event-none"
        style={{ width: '450px', height: '450px', background: 'radial-gradient(circle, rgba(220,53,69,0.04) 0%, rgba(255,255,255,0) 70%)', zIndex: 0 }}
      ></div>

      <div className="container py-lg-5 position-relative z-1">
        
        <div className="row align-items-center g-4 g-lg-5">
          
          {/* Left Side: Title, Description & Learn More Button */}
          <div className="col-lg-4 text-center text-lg-start">
            <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 rounded-pill fw-semibold mb-3 shadow-sm" style={{ fontSize: '13px' }}>
              ✨ About Us
            </span>
            <h2 className="fw-bold text-dark mb-3 lh-sm" style={{ fontSize: 'clamp(1.9rem, 2.5vw, 2.4rem)', letterSpacing: '-0.5px' }}>
              Where Connections Create <span className="text-danger">Possibilities</span>
            </h2>
            <p className="text-secondary fs-6 lh-lg mb-4">
              We believe the right connection can open the door to the right opportunity. Our community brings together professionals, entrepreneurs, business owners, and ambitious individuals in one trusted network built for meaningful growth.
            </p>
            <div>
              <a
                href="#contact"
                className="btn btn-outline-danger px-4 py-2.5 rounded-pill fw-semibold shadow-sm text-decoration-none d-inline-flex align-items-center gap-2"
                style={{ transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#dc3545';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#dc3545';
                  e.currentTarget.style.transform = 'translateY(0px)';
                }}
              >
                Learn More →
              </a>
            </div>
          </div>

          {/* Middle: Local Image with Modern Frame & Shadow */}
          <div className="col-lg-5 text-center">
            <div className="position-relative d-inline-block w-100 p-2 bg-light rounded-4 shadow-sm border border-light">
              <img 
                src={aboutImage} 
                alt="About Us Community" 
                className="img-fluid rounded-4 shadow object-fit-cover w-100"
                style={{ maxHeight: '380px' }}
              />
            </div>
          </div>

          {/* Right Side: 3 Neat Interactive Feature Boxes */}
          <div className="col-lg-3">
            <div className="d-flex flex-column gap-3">
              
              {/* Point 1: Connect with Purpose */}
              <div className="p-3 bg-light rounded-4 shadow-sm border border-light transition-all hover-about-card d-flex align-items-start gap-3">
                <div className="bg-danger bg-opacity-10 text-danger p-2.5 rounded-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '42px', height: '42px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <div>
                  <h6 className="fw-bold text-dark mb-1 fs-6">Connect with Purpose</h6>
                  <p className="text-secondary small mb-0 lh-base" style={{ fontSize: '13px' }}>Build meaningful relationships that open doors.</p>
                </div>
              </div>

              {/* Point 2: Collaborate with Confidence */}
              <div className="p-3 bg-light rounded-4 shadow-sm border border-light transition-all hover-about-card d-flex align-items-start gap-3">
                <div className="bg-danger bg-opacity-10 text-danger p-2.5 rounded-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '42px', height: '42px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    <line x1="6" y1="1" x2="6" y2="4"></line>
                    <line x1="10" y1="1" x2="10" y2="4"></line>
                    <line x1="14" y1="1" x2="14" y2="4"></line>
                  </svg>
                </div>
                <div>
                  <h6 className="fw-bold text-dark mb-1 fs-6">Collaborate</h6>
                  <p className="text-secondary small mb-0 lh-base" style={{ fontSize: '13px' }}>Share ideas, build partnerships & support.</p>
                </div>
              </div>

              {/* Point 3: Grow Together */}
              <div className="p-3 bg-light rounded-4 shadow-sm border border-light transition-all hover-about-card d-flex align-items-start gap-3">
                <div className="bg-danger bg-opacity-10 text-danger p-2.5 rounded-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '42px', height: '42px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h6 className="fw-bold text-dark mb-1 fs-6">Grow Together</h6>
                  <p className="text-secondary small mb-0 lh-base" style={{ fontSize: '13px' }}>Accelerate your professional growth.</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Custom Styles for Hover Animation */}
      <style>{`
        .hover-about-card {
          transition: all 0.3s ease-in-out;
        }
        .hover-about-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(220, 53, 69, 0.08) !important;
          border-color: rgba(220, 53, 69, 0.3) !important;
          background-color: #fff !important;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;