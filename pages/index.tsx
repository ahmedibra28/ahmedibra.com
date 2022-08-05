import type { NextPage } from 'next'
import Hero from '../components/Hero'
import Clients from '../components/Clients'
import Nav from '../components/Nav'
import Services from '../components/Services'
import Meta from '../components/Meta'

const Home: NextPage = () => {
  return (
    <div className=''>
      <Meta title={''} description={''} author={''} image={''} />
      <Nav />
      <Hero />
      <div className='bg-light py-4'>
        <Clients />
      </div>
      <Services />
    </div>
  )
}

export default Home
