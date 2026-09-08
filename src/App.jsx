import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; // <-- இங்கே About என்று மாற்றப்பட்டுள்ளது
import WhyChooseUs from './components/WhyChooseUs';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';
import JoinModal from './components/JoinModal';

function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  const handleOpenJoin = () => {
    setIsJoinModalOpen(true);
  };

  const handleCloseJoin = () => {
    setIsJoinModalOpen(false);
  };

  return (
    <div className="min-vh-100 bg-white position-relative">
      <Navbar onOpenJoin={handleOpenJoin} />
      <Hero onOpenJoin={handleOpenJoin} />
      <About /> {/* <-- இங்கே காம்பொனென்ட் பெயரும் About என மாற்றப்பட்டுள்ளது */}
      <WhyChooseUs />
      <Benefits />
      <Contact />
      <Footer />
      
      <JoinModal isOpen={isJoinModalOpen} onClose={handleCloseJoin} />
    </div>
  );
}

export default App;