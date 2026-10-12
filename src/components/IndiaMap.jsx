import React from 'react';
import India from '@svg-maps/india';

const IndiaMap = () => {
  const cities = [
    { name: 'UP', top: '38%', left: '50%', labelPos: 'left' },
    { name: 'Bihar', top: '44%', left: '63%', labelPos: 'top' },
    { name: 'MP', top: '53%', left: '44%', labelPos: 'left' },
    { name: 'Jharkhand (HQ)', top: '51%', left: '62%', labelPos: 'bottom', isHQ: true },
    { name: 'West Bengal', top: '53%', left: '69%', labelPos: 'right' },
    { name: 'North East', top: '39%', left: '85%', labelPos: 'right' },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center pt-2 pb-2">
      <svg 
        viewBox={India.viewBox}
        className="w-full h-auto drop-shadow-[0_0_15px_rgba(245,165,36,0.2)]"
      >
        {India.locations.map(location => (
          <path
            key={location.id}
            id={location.id}
            name={location.name}
            d={location.path}
            className="transition-all duration-300"
            style={{ 
              fill: 'rgba(245, 165, 36, 0.04)', 
              stroke: '#F5A524', 
              strokeWidth: '0.6px' 
            }}
          />
        ))}
      </svg>
      
      {/* City Pins & Labels */}
      {cities.map((city, i) => (
        <div 
          key={i}
          className="absolute z-10 flex items-center justify-center"
          style={{ top: city.top, left: city.left }}
        >
          {/* Label Container */}
          <div className={`absolute whitespace-nowrap ${
            city.labelPos === 'right' ? 'left-4 top-1/2 -translate-y-1/2' : 
            city.labelPos === 'left' ? 'right-4 top-1/2 -translate-y-1/2' : 
            city.labelPos === 'top' ? 'bottom-4 left-1/2 -translate-x-1/2' :
            'top-4 left-1/2 -translate-x-1/2' // default bottom
          }`}>
            <div className={`text-[9px] px-2 py-0.5 rounded border ${
              city.isHQ 
                ? 'bg-[#F5A524] text-black font-bold border-[#F5A524]' 
                : 'bg-[#08152c] text-white border-white/20'
            }`}>
              {city.name}
            </div>
          </div>

          {/* Glow Pin */}
          <div className="relative w-2 h-2 bg-[#F5A524] rounded-full shadow-[0_0_10px_#F5A524,0_0_20px_#F5A524]">
            <div className="absolute -inset-1.5 bg-[#F5A524] rounded-full animate-ping opacity-50"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndiaMap;
