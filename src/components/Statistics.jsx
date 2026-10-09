import React from 'react';
import { motion } from 'framer-motion';
import { Users, UserPlus, ThumbsUp, Clock } from 'lucide-react';

const stats = [
  { icon: Users, value: "2.0 M+", label: "Accounts Managed" },
  { icon: UserPlus, value: "200+", label: "Recovery Experts" },
  { icon: ThumbsUp, value: "98%", label: "Client Satisfaction" },
  { icon: Clock, value: "24/7", label: "Support" }
];

const Statistics = () => {
  return (
    <section className="py-16 bg-black relative border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-b from-secondary to-black border border-accent-gold/20 hover:border-accent-gold/60 hover:-translate-y-2 transition-all duration-300"
            >
              <stat.icon className="text-accent-gold mb-4" size={32} />
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</h4>
              <p className="text-gray-400 text-sm uppercase tracking-wider font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
