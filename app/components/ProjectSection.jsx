import React from 'react'
import ProjectCard from './ProjectCard'
// import Image from "next/image";
// import Image1 from '/public/images/HeroImage.png'

const projectData = [
    {
        id: 1,
        title: "React animated Portfolio",
        description: "Project 1 description",
        image: "/images/project/1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {

        id: 2,
        title: "React animated Portfolio",
        description: "Project 2 description",
        image: "/images/project/1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "React animated Portfolio",
        description: "Project 3 description",
        image: "/images/project/1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 4,
        title: "React animated Portfolio",
        description: "Project 4 description",
        image: "/images/project/1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    }
]

const ProjectSection = () => {

    return (
        <><h2 className='text-center text-4xl font-bold text-white mt-4'>My Projects</h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <button className='rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer'>All</button>
                <button className='rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer'>Web</button>
                <button className='rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer'>Design</button>
            </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>{projectData.map((project) =>

                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    tags={project}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                />)}</div></>
    )
}

export default ProjectSection