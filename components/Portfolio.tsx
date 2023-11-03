import React from 'react'
import BlurImage from './BlurImage'

export default function Portfolio() {
  const items = [
    {
      title: 'Soomar App',
      description: `  The cargo management system is a software solution designed to streamline the process of managing cargo shipments, from booking to delivery, and to provide real-time visibility into cargo status and location.`,
      image: '/projects/soomar.svg',
      new: true,
    },
    {
      title: 'Wadaag App',
      description: ` This app offers a ride-sharing platform that connects passengers traveling in the same direction, enabling them to share a ride and split the fare, resulting in a more cost-effective and eco-friendly
      transportation option`,
      image: '/projects/wadaag.svg',
      new: false,
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

      <div className='flex flex-wrap justify-between items-center mx-auto px-4 sm:px-0 gap-y-5'>
        {items?.map((item, index) => (
          <div
            key={index}
            className='card w-full md:w-[48%] bg-white shadow-lg duration-1000 border'
          >
            <figure className='bg-gradient-to-r from-white to-primary'>
              <BlurImage
                src={item.image}
                alt={item.title}
                width={2000}
                height={1000}
                className='w-full hover:scale-105 duration-1000 object-contain'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>
                {item.title}
                {item.new && (
                  <div className='badge badge-secondary text-xs'>NEW</div>
                )}
              </h2>
              {/* <p>{item.description}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
