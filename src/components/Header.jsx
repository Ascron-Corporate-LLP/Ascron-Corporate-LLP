import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About Us', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Why Choose Us', href: '/#why-us' },
    { name: 'Our Clients', href: '/#clients' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact Us', href: '/#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-gray-100 ${
        isScrolled ? 'py-2 shadow-md' : 'py-3'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/#home" className="flex items-center">
            <img src="/A-Logo.png" alt="Ascron Logo" className="h-9 md:h-10 w-auto object-contain" onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }} />
            <div className="hidden items-center" style={{ display: 'none' }}>
              <span className="text-2xl font-bold text-gray-900 tracking-wider ">ascron</span>
              <span className="text-accent-gold ml-1 text-2xl font-bold">.</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center lg:space-x-8 md:space-x-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[13px] lg:text-[15px] font-bold transition-all ${link.name === 'Home' ? 'text-accent-gold border-b-[3px] border-accent-gold pb-[6px]' : 'text-gray-900 hover:text-accent-gold'}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a href="/#contact" className="bg-transparent border-2 border-accent-gold hover:bg-accent-gold/10 text-gray-900 font-bold text-[14px] py-2 px-6 rounded-md transition-colors flex items-center gap-2">
              Get In Touch <ArrowRight size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 mt-3 shadow-lg"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-900 hover:text-accent-gold transition-colors text-sm font-bold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="/#contact" className="bg-transparent border-2 border-accent-gold hover:bg-accent-gold/10 text-gray-900 font-bold text-sm py-2.5 px-6 rounded-md transition-colors text-center w-full mt-4 flex items-center justify-center gap-2">
                Get In Touch <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
