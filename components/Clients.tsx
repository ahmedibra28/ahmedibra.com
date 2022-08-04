import { NextComponentType } from 'next'
import Image from 'next/image'

const clients: { _id: string; name: string; logo: string }[] = [
  {
    _id: '1',
    name: 'Client One',
    logo: '/logo.png',
  },
  {
    _id: '2',
    name: 'Client Two',
    logo: '/logo.png',
  },
  {
    _id: '3',
    name: 'Client Three',
    logo: '/logo.png',
  },
  {
    _id: '4',
    name: 'Client Four',
    logo: '/logo.png',
  },
  {
    _id: '5',
    name: 'Client Five',
    logo: '/logo.png',
  },
  {
    _id: '6',
    name: 'Client Six',
    logo: '/logo.png',
  },
]

const Clients: NextComponentType = () => {
  return (
    <div className='container'>
      <div className='row'>
        {clients?.map((client) => (
          <div key={client._id} className='col-auto mx-auto'>
            <Image
              width='100'
              height='100'
              src={client?.logo}
              alt={client?.logo}
              className='img-fluid'
            />
            <h5 className='text-center'>{client?.name}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Clients
