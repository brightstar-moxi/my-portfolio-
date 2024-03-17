import React from 'react';
import {motion} from "framer-motion";

const variants={
  default: {width:0},
  active: {width: "calc(100% - 0.75)"}
}

const TabButton = ({active, selectTab, children}) => {
    const buttonClasses = active ? 'text-white border-b border-primary-500' : "text-[#ADB7BE] "
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}> {children}</p>
        <motion.div animate={active ? "active": "default"} variants={variants}
        className='h-1 bg-primary-500 mt-2 mr-3'
        ></motion.div>
        {/* mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500 */}
       
        </button>
  )
}

export default TabButton