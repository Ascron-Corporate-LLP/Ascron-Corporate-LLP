import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, MapPin, Mail, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ApplicationModal from '../components/ApplicationModal';

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openings = [
    {
      title: "Tele Caller",
      icon: PhoneCall,
      description: "We are looking for enthusiastic and persuasive Tele Callers to join our recovery team. You will be responsible for communicating with customers, negotiating settlements, and maintaining accurate records of all interactions in a professional and ethical manner.",
      type: "Full Time",
      location: "On-site"
    },
    {
      title: "Field Executive",
      icon: MapPin,
      description: "We are seeking proactive Field Executives to handle on-ground debt recovery operations. You will visit customers, ensure transparent communication, and facilitate smooth resolutions while strictly adhering to compliance and ethical guidelines.",
      type: "Full Time",
      location: "Field / On-site"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-800 font-sans selection:bg-accent-gold selection:text-black flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-40 pb-28 flex flex-col items-center justify-center min-h-[50vh]">
          {/* Background Graphic */}
          <div 
            className="absolute inset-0 z-0 grayscale opacity-90"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/80"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-accent-gold font-bold tracking-[0.3em] uppercase text-sm mb-4"
            >
              Careers at Ascron
            </motion.h3>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-6"
            >
              Join Our Team
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              Build your career with a leading player in ethical debt management. We are always looking for passionate, driven professionals to grow with us.
            </motion.p>
          </div>
        </section>

        {/* Openings Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px]">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-[#111] uppercase tracking-tight">Current Openings</h2>
              <div className="w-24 h-1 bg-accent-gold mx-auto mt-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {openings.map((job, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-accent-gold/30 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-accent-gold/10 transition-colors">
                    <job.icon className="text-[#3A454B] group-hover:text-accent-gold transition-colors" size={28} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{job.title}</h3>
                  
                  <div className="flex gap-4 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-3 py-1 rounded">
                      {job.type}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-3 py-1 rounded">
                      {job.location}
                    </span>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm mb-8">
                    {job.description}
                  </p>
                  
                  <button 
                    onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-black group-hover:text-accent-gold transition-colors"
                  >
                    Apply Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* General Application CTA */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#111] rounded-2xl p-10 md:p-16 text-center text-white relative overflow-hidden"
            >
              {/* Decorative BG element */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none"></div>

              <Mail className="mx-auto text-accent-gold mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-3xl font-bold mb-4">Don't see a fit?</h3>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto leading-relaxed">
                We are constantly expanding. Send us your resume and we will reach out if a suitable position opens up.
              </p>
              <button 
                onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}
                className="bg-accent-gold hover:bg-[#d49933] text-black font-bold py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                Submit Resume
              </button>
            </motion.div>
          </div>
        </section>

      </main>

      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  );
};

export default CareersPage;
