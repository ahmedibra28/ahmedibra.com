'use client'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import BlurImage from './BlurImage'
import { BASE_URL } from '@/lib/constants'

const clients: { _id: string; name: string; logo: string }[] = [
  {
    _id: '1',
    name: 'Yardimeli Hospital',
    logo: BASE_URL + '/clients/yardimeli.png',
  },
  {
    _id: '2',
    name: 'CeRID Org.',
    logo: BASE_URL + '/clients/cerid.png',
  },
  {
    _id: '3',
    name: 'Farshaxan Media',
    logo: BASE_URL + '/clients/farshaxan.png',
  },
  {
    _id: '4',
    name: 'SaMTEC College',
    logo: BASE_URL + '/clients/samtec.png',
  },
  {
    _id: '5',
    name: 'Valleyseed Enterprise',
    logo: BASE_URL + '/clients/valleyseed.png',
  },
  {
    _id: '6',
    name: 'WIRDO Org.',
    logo: BASE_URL + '/clients/wirdo.png',
  },
  {
    _id: '7',
    name: 'Ligo Medical',
    logo: BASE_URL + '/clients/ligo.png',
  },
  {
    _id: '8',
    name: 'Mamos Business',
    logo: BASE_URL + '/clients/mamos.png',
  },
  {
    _id: '9',
    name: 'SADO Org.',
    logo: BASE_URL + '/clients/sado.png',
  },
  {
    _id: '10',
    name: 'Wadaag',
    logo: BASE_URL + '/clients/wadaag.png',
  },
  {
    _id: '11',
    name: 'eBallan',
    logo: BASE_URL + '/clients/eballan.png',
  },
]

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 992, min: 768 },
    items: 4,
  },
  largeMobile: {
    breakpoint: { max: 768, min: 576 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 2,
  },
}

export default function Clients() {
  return (
    <div className='mb-20 sm:mb-32 '>
      <h2 className='text-center text-3xl font-bold sm:text-5xl uppercase text-my-secondary mb-4 mt-5 sm:mt-0 duration-1000'>
        Clients
      </h2>
      <p className='text-center container px-4 mx-auto w-full md:w-[75%] duration-1000'>
        I collaborate with these businesses, and some of the work I accomplished
        for them included creating websites, online and offline web
        applications, mobile apps, brands, and other things.
      </p>
      <div className='py-4 mx-auto'>
        <div className='mx-auto'>
          <Carousel
            responsive={responsive}
            infinite={true}
            itemClass='text-center'
            autoPlay={true}
            arrows={false}
          >
            {clients?.map((client) => (
              <div
                key={client._id}
                className='flex justify-between items-center py-10 flex-col text-center border border-white rounded-3xl mx-4 shadow-lg shadow-my-primary m-5 h-44 w-44'
              >
                <BlurImage
                  width={200}
                  height={200}
                  src={client?.logo}
                  alt={client?.name}
                  className='h-full w-full mx-auto object-contain'
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}
