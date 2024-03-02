import {
  FaHtml5,
  FaMobileAlt,
  FaLayerGroup,
  FaNetworkWired,
  FaDatabase,
  FaServer,
  FaPaintBrush,
  FaShoppingCart,
  FaCogs,
  FaCode,
} from 'react-icons/fa'

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Build scalable and responsive web applications.',
      icon: <FaHtml5 className='mx-auto text-3xl text-my-primary' />,
    },
    {
      title: 'Mobile App Development',
      description: 'Develop cross-platform mobile applications.',
      icon: <FaMobileAlt className='mx-auto text-3xl text-my-primary' />,
    },
    {
      title: 'Full Stack Development',
      description:
        'Create end-to-end web solutions, covering both front-end and back-end.',
      icon: <FaLayerGroup className='mx-auto text-3xl text-my-primary' />,
    },
    {
      title: 'API Development',
      description: 'Build robust APIs using different technologies.',
      icon: <FaNetworkWired className='mx-auto text-3xl text-my-primary' />,
    },
    {
      title: 'Database Management',
      description: 'Optimize DBs with SQL/NoSQL: PostgreSQL, MongoDB.',
      icon: <FaDatabase className='mx-auto text-3xl text-my-primary' />,
    },
    {
      title: 'Server Configuration and Deployment',
      description: 'Setup servers, deploy apps: Docker, AWS, Digitalocean.',
      icon: <FaServer className='mx-auto text-3xl text-my-primary' />,
    },
    {
      title: 'UI/UX Design and Development',
      description:
        'Design visually appealing user interfaces and develop interactive experiences.',
      icon: <FaPaintBrush className='mx-auto text-3xl text-my-primary' />,
    },
    {
      title: 'E-commerce Solutions',
      description: 'Build secure and scalable e-commerce platforms.',
      icon: <FaShoppingCart className='mx-auto text-3xl text-my-primary' />,
    },
    {
      title: 'Custom Software Development',
      description:
        'Create tailor-made software solutions to meet specific business requirements.',
      icon: <FaCogs className='mx-auto text-3xl text-my-primary' />,
    },
    {
      title: 'Code Review and Refactoring',
      description:
        'Review & refactor code to enhance quality, readability, and maintainability.',
      icon: <FaCode className='mx-auto text-3xl text-my-primary' />,
    },
  ]
  return (
    <div
      className='mb-20 sm:mb-32 container px-4 mx-auto scroll-m-40'
      id='services'
    >
      <h2 className='text-center text-3xl font-bold sm:text-5xl uppercase mb-4 mt-5 sm:mt-0 text-my-secondary'>
        Available Services
      </h2>

      <div className='flex flex-wrap justify-center items-center text-center'>
        {services.map((service, i) => (
          <div
            key={i}
            className='border border-my-primary sm:border-0 shadow-sm hover:shadow-lg hover:shadow-white shadow-my-primary rounded-2xl sm:w-[30%] m-3 w-full duration-1000 bg-white'
          >
            <div className='mx-auto w-14 h-14 rounded-full flex justify-center items-center border-2 border-my-primary border-t-0 border-l-0 border-r-0 mt-2 shadow-3xl'>
              {service?.icon}
            </div>

            <div className='p-3 text-center'>
              <label className='text-center font-bold'>{service?.title}</label>
              <p className='text-center'>{service?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
