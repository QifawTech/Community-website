import React from 'react';
import heroImage from '../assets/team.jpg'; // உன்னோட லோக்கல் இமேஜ் ஃபைல் பெயர்

const Hero = ({ onOpenJoin }) => {
  return (
    <section className="py-4 py-md-5 bg-white overflow-hidden position-relative" id="home">
      
      {/* Background Subtle Gradient Blobs */}
      <div 
        className="position-absolute top-0 start-0 translate-middle-y rounded-circle opacity-50 pointer-event-none d-none d-md-block"
        style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(220,53,69,0.08) 0%, rgba(255,255,255,0) 70%)', zIndex: 0 }}
      ></div>

      <div className="container py-lg-4 position-relative z-1">
        <div className="row align-items-center justify-content-between g-5">
          
          {/* Left Side: Modern Typography & Buttons */}
          <div className="col-lg-6 text-center text-lg-start">
            
            {/* Animated Badge */}
            <div className="d-inline-flex align-items-center gap-2 bg-danger bg-opacity-10 text-danger px-3 py-2 rounded-pill fw-semibold mb-3 mb-md-4 shadow-sm" style={{ fontSize: '13px' }}>
              <span className="badge bg-danger rounded-circle p-1"></span>
              Welcome to CommunityCircle 🚀
            </div>

            {/* Main Title - Fully Responsive */}
            <h1 className="fw-bold text-dark mb-3 mb-md-4 lh-base" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.5px' }}>
              Connect, Learn & Grow With <span className="text-danger">Like-Minded</span> People
            </h1>

            {/* Description */}
            <p className="text-secondary fs-6 mb-4 mb-md-5 lh-lg mx-auto mx-lg-0" style={{ maxWidth: '500px' }}>
              A vibrant platform built for creators, developers, and tech enthusiasts. Share knowledge, collaborate on real-world projects, and accelerate your career growth together.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="d-flex flex-sm-row flex-column justify-content-center justify-content-lg-start gap-3">
              <button
                onClick={onOpenJoin}
                className="btn btn-danger px-4 py-3 rounded-pill fw-semibold shadow-lg text-white"
                style={{ 
                  transition: 'all 0.3s ease',
                  background: 'linear-gradient(135deg, #dc3545 0%, #b02a37 100%)',
                  border: 'none',
                  fontSize: '15px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 10px 25px rgba(220, 53, 69, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0px)';
                  e.target.style.boxShadow = '0 4px 15px rgba(220, 53, 69, 0.2)';
                }}
              >
                Join Community Now ✨
              </button>

              <a
                href="#about"
                className="btn btn-outline-dark px-4 py-3 rounded-pill fw-semibold"
                style={{ transition: 'all 0.3s ease', fontSize: '15px' }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.backgroundColor = '#212529';
                  e.target.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0px)';
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#212529';
                }}
              >
                Explore More ↓
              </a>
            </div>

          </div>

          {/* Right Side: Responsive Floating Image Card */}
          <div className="col-lg-6 text-center">
            <div className="position-relative d-inline-block w-100" style={{ maxWidth: '480px' }}>
              
              {/* Glowing Background Blur */}
              <div 
                className="position-absolute top-50 start-50 translate-middle rounded-circle d-none d-sm-block"
                style={{ 
                  width: '280px', 
                  height: '280px', 
                  background: 'rgba(220, 53, 69, 0.15)', 
                  filter: 'blur(50px)', 
                  zIndex: 0 
                }}
              ></div>
              
              {/* Local Image with Floating Effect */}
              <div 
                className="p-2 bg-white rounded-4 rounded-md-5 shadow-lg position-relative z-1 border border-light"
                style={{
                  animation: 'floatImage 4s ease-in-out infinite',
                }}
              >
                <img 
                  src={heroImage} 
                  alt="Community Hero" 
                  className="img-fluid rounded-3 rounded-md-4 object-fit-cover w-100"
                  style={{ height: 'auto', maxHeight: '360px' }}
                />
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Inline CSS Animation for Floating Effect */}
      <style>{`
        @keyframes floatImage {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;