import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; 
import WhyChooseUs from './components/WhyChooseUs';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';
import JoinModal from './components/JoinModal';

function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  // வெப்சைட் லோட் ஆனவுடன் ஆட்டோமேட்டிக்காக பாப்-அப் ஓபன் ஆக
  useEffect(() => {
    // ஒருவேளை யூசர் உடனே பார்க்க வேண்டும் என்றால் உடனே அல்லது சில வினாடிகள் கழித்து ஓபன் செய்ய இதைப் பயன்படுத்தலாம்:
    const timer = setTimeout(() => {
      setIsJoinModalOpen(true);
    }, 1000); // 1 நொடி (1000ms) கழித்து ஆட்டோமேட்டிக்காக பாப்-அப் வரும்

    return () => clearTimeout(timer);
  }, []);

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
      <About />
      <WhyChooseUs />
      <Benefits />
      <Contact />
      <Footer />
      
      <JoinModal isOpen={isJoinModalOpen} onClose={handleCloseJoin} />
    </div>
  );
}

export default App;