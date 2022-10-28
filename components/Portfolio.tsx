import Image from 'next/image'
import React from 'react'

let width = typeof window !== 'undefined' && window.innerWidth
const Portfolio = () => {
  const items = [
    {
      _id: '1',
      title: 'Halcyon Theme',
      description: (
        <div className=''>
          A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and
          more. Available on Visual Studio Marketplace, Package Control, Atom
          Package Manager, and npm.
        </div>
      ),
      techs: ['Next.js', 'MongoDB', 'MongoDB Serverless'],
      githubLink: 'https://github.com/ahmaat19',
      liveLink: 'https://github.com/ahmaat19',
      //   image: '/projects/Screenshot 2022-10-28 at 9.57.34 AM.png',

      image: '/projects/Screen Shot 2022-09-14 at 10.43.35 AM.png',
    },
  ]

  return (
    <div id='portfolio' className='pt-5 mb-5 pb-5'>
      <div className='container my-5'>
        <h3 className=' fs-2 text-center'>Projects</h3>

        <p className='text-center  mb-3'>Some things I have built</p>

        {items?.map((item, index) => (
          <div key={item?._id} className='row gy-3'>
            <div className='col-lg-6 col-12 mx-auto'>
              <div className='card border-0 shadow'>
                <Image
                  src={item?.image}
                  alt={item?.title}
                  width={700}
                  height={450}
                  className='img-fluid'
                />
                <div
                  className='card-body position-absolute bg-white shadow-lg custom-width opacity'
                  style={{ bottom: -100 }}
                >
                  <div className='text-center'>
                    <div className='d-flex justify-content-between'>
                      <span className='border border-warning p-2 shadow-lg'>
                        {index + 1}
                      </span>
                      <h6 className='text-warning text-end '>
                        Feature Project
                      </h6>
                    </div>
                    <h5 className='cad-title  fw-bold'>{item?.title}</h5>
                    <div className=''>{item?.description}</div>
                    <div className='mt-4 text-center'>
                      {item?.techs?.map((tech) => (
                        <div
                          key={tech}
                          className='ms-2 badge bg-primary fw-lighter'
                        >
                          {tech}
                        </div>
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
