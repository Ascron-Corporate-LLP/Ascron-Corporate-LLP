import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, MapPin, Headset, BarChart2, Lock, Sliders } from 'lucide-react';

const features = [
  { icon: ShieldCheck, title: "RBI Compliant\nOperations" },
  { icon: Cpu, title: "Technology\nEnabled" },
  { icon: MapPin, title: "Pan India\nField Network" },
  { icon: Headset, title: "Dedicated\nCall Center" },
  { icon: BarChart2, title: "Real-Time\nReporting" },
  { icon: Lock, title: "Data Security &\nConfidentiality" },
  { icon: Sliders, title: "Customized\nRecovery\nStrategies" }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-16 bg-[#08152c]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="text-center mb-16 px-4">
          <h2 className="text-[#d89f3c] font-semibold text-xl md:text-2xl lg:text-[26px] leading-relaxed uppercase tracking-[0.1em] whitespace-nowrap overflow-hidden text-ellipsis sm:whitespace-normal">
            Why Leading Financial Institutions Choose Ascron
          </h2>
          <div className="w-12 h-[2px] bg-[#d89f3c] mx-auto mt-6"></div>
        </div>

        <div className="flex flex-wrap justify-center lg:flex-nowrap lg:justify-between gap-y-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col items-center text-center w-1/2 md:w-1/4 lg:w-auto lg:flex-1 ${index !== features.length - 1 ? 'lg:border-r border-white/10' : ''} px-2`}
            >
              <div className="mb-6 h-12 flex items-center justify-center">
                <feature.icon className="text-[#d49933]" size={42} strokeWidth={1.5} />
              </div>
              <h4 className="text-white font-bold text-[15px] sm:text-base leading-snug tracking-wide whitespace-pre-line">
                {feature.title}
              </h4>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
