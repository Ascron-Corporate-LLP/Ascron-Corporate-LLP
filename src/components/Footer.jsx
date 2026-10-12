import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#08152c] py-6 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <a href="#home" className="flex items-center gap-2">
              <img src="/tile logo.png" alt="Ascron Logo" className="h-8 md:h-10 w-auto object-contain filter brightness-0 invert" onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }} />
              <div className="hidden items-center" style={{ display: 'none' }}>
                <span className="text-xl font-bold text-white tracking-wider">ascron</span>
                <span className="text-accent-gold ml-1 text-xl font-bold">.</span>
              </div>
            </a>
          </div>

          {/* Copyright text */}
          <div className="text-center md:absolute md:left-1/2 md:-translate-x-1/2">
            <p className="text-gray-400 text-xs">
              &copy; 2026 Ascron. All Rights Reserved.
            </p>
          </div>

          {/* Links & Socials */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs text-gray-400 mt-2 md:mt-0">
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="text-[#d49933] font-bold">|</span>
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            </div>

            <div className="flex items-center gap-3 ml-4">
              <a href="#" className="w-7 h-7 rounded-full border border-gray-500 text-gray-400 flex items-center justify-center hover:border-white hover:text-white transition-colors">
                {/* LinkedIn SVG */}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-7 h-7 rounded-full border border-gray-500 text-gray-400 flex items-center justify-center hover:border-white hover:text-white transition-colors">
                {/* Facebook SVG */}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-7 h-7 rounded-full border border-gray-500 text-gray-400 flex items-center justify-center hover:border-white hover:text-white transition-colors">
                {/* Instagram SVG */}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
