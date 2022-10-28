import { NextComponentType } from 'next'
import Image from 'next/image'

const Services: NextComponentType = () => {
  const services: {
    _id: string
    image: string
    title: string
    description: string
  }[] = [
    {
      _id: '1',
      image: '/services/web_design.png',
      title: 'Web & Mobile Design',
      description:
        'Powerful web and mobile design that will out-perform your strongest competitors.',
    },
    {
      _id: '2',
      image: '/services/development.png',
      title: 'Development',
      description:
        ' Custom programming for most complex functions you can think.',
    },
    {
      _id: '3',
      image: '/services/ecommerce.png',
      title: 'E-commerce',
      description:
        'I build your online store using a flexible, modular platform that allows you to expand your business.',
    },
    {
      _id: '4',
      image: '/services/seo.png',
      title: 'SEO Optimization',
      description:
        'Optimizing our web designs to rank on the first page of google is our specialty.',
    },
    {
      _id: '5',
      image: '/services/marketing.png',
      title: 'Marketing',
      description:
        'I use strategic marketing tactics that have been proven to work.',
    },
    {
      _id: '6',
      image: '/services/branding.png',
      title: 'Branding',
      description:
        'A solid brand strategy, logo and guidelines help you to get you recognized',
    },
  ]
  return (
    <div id='services' className='pt-5'>
      <div className='container my-5 text-center'>
        <h3 className='font-custom fs-2'>Available Services</h3>
        <div className='row g-3 pt-3'>
          {services.map((service) => (
            <div
              key={service?._id}
              className='col-lg-4 col-md-6 col-sm-12 col-12 '
            >
              <div className='card bg-white border-0  d-flex align-items-center'>
                <Image
                  priority
                  width='80'
                  height='80'
                  src={service?.image}
                  alt={service?.title}
                  className='card-img-top img-fluid  mx-auto service-img p-2 '
                />
                <div className='card-body'>
                  <h5 className='card-title custom-text-primary'>
                    {service?.title}{' '}
                  </h5>
                  <p className='card-text'>{service?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
