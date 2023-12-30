import BlurImage from '@/components/BlurImage'
import Meta from '@/components/Meta'
import { projects } from '@/lib/projects'
import React from 'react'

export const metadata = {
  ...Meta({
    title: 'Projects by Ahmed Ibrahim',
    description: `Browse through all the projects built by Ahmed Ibrahim, a full-stack developer with years of experience. From web development to cloud hosting and mobile apps, find inspiration and valuable insights from his journey.`,
    author: 'Ahmed Ibrahim',
    keyword: `All projects, Ahmed Ibrahim, full-stack developer, web development, cloud hosting, mobile apps, journey, insights, inspiration, HTML, CSS, JavaScript, React.js, Node.js, MongoDB, Django, Bootstrap, AWS, DigitalOcean, Google Cloud, Linode, React Native, Wadaag App, ride-sharing app, Somalia`,
    image: '/logo.png',
  }),
}

export default async function Page() {
  const baseDomain =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://ahmedibra.com'

  return (
    <div className='mb-20 sm:mb-32 mx-auto scroll-m-28 max-w-6xl'>
      <h2 className='text-center text-3xl font-bold sm:text-5xl uppercase mb-4 mt-5 sm:mt-0 text-secondary'>
        Projects
      </h2>

      <p className='text-center mb-4'>{`Some of the most recent projects I've completed for my clients`}</p>

      <div className='flex flex-wrap justify-between items-center mx-auto px-4 sm:px-0 gap-y-5'>
        {projects?.map((item, index) => (
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
    </div>
  )
}
