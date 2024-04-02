import React from 'react'
import Link from 'next/link';
import Image from "next/image";
import Image2 from '/public/logo.png'
const Footer = () => {
    return (
        <footer className='footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
            <div className='container p-12 flex justify-between'>
            <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold '> <Image 
        src={Image2}
        alt="about image"
        width={70}
        height={70}
        /></Link>
                <p className='text-slate-600'>All right reserved</p>
            </div>
        </footer>
    )
}
// npm i react-animated-numbers react-type-animation framer-motion
export default Footer