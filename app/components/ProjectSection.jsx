"use client";

import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import {motion, useInView} from "framer-motion"

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
        tag: ["All", "Design"],
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
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };
  const filteredProject = projectData.filter((project) => project.tag.includes(tag)
  )
    return (
        <><h2 className='text-center text-4xl font-bold text-white mt-4'>My Projects</h2>
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
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProject.map((project) =>

                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        // tags={project}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />)}</div></>
    )
}

export default ProjectSection