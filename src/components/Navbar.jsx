import React, { useState, useEffect } from 'react';
import logoImage from '../assets/Logo.png';

const Navbar = ({ onOpenJoin }) => {
  const [activeItem, setActiveItem] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Why Choose Us', 'Benefits', 'Contact'];

  // Scroll Spy: Page-ஐ ஸ்க்ரோல் செய்யும்போது எந்த செக்ஷனில் இருக்கிறோம் என்று ஆட்டோமேட்டிக்காகக் கண்டுபிடிக்கும்
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => {
        const id = item.toLowerCase().replace(/\s+/g, '');
        const element = document.getElementById(id) || document.getElementById('home');
        return {
          item,
          offset: element ? element.offsetTop - 150 : 0,
        };
      });

      const scrollPosition = window.scrollY;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offset) {
          setActiveItem(sections[i].item);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div 
        className="container-fluid py-3 sticky-top w-100" 
        style={{ 
          top: '0', 
          zIndex: 1050, 
          backgroundColor: 'rgba(255, 255, 255, 0.85)', 
          backdropFilter: 'blur(10px)' 
        }}
      >
        <div className="container px-2">
          
          {/* Responsive Navbar Box */}
          <div className="d-flex align-items-center justify-content-between px-3 px-md-4 py-2 py-md-3 bg-dark rounded-pill shadow-lg w-100" style={{ maxWidth: '900px', margin: '0 auto' }}>
            
            {/* Professional Logo & Brand Name */}
            <a href="#home" className="d-flex align-items-center gap-2 text-decoration-none flex-shrink-0">
              <img 
                src={logoImage} 
                alt="Logo" 
                className="rounded-circle bg-white p-1 object-fit-cover shadow-sm"
                style={{ width: '38px', height: '38px' }} 
              />
              <span className="text-white fw-bold fs-6 tracking-wide d-none d-sm-inline" style={{ letterSpacing: '0.3px' }}>
                Gen<span className="text-danger">Founders</span>
              </span>
              <span className="text-white fw-bold fs-6 tracking-wide d-sm-none" style={{ letterSpacing: '0.3px' }}>
                CC
              </span>
            </a>

            {/* Desktop Nav Links */}
            <div className="d-none d-lg-flex align-items-center gap-3 position-relative">
              {navItems.map((item) => {
                const isActive = activeItem === item;
                const linkId = `#${item.toLowerCase().replace(/\s+/g, '')}`;

                return (
                  <a
                    key={item}
                    href={linkId}
                    onClick={() => setActiveItem(item)}
                    className="text-decoration-none position-relative px-2 py-2 d-flex flex-column align-items-center nav-link-item"
                    style={{ cursor: 'pointer', whiteSpace: 'nowrap' }}
                  >
                    {isActive && (
                      <>
                        <span 
                          className="position-absolute top-0 start-50 translate-middle-x bg-danger rounded-pill shadow-sm animate-indicator"
                          style={{ width: '20px', height: '3px', boxShadow: '0 0 8px #ff4d4d' }}
                        ></span>
                        <span 
                          className="position-absolute start-50 translate-middle-x pointer-event-none animate-indicator"
                          style={{
                            top: '3px',
                            width: '40px',
                            height: '30px',
                            background: 'linear-gradient(to bottom, rgba(255, 77, 77, 0.3) 0%, rgba(255, 77, 77, 0) 100%)',
                            clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)',
                            filter: 'blur(3px)',
                            zIndex: 1
                          }}
                        ></span>
                      </>
                    )}
                    <span 
                      className={`position-relative z-2 fw-medium transition-all ${isActive ? 'text-danger' : 'text-light opacity-75'}`}
                      style={{ fontSize: '13px', textShadow: isActive ? '0 0 6px rgba(255, 77, 77, 0.8)' : 'none', transition: 'color 0.3s ease' }}
                    >
                      {item}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Right Section: Join Button & Mobile Toggle */}
            <div className="d-flex align-items-center gap-2">
              <button
                onClick={onOpenJoin}
                className="btn btn-danger btn-sm px-3 py-1.5 rounded-pill fw-semibold shadow-sm text-nowrap"
                style={{ fontSize: '12px' }}
              >
                Join Community
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="btn btn-dark text-white d-lg-none border-0 p-1 fs-5 shadow-none d-flex align-items-center justify-content-center"
                aria-label="Toggle navigation"
                style={{ width: '38px', height: '38px' }}
              >
                ☰
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Backdrop Overlay for Left Mobile Drawer */}
      {isMobileMenuOpen && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 bg-black opacity-50 animate-fade-in"
          style={{ zIndex: 2000, backdropFilter: 'blur(3px)' }}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Left-Side Sliding Clean Mobile Drawer */}
      <div 
        className={`position-fixed top-0 start-0 h-100 bg-dark text-white shadow-lg d-lg-none ${isMobileMenuOpen ? 'show' : ''}`}
        style={{ 
          width: '280px', 
          zIndex: 2100, 
          transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease-in-out'
        }}
      >
        <div className="p-4 d-flex flex-column h-100">
          
          {/* Drawer Header with Logo & Close Button */}
          <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom border-secondary border-opacity-25">
            <div className="d-flex align-items-center gap-2">
              <img 
                src={logoImage} 
                alt="Logo" 
                className="rounded-circle bg-white p-1 object-fit-cover shadow-sm"
                style={{ width: '32px', height: '32px' }} 
              />
              <span className="text-white fw-bold fs-6">
                Gen<span className="text-danger">Founders</span>
              </span>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn btn-sm btn-outline-light rounded-circle p-0 d-flex align-items-center justify-content-center border-0 bg-secondary bg-opacity-25"
              style={{ width: '32px', height: '32px' }}
            >
              ✕
            </button>
          </div>

          {/* Clean Drawer Links */}
          <div className="d-flex flex-column gap-2 flex-grow-1">
            {navItems.map((item) => {
              const isActive = activeItem === item;
              const linkId = `#${item.toLowerCase().replace(/\s+/g, '')}`;
              return (
                <a
                  key={item}
                  href={linkId}
                  onClick={() => {
                    setActiveItem(item);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-decoration-none py-2.5 px-3 rounded-3 fw-medium d-flex align-items-center justify-content-between ${isActive ? 'text-white bg-danger shadow-sm' : 'text-light hover-bg'}`}
                  style={{ fontSize: '14px', transition: 'all 0.2s ease' }}
                >
                  <span>{item}</span>
                  {isActive && <span>📍</span>}
                </a>
              );
            })}
          </div>

          {/* Drawer Footer CTA */}
          <div className="pt-3 border-top border-secondary border-opacity-25">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenJoin();
              }}
              className="btn btn-danger w-100 py-2.5 rounded-pill fw-semibold shadow-sm text-white"
              style={{ fontSize: '13px' }}
            >
              Join Community 🚀
            </button>
          </div>

        </div>
      </div>

      {/* Global CSS for Smooth Scrolling and Drawer Animations */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        @keyframes fadeInIndicator {
          from {
            opacity: 0;
            transform: translate(-50%, -4px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        .animate-indicator {
          animation: fadeInIndicator 0.3s ease-in-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.25s ease-out forwards;
        }
        .hover-bg:hover {
          background-color: rgba(255, 255, 255, 0.05);
          color: #fff !important;
        }
      `}</style>
    </>
  );
};

export default Navbar;