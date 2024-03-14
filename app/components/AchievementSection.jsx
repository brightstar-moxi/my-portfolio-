import React from 'react'

const achievementsList = [
    {
        metric: "Projects",
        value: "100+",
    },
    {
        metric: "Users",
        value: "1M+",
    },
    {
        metric: "Awards",
        value: "10+",
    },
    {
        metric: "Years",
        value: "5+",
    }
]

const AchievementSection = () => {
    return (
        <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>{
            achievementsList.map((achievement, index) => {
                return (

                    <div key={index}
                    className='flex flex-col items-center justify-center mx-4'
                    >
                        <h2 className='text-white text-4xl font-bond'>{achievement.value}</h2>
                        <p className='text-[#ADB7BE] text-base'>{achievement.metric}</p>
                    </div>
                );
            })
        }</div>
    );
};

export default AchievementSection