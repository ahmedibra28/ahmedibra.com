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
    <div className='container'>
      <p className='text-center mb-3'>
        The image is important, but the quality with which it is made, even
        more! This is why my work has made a valuable contribution to many
        realities:
      </p>
      <div className='row'>
        <Carousel
          responsive={responsive}
          infinite={true}
          itemClass='shadow-sm text-center'
          autoPlay={true}
          arrows={false}
        >
          {clients?.map((client) => (
            <div key={client._id} className='col-auto mx-auto'>
              <Image
                width='100'
                height='100'
                src={client?.logo}
                alt={client?.name}
                className='img-fluid opacity-75'
              />
              <h5 className='fs-6 text-primary'>{client?.name}</h5>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Clients
