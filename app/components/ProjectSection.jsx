"use client";

import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion"

const projectData = [
    {
        id: 1,
        title: "React 3D ANnimated Portfolio",
        description: "This platform is animated and describ more about me as developer",
        image: "/images/project/p1.JPG",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/brightstar-moxi",
        previewUrl: "https://brightstar-moses.onrender.com/"
    },
    {

        id: 3,
        title: "A beautiful flyer for a girl party",
        description: "This design is used as an invitation for girls only",
        image: "/images/project/artist-flyer-sample.JPG",
        tag: ["All", "Design"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {

        id: 2,
        title: "Cream Promo Design",
        description: "This design is used to call attention of customers to buy product from d seller",
        image: "/images/project/cream5.png",
        tag: ["All", "Design"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {

        id: 4,
        title: "Patrick Wed Ayomide in love",
        description: "Patrick was in love with Ayomide at Polytechnic Ibadan",
        image: "/images/project/ayomide4.png",
        tag: ["All", "Design"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 10,
        title: "Next.JS E-commerce Platform ",
        description: "This Platform is a Best Fashion Collection where you can do online shopping and make payment,and will be deliver to address",
        image: "/images/project/yop.JPG",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/brightstar-moxi",
        previewUrl: "https://fullstack-ecommerce-six.vercel.app/"
    },
    {

        id: 2,
        title: "A church program flyer",
        description: "This design is used as an notification and invitation of church monthly program",
        image: "/images/project/segun.png",
        tag: ["All", "Design"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {

        id: 5,
        title: "Graphics design training flyer",
        description: "This design is used as an invitation for that have interest in learning Graphics design",
        image: "/images/project/new.png",
        tag: ["All", "Design"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {

        id: 6,
        title: "A wig seller Flyer",
        description: "This design is used to call people attention to come andd buy wigs",
        image: "/images/project/adesewa.png",
        tag: ["All", "Design"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {

        id: 7,
        title: "Cream Advert Flyer",
        description: "This design is used to call people attention to come and buy cream",
        image: "/images/project/cream2.png",
        tag: ["All", "Design"],
        gitUrl: "/",
        previewUrl: "/"
    },  {

        id: 8,
        title: "Design For Learning ",
        description: "his design is used as an invitation for that have interest in earning ",
        image: "/images/project/learn.jpg",
        tag: ["All", "Design"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {

        id: 9,
        title: "Hair Stylist Flyer",
        description: "This design is used to call people attention to come and dress their hair",
        image: "/images/project/hairstylist-flyer.png",
        tag: ["All", "Design"],
        gitUrl: "/",
        previewUrl: "/"
    },
  
    {
        id: 11,
        title: "React animated Portfolio",
        description: "Project 4 description",
        image: "/images/project/1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    }
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };
    const filteredProject = projectData.filter((project) => project.tag.includes(tag)
    );

    const cardVariants = {

        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 }
    }
    return (
        <section >
            <h2 className='text-center text-4xl font-bold text-white mt-4'>My Projects</h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"} />

                <ProjectTag onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"} />
                <ProjectTag onClick={handleTagChange}
                    name="Design"
                    isSelected={tag === "Design"} />
            </div>
            <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProject.map((project, index) => (
                    <motion.li key={index}
                        variants={cardVariants}
                        initial="initial" animate={isInView ?
                            "animate" : "initial"}
                            transition={{duration: 0.3, delay: index = 0.4}}
                            >

                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            // tags={project}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default ProjectSection