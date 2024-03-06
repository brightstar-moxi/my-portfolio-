import React from 'react'
import ProjectCard from './ProjectCard'

const projectData = [
    {
        id: 1,
        title: "React animated Portfolio",
        description: "Project 1 description",
        image: "/image/project/1.png"
    }, {
        id: 2,
        title: "React animated Portfolio",
        description: "Project 2 description",
        image: "/image/project/1.png"
    }, {
        id: 3,
        title: "React animated Portfolio",
        description: "Project 3 description",
        image: "/image/project/1.png"
    }, {
        id: 4,
        title: "React animated Portfolio",
        description: "Project 4 description",
        image: "/image/project/1.png"
    }
]

const ProjectSection = () => {

    return (
        <><h2>My Project</h2>
            <div>{projectData.map((project) =>
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