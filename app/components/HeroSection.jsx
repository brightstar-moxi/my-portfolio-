import React from 'react'
import Image from 'next/image'
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
        <Image 
        src="/public/images/2-removebg-preview.png"
        alt="hero image"
        width={300}
        height={300}
        />
       </div>
       </div>
    </section>
  )
}

export default HeroSection