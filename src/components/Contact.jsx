import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ShieldCheck, MapPin, Lock, Users, BarChart3, Target, 
  Calendar, User, Briefcase, Mail, FileText, Building2 
} from 'lucide-react';
import IndiaMap from './IndiaMap';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create FormData from the form event
    const formData = new FormData(e.target);
    
    // ! IMPORTANT: Replace 'YOUR_ACCESS_KEY_HERE' with your actual Web3Forms Access Key
    
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setIsSubmitted(true);
        e.target.reset(); // Clear the form
      } else {
        console.error("Error:", data);
        alert("Something went wrong! Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong! Please check your internet and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    { icon: <ShieldCheck size={20} />, title: 'RBI Compliant Operations', desc: 'We follow strict regulatory guidelines and ethical collection practices.' },
    { icon: <Lock size={20} />, title: 'Data Security & Confidentiality', desc: 'Bank-grade security protocols to protect your sensitive data.' },
    { icon: <Users size={20} />, title: 'Dedicated Recovery Teams', desc: 'Skilled professionals focused on maximizing recoveries.' },
    { icon: <BarChart3 size={20} />, title: 'Technology Driven Collections', desc: 'Advanced tools and analytics for efficient and transparent processes.' },
  ];

  return (
    <section id="contact" className="bg-[#030914] pt-10 pb-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1500px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.1fr_1.3fr] gap-10 lg:gap-12">
          
          {/* Column 1: Info & Features */}
          <div className="flex flex-col">
            <h4 className="text-[#F5A524] font-bold text-[12px] md:text-[13px] tracking-[0.2em] mb-4 uppercase">LET'S WORK TOGETHER</h4>
            <h3 className="text-[34px] lg:text-[42px] font-bold text-white mb-6 leading-[1.15]">
              Let's Build Stronger Recovery Outcomes Together
            </h3>
            <p className="text-gray-400 text-[14px] md:text-[15px] leading-relaxed mb-10 pr-4">
              Partner with Ascron for ethical, compliant, and performance-driven recovery solutions across India.
            </p>
            
            <div className="flex flex-col mb-10 border-t border-white/5 mt-2">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-5 py-5 border-b border-white/5">
                  <div className="w-12 h-12 rounded-full bg-[#0a1628] flex items-center justify-center text-[#F5A524] shrink-0 border border-[#F5A524]/20 shadow-[0_0_10px_rgba(245,165,36,0.05)]">
                    {item.icon}
                  </div>
                  <div className="pt-1">
                    <h5 className="text-gray-200 font-bold text-[14px] md:text-[15px] mb-1.5">{item.title}</h5>
                    <p className="text-gray-400 text-[13px] leading-relaxed pr-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a 
              href="/reach"
              className="w-full bg-[#F5A524] text-black font-bold py-4 px-6 rounded hover:bg-[#e0921b] transition-colors flex items-center justify-center gap-2 text-[14px] md:text-[15px]"
            >
              Schedule Consultation <ArrowRight size={18} strokeWidth={2.5} />
            </a>
          </div>

          {/* Column 2: Form */}
          <div className="bg-[#071122] border border-white/5 p-6 lg:p-8 rounded-xl shadow-2xl relative h-fit lg:mt-4">
            <div className="flex items-start gap-5 mb-8">
               <div className="w-[56px] h-[56px] rounded-full border border-[#F5A524]/30 flex items-center justify-center text-[#F5A524] shrink-0 bg-[#F5A524]/5">
                 <Calendar size={24} />
               </div>
               <div className="pt-1">
                 <h4 className="text-[19px] md:text-[21px] font-bold text-white mb-2">Request a Business Consultation</h4>
                 <p className="text-gray-400 text-[13px] md:text-[14px] leading-relaxed pr-2">
                   Share your details and our team will connect with you to understand your requirements.
                 </p>
               </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#F5A524] transition-colors" size={20} />
                <input 
                  type="text" 
                  name="name"
                  placeholder="Full Name" 
                  required 
                  className="w-full bg-[#0a1628] border border-white/10 text-gray-200 text-[14px] md:text-[15px] rounded-lg py-4 pl-12 pr-4 focus:outline-none focus:border-[#F5A524]/50 focus:bg-[#0c1c33] transition-all placeholder:text-gray-500"
                />
              </div>
              
              <div className="relative group">
                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#F5A524] transition-colors" size={20} />
                <input 
                  type="text" 
                  name="company"
                  placeholder="Company Name" 
                  required 
                  className="w-full bg-[#0a1628] border border-white/10 text-gray-200 text-[14px] md:text-[15px] rounded-lg py-4 pl-12 pr-4 focus:outline-none focus:border-[#F5A524]/50 focus:bg-[#0c1c33] transition-all placeholder:text-gray-500"
                />
              </div>

              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#F5A524] transition-colors" size={20} />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Business Email" 
                  required 
                  className="w-full bg-[#0a1628] border border-white/10 text-gray-200 text-[14px] md:text-[15px] rounded-lg py-4 pl-12 pr-4 focus:outline-none focus:border-[#F5A524]/50 focus:bg-[#0c1c33] transition-all placeholder:text-gray-500"
                />
              </div>

              <div className="relative group mb-3">
                <FileText className="absolute left-4 top-4 text-gray-500 group-focus-within:text-[#F5A524] transition-colors" size={20} />
                <textarea 
                  name="message"
                  placeholder="Your Requirement" 
                  rows="4"
                  required 
                  className="w-full bg-[#0a1628] border border-white/10 text-gray-200 text-[14px] md:text-[15px] rounded-lg py-4 pl-12 pr-4 focus:outline-none focus:border-[#F5A524]/50 focus:bg-[#0c1c33] transition-all placeholder:text-gray-500 resize-none"
                ></textarea>
                <span className="text-gray-500 text-[11.5px] absolute -bottom-5 left-2">Tell us about your requirement</span>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full mt-2 bg-[#F5A524] text-black font-bold py-4 px-6 rounded hover:bg-[#e0921b] transition-colors flex items-center justify-center gap-2 text-[14px] md:text-[15px] disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_4px_15px_rgba(245,165,36,0.2)]"
              >
                {isSubmitting ? 'Submitting...' : isSubmitted ? 'Request Sent!' : 'Request Callback'} <ArrowRight size={18} strokeWidth={2.5} />
              </button>

              <div className="flex items-center gap-2 mt-2 text-gray-400">
                <ShieldCheck size={16} className="text-[#F5A524]" />
                <span className="text-[12px] md:text-[13px]">We respect your privacy. Your information is safe with us.</span>
              </div>
            </form>
          </div>

          {/* Column 3: Map & Stats */}
          <div className="flex flex-col lg:pl-8">
            <h4 className="text-[#F5A524] font-bold text-[12px] md:text-[13px] tracking-[0.2em] mb-4 uppercase">PAN INDIA PRESENCE</h4>
            <h3 className="text-[24px] md:text-[28px] font-bold text-white mb-3 leading-tight">200+ Recovery Professionals Across India</h3>
            <p className="text-gray-400 text-[14px] md:text-[15px] mb-10">Serving Banks, NBFCs & Fintech Companies</p>
            
            <div className="flex-1 w-full relative min-h-[400px] flex items-center justify-center">
              <IndiaMap />
            </div>

          </div>

        </div>
      </div>
      
          </section>
  );
};

export default Contact;
