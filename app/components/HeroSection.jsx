import React from 'react'
import Image from "next/image";
import Image1 from '/public/images/HeroImage.png'
const HeroSection = () => {
  return (
    <section>
       <div className='grid grid-cols-1 lg:grid-cols-12'>
       <div className='col-span-7 place-self-center text-center sm:text-left'>
       <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-pink-500'> Hello, I'm {""}</span>Brightstar</h1>
    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Amet, sit adipisci recusandae earum, id ipsum provident 
        placeat itaque et accusantium quis quia debitis assumenda, 
        ex possimus aspernatur. Eveniet, perspiciatis tenetur!</p>
       <div>
        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Hire Me</button>
        <button  className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>Download CV</button>
       </div>
       </div>
       <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
       <div className='rounded-full bg-[#181818] w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] relative'>
       <Image 
        src={Image1}
        alt="hero image"
        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
        width={250}
        height={250}
        />
       </div>
       </div>
       </div>
    </section>
  )
}

export default HeroSection