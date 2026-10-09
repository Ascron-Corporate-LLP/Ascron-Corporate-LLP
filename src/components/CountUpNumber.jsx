import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const CountUpNumber = ({ value, suffix = "", decimals = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const duration = 2000; // 2 seconds
      
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        
        setDisplayValue(easeProgress * value);
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {Number(displayValue).toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}
    </span>
  );
};

export default CountUpNumber;
