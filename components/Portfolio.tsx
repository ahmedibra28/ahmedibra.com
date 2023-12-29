import React from 'react'
import BlurImage from './BlurImage'

export default function Portfolio() {
  const baseDomain =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://ahmedibra.com'

  // const items = [
  //   {
  //     title: 'Dankaab App',
  //     description: `The cargo management system is a software solution designed to streamline the process of managing cargo shipments, from booking to delivery, and to provide real-time visibility into cargo status and location.`,
  //     image: '/projects/dankaab.svg',
  //     new: true,
  //   },
  //   {
  //     title: 'Soomar App',
  //     description: `The cargo management system is a software solution designed to streamline the process of managing cargo shipments, from booking to delivery, and to provide real-time visibility into cargo status and location.`,
  //     image: '/projects/soomar.svg',
  //     new: false,
  //   },
  //   {
  //     title: 'Wadaag App',
  //     description: `This app offers a ride-sharing platform that connects passengers traveling in the same direction, enabling them to share a ride and split the fare, resulting in a more cost-effective and eco-friendly
  //     transportation option`,
  //     image: '/projects/wadaag.svg',
  //     new: false,
  //   },
  // ]
  const items = [
    {
      title: 'Dankaab App',
      description: `is a simple ecommerce mobile application. It allows users to browse products, add items to a cart, and purchase orders.`,
      image: '/projects/dankaab-app.png',
      new: true,
    },
    {
      title: 'Soomar App',
      description: `is a mobile marketplace app that allows users to easily find and purchase products on-the-go.`,
      image: '/projects/soomar-app.png',
      new: false,
    },
    {
      title: 'Wadaag App',
      description: `is a versatile all-in-one mobile app for transportation, shopping and housing needs. Users can get a ride, find goods and services, or book rental accommodation - all in one simple app.`,
      image: '/projects/wadaag-app.png',
      new: false,
    },
    {
      title: 'Kinyozi App',
      description: `is a user-friendly mobile application that simplifies barbershop appointments. It enables customers to effortlessly schedule appointments with their preferred barbers, ensuring a personalized grooming experience.`,
      image: '/projects/kinyozi-app.png',
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

      <div className='flex flex-wrap justify-center items-center mx-auto px-4 sm:px-0 gap-y-5'>
        {items?.map((item, index) => (
          <div
            key={index}
            className='card w-full md:w-[40%] shadow-xl bg-white mx-auto'
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
    </div>
  )
}
