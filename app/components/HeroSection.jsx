"use client";
import {React,useState } from 'react';
import Image from "next/image";
import Image1 from '/public/images/Capture-removebg-preview.png';
import { TypeAnimation } from 'react-type-animation';
import {motion} from "framer-motion";
import Link from 'next/link';
// import { Pdf } from '/public/Moses-cv.pdf';


const HeroSection = () => {
  // const router = useRouter();
  // const goToNewPage = () => {
  //   router.push('/cv'); const response = await fetch('/api/download');
      
  // }
  // const [downloadUrl, setDownloadUrl] = useState(''); // State to hold the download URL

  // Function to handle file download
// const handleDownload = async () => {
//   if (Image) {
//     const response = await fetch(Image);
//     if (response.status !== 200) {
//       console.log("Error fetching image");
//       return;
//     }
//     const blob = await response.blob();
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = "Moses-cv.jpg";
//     a.click();
//   }
// };



  // const [isOpen, setIsOpen] = useState(false);

  // const togglePopover = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <section className='lg:py-16'>
       <div className='grid grid-cols-1 sm:grid-cols-12'>
       <motion.div 
       initial={{opacity: 0, scale: 0.5}} 
       animate={{opacity:1, scale: 1}} 
       transition={{duration: 0.5}}
       className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
       <h1 className='text-white mb-4 text-4xl sm:text-4xl lg:text-7xl lg:leading-normal font-extrabold'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r  from-primary-400 to-secondary-600'> Hello, I&apos;m {""}</span>
       <br/>
        <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'Brightstar',
    1000,
    'Web Developer',
    1000,
    'Mobile Developer',
    1000,
    'Graphics Designer',
    1000,
  ]}
  speed={50}
  
  repeat={Infinity}
/>
        </h1>
    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>Designing the future, One line of code at a time.</p>
    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis necessitatibus ratione voluptas, </p>
     {/* via-purple-500
via-purple-500 */}
       <div>
       <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <div
            
           
              className="relative px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <a a href="/Moses-cv.pdf" download className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </a >
               {/* Popover content */}
      {/* {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <div className="p-2 "><button  className=" px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-primary-500 hover:bg-slate-800 text-white mt-3">Click here to Download</button></div>
        </div>
      )} */}
            </div>
       </div>
       </motion.div>

        <motion.div 
       initial={{opacity: 0, scale: 0.5}} 
       animate={{opacity:1, scale: 1}} 
       transition={{duration: 0.5}}className='col-span-4 place-self-center mt-4 lg:mt-0'>
       <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
       <Image 
        src={Image1}
        alt="hero image"
        className='absolute transform -translate-x-1/2 -translate-y-1/2 sm:top-1/2 md:top-1/3 top-1/3 left-1/2'
        width={200}
        height={200}
        />
       </div>
       </motion.div>
       </div>
    </section>
  )
}

export default HeroSection