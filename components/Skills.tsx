import React from 'react'
import {
  SiCss3,
  SiDjango,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiSemanticuireact,
  SiTailwindcss,
} from 'react-icons/si'

const Skills = () => {
  const frontend = [
    { name: 'HTML', icon: <SiHtml5 className='text-3xl mr-2' /> },
    { name: 'CSS', icon: <SiCss3 className='text-3xl mr-2' /> },
    { name: 'Tailwindcss ', icon: <SiTailwindcss className='text-3xl mr-2' /> },
    { name: 'JavaScript', icon: <SiJavascript className='text-3xl mr-2' /> },
    { name: 'React.JS', icon: <SiSemanticuireact className='text-3xl mr-2' /> },
    { name: 'Next.JS', icon: <SiNextdotjs className='text-3xl mr-2' /> },
  ]
  const backend = [
    { name: 'MongoDB', icon: <SiMongodb className='text-3xl mr-2' /> },
    { name: 'SQL', icon: <SiMicrosoftsqlserver className='text-3xl mr-2' /> },
    { name: 'Python', icon: <SiPython className='text-3xl mr-2' /> },
    { name: 'Node.js ', icon: <SiNodedotjs className='text-3xl mr-2' /> },
    { name: 'Django', icon: <SiDjango className='text-3xl mr-2' /> },
    { name: 'Express.js', icon: <SiExpress className='text-3xl mr-2' /> },
  ]
  return (
    <div
      className='mb-20 sm:mb-32 container px-4 mx-auto scroll-m-20'
      id='skills'
    >
      <h2 className='text-center text-3xl font-bold sm:text-5xl uppercase dark:text-primary mb-4 mt-5 sm:mt-0'>
        The Tech I use
      </h2>

      <p className='text-center'>
        {`I've`} been using different <strong>languages</strong> and
        <strong> frameworks</strong> extensively in my recent projects.
      </p>
      <p className='text-center mb-6'>
        Overall, {`I'm`} confident in my ability to use these tools to create
        high-quality applications that are both efficient and user-friendly.
      </p>

      <div className='flex flex-col sm:flex-row justify-center items-center text-center'>
        <div className='w-full lg:w-1/3 sm:mr-7'>
          <h3 className='font-bold uppercase text-xl'>Frontend</h3>
          <hr className='mt-2 mb-4' />
          <ul className='flex flex-wrap'>
            {frontend.map((skill) => (
              <li
                key={skill.name}
                className='rounded-2xl flex items-center p-2 mb-3 hover:text-primary hover:border-primary hover:animate-pulse shadow-sm shadow-primary w-[45%] mx-auto'
              >
                <span className='flex flex-row items-center text-sm'>
                  {skill.icon} <span>{skill.name}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className='w-full lg:w-1/3 mx-2 sm:ml-7'>
          <h3 className='font-bold uppercase text-xl'>Backend</h3>
          <hr className='mt-2 mb-4' />
          <ul className='flex flex-wrap'>
            {backend.map((skill) => (
              <li
                key={skill.name}
                className='rounded-2xl flex items-center p-2 mb-3 hover:text-primary hover:border-primary hover:animate-pulse shadow-sm shadow-primary w-[45%] mx-auto'
              >
                <span className='flex flex-row items-center text-sm'>
                  {skill.icon} <span>{skill.name}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills