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
        tag: ["All","Web"]
    }, {
        id: 2,
        title: "React animated Portfolio",
        description: "Project 2 description",
        image: "/images/project/1.png"
    }, {
        id: 3,
        title: "React animated Portfolio",
        description: "Project 3 description",
        image: "/images/project/1.png"
    }, {
        id: 4,
        title: "React animated Portfolio",
        description: "Project 4 description",
        image: "/images/project/1.png"
    }
]

const ProjectSection = () => {

    return (
        <><h2 className='text-center text-4xl font-bold text-white mt-4'>My Projects</h2>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>{projectData.map((project) =>
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    tags={project}
                />)}</div></>
    )
}

export default ProjectSection