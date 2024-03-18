import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import Link from 'next/link'
import { projects } from '@/lib/projects'
import ProjectCard from './ProjectCard'
import { Button } from './ui/button'

export default function Portfolio() {
  return (
    <div
      className='mb-20 sm:mb-32 container px-4 mx-auto scroll-m-40'
      id='portfolio'
    >
      <h2 className='text-center text-3xl font-bold sm:text-5xl uppercase mb-4 mt-5 sm:mt-0 text-my-secondary'>
        Recent Projects
      </h2>

      <p className='text-center mb-4'>{`Some of the most recent projects I've completed for my clients`}</p>

      <div className='flex flex-wrap justify-center items-center mx-auto px-4 sm:px-0 gap-y-5'>
        {projects?.slice(0, 4)?.map((item, index) => (
          <ProjectCard item={item} key={index} />
        ))}
      </div>
      <div className='text-center mt-10'>
        <Link href='/portfolio'>
          <Button
            variant='outline'
            className=' border-my-primary w-44 rounded-full text-my-secondary hover:text-my-primary hover:bg-my-secondary'
          >
            <FaAngleRight />
            <span className='ml-2'>View All Projects</span>
          </Button>
        </Link>
      </div>
    </div>
  )
}
