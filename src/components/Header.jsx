import React from 'react'
import HeaderLogo from '../assets/HeaderImg.png'
import logo from '../assets/logo.png'
import HeaderFon from '../assets/headerfon.png'

const Header = () => {
  return (
    <header className="bg-black relative min-h-screen overflow-hidden">
      <nav className='flex justify-between items-center p-4 text-white max-w-[1200px] mx-auto'>
        <ul className='flex items-center gap-10'>
          <img src={logo} alt="Logo" className="h-10" />
          <li className="cursor-pointer hover:text-cyan-400">Solutions</li>
          <li className="cursor-pointer hover:text-cyan-400">Zero-loss Failover</li>
          <li className="cursor-pointer hover:text-cyan-400">Multi-tenant</li>
          <li className="cursor-pointer hover:text-cyan-400">Enterprise NNI</li>
        </ul>

        <ul className='flex items-center gap-6'>
          <li className="cursor-pointer hover:text-cyan-400">Learn</li>
          <li className="cursor-pointer hover:text-cyan-400">Support</li>
          <button className="px-8 py-4 rounded-full text-xs bg-gradient-to-r from-cyan-400 to-green-400 text-white font-semibold uppercase tracking-wide shadow-md hover:opacity-90 transition">
            Make an enquiry
          </button>
        </ul>
      </nav>

      <div className="relative max-w-[1200px] mx-auto mt-24 px-4">

  {/* Logo rasmi */}
  <div className="flex justify-center mt-8 ml-[400px]">
    <img
      src={HeaderLogo}
      alt="Decorative Ribbon"
      className="w-full max-w-[800px] h-auto"
    />
  </div>

  {/* Matn pastda */}
  <div className="max-w-[900px] mx-auto text-center text-white mt-8">
    <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
      Turning complex network technology
      <br />
      <span className="font-bold">
        into business solutions that save you <br />
        time, money and stress
      </span>
    </h1>
  </div>
</div>

    </header>
  )
}

export default Header
