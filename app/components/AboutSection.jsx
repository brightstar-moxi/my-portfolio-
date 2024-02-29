"use client"
import React, {useTransition, useState} from 'react'
import Image from "next/image";
import Image2 from '/public/images/HeroImage.png'


const AboutSection = () => {
    const [tab, SetTab] = useState("skills");
    const [startTransition, isPending] = useTransition();





    const handleTabChange = (id) => {
        
    }
  return (
    <section className='text-white'><div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
         <Image 
        src={Image2}
        alt="about image"
        width={500}
        height={500}
        />
        <div>
            <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
            <p className='text-base lg:text-lg'>As a software developer, my journey begins with lines of code and algorithms that breathe life into digital landscapes. Proficient in languages such as Python, Java, and JavaScript, 
                I embark on the intricate task of solving complex problems and crafting solutions that stand at the intersection of functionality and efficiency.
                 The software development lifecycle becomes my canvas, where I meticulously plan, code, test, and deploy, 
                 ensuring that each line serves a purpose and contributes to the overall success of the project.
                 </p>
                 <div className='flex flex-row mt-8'>
                    <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500'>Skills</span>
                    <span>Education</span>
                    <span>Experience</span>
                 </div>
        </div>
        </div></section>
  )
}

export default AboutSection