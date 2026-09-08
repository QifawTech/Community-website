import React from 'react';

const Benefits = () => {
  const benefitsList = [
    {
      step: '01',
      title: 'Expand Your Network',
      description: 'Meet professionals, entrepreneurs, and business owners who can open new possibilities.',
    },
    {
      step: '02',
      title: 'Discover Opportunities',
      description: 'Find referrals, partnerships, collaborations, and business opportunities.',
    },
    {
      step: '03',
      title: 'Learn & Share',
      description: 'Exchange knowledge, ideas, experience, and valuable insights with fellow members.',
    },
    {
      step: '04',
      title: 'Grow Your Business',
      description: 'Build meaningful relationships that can lead to new customers, partnerships, and growth.',
    },
    {
      step: '05',
      title: 'Get Recognized',
      description: 'Share your achievements, milestones, and success stories with the community.',
    },
    {
      step: '06',
      title: 'Grow Together',
      description: 'Be part of a supportive network where every connection creates value.',
    },
  ];

  return (
    <section className="py-5 bg-white position-relative overflow-hidden" id="benefits">
      <div className="container py-lg-5">
        
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 rounded-pill fw-semibold mb-3 shadow-sm" style={{ fontSize: '13px' }}>
              🌟 Community Benefits
            </span>
            <h2 className="fw-bold text-dark mb-3 lh-base" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', letterSpacing: '-0.5px' }}>
              More Connections. More Opportunities. <span className="text-danger">More Growth.</span>
            </h2>
            <p className="text-secondary fs-6 lh-lg">
              Follow the journey of growth, connection, and success within our community.
            </p>
          </div>
        </div>

        {/* Horizontal Timeline Layout (No Boxes, Clean Flow with Animated Line) */}
        <div className="position-relative py-4">
          
          {/* Background Horizontal Connecting Line with Animation */}
          <div 
            className="position-absolute top-50 start-0 end-0 translate-middle-y d-none d-lg-block timeline-horizontal-line"
            style={{ height: '3px', zIndex: 0 }}
          ></div>

          <div className="row g-4 position-relative z-1">
            {benefitsList.map((benefit, index) => (
              <div className="col-md-6 col-lg-4 text-center px-4" key={index}>
                
                {/* Timeline Step Circle Node */}
                <div className="d-inline-flex align-items-center justify-content-center bg-white border border-danger text-danger rounded-circle shadow-sm fw-bold mb-3 timeline-node" style={{ width: '55px', height: '55px', fontSize: '16px' }}>
                  {benefit.step}
                </div>

                {/* Content Without Box */}
                <h4 className="fw-bold text-dark fs-5 mb-2">{benefit.title}</h4>
                <p className="text-secondary fs-6 mb-0 lh-base">
                  {benefit.description}
                </p>

              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Custom Styles for Horizontal Line Animation & Hover Effects */}
      <style>{`
        /* Animated Horizontal Line */
        .timeline-horizontal-line {
          background: linear-gradient(to right, #dc3545, rgba(220, 53, 69, 0.2), #dc3545);
          background-size: 200% 100%;
          animation: moveHorizontalLine 4s linear infinite;
        }
        @keyframes moveHorizontalLine {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }

        /* Node Hover Effects */
        .timeline-node {
          transition: all 0.3s ease-in-out;
        }
        .col-lg-4:hover .timeline-node {
          background-color: #dc3545 !important;
          color: #fff !important;
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(220, 53, 69, 0.4) !important;
        }
      `}</style>
    </section>
  );
};

export default Benefits;