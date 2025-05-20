import React from 'react'
import MainImage from '../assets/Main.png'
import FooterImg from '../assets/FooterImg.png'
import logos from '../assets/logos.png'

const Main = () => {
  return (
    <main>
        <h1 className=' mt-[200px] text-center text-3xl'>Productivity solutions that <span className='font-bold'>capitalise</span> <br /> on your network <span className='font-bold'>investment</span></h1>

        <div className="flex justify-around items-center mt-[150px]">
          <div className="">
            <img className='w-[100%] h-[80vh]' src={MainImage} alt="" />
          </div>

          <div className="flex flex-col gap-4">
            <h2 className='font-medium text-4xl'>Connectivity</h2>
            <p>Last mile or first mile, fibre or copper, Ethernet or wireless, 20Mbs  <br /> or 100Gbs - we'll always find the best-performing connectivity to <br /> fit your needs and location. </p>

            <button className='w-[140px] p-[10px] rounded-4xl bg-black text-white'>Learn More</button>

            <hr />

            <h2 className='text-[29px] font-[300]'>Network Technologies</h2>
            <hr />

            <h2 className='text-[29px] font-[300]'>Managed Services</h2>
            <hr />

            <h2 className='text-[29px] font-[300]'>CLOUD CONNECTIVITY</h2>
            <hr />

          </div>

        </div>

        <div className="bg-black w-[100%] h-[80vh] flex flex-col justify-center items-center gap-4 mt-[100px]">
          <h2 className='text-white text-center text-4xl'>Designed with the latest technology for <br /> <span className='font-medium'>performance, flexibility and high capacity.</span></h2>
          <div className="flex gap-7">
            <button className="px-9 py-5 rounded-full text-xs bg-gradient-to-r from-cyan-400 to-green-400 text-white font-semibold uppercase tracking-wide shadow-md hover:opacity-90 transition">
            FIND OUT MORE
          </button>
          <button className="px-8 py-4 rounded-full text-xs bg-none border-2 text-white font-semibold uppercase tracking-wide shadow-md hover:opacity-90 transition">
            Our Looking Glass
          </button>
          </div>
        </div>

        <div className="flex justify-around items-center mt-[150px]">
          <div className="">
            <img className='w-[100%] h-[80vh]' src={FooterImg} alt="" />
          </div>

            <div className="flex flex-col gap-4">
            <h2 className='font-medium text-4xl'>Navigating the technology <br />
              and communication <br /> provider marketplace <br /> shouldn’t be a complex <br /> and daunting process.</h2>

            <button className='w-[140px] p-[10px] rounded-4xl bg-black text-white'>About Optinet</button>

            

          </div>

        </div>

        <div className="flex justify-center mt-[80px]">
          <img src={logos} alt="" />
        </div>

    </main>
  )
}

export default Main