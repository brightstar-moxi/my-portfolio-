import React from 'react'

const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected
        ? "text-white bg-purple-500"
        : "text-[#ADB7BE] border-slate-600"
    return (
        <button className='rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer'>
            All
        </button>
    )
}

export default ProjectTag