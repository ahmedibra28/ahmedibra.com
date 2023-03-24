import { NextComponentType } from 'next'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const clients: { _id: string; name: string; logo: string }[] = [
  {
    _id: '1',
    name: 'Yardimeli Hospital',
    logo: '/clients/yardimeli.png',
  },
  {
    _id: '2',
    name: 'CeRID Org.',
    logo: '/clients/cerid.png',
  },
  {
    _id: '3',
    name: 'Farshaxan Media',
    logo: '/clients/farshaxan.png',
  },
  {
    _id: '4',
    name: 'SaMTEC College',
    logo: '/clients/samtec.png',
  },
  {
    _id: '5',
    name: 'Valleyseed Enterprise',
    logo: '/clients/valleyseed.png',
  },
  {
    _id: '6',
    name: 'WIRDO Org.',
    logo: '/clients/wirdo.png',
  },
  {
    _id: '7',
    name: 'Ligo Medical',
    logo: '/clients/ligo.png',
  },
  {
    _id: '8',
    name: 'Mamos Business',
    logo: '/clients/mamos.png',
  },
  {
    _id: '9',
    name: 'SADO Org.',
    logo: '/clients/sado.png',
  },
  {
    _id: '10',
    name: 'Wadaag',
    logo: '/clients/wadaag.png',
  },
  {
    _id: '11',
    name: 'eBallan',
    logo: '/clients/eballan.png',
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
    items: 6,
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

const Clients: NextComponentType = () => {
  return (
    <div className='mb-20 sm:mb-32 '>
      <h2 className='text-center text-3xl font-bold sm:text-5xl uppercase dark:text-primary mb-4 mt-5 sm:mt-0'>
        Clients
      </h2>
      <p className='text-center container px-4 mx-auto'>
        I collaborate with these businesses, and some of the work I accomplished
        for them included <br /> creating websites, online and offline web
        applications, mobile apps, brands, and other things.
      </p>
      <div className='py-4 mx-auto'>
        <div className='mx-auto'>
          {/* <div className='column'> */}
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
                className='flex justify-between items-center py-11 flex-col text-center dark:bg-natural-focus border border-primary rounded-3xl mx-4 shadow-lg shadow-primary m-5 dark:bg-gray-200'
              >
                <Image
                  width={100}
                  height={100}
                  src={client?.logo}
                  alt={client?.name}
                  className=''
                />
                {/* <h5 className='text-natural text-center'>{client?.name}</h5> */}
              </div>
            ))}
          </Carousel>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Clients
