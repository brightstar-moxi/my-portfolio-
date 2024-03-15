import React from 'react'

const TabButton = ({active, selectTab, children}) => {
    const buttonClasses = active ? 'text-white border-b border-primary-500' : "text-[#ADB7BE] "
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}> {children}</p>
        {/* mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500 */}
       
        </button>
  )
}

export default TabButton