import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import RecoveryProcess from '../components/RecoveryProcess';
import WhyChooseUs from '../components/WhyChooseUs';
import AboutSection from '../components/AboutSection';
import AnalysisOverview from '../components/AnalysisOverview';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  // Smooth scroll handler for anchor links
  useEffect(() => {
    // Scroll to hash if present on load (e.g., coming from another page)
    if (window.location.hash) {
      setTimeout(() => {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      }, 100);
    }

    const handleAnchorClick = function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('/#')) {
        const targetId = href.substring(1); // Remove the '/' to get just '#section'
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          window.history.pushState(null, '', href);
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    document.querySelectorAll('a[href^="/#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('a[href^="/#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-accent-gold selection:text-black">
      <Header />
      <main>
        <Hero />
        <Services />
        <RecoveryProcess />
        <WhyChooseUs />
        <AboutSection />
        <AnalysisOverview />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
