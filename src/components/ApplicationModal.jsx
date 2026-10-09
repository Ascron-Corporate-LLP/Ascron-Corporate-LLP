import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, UploadCloud, CheckCircle } from 'lucide-react';

const ApplicationModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
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
          className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors text-gray-600"
          >
            <X size={20} />
          </button>

          {isSubmitted ? (
            <div className="flex-1 flex flex-col items-center justify-center p-12 text-center h-[50vh]">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="text-green-600" size={40} />
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">Application Submitted Successfully!</h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto mb-8">
                Thank you for applying to Ascron Corporate LLP. Our recruitment team will review your application and contact you if your profile is shortlisted.
              </p>
              <button
                onClick={resetForm}
                className="bg-[#111] hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="bg-[#111] text-white p-8 md:p-10 shrink-0">
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#d49933] mb-3">
                  Join Ascron – Build Your Career With Us
                </h2>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl">
                  Explore opportunities with Ascron Corporate LLP and become part of a growing team in collection, recovery, operations, MIS, telecalling, and field services.
                </p>
              </div>

              {/* Form Body */}
              <div className="flex-1 overflow-y-auto p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Personal Details */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2 mb-6">Personal Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                        <input type="text" required className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:border-[#d49933] focus:ring-1 focus:ring-[#d49933] transition-colors" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Mobile Number *</label>
                        <input type="tel" required className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:border-[#d49933] focus:ring-1 focus:ring-[#d49933] transition-colors" placeholder="+91 XXXXX XXXXX" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                        <input type="email" className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:border-[#d49933] focus:ring-1 focus:ring-[#d49933] transition-colors" placeholder="john@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Location / City *</label>
                        <input type="text" required className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:border-[#d49933] focus:ring-1 focus:ring-[#d49933] transition-colors" placeholder="Your City" />
                      </div>
                    </div>
                  </div>

                  {/* Professional Details */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2 mb-6">Professional Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-gray-700 mb-2">Position Applying For *</label>
                        <select required className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:border-[#d49933] focus:ring-1 focus:ring-[#d49933] transition-colors appearance-none">
                          <option value="">Select a position...</option>
                          <option value="Collection Executive">Collection Executive</option>
                          <option value="Field Collection Executive">Field Collection Executive</option>
                          <option value="Telecaller">Telecaller</option>
                          <option value="Team Leader">Team Leader</option>
                          <option value="Assistant Collection Manager">Assistant Collection Manager</option>
                          <option value="Collection Agency Manager">Collection Agency Manager</option>
                          <option value="MIS Executive">MIS Executive</option>
                          <option value="Data Analyst">Data Analyst</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Total Experience</label>
                        <input type="text" className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:border-[#d49933] focus:ring-1 focus:ring-[#d49933] transition-colors" placeholder="e.g., 5 years" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Relevant Experience</label>
                        <input type="text" className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:border-[#d49933] focus:ring-1 focus:ring-[#d49933] transition-colors" placeholder="e.g., 3 years in Collection" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Current/Previous Company</label>
                        <input type="text" className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:border-[#d49933] focus:ring-1 focus:ring-[#d49933] transition-colors" placeholder="Company Name" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Highest Qualification</label>
                        <input type="text" className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:border-[#d49933] focus:ring-1 focus:ring-[#d49933] transition-colors" placeholder="e.g., Graduation / MBA" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Expected Salary</label>
                        <input type="text" className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:border-[#d49933] focus:ring-1 focus:ring-[#d49933] transition-colors" placeholder="e.g., ₹3 LPA" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Notice Period</label>
                        <input type="text" className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:border-[#d49933] focus:ring-1 focus:ring-[#d49933] transition-colors" placeholder="e.g., 15 Days / Immediate" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Location</label>
                        <input type="text" className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:border-[#d49933] focus:ring-1 focus:ring-[#d49933] transition-colors" placeholder="e.g., Patna" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Languages Known</label>
                        <input type="text" className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:border-[#d49933] focus:ring-1 focus:ring-[#d49933] transition-colors" placeholder="e.g., English, Hindi" />
                      </div>
                    </div>
                  </div>

                  {/* Requirements & Upload */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2 mb-6">Additional Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">DRA Certification</label>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="dra" className="w-4 h-4 text-[#d49933] focus:ring-[#d49933]" />
                            <span className="text-gray-700">Yes</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="dra" className="w-4 h-4 text-[#d49933] focus:ring-[#d49933]" />
                            <span className="text-gray-700">No</span>
                          </label>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">Two-Wheeler Available</label>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="twowheeler" className="w-4 h-4 text-[#d49933] focus:ring-[#d49933]" />
                            <span className="text-gray-700">Yes</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="twowheeler" className="w-4 h-4 text-[#d49933] focus:ring-[#d49933]" />
                            <span className="text-gray-700">No</span>
                          </label>
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-gray-700 mb-2">Resume Upload *</label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors relative cursor-pointer">
                          <div className="space-y-1 text-center">
                            <UploadCloud className="mx-auto h-10 w-10 text-gray-400" />
                            <div className="flex text-sm text-gray-600 justify-center">
                              <label className="relative cursor-pointer bg-transparent rounded-md font-medium text-[#d49933] hover:text-black focus-within:outline-none">
                                <span>Upload a file</span>
                                <input type="file" required className="sr-only" accept=".pdf,.doc,.docx" />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">PDF, DOC up to 5MB</p>
                          </div>
                          {/* Invisible absolute input to cover the whole box for easier clicking */}
                          <input type="file" required className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept=".pdf,.doc,.docx" />
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-gray-700 mb-2">Additional Information (Optional)</label>
                        <textarea rows="3" className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:border-[#d49933] focus:ring-1 focus:ring-[#d49933] transition-colors resize-none" placeholder="Any other details you want to share..."></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#d49933] hover:bg-[#c08822] text-black font-bold text-lg py-4 px-8 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg"
                    >
                      {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                    </button>
                  </div>

                </form>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ApplicationModal;
