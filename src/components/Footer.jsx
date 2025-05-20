import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-12 relative">
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-[#001f3f] opacity-30 pointer-events-none" />

      
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-10 max-w-7xl mx-auto">
        
        <div className="max-w-md">
          <h2 className="text-2xl md:text-3xl font-light leading-snug mb-4">
            Ready to <span className="font-bold">revolutionise</span> <br />
            your business communications <br />
            <span className="font-bold">with unrivalled speed?</span>
          </h2>
          <button className="mt-4 px-6 py-3 bg-gradient-to-r from-cyan-400 to-green-400 text-white font-semibold rounded-full hover:opacity-90 transition">
            GET IN TOUCH
          </button>
        </div>

        
        <div className="text-sm leading-loose">
          <h4 className="font-semibold uppercase mb-2 text-gray-400">Contact Us</h4>
          <p>Optinet UK Limited</p>
          <p className="mt-2">HEAD OFFICE</p>
          <p>Floor 37</p>
          <p>One Canada Square</p>
          <p>London E14 5AA</p>

          <p className="mt-4">SOUTHEND</p>
          <p>Skyline Plaza</p>
          <p>Victoria Avenue</p>
          <p>Southend</p>
          <p>Essex SS2 6BB</p>

          <p className="uppercase mt-4 text-xs text-gray-400">Get Directions</p>

          <p className="mt-4 uppercase text-xs text-gray-400">Phone</p>
          <p>+44 020 3319 3701</p>

          <p className="mt-4 uppercase text-xs text-gray-400">Email</p>
          <p>info@optinet.co.uk</p>
        </div>

        
        <div className="text-sm leading-loose">
          <h4 className="font-semibold uppercase mb-2 text-gray-400">Business</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Partners</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      
      <div className="relative z-10 border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>Optinet U.K. Limited registered in England & Wales <br className="md:hidden" /> Company number: 04828483</p>
        <p className="mt-4 md:mt-0">Copyright © Optinet — All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;