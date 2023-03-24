import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaDatabase, FaGithubAlt, FaGlobe, FaReact } from 'react-icons/fa'

const Portfolio = () => {
  const items = [
    // {
    //   _id: '1',
    //   title: 'Wadaag Ride Sharing App',
    //   description: (
    //     <div className=''>
    //       This app was designed for transportation sharing, and it is the first
    //       of its kind in Somalia.
    //     </div>
    //   ),
    //   image: '/projects/wadaag.png',
    //   techs: [
    //     {
    //       name: 'React Native',
    //       icon: <FaReact className='mb-1 text-warning' />,
    //     },
    //     {
    //       name: 'Next.JS',
    //       icon: <FaReact className='mb-1 text-warning' />,
    //     },
    //     {
    //       name: 'MongoDB',
    //       icon: <FaDatabase className='mb-1 text-warning' />,
    //     },
    //   ],
    //   links: [
    //     {
    //       name: 'Live',
    //       icon: <FaGlobe className='mb-1 text-warning' />,
    //     },
    //     {
    //       name: 'Github',
    //       url: 'https://github.com/ahmedibradotcom/wadaag',
    //       icon: <FaGithubAlt className='mb-1 text-warning' />,
    //     },
    //     {
    //       name: 'App Store',
    //       icon: <FaAppStore className='mb-1 text-warning' />,
    //     },
    //     {
    //       name: 'Play Store',
    //       icon: <FaAndroid className='mb-1 text-warning' />,
    //     },
    //   ],
    // },
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
          url: 'https://github.com/ahmedibradotcom/mamos',
          icon: <FaGithubAlt className=' text-warning' />,
        },
      ],
    },
  ]

  return (
    <div
      className='mb-20 sm:mb-32 container px-4 mx-auto scroll-m-20'
      id='portfolio'
    >
      <h2 className='text-center text-3xl font-bold sm:text-5xl uppercase dark:text-primary mb-4 mt-5 sm:mt-0'>
        Recent Projects
      </h2>

      <p className='text-center mb-4'>{`Some of the most recent projects I've completed for my clients`}</p>

      {items?.map((item, index) => (
        <div
          key={item?._id}
          className='gy-3 pb-5'
          style={{ marginBottom: 230 }}
        >
          <div className='flex flex-wrap  justify-center items-center mx-auto px-4 sm:px-0'>
            <Image
              src={item?.image}
              alt={item?.title}
              width={1000}
              height={524}
              className='sm:max-w-xl rounded-xl shadow-lg shadow-warning object-cover'
            />
            <div className='mt-7'>
              <h6 className='dark:text-primary font-bold text-right mb-3 sm:text-xl'>
                <span className='border border-warning p-2 shadow-lg mr-3'>
                  {index + 1}
                </span>
                <span className='uppercase'> {item?.title}</span>
              </h6>
              <div className='max-w-lg sm:rounded-lg shadow-xl shadow-warning p-4 my-4 z-50 sm:-ml-36 bg-base-100 dark:bg-base-200 sm:text-end'>
                {item?.description}
              </div>
              <div className='flex justify-end mt-8'>
                <Link href='/portfolio/1'>
                  <button className='btn btn-primary btn-outline px-10 h-3'>
                    Read more
                  </button>
                </Link>
                {/* {item?.techs?.map((tech, index) => (
                  <div key={index} className='flex items-center mr-10'>
                    <span className='mr-3'> {tech?.icon}</span>{' '}
                    <span>{tech?.name}</span>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Portfolio
