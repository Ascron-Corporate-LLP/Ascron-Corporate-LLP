import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Component for animating numbers
const CountUpNumber = ({ value, suffix = "", duration = 2000 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setDisplayValue(Math.floor(easeProgress * value));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

// Helper component for Donut Chart
const DonutChart = ({ percentage, label, description }) => {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="flex flex-col sm:flex-row items-center sm:items-start gap-6"
    >
      {/* SVG Ring */}
      <div className="relative w-28 h-28 shrink-0">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {/* Background Track */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            strokeWidth="15"
            fill="transparent"
            className="text-gray-300"
          />
          {/* Progress Indicator */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            strokeWidth="15"
            fill="transparent"
            className="text-[#3A454B]"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          />
        </svg>
        {/* Percentage Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-gray-800">
            <CountUpNumber value={percentage} suffix="%" duration={1500} />
          </span>
        </div>
      </div>
      
      {/* Text Content */}
      <div className="text-center sm:text-left pt-2">
        <h4 className="text-xl font-bold text-[#3A454B] mb-2">{label}</h4>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

// Helper component for Bar Chart
const BarChart = () => {
  const data = [
    { label: 'CD', s1: 13, s2: 19 },
    { label: 'PL', s1: 12, s2: 17 },
    { label: 'Others', s1: 10, s2: 20 },
  ];
  
  const maxY = 20;

  return (
    <div className="w-full h-[400px] flex flex-col pt-8">
      {/* Legend */}
      <div className="flex justify-center gap-8 mb-8">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#C4C4C4]"></div>
          <span className="text-sm font-medium text-gray-700">Series 1</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#3A454B]"></div>
          <span className="text-sm font-medium text-gray-700">Series 2</span>
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative flex-1 flex">
        {/* Y-Axis Labels & Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {[20, 15, 10, 5, 0].map((val) => (
            <div key={val} className="flex items-center w-full">
              <span className="w-8 text-right text-gray-500 text-sm font-medium mr-4">{val}</span>
              <div className="flex-1 h-[1px] bg-gray-200"></div>
            </div>
          ))}
        </div>

        {/* Bars Container */}
        <div className="flex-1 flex justify-around items-end ml-12 z-10 h-[calc(100%-14px)] mb-[14px]">
          {data.map((item, index) => (
            <div key={index} className="flex gap-2 items-end h-full w-full justify-center group relative">
              {/* Series 1 Bar */}
              <motion.div 
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                style={{ originY: 1, height: `${(item.s1 / maxY) * 100}%` }}
                className="w-8 sm:w-12 lg:w-14 bg-[#C4C4C4] relative"
              />
              
              {/* Series 2 Bar */}
              <motion.div 
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.4 + (index * 0.1), ease: "easeOut" }}
                style={{ originY: 1, height: `${(item.s2 / maxY) * 100}%` }}
                className="w-8 sm:w-12 lg:w-14 bg-[#3A454B] relative"
              />

              {/* X-Axis Label */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-gray-700 font-medium text-sm">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AnalysisOverview = () => {
  return (
    <section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-[1400px]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Headings & Donut Charts */}
          <div className="flex flex-col justify-center">
            {/* Titles */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h3 className="text-xl md:text-2xl font-light tracking-[0.3em] text-gray-800 uppercase mb-1">
                Analysis
              </h3>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#3A454B] uppercase tracking-tighter">
                Overview
              </h2>
            </motion.div>

            {/* Donut Charts Stack */}
            <div className="space-y-12">
              <DonutChart 
                percentage={45}
                label="Non-Digital"
                description="We are having expertise in non-digital products collection. Like, CD, TW, PL, BIL, Credit Cards etc."
              />
              <DonutChart 
                percentage={55}
                label="Digital"
                description="We are having expertise in Digital products collection like, Flipkart, Amazon, Cred, Paisa Bazaar etc."
              />
            </div>
          </div>

          {/* Right Column: Bar Chart */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center bg-white p-6 md:p-10 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.03)] border border-gray-100"
          >
            <BarChart />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AnalysisOverview;
