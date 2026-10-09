import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Smartphone, 
  HeadphonesIcon, 
  PhoneCall, 
  UserCheck, 
  Map, 
  Briefcase, 
  Clock, 
  Landmark,
  BarChart2,
  Handshake,
  ShieldCheck
} from 'lucide-react';

const servicesList = [
  {
    icon: Clock,
    title: "Early Bucket Collection",
    description: "Proactive customer engagement through calls, reminders, and follow-ups to prevent accounts from progressing into higher-risk delinquency stages."
  },
  {
    icon: HeadphonesIcon,
    title: "Telecalling & Contact Center Services",
    description: "Dedicated recovery executives handling inbound and outbound calls for payment reminders, customer support, negotiations, and dispute resolution."
  },
  {
    icon: UserCheck,
    title: "Field Collection Services",
    description: "Professional field executives conducting customer visits, payment follow-ups, document verification, and account resolution activities."
  },
  {
    icon: FileText,
    title: "Debt Recovery Management",
    description: "Strategic recovery solutions for overdue and delinquent accounts focused on maximizing recoveries while maintaining customer dignity."
  },
  {
    icon: Smartphone,
    title: "Digital Collection Solutions",
    description: "Technology-enabled collections through SMS, WhatsApp, email, IVR, and digital payment channels for faster repayments."
  },

  {
    icon: Landmark,
    title: "Loan & EMI Collection Services",
    description: "Specialized collection support for Personal Loans, Business Loans, Vehicle Loans, Consumer Durable Loans, Credit Cards, and Digital Lending Products."
  },
  {
    icon: BarChart2,
    title: "Banking & Reconciliation Support",
    description: "Payment tracking, banking verification, receipt management, reconciliation, and accurate reporting to ensure operational transparency."
  },

  {
    icon: Handshake,
    title: "Settlement & Negotiation Services",
    description: "Professional settlement discussions and repayment resolution programs designed to improve recoveries and customer satisfaction."
  },
  {
    icon: ShieldCheck,
    title: "Compliance-Driven Recovery Solutions",
    description: "All recovery activities are conducted in accordance with regulatory guidelines, ethical collection practices, data security standards, and client policies."
  }
];

const Services = () => {
  return (
    <section id="services" className="pt-8 pb-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        
        {/* Header Section */}
        <div className="text-center mb-16 px-4 flex flex-col items-center max-w-4xl mx-auto">
          <h3 className="text-[#d89f3c] font-bold tracking-[0.15em] uppercase text-[12px] md:text-[13px] mb-3">
            OUR SERVICES
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#08152c] leading-tight">
            End-to-End Recovery & Collection Solutions
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="bg-white rounded-xl border border-gray-100 p-6 md:p-8 flex flex-col h-full shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300"
            >
              <div className="flex items-start gap-5 mb-2">
                
                {/* Icon */}
                <div className="w-[60px] h-[60px] rounded-full bg-[#fef9f3] flex items-center justify-center shrink-0">
                  <service.icon className="text-[#111]" size={28} strokeWidth={1.5} />
                </div>
                
                {/* Title & Description */}
                <div className="flex flex-col pt-1">
                  <h3 className="text-[18px] sm:text-[19px] font-bold text-[#08152c] leading-snug mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#4a5568] font-medium text-[15px] sm:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

              </div>


              
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Services;
