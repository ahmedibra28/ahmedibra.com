import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  FaAndroid,
  FaAppStore,
  FaDatabase,
  FaGithubAlt,
  FaGlobe,
  FaReact,
} from 'react-icons/fa'

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
    //       url: 'https://github.com/ahmaat19/wadaag',
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
          Mamos cargo management system, This management system has numerous
          functions such as shipment tracking, shipment booking, employee
          management, logistics management, and so on.
        </div>
      ),
      image: '/projects/mamos.png',
      techs: [
        {
          name: 'Next.JS',
          icon: <FaReact className='mb-1 text-warning' />,
        },
        {
          name: 'MongoDB',
          icon: <FaDatabase className='mb-1 text-warning' />,
        },
      ],
      links: [
        {
          name: 'Live',
          url: 'http://fcl.mamosbusiness.com',
          icon: <FaGlobe className='mb-1 text-warning' />,
        },
        {
          name: 'Github',
          url: 'https://github.com/ahmaat19/mamos',
          icon: <FaGithubAlt className='mb-1 text-warning' />,
        },
      ],
    },
  ]

  return (
    <div id='portfolio' className='py-5 mb-5'>
      <div className='container my-5'>
        <p className='text-center  mb-4'>{`Some of the most recent projects I've completed for my clients`}</p>

        {items?.map((item, index) => (
          <div
            key={item?._id}
            className='row gy-3 pb-5'
            style={{ marginBottom: 230 }}
          >
            <div className='col-lg-6 col-12 mx-auto'>
              <div className='card border-0 shadow'>
                <Image
                  src={item?.image}
                  alt={item?.title}
                  width={1000}
                  height={524}
                  className='img-fluid'
                />
                <div
                  className='card-body position-absolute bg-white shadow-lg custom-width opacity'
                  style={{ bottom: -220 }}
                >
                  <div className='text-center'>
                    <div className='d-flex justify-content-between'>
                      <span className='border border-warning p-2 shadow-lg'>
                        {index + 1}
                      </span>
                      <h6 className='text-warning text-end '>
                        Featured Project
                      </h6>
                    </div>
                    <h5 className='cad-title fw-bold text-uppercase'>
                      {item?.title}
                    </h5>
                    <div className=''>{item?.description}</div>
                    <div className='mt-4 text-center'>
                      {item?.techs?.map((tech, index) => (
                        <span key={index} className='ms-3'>
                          {tech?.icon} {tech?.name}
                        </span>
                      ))}
                    </div>
                    <div className='mt-2 text-center'>
                      {item?.links?.map((link, index) => (
                        <span key={index} className='ms-3'>
                          {link?.url ? (
                            <Link href={link?.url}>
                              <a className='text-decoration-none'>
                                {link?.icon} {link?.name}
                              </a>
                            </Link>
                          ) : (
                            <>
                              {link?.icon} {link?.name}
                            </>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
