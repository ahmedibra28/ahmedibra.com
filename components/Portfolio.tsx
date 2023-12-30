import React from 'react'
import BlurImage from './BlurImage'
import { FaAngleRight } from 'react-icons/fa'
import Link from 'next/link'
import { projects } from '@/lib/projects'

export default function Portfolio() {
  const baseDomain =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://ahmedibra.com'

  return (
    <div
      className='mb-20 sm:mb-32 container px-4 mx-auto scroll-m-28'
      id='portfolio'
    >
      <h2 className='text-center text-3xl font-bold sm:text-5xl uppercase mb-4 mt-5 sm:mt-0 text-secondary'>
        Recent Projects
      </h2>

      <p className='text-center mb-4'>{`Some of the most recent projects I've completed for my clients`}</p>

      <div className='flex flex-wrap justify-center items-center mx-auto px-4 sm:px-0 gap-y-5'>
        {projects?.slice(0, 4)?.map((item, index) => (
          <div
            key={index}
            className='card w-full md:w-[40%] shadow-lg bg-white mx-auto'
          >
            <div className='card-body'>
              <figure className='mr-auto mb-3'>
                <BlurImage
                  src={baseDomain + item.image}
                  alt={item.title}
                  width={2000}
                  height={1000}
                  className='w-16 hover:scale-105 duration-1000 object-contain rounded-lg'
                />
              </figure>

              <p className='text-gray-600'>
                <span className='font-bold'>{item.title}</span>{' '}
                {item.description}
              </p>
              <div className='card-actions justify-end'>
                <button className='btn btn-ghost underline font-normal'>
                  Read more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='text-center mt-10'>
        <Link
          href='/portfolio'
          className='btn bg-white border-0 shadow-2xl capitalize text-secondary rounded-full w-56 hover:scale-90 duration-1000'
        >
          <FaAngleRight />
          <span className='ml-2'>View All Projects</span>
        </Link>
      </div>
    </div>
  )
}
