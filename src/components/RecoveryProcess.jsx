import React from 'react';
import { motion } from 'framer-motion';
import { FolderCheck, Users, Phone, UserSearch, Handshake, BarChart3, ArrowRight, ArrowDown } from 'lucide-react';

const steps = [
  { id: 1, title: 'Portfolio\nAllocation', icon: FolderCheck },
  { id: 2, title: 'Customer\nSegmentation', icon: Users },
  { id: 3, title: 'Digital\nOutreach', icon: Phone },
  { id: 4, title: 'Field Investigation\n& Verification', icon: UserSearch },
  { id: 5, title: 'Collection\nResolution', icon: Handshake },
  { id: 6, title: 'Reporting &\nClosure', icon: BarChart3 }
];

const RecoveryProcess = () => {
  return (
    <section className="py-20 bg-[#F9FAFB] border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-[#d89f3c] font-semibold text-xl md:text-2xl lg:text-[26px] leading-relaxed uppercase tracking-[0.1em] whitespace-nowrap overflow-hidden text-ellipsis sm:whitespace-normal">
            OUR RECOVERY PROCESS
          </h2>
          <div className="w-12 h-[2px] bg-[#d89f3c] mx-auto mt-6"></div>
        </div>

        {/* Process Steps */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-6 w-full">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Step */}
              <motion.div 
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 120,
                  damping: 15
                }}
                className="flex flex-col items-center w-full md:w-[160px] text-center shrink-0"
              >
                <div className="w-[100px] h-[100px] rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] mb-6 transition-transform duration-300 hover:scale-110">
                  <step.icon size={42} className="text-[#08152c]" strokeWidth={1.5} />
                </div>
                <span className="text-[#08152c] font-black text-lg mb-2">{step.id}</span>
                <h4 className="text-[#4a5568] font-bold text-[15px] sm:text-base leading-snug whitespace-pre-line">
                  {step.title}
                </h4>
              </motion.div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <motion.div 
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index * 0.15) + 0.3 }}
                  className="flex text-[#d89f3c] my-4 md:my-0 md:-mt-16 shrink-0"
                >
                  <motion.div
                     animate={{ x: [0, 5, 0] }}
                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight size={28} strokeWidth={2.5} className="hidden md:block opacity-90" />
                  </motion.div>
                  <ArrowDown size={28} strokeWidth={2.5} className="md:hidden opacity-90" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecoveryProcess;
