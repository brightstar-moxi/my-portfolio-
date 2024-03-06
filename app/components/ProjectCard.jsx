import React from 'react'

const ProjectCard = ({imgUrl, title, description}) => {
  return (
    <div><div style={{background: `url(${imgUrl})`, backgroundSize:"cover"}}></div></div>
  )
}

export default ProjectCard