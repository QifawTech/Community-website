import React from 'react';
import logoImage from '../assets/Logo.png'; // உன்னோட லோகோ ஃபைல் பெயர்

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 position-relative overflow-hidden" id="footer">
      <div className="container">
        
        {/* Main Footer Content */}
        <div className="row g-4 justify-content-between mb-4">
          
          {/* Brand Column with Logo */}
          <div className="col-lg-4 col-md-6 text-center text-md-start">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-3">
              <img 
                src={logoImage} 
                alt="CommunityCircle Logo" 
                style={{ height: '32px', objectFit: 'contain' }} 
              />
              <h5 className="fw-bold text-white mb-0">CommunityCircle</h5>
            </div>
            <p className="text-secondary small lh-lg mb-3 px-3 px-md-0">
              Building a trusted platform where professionals, entrepreneurs, and ambitious individuals connect, collaborate, and grow together.
            </p>
            <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3">
              <a href="#home" className="text-secondary text-decoration-none small hover-link">Home</a>
              <a href="#about" className="text-secondary text-decoration-none small hover-link">About</a>
              <a href="#whychooseus" className="text-secondary text-decoration-none small hover-link">Why Choose Us</a>
              <a href="#benefits" className="text-secondary text-decoration-none small hover-link">Benefits</a>
              <a href="#contact" className="text-secondary text-decoration-none small hover-link">Contact</a>
            </div>
          </div>

          {/* Quick Links with Policy Pages */}
          <div className="col-lg-3 col-md-6 text-center text-md-start">
            <h6 className="fw-bold text-white mb-3">Quick & Policies</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li><a href="#about" className="text-secondary text-decoration-none hover-link">Our Story & Values</a></li>
              <li><a href="#benefits" className="text-secondary text-decoration-none hover-link">Community Growth</a></li>
              <li><a href="#contact" className="text-secondary text-decoration-none hover-link">Privacy Policy</a></li>
              <li><a href="#contact" className="text-secondary text-decoration-none hover-link">Terms of Service</a></li>
              <li><a href="#contact" className="text-secondary text-decoration-none hover-link">Support & FAQ</a></li>
            </ul>
          </div>

          {/* Contact Details - Fully Responsive Alignment */}
          <div className="col-lg-4 col-md-6 text-center text-md-start">
            <h6 className="fw-bold text-white mb-3">Contact Details</h6>
            <div className="d-flex flex-column gap-3 small text-secondary">
              
              {/* Address */}
              <div className="d-flex align-items-start justify-content-center justify-content-md-start gap-3 px-2 px-md-0">
                <div className="bg-danger bg-opacity-10 text-danger rounded-2 p-2 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '32px', height: '32px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <span className="lh-sm text-secondary text-start" style={{ fontSize: '13px', paddingTop: '6px' }}>
                  PS. No. 8, First Floor, Beside Zackria Complex, Junction, Central Busstand, Trichy - 620001
                </span>
              </div>

              {/* Email */}
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3 px-2 px-md-0">
                <div className="bg-danger bg-opacity-10 text-danger rounded-2 p-2 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '32px', height: '32px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <span className="text-secondary text-start" style={{ fontSize: '13px' }}>hr@qifawtechnologies.com</span>
              </div>

              {/* Phone */}
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3 px-2 px-md-0">
                <div className="bg-danger bg-opacity-10 text-danger rounded-2 p-2 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '32px', height: '32px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <span className="text-secondary text-start" style={{ fontSize: '13px' }}>9965604236</span>
              </div>

            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-secondary opacity-25 my-4" />

        {/* Single Line Copyright & Qifaw Technologies Branding */}
        <div className="row text-center">
          <div className="col-12 px-3">
            <p className="text-secondary small mb-0" style={{ fontSize: '12px' }}>
              © {new Date().getFullYear()} CommunityCircle. All rights reserved. &nbsp;|&nbsp; Powered by{' '}
              <a 
                href="https://qifawtechnologies.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-danger fw-bold text-decoration-none hover-qifaw"
              >
                Qifaw Technologies
              </a>
            </p>
          </div>
        </div>

      </div>

      {/* Custom Hover Styles */}
      <style>{`
        .hover-link:hover {
          color: #dc3545 !important;
          transition: color 0.2s ease;
        }
        .hover-qifaw:hover {
          text-decoration: underline !important;
          color: #ff4d5a !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;