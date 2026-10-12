import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-accent-gold selection:text-black">
      {/* 
        We use the existing Header. The Header has a fixed position and checks scroll to add background.
        We'll just let it sit on top of the first section.
      */}
      <Header />

      <main>
        {/* Section 1: Company History */}
        <section className="relative min-h-[80vh] flex flex-col justify-center pt-32 pb-20">
          {/* Background Image with grayscale and dark overlay */}
          <div 
            className="absolute inset-0 z-0 grayscale"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2010&auto=format&fit=crop')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-white">
            <div className="text-center mb-16">
              <h2 className="text-xl md:text-2xl font-light tracking-[0.5em] uppercase mb-2">Company</h2>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase">History</h1>
            </div>

            <div className="max-w-4xl mx-auto space-y-8 text-sm md:text-base leading-relaxed text-gray-200">
              <p>
                <strong className="text-white">ASCRON</strong> Corporate began with a mission to provide ethical, effective debt management solutions to individuals and businesses facing financial challenges. Our team recognized the need for compassionate yet results-driven debt recovery, which inspired them to create a company dedicated to helping clients regain financial stability while respecting debtor relationships.
              </p>
              <p>
                After serving initially we quickly gained a reputation for transparency, professionalism, and results. By 2024, we had expanded our services to multiple locations of Bihar, Jharkhand, West Bengal, UP, North East Region etc., offering tailored debt management solutions to meet unique needs of our clients.
              </p>
              <p>
                From the beginning, <strong className="text-white">ASCRON</strong> has prioritized compliance with industry regulations, including the Fair Debt Collection Practices and other standards. Our commitment to ethical practices led to numerous appreciation and recognition in professional associations, ensuring our clients always receive the highest standards of service and compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Our Approach */}
        <section className="relative flex flex-col lg:flex-row bg-[#FAFAFA]">
          {/* Left Side: Image and Overlay */}
          <div className="lg:w-1/2 relative min-h-[500px] lg:min-h-screen">
            {/* Background glass roof image */}
            <div 
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-white/20"></div>
            </div>

            {/* Dark overlay box */}
            <div className="absolute top-1/2 left-0 right-0 lg:-right-12 -translate-y-1/2 bg-[#3A454B] py-16 px-8 md:px-16 z-10 shadow-2xl">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none uppercase">
                Our<br/>Approach
              </h2>
            </div>

            {/* 03 Number at bottom left */}
            <div className="absolute bottom-8 left-8 md:left-16 z-10 flex items-center gap-6">
              <span className="text-4xl font-black text-[#3A454B]">03</span>
              <div className="w-32 h-[2px] bg-[#3A454B]"></div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="lg:w-1/2 flex items-center py-20 px-6 md:px-16 lg:px-24">
            <div className="max-w-xl">
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-12">
                At <strong className="text-gray-900">ASCRON</strong>, our approach is rooted in integrity, professionalism, and results. We understand that debt management and recovery require not only skill and persistence but also empathy and respect for each client's unique situation. Our approach combines proven strategies, cutting-edge technology, and a deep commitment to ethical practices, ensuring our clients benefit from effective solutions tailored to their needs.
              </p>

              <ul className="space-y-4 text-gray-700 font-medium text-sm md:text-base">
                <li className="flex items-center gap-3">
                  <span className="text-gray-400 font-bold">{">>"}</span> Client-Centered Strategy
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gray-400 font-bold">{">>"}</span> Transparent Communication
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gray-400 font-bold">{">>"}</span> Compliance and Ethics
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gray-400 font-bold">{">>"}</span> Technology-Driven Solutions
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gray-400 font-bold">{">>"}</span> Results-Oriented Focus
                </li>
              </ul>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
