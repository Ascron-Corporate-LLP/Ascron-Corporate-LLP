import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ReachPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#111111] text-gray-200 font-sans selection:bg-accent-gold selection:text-black">
      <Header />

      <main className="relative min-h-screen pt-32 pb-24 flex flex-col items-center">
        {/* Background Graphic */}
        <div 
          className="absolute inset-0 z-0 opacity-40 grayscale"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#111111]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10 max-w-5xl">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-wider">
              Reach
            </h1>
          </div>

          {/* Body Paragraphs */}
          <div className="space-y-8 text-base md:text-lg leading-relaxed text-gray-300 font-medium mb-16">
            <p>
              At <strong className="text-white">ASCRON</strong>, we are proud to support clients across Eastern and Northern part of INDIA with effective debt management and recovery solutions. Our extensive reach allows us to serve businesses of all sizes and across a broad range of industries, adapting our approach to meet local regulations, cultural norms, and specific industry needs.
            </p>
            <p>
              With presence in Jamshedpur, Ranchi, Dhanbad, Patna, Muzaffarpur, Gaya, Durgapur (WB), Lucknow, Guwahati, we offer our services across Eastern and Northern part of INDIA. Our understanding of local markets, combined with our industry expertise, enables us to navigate diverse regulatory environments while delivering consistent, high-quality service.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReachPage;
