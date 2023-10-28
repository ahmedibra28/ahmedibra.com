import Image from 'next/image'

export default function Services() {
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
      className='mb-20 sm:mb-32 container px-4 mx-auto scroll-m-28'
      id='services'
    >
      <h2 className='text-center text-3xl font-bold sm:text-5xl uppercase mb-4 mt-5 sm:mt-0 text-secondary'>
        Available Services
      </h2>

      <div className='flex flex-wrap justify-center items-center text-center'>
        {newServices.map((service, i) => (
          <div
            key={i}
            className='border border-primary sm:border-0 sm:shadow-sm sm:hover:shadow-xl sm:hover:shadow-primary sm:shadow-primary rounded-2xl sm:w-[30%] m-3 w-full duration-1000 bg-white'
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
              <h5 className='text-center font-bold'>{service?.title}</h5>
              <p className='text-center'>{service?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
