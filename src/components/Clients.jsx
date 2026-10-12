import React from 'react';
import { motion } from 'framer-motion';

const originalPartners = [
  { name: "IDFC FIRST Bank", logoUrl: "/idfc first bank.png" },
  { name: "Poonawalla Fincorp", logoUrl: "/Poonawalla fincorp.png" },
  { name: "Aditya Birla Capital", logoUrl: "/Aditya.png" },
  { name: "Faircent", logoUrl: "/Faicent.png" },
  { name: "InCred", logoUrl: "/Incred.png" }
];

// Duplicate the array for seamless scrolling
const partners = [...originalPartners, ...originalPartners, ...originalPartners];

const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        {/* Header with lines */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-[1px] bg-gray-200 flex-1 max-w-[200px]"></div>
          <h3 className="text-gray-900 font-bold uppercase tracking-wider text-xs md:text-sm text-center">
            TRUSTED BY BANKS, NBFCs, FINTECHS & LENDING INSTITUTIONS
          </h3>
          <div className="h-[1px] bg-gray-200 flex-1 max-w-[200px]"></div>
        </div>

        {/* Continuous Scrolling Marquee */}
        <div className="relative w-full flex overflow-hidden">
          {/* Fading Edges */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

          <motion.div 
            animate={{ x: [0, -1920] }} 
            transition={{ 
              repeat: Infinity, 
              duration: 30, 
              ease: "linear" 
            }}
            className="flex gap-4 md:gap-6 min-w-max"
          >
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-100 rounded-md shadow-sm w-[150px] md:w-[180px] h-[80px] md:h-[90px] flex items-center justify-center p-4"
              >
                {partner.isTextOnly ? (
                  <span className="text-gray-900 font-bold tracking-wide text-xs md:text-sm text-center">
                    {partner.name.split(' ').map((word, i) => (
                      <React.Fragment key={i}>
                        {word} {i === 1 ? <br/> : ''}
                      </React.Fragment>
                    ))}
                  </span>
                ) : (
                  <>
                    <img 
                      src={partner.logoUrl} 
                      alt={partner.name} 
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <span className="hidden text-gray-900 font-bold text-xs text-center uppercase leading-tight">
                      {partner.name}
                    </span>
                  </>
                )}
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Clients;
