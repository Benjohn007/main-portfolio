import React from 'react'

const About = () => {
  return (
    <div name="about" className=' w-full h-screen bg-gradient-to-b
     from-gray-800 to-black text-white'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col 
         w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4
                border-gray-500'>About</p>
            </div>
            <p className=' text-base'>I am an agile software developer who is highly skilled in
                producing top-notch and high-quality work with relevant years of work experience. 
                My ability to quickly learn and absorb new information
                allows me to effectively develop and construct cutting-edge electronic document systems, and
                apply that knowledge to real-world problem-solving scenarios with great proficiency. I possess a
                unique capability of adapting to new and rapidly evolving technical environment in a timely
                manner. My programming expertise is exemplified by my exceptional proficiency in the .NET
                framework, specifically utilizing C# language for ASP.NET MVC and ASP.NET Core
                development.
            </p>
            <br/>
            <p className=' text-base mt-4 lg:mt-4'>
               I am passionate about creating designs with high-quality, engaging and entertaining 
               user experience with awesome strategy, technology and better conversations.
            </p>
        </div>
    </div>
  )
}

export default About