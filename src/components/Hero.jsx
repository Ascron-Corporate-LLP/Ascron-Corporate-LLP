import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Award, MapPin, Lock, Globe, TrendingUp, Users, User, ThumbsUp, Headset } from 'lucide-react';
import CountUpNumber from './CountUpNumber';

const Hero = () => {
  return (
    <>
      <section id="home" className="relative w-full lg:h-[85vh] lg:min-h-[700px] flex items-center pt-24 lg:pt-0 overflow-hidden">
        
        {/* Base Navy Background */}
        <div className="absolute inset-0 z-0 bg-[#08152c]"></div>

        {/* Slanted Image Container (Right Side) */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[55%] z-10" style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)' }}>
          <img 
            src="/PG2.jpg.jpeg" 
            alt="Corporate Team Meeting" 
            className="w-full h-full object-cover object-[70%_center]"
          />
          {/* Bottom Blue Gradient Fade */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#08152c] via-[#08152c]/60 to-transparent"></div>
        </div>

        {/* Mobile Background */}
        <div className="lg:hidden absolute inset-0 z-0">
          <img 
            src="/PG2.jpg.jpeg" 
            alt="Corporate Team Meeting" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0B132B]/90"></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#08152c] to-transparent"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-20 flex flex-col justify-center h-full py-16 lg:py-0 mt-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="text-[#d49933] font-bold tracking-widest uppercase text-xs md:text-sm mb-4">
              Welcome to Ascron
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-white leading-[1.1] mb-6">
              Smart Recovery. <br className="hidden md:block" />
              <span className="text-[#d49933]">Stronger Tomorrow.</span>
            </h1>
            
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-10 max-w-xl font-sans">
              Ascron helps Banks, NBFCs, Fintechs and Lending Institutions improve recovery performance through compliant, technology-driven and result-oriented strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a href="#services" className="bg-[#d49933] hover:bg-[#c48923] text-gray-900 font-bold py-3.5 px-8 rounded-md text-sm transition-colors inline-flex items-center justify-center gap-2 w-max">
                Our Services <ArrowRight size={18} />
              </a>
              <a href="#contact" className="bg-transparent border border-[#d49933] text-white hover:bg-white/5 font-bold py-3.5 px-8 rounded-md text-sm transition-colors inline-flex items-center justify-center gap-2 w-max">
                Contact Us <ArrowRight size={18} />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6 pr-0 sm:pr-8">
              {[
                { icon: ShieldCheck, text: "RBI Compliant", subtext: "Operations" },
                { icon: Lock, text: "Data Security &", subtext: "Confidentiality" },
                { icon: Globe, text: "Pan India", subtext: "Coverage" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <item.icon className="text-[#d49933] mt-1 shrink-0" size={24} strokeWidth={1.5} />
                  <div className="flex flex-col">
                    <span className="text-xs text-white font-bold tracking-wide">{item.text}</span>
                    <span className="text-xs text-white font-bold tracking-wide">{item.subtext}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5-Column Statistics Bar */}
      <section className="relative z-30 -mt-16 lg:-mt-24 container mx-auto px-4 md:px-6 lg:px-8 pb-8">
        <div className="bg-white rounded-lg shadow-[0_10px_40px_rgb(0,0,0,0.15)] border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-8 lg:py-10 divide-y md:divide-y-0 md:divide-x divide-[#d49933]/20">
            {[
              { value: 2.0, suffix: " M+", label: "Accounts Managed", icon: Users, decimals: 1 },
              { value: 200, suffix: "+", label: "Recovery Professionals", icon: User },
              { value: 20, suffix: "+", label: "Operational Locations", icon: MapPin },
              { value: 98, suffix: "%", label: "Client Satisfaction", icon: ThumbsUp },
              { value: 24, suffix: "/7", label: "Support", icon: Headset }
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-4 justify-center px-6 py-4 md:py-0">
                <div className="w-10 h-10 flex items-center justify-center shrink-0">
                  <stat.icon className="text-[#d49933] w-10 h-10" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-[26px] font-bold text-[#08152c] leading-none mb-1">
                    {stat.value === 24 ? "24/7" : <CountUpNumber value={stat.value} suffix={stat.suffix} decimals={stat.decimals || 0} />}
                  </h4>
                  <p className="text-gray-800 text-[11px] font-medium tracking-wide">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
