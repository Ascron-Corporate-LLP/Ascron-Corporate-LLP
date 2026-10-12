import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-0">
          
          {/* About Ascron */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 lg:pr-10"
          >
            <h3 className="text-[#15202b] font-bold uppercase tracking-wider mb-6 text-base sm:text-[17px]">
              ABOUT ASCRON
            </h3>
            
            <div className="space-y-4 text-[#4a5568] font-medium text-[15px] sm:text-base leading-relaxed mb-8">
              <p>
                Ascron is a professional debt recovery and collection company helping financial institutions improve recovery performance with ethical, compliant and technology-driven solutions.
              </p>
              <p>
                Our team of recovery experts, call center professionals and field executives work dedicatedly to deliver the best results while maintaining customer dignity and brand value.
              </p>
            </div>
            
            <Link to="/about" className="inline-flex items-center gap-2 bg-[#d89f3c] text-[#15202b] text-[14px] sm:text-[15px] font-bold px-7 py-3 rounded hover:bg-[#c48923] transition-colors duration-300">
              Know More About Us
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 flex flex-col lg:border-l border-[#d49933]/20 lg:px-10 mt-10 lg:mt-0"
          >
            <h3 className="text-[#15202b] font-bold uppercase tracking-wider mb-8 text-base sm:text-[17px]">
              OUR MISSION
            </h3>
            
            <div className="flex gap-5 items-center">
              <div className="w-[72px] h-[72px] rounded-full bg-[#fdf6ec] flex items-center justify-center shrink-0">
                <Target className="text-[#15202b]" size={36} strokeWidth={1.5} />
              </div>
              <p className="text-[#4a5568] font-medium leading-relaxed text-[15px] sm:text-base">
                To provide ethical, compliant and effective recovery solutions that maximize recoveries while preserving customer relationships and protecting our clients' reputation.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1 flex flex-col lg:border-l border-[#d49933]/20 lg:pl-10 mt-10 lg:mt-0"
          >
            <h3 className="text-[#15202b] font-bold uppercase tracking-wider mb-8 text-base sm:text-[17px]">
              OUR VISION
            </h3>
            
            <div className="flex gap-5 items-center">
              <div className="w-[72px] h-[72px] rounded-full bg-[#fdf6ec] flex items-center justify-center shrink-0">
                <Eye className="text-[#15202b]" size={36} strokeWidth={1.5} />
              </div>
              <p className="text-[#4a5568] font-medium leading-relaxed text-[15px] sm:text-base">
                To become one of India's most trusted and technology-driven debt recovery partners, delivering exceptional results through innovation, professionalism and operational excellence.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
