import Image from 'next/image'
import React from 'react'
import { FaDatabase, FaGithubAlt, FaGlobe, FaReact } from 'react-icons/fa'

export default function Portfolio() {
  const items = [
    {
      _id: '2',
      title: 'Wadaag App',
      description: (
        <div className=''>
          This app offers a ride-sharing platform that connects passengers
          traveling in the same direction, enabling them to share a ride and
          split the fare, resulting in a more cost-effective and eco-friendly
          transportation option
        </div>
      ),
      image: '/projects/wadaag.png',
      techs: [
        {
          name: 'Next.JS',
          icon: <FaReact className=' text-warning' />,
        },
        {
          name: 'MongoDB',
          icon: <FaDatabase className=' text-warning' />,
        },
      ],
      links: [
        {
          name: 'Live',
          url: 'https://wadaag.app',
          icon: <FaGlobe className=' text-warning' />,
        },
        {
          name: 'Github',
          url: 'https://github.com/ahmedibra28/mamos',
          icon: <FaGithubAlt className=' text-warning' />,
        },
      ],
    },
    {
      _id: '2',
      title: 'Cargo Management System',
      description: (
        <div className=''>
          The cargo management system is a software solution designed to
          streamline the process of managing cargo shipments, from booking to
          delivery, and to provide real-time visibility into cargo status and
          location.
        </div>
      ),
      image: '/projects/mamos.png',
      techs: [
        {
          name: 'Next.JS',
          icon: <FaReact className=' text-warning' />,
        },
        {
          name: 'MongoDB',
          icon: <FaDatabase className=' text-warning' />,
        },
      ],
      links: [
        {
          name: 'Live',
          url: 'http://fcl.mamosbusiness.com',
          icon: <FaGlobe className=' text-warning' />,
        },
        {
          name: 'Github',
          url: 'https://github.com/ahmedibra28/mamos',
          icon: <FaGithubAlt className=' text-warning' />,
        },
      ],
    },
  ]
  return (
    <div
      className='mb-20 sm:mb-32 container px-4 mx-auto scroll-m-28'
      id='portfolio'
    >
      <h2 className='text-center text-3xl font-bold sm:text-5xl uppercase mb-4 mt-5 sm:mt-0 text-secondary'>
        Recent Projects
      </h2>

      <p className='text-center mb-4'>{`Some of the most recent projects I've completed for my clients`}</p>

      {items?.map((item, index) => (
        <div key={item?._id} className='gy-3 pb-5 mb-16'>
          <div className='flex flex-wrap  justify-center items-center mx-auto px-4 sm:px-0'>
            <Image
              src={item?.image}
              alt={item?.title}
              width={1000}
              height={524}
              className='sm:max-w-xl rounded-xl shadow-lg shadow-warning object-cover'
            />
            <div className='mt-7'>
              <h6 className='font-bold text-right mb-3 sm:text-xl'>
                <span className='border border-warning p-2 shadow-lg mr-3'>
                  {index + 1}
                </span>
                <span className='uppercase'> {item?.title}</span>
              </h6>
              <div className='max-w-lg sm:rounded-lg shadow-xl shadow-warning p-4 my-4 z-50 sm:-ml-36 bg-white sm:text-end'>
                {item?.description}
              </div>
              <div className='flex justify-end mt-8'>
                <a href={item?.links[0].url} target='_blank'>
                  <button className='btn btn-white btn-outline px-10 h-3 rounded-full'>
                    Check it now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
