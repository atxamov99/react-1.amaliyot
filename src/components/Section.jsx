import React from 'react';
import secImg from '../assets/SecImg.png';
import secImg2 from '../assets/secImg2.png';

const Section = () => {
  return (
    <section>
      {/* Hero Section */}
      <div
        className="w-full h-screen bg-cover bg-center flex items-center justify-center text-white relative"
        style={{ backgroundImage: `url(${secImg})` }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center px-4">
          <p className="text-sm uppercase tracking-wide mb-2">Hood Group Case Study</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Hood Group</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Optinet ensures contact centre agents maintain uninterrupted conversation during network outages
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
            Read More
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex flex-col md:flex-row justify-around items-center gap-8 p-8 bg-[#0f0f0f]">
        <div>
          <img src={secImg2} alt="Network image" className="max-w-md w-full" />
        </div>

        <div className="text-center md:text-left max-w-lg">
          <h2 className="text-white text-4xl font-semibold mb-4">
            Put your network <br />
            <span className="font-light">in safe hands</span>
          </h2>

          <p className="text-[#828282] mb-6">
            Our loyal customers trust us to manage some of their <br /> most business-critical systems.
          </p>

          <button className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section;
