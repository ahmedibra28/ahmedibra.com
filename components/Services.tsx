import { NextComponentType } from 'next'
import Image from 'next/image'

const Services: NextComponentType = () => {
  // const services: {
  //   _id: string
  //   image: string
  //   title: string
  //   description: string
  // }[] = [
  //   {
  //     _id: '1',
  //     image: '/services/web_design.png',
  //     title: 'Web & Mobile Design',
  //     description:
  //       'Powerful web and mobile design that will out-perform your strongest competitors.',
  //   },
  //   {
  //     _id: '2',
  //     image: '/services/development.png',
  //     title: 'Development',
  //     description:
  //       ' Custom programming for most complex functions you can think.',
  //   },
  //   {
  //     _id: '3',
  //     image: '/services/ecommerce.png',
  //     title: 'E-commerce',
  //     description:
  //       'I build your online store using a flexible, modular platform to expand your business.',
  //   },
  //   {
  //     _id: '4',
  //     image: '/services/seo.png',
  //     title: 'SEO Optimization',
  //     description:
  //       'Optimizing your website to rank on the first page of google is my specialty.',
  //   },
  //   {
  //     _id: '5',
  //     image: '/services/marketing.png',
  //     title: 'Marketing',
  //     description:
  //       'I use strategic marketing tactics that have been proven to work.',
  //   },
  //   {
  //     _id: '6',
  //     image: '/services/ussd.png',
  //     title: 'USSD',
  //     description:
  //       'I provide expert USSD configuration services that can take your business to the next level',
  //   },
  //   {
  //     _id: '7',
  //     image: '/services/branding.png',
  //     title: 'Branding',
  //     description:
  //       'A solid brand strategy, logo and guidelines help you to get you recognized.',
  //   },
  // ]

  const newServices = [
    {
      title: `Web development`,
      description: `Web development: designing UI, coding, testing, and deployment.`,
      image: '/services/web.png',
    },
    {
      title: `Mobile development`,
      description: `Mobile app dev: UI design, coding, testing, deployment for Android/iOS.`,
      image: '/services/mobile.png',
    },
    {
      title: `E-commerce`,
      description: `Online store setup & management: listings, payment, shipping, inventory.`,
      image: '/services/ecommerce.png',
    },
    {
      title: `SEO`,
      description: `Improve website ranking on Google via SEO optimization.`,
      image: '/services/seo.png',
    },
    {
      title: `Branding`,
      description: `Brand dev: logos, colors, fonts, messaging for differentiation.`,
      image: '/services/branding.png',
    },
    {
      title: `USSD`,
      description: `Mobile tech for interactive services: evc payments, info, acct. check.`,
      image: '/services/ussd.png',
    },
  ]

  return (
    <div
      className='mb-20 sm:mb-32 container px-4 mx-auto scroll-m-20'
      id='services'
    >
      <h2 className='text-center text-3xl font-bold sm:text-5xl uppercase dark:text-primary mb-4 mt-5 sm:mt-0'>
        Available Services
      </h2>

      <div className='flex flex-wrap justify-center items-center text-center'>
        {newServices.map((service, i) => (
          <div
            key={i}
            className='border border-primary sm:border-0 sm:shadow-sm sm:hover:shadow-xl sm:hover:shadow-primary sm:shadow-primary rounded-2xl sm:w-[30%] m-3 w-full'
          >
            <Image
              priority
              width={80}
              height={80}
              src={service?.image}
              alt={service?.title}
              className='mx-auto p-2'
            />
            <div className='p-3 text-center'>
              <h5 className='text-center dark:text-primary font-bold'>
                {service?.title}
              </h5>
              <p className='text-center'>{service?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
