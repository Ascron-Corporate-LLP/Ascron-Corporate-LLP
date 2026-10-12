import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Briefcase, Mail, FileText, ArrowRight, ShieldCheck, CheckCircle, Calendar } from 'lucide-react';

const ScheduleModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create FormData from the form event
    const formData = new FormData(e.target);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // Replace with actual key

    try {
      // Simulate API call for now (or use actual web3forms)
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1500);
      /*
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
        e.target.reset();
      } else {
        alert("Something went wrong!");
      }
      */
    } catch (error) {
      console.error("Error:", error);
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-[#071122] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors text-gray-300"
          >
            <X size={20} />
          </button>

          {isSubmitted ? (
            <div className="flex-1 flex flex-col items-center justify-center p-12 text-center h-[50vh]">
              <div className="w-20 h-20 bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="text-green-500" size={40} />
              </div>
              <h2 className="text-2xl font-black text-white mb-4">Request Sent Successfully!</h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto mb-8">
                Thank you for reaching out. Our business team will review your requirements and get back to you shortly.
              </p>
              <button
                onClick={resetForm}
                className="bg-[#F5A524] hover:bg-[#e0921b] text-black font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div className="p-8">
              <div className="flex items-start gap-4 mb-8 pr-8">
                 <div className="w-12 h-12 rounded-full border border-[#F5A524]/30 flex items-center justify-center text-[#F5A524] shrink-0 bg-[#F5A524]/5">
                   <Calendar size={20} />
                 </div>
                 <div className="pt-1">
                   <h4 className="text-xl font-bold text-white mb-1">Schedule Consultation</h4>
                   <p className="text-gray-400 text-xs leading-relaxed">
                     Share your details and our team will connect with you.
                   </p>
                 </div>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#F5A524] transition-colors" size={18} />
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Full Name" 
                    required 
                    className="w-full bg-[#0a1628] border border-white/10 text-gray-200 text-sm rounded-lg py-3.5 pl-11 pr-4 focus:outline-none focus:border-[#F5A524]/50 focus:bg-[#0c1c33] transition-all placeholder:text-gray-500"
                  />
                </div>
                
                <div className="relative group">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#F5A524] transition-colors" size={18} />
                  <input 
                    type="text" 
                    name="company"
                    placeholder="Company Name" 
                    required 
                    className="w-full bg-[#0a1628] border border-white/10 text-gray-200 text-sm rounded-lg py-3.5 pl-11 pr-4 focus:outline-none focus:border-[#F5A524]/50 focus:bg-[#0c1c33] transition-all placeholder:text-gray-500"
                  />
                </div>

                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#F5A524] transition-colors" size={18} />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Business Email" 
                    required 
                    className="w-full bg-[#0a1628] border border-white/10 text-gray-200 text-sm rounded-lg py-3.5 pl-11 pr-4 focus:outline-none focus:border-[#F5A524]/50 focus:bg-[#0c1c33] transition-all placeholder:text-gray-500"
                  />
                </div>

                <div className="relative group mb-2">
                  <FileText className="absolute left-4 top-3.5 text-gray-500 group-focus-within:text-[#F5A524] transition-colors" size={18} />
                  <textarea 
                    name="message"
                    placeholder="Your Requirement" 
                    rows="3"
                    required 
                    className="w-full bg-[#0a1628] border border-white/10 text-gray-200 text-sm rounded-lg py-3.5 pl-11 pr-4 focus:outline-none focus:border-[#F5A524]/50 focus:bg-[#0c1c33] transition-all placeholder:text-gray-500 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#F5A524] text-black font-bold py-3.5 px-6 rounded-lg hover:bg-[#e0921b] transition-colors flex items-center justify-center gap-2 text-sm disabled:opacity-70 shadow-[0_4px_15px_rgba(245,165,36,0.2)]"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Callback'} <ArrowRight size={16} strokeWidth={2.5} />
                </button>

                <div className="flex items-center justify-center gap-2 mt-2 text-gray-400">
                  <ShieldCheck size={14} className="text-[#F5A524]" />
                  <span className="text-xs">Your information is safe with us.</span>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ScheduleModal;
