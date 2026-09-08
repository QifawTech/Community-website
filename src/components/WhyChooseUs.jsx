import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      // Trusted Connections SVG (Link / Chain Icon)
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-danger">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      ),
      title: 'Trusted Connections',
      description: 'Build valuable relationships with like-minded professionals and business owners in a trusted space.',
    },
    {
      // Growth Opportunities SVG (Trending Up / Chart Icon)
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-danger">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      ),
      title: 'Growth Opportunities',
      description: 'Discover new referrals, collaborations, partnerships, and possibilities for your business or career.',
    },
    {
      // Knowledge Sharing SVG (Lightbulb / Idea Icon)
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-danger">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
          <path d="M9 18h6"></path>
          <path d="M10 22h4"></path>
        </svg>
      ),
      title: 'Knowledge Sharing',
      description: 'Learn from the diverse experiences, ideas, and expertise of fellow members in the community.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-danger">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
          <line x1="6" y1="1" x2="6" y2="4"></line>
          <line x1="10" y1="1" x2="10" y2="4"></line>
          <line x1="14" y1="1" x2="14" y2="4"></line>
        </svg>
      ),
      title: 'A Supportive Network',
      description: 'Be part of a community that actively believes in helping, sharing, and succeeding together.',
    },
  ];

  return (
    <section className="py-5 bg-white position-relative overflow-hidden" id="whychooseus">
      <div className="container py-lg-4">
        
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5 animate-fade-in">
          <div className="col-lg-8">
            <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 rounded-pill fw-semibold mb-3 shadow-sm" style={{ fontSize: '13px' }}>
              🚀 Why Choose Us
            </span>
            <h2 className="fw-bold text-dark mb-3 lh-base" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', letterSpacing: '-0.5px' }}>
              Built to Connect. <span className="text-danger">Designed to Grow.</span>
            </h2>
            <p className="text-secondary fs-6 lh-lg">
              Our community brings together people, businesses, and opportunities in one trusted space. We make it easier to build meaningful relationships, share valuable knowledge, discover new opportunities, and grow together.
            </p>
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="row g-4">
          {reasons.map((reason, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="p-4 h-100 bg-light rounded-4 shadow-sm border border-light text-center transition-all hover-card d-flex flex-column align-items-center">
                
                {/* SVG Icon Box */}
                <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle shadow-sm p-3 mb-4" style={{ width: '65px', height: '65px' }}>
                  {reason.icon}
                </div>
                
                <h4 className="fw-bold text-dark fs-5 mb-2">{reason.title}</h4>
                <p className="text-secondary fs-6 mb-0 lh-base">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Custom Styling for Animation & Hover */}
      <style>{`
        .hover-card {
          transition: all 0.3s ease-in-out;
        }
        .hover-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(220, 53, 69, 0.08) !important;
          background-color: #fff !important;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;