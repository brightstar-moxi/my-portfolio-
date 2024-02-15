import React from 'react'
import Image from "next/image";
import Image1 from '/public/images/HeroImage.png'
const HeroSection = () => {
  return (
    <section>
       <div className='grid grid-cols-3 lg:grid-cols-12'>
       <div className='col-span-7 place-self-center'>
       <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'> Hello, I'm Brightstar</h1>
    <p className='text-[#ADB7BE] text-lg lg:text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Amet, sit adipisci recusandae earum, id ipsum provident 
        placeat itaque et accusantium quis quia debitis assumenda, 
        ex possimus aspernatur. Eveniet, perspiciatis tenetur!</p>
       </div>
       <div className='col-span-5'>
       <div className='rounded-full bg-[#181818] w-[500px] h-[500px] relative'>
       <Image 
        src={Image1}
        alt="hero image"
        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
        width={300}
        height={300}
        />
       </div>
       </div>
       </div>
    </section>
  )
}

export default HeroSection