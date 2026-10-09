import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex flex-col justify-center"
          >
            <h3 className="text-[#d49933] font-bold tracking-widest uppercase text-xs mb-4">
              About Ascron
            </h3>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Professional Debt Recovery & <br className="hidden lg:block" /> Collection Partner
            </h2>
            
            <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed mb-10 text-justify">
              <p>
                Ascron is a professional debt recovery and collection company helping financial institutions improve recovery performance with ethical, compliant, and technology-driven solutions.
              </p>
              <p>
                Our team of recovery experts, call center professionals, and field executives work dedicatedly to deliver the best results while maintaining customer dignity and protecting your brand value.
              </p>
            </div>
            
            <a href="#services" className="bg-corporate-navy hover:bg-black text-white font-semibold py-3.5 px-8 rounded-none text-sm transition-colors inline-flex items-center gap-2 group w-max">
              Read More 
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </motion.div>

          {/* Right Column: Team Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            {/* Decorative border frame */}
            <div className="absolute -inset-4 border border-gray-200 hidden lg:block z-0"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="Ascron Corporate Team" 
              className="w-full h-auto object-cover relative z-10 shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            
            {/* Accent box */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl z-20 border-l-4 border-[#d49933] hidden md:block">
              <p className="font-bold text-gray-900 text-xl">10+ Years</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Of Industry Trust</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
