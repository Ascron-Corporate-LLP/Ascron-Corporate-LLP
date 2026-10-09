import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="py-20 bg-primary relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-10 flex flex-col items-center text-center group"
          >
            <div className="w-20 h-20 rounded-full bg-black border border-accent-gold/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:border-accent-gold shadow-lg shadow-black">
              <Target className="text-accent-gold" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-widest">Our Mission</h3>
            <div className="w-12 h-1 bg-accent-gold mb-6"></div>
            <p className="text-gray-300 leading-relaxed text-lg">
              To provide ethical, compliant, and effective recovery solutions that maximize recoveries while preserving customer relationships and protecting our clients' reputation.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-10 flex flex-col items-center text-center group"
          >
            <div className="w-20 h-20 rounded-full bg-black border border-accent-gold/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:border-accent-gold shadow-lg shadow-black">
              <Eye className="text-accent-gold" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-widest">Our Vision</h3>
            <div className="w-12 h-1 bg-accent-gold mb-6"></div>
            <p className="text-gray-300 leading-relaxed text-lg">
              To become one of India's most trusted and technology-driven debt recovery partners, delivering exceptional results through innovation, professionalism, and operational excellence.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
