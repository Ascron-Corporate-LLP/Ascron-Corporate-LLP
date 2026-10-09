import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const INITIAL_MESSAGE = {
  type: 'bot',
  text: "👋 Hi! Welcome to Ascron.\nI'm Sarah from the Ascron Business Team.\nI can help you understand our collection capabilities or explore whether Ascron could support your portfolio.\nWhat can I help you with today?",
  options: [
    "🏦 I'm a Bank / NBFC / Fintech",
    "🤝 I need a Collection Partner",
    "📊 I want to Improve Recovery",
    "📞 I need Telecalling",
    "🚗 I need Field Collection",
    "💻 I need Digital Collection",
    "ℹ️ Tell me About Ascron",
    "💼 Career / Other"
  ]
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  // Business prospect data collection state
  const [prospectData, setProspectData] = useState({});
  const [flowStep, setFlowStep] = useState(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const addBotMessage = (text, options = []) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text, options }]);
      setIsTyping(false);
    }, 1200);
  };

  const handleOptionClick = (option) => {
    setMessages(prev => [...prev, { type: 'user', text: option }]);
    processInput(option, true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    const text = inputValue.trim();
    setMessages(prev => [...prev, { type: 'user', text }]);
    setInputValue("");
    processInput(text, false);
  };

  const processInput = (text, isOption) => {
    const lowerText = text.toLowerCase();

    // Business Data Collection Flow
    if (flowStep === 'orgType') {
      setProspectData(prev => ({ ...prev, orgType: text }));
      setFlowStep('serviceType');
      return addBotMessage("What type of collection support are you looking for?", [
        "Field Collection", "Telecalling", "Digital Collection", 
        "End-to-End Collection", "Debt Recovery", "Multiple Services"
      ]);
    }
    
    if (flowStep === 'serviceType') {
      setProspectData(prev => ({ ...prev, serviceType: text }));
      setFlowStep('portfolio');
      return addBotMessage("Which portfolio are you looking to outsource?", [
        "PL", "BL", "TW", "CD", "Credit Card", "Digital Lending", "Multiple Products"
      ]);
    }

    if (flowStep === 'portfolio') {
      setProspectData(prev => ({ ...prev, portfolio: text }));
      setFlowStep('accountSize');
      return addBotMessage("Approximately how many accounts are involved?", [
        "<1,000", "1,000–5,000", "5,000–10,000", "10,000–50,000", "50,000+"
      ]);
    }

    if (flowStep === 'accountSize') {
      setProspectData(prev => ({ ...prev, accountSize: text }));
      setFlowStep('geography');
      return addBotMessage("Which geography do you need support in?", [
        "Single City", "Multiple Cities", "Single State", "Multiple States", "Pan India"
      ]);
    }

    if (flowStep === 'geography') {
      setProspectData(prev => ({ ...prev, geography: text }));
      setFlowStep('challenge');
      return addBotMessage("What's the main challenge you're trying to solve?", [
        "Low Collection", "Contactability", "Field Productivity", "Manpower", 
        "Roll Forward", "Digital Collection", "Reporting", "Need New Agency"
      ]);
    }

    if (flowStep === 'challenge') {
      setFlowStep(null);
      return addBotMessage(
        `Thanks. Based on what you've shared, your requirement appears to be a multi-channel recovery model.\n\nAscron could support this through:\nField Collection + Telecalling + Digital Engagement + BKT-wise Monitoring + MIS & Reconciliation.\n\nThe objective would be to improve customer contactability, follow-up discipline and collection visibility across the portfolio.\n\nWould you like to submit this requirement to our business team?`,
        ["Submit Requirement", "Maybe Later"]
      );
    }

    if (text === "Submit Requirement") {
      return addBotMessage("I can help you submit a business enquiry through this website.\nPlease navigate to the Contact section or click the button below.", ["Go to Contact Form"]);
    }
    
    if (text === "Go to Contact Form") {
      window.location.href = "#contact";
      setIsOpen(false);
      return;
    }

    // Keyword matching for intent
    if (lowerText.includes("bank") || lowerText.includes("nbfc") || lowerText.includes("fintech") || lowerText.includes("collection partner") || lowerText.includes("improve recovery")) {
      setFlowStep('orgType');
      return addBotMessage("May I know which type of organization you're representing?", [
        "Bank", "NBFC", "Fintech", "Lending Company", "Other"
      ]);
    }

    if (lowerText.includes("field collection")) {
      return addBotMessage(
        "Yes, absolutely. Field collection is one of our core services. Our field teams can support customer visits, verification, payment follow-ups and account resolution.\n\nTo understand whether we are a good fit, may I know which portfolio you need support for?",
        ["Personal Loan", "Vehicle", "Consumer Durable", "Credit Card", "Digital Lending", "Other"]
      );
    }

    if (lowerText.includes("digital collection")) {
      return addBotMessage(
        "Yes. We support digital collection through channels such as SMS, WhatsApp, email, IVR and digital payment channels.\n\nAre you looking for digital collection for an existing portfolio or are you evaluating a new collection partner?",
        ["Existing Portfolio", "New Partner"]
      );
    }

    if (lowerText.includes("personal loan") || lowerText.includes("vehicle") || lowerText.includes("consumer durable") || lowerText.includes("credit card") || text === "Other" || lowerText.includes("existing portfolio") || lowerText.includes("new partner")) {
      setFlowStep('accountSize');
      return addBotMessage("Great. Approximately how many accounts are involved?", [
        "<1,000", "1,000–5,000", "5,000–10,000", "10,000–50,000", "50,000+"
      ]);
    }

    if (lowerText.includes("why ascron") || lowerText.includes("tell me about ascron") || lowerText.includes("different")) {
      return addBotMessage(
        "That's a fair question.\nAscron combines field recovery, telecalling, digital collection, portfolio management and reporting rather than treating collection as a single-channel activity.\n\nOur current company profile includes:\n• 2.0 M+ accounts managed\n• 200+ recovery professionals\n• 20+ operational locations\n• 98% client satisfaction\n\nWe also focus on compliance, data security and customer dignity throughout the recovery process.\n\nIf you tell me your portfolio type and approximate size, I can explain which Ascron model may be suitable.",
        ["Share Portfolio Details"]
      );
    }

    if (lowerText.includes("share portfolio details")) {
      setFlowStep('portfolio');
      return addBotMessage("Which portfolio are you looking to outsource?", [
        "PL", "BL", "TW", "CD", "Credit Card", "Digital Lending", "Multiple Products"
      ]);
    }

    if (lowerText.includes("price") || lowerText.includes("charge") || lowerText.includes("cost") || lowerText.includes("fee") || lowerText.includes("pricing")) {
      return addBotMessage(
        "Pricing depends on factors such as portfolio size, product, bucket, geography, collection model and operational scope. We don't want to give you an arbitrary figure without understanding your requirement.\n\nIf you share your basic portfolio details, we can route your requirement for a suitable commercial discussion.",
        ["Discuss Requirement"]
      );
    }

    if (lowerText.includes("discuss requirement")) {
      setFlowStep('orgType');
      return addBotMessage("May I know which type of organization you're representing?", [
        "Bank", "NBFC", "Fintech", "Lending Company", "Other"
      ]);
    }

    if (lowerText.includes("guarantee") || lowerText.includes("assurance")) {
      return addBotMessage(
        "Collection performance depends on several factors, including portfolio quality, customer profile, delinquency stage and geography. We therefore don't want to promise an unrealistic recovery guarantee.\n\nWhat we can provide is a structured recovery process with dedicated operations, monitoring, reporting and performance management."
      );
    }

    if (lowerText.includes("call from ascron") || lowerText.includes("visited my house") || lowerText.includes("my loan") || lowerText.includes("customer") || lowerText.includes("borrower")) {
      return addBotMessage(
        "I can help with general information about Ascron's services, but I don't have access to individual loan or account records through this chat.\n\nFor account-specific assistance, please use the appropriate support channel provided by your lender or the communication you received."
      );
    }

    if (text === "Go to Careers Page") {
      navigate("/careers");
      setIsOpen(false);
      return;
    }

    // Hiring Questions Q&A
    if (lowerText.includes("what is ascron corporate llp")) {
      return addBotMessage("ASCRON Corporate LLP provides collection and recovery, portfolio management, skip tracing, MIS reporting, and operational support services to banks and financial institutions. Explore our careers page to discover opportunities with our team.");
    }
    
    if (lowerText.includes("what job positions are available") || lowerText.includes("what positions") || lowerText.includes("what jobs")) {
      return addBotMessage("Our recruitment may include Field Collection Executive, Telecaller, Team Leader, Collection Manager, MIS Executive, and Operations Executive roles. Availability depends on current hiring requirements.");
    }
    
    if (lowerText.includes("fresher")) {
      return addBotMessage("Eligibility depends on the position. Freshers may apply for suitable entry-level openings, while leadership and managerial roles may require relevant experience.");
    }
    
    if (lowerText.includes("how can i apply") || lowerText.includes("how to apply")) {
      return addBotMessage("Select your preferred position, fill out the online application form, provide your contact details and work experience, and upload your updated resume. Our recruitment team will review your application.", ["Go to Careers Page"]);
    }
    
    if (lowerText.includes("salary") || lowerText.includes("pay") || lowerText.includes("stipend")) {
      return addBotMessage("Salary depends on the position, experience, location, and applicable compensation structure. Our recruitment team will share the salary details during the selection process.");
    }
    
    if (lowerText.includes("selected") || lowerText.includes("shortlisted") || lowerText.includes("interview")) {
      return addBotMessage("Our recruitment team will contact shortlisted candidates using their registered contact details. Submitting an application does not guarantee selection.");
    }

    // Hiring Flow
    if (text === "View Current Job Openings") {
      return addBotMessage("Great! Please choose what you need help with.", [
        "Field Collection Executive", "Team Leader / Collection Manager", "Telecaller / Calling Executive", "Apply for a Job", "Check My Application Status"
      ]);
    }

    if (text === "Field Collection Executive" || text === "Team Leader / Collection Manager" || text === "Telecaller / Calling Executive" || text === "Apply for a Job") {
      return addBotMessage(`To apply, please visit our Careers page where you can fill out the application form and upload your resume.`, ["Go to Careers Page"]);
    }

    if (text === "Check My Application Status") {
      return addBotMessage("Our recruitment team will contact shortlisted candidates using their registered contact details. If you have recently applied, please wait for our team to reach out to you.");
    }

    // Trigger for hiring flow
    if (lowerText.includes("job") || lowerText.includes("hiring") || lowerText.includes("career") || lowerText.includes("vacancy") || lowerText.includes("resume")) {
      return addBotMessage(
        "Hello! 👋 Welcome to ASCRON Corporate LLP.\nI’m Sarah, your Hiring Assistant. I can help you explore job opportunities, understand eligibility, and submit your application.\n\nGreat! Please choose what you need help with.",
        ["View Current Job Openings", "Apply for a Job", "Check My Application Status"]
      );
    }
    
    if (lowerText.includes("contact") || lowerText.includes("email") || lowerText.includes("phone") || lowerText.includes("number") || lowerText.includes("address")) {
        return addBotMessage(
            "I can help you submit a business enquiry through this website, where our team will get back to you promptly.",
            ["Go to Contact Form"]
        );
    }

    if (lowerText.includes("telecalling") || lowerText.includes("tele calling")) {
      return addBotMessage(
        "Yes, telecalling is a key service we provide. Our contact centers manage early-stage reminders, late-stage collections, and settlement negotiations.\n\nAre you looking to outsource telecalling for a specific portfolio?",
        ["Yes, existing portfolio", "Evaluating new partner"]
      );
    }
    
    if (lowerText.includes("yes, existing portfolio") || lowerText.includes("evaluating new partner")) {
        setFlowStep('portfolio');
        return addBotMessage("Great. Which portfolio are you looking to outsource?", [
          "PL", "BL", "TW", "CD", "Credit Card", "Digital Lending", "Multiple Products"
        ]);
    }

    // Default fallback
    addBotMessage(
      "I am Sarah from Ascron, here to help you understand our collection capabilities or explore whether Ascron could support your portfolio.\nWould you like to explore our services?",
      ["Yes, I need a Collection Partner", "Tell me About Ascron"]
    );
  };

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-[#111] hover:bg-[#d49933] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 z-50 group border border-white/10"
          >
            <MessageSquare size={24} className="text-[#d49933] group-hover:text-black transition-colors sm:w-[26px] sm:h-[26px]" />
            
            {/* Notification Dot */}
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full"></span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 w-full h-full sm:w-[400px] sm:h-[600px] sm:max-h-[85vh] bg-white sm:rounded-2xl shadow-2xl border-0 sm:border border-gray-200 z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#111] text-white p-4 flex justify-between items-center border-b border-[#d49933]/20 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#d49933] flex items-center justify-center shadow-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" alt="Sarah" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-[15px] tracking-wide text-[#d49933]">Sarah from Ascron</h3>
                  <p className="text-[11px] text-gray-400 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span> Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'} max-w-full`}>
                  <div className={`flex items-start gap-2.5 max-w-[85%] ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                    {/* Avatar */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-sm ${msg.type === 'bot' ? 'bg-[#111] text-[#d49933]' : 'bg-[#d49933] text-[#111]'}`}>
                      {msg.type === 'bot' ? <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" alt="Sarah" className="w-full h-full object-cover rounded-full" /> : <User size={16} />}
                    </div>
                    
                    {/* Bubble */}
                    <div className={`p-3.5 rounded-2xl text-[14px] leading-relaxed shadow-sm whitespace-pre-wrap ${msg.type === 'bot' ? 'bg-white text-gray-800 rounded-tl-none border border-gray-100' : 'bg-[#d49933] text-[#111] font-semibold rounded-tr-none'}`}>
                      {msg.text}
                    </div>
                  </div>
                  
                  {/* Options */}
                  {msg.options && msg.options.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2 pl-10 pr-2">
                      {msg.options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleOptionClick(opt)}
                          className="text-[13px] bg-white border border-[#d49933]/40 text-[#111] hover:bg-[#d49933] hover:text-black font-medium py-1.5 px-3 rounded-full transition-colors shadow-sm text-left"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex items-start gap-2.5 max-w-[85%]">
                  <div className="w-8 h-8 rounded-full bg-[#111] text-[#d49933] flex items-center justify-center shrink-0 mt-1 shadow-sm">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" alt="Sarah" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white border border-gray-100 rounded-tl-none shadow-sm flex gap-1 h-10 items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-100 shrink-0">
              <form onSubmit={handleSubmit} className="flex items-center gap-2 relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-full py-3 pl-4 pr-12 text-[14px] focus:outline-none focus:border-[#d49933] transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="absolute right-1.5 w-9 h-9 rounded-full bg-[#111] text-white flex items-center justify-center hover:bg-[#d49933] hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} className="mr-0.5" />
                </button>
              </form>
              <div className="text-center mt-2">
                 <span className="text-[10px] text-gray-400">We typically reply in a few seconds</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
