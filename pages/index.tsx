import type { NextPage } from 'next'
import Hero from '../components/Hero'
import Clients from '../components/Clients'
import Nav from '../components/Nav'
import Services from '../components/Services'
import Meta from '../components/Meta'
import Contact from '../components/Contact'
// import Portfolio from '../components/Portfolio'

const Home: NextPage = () => {
  return (
    <div className=''>
      <Meta
        title={'Full-Stack Developer In Somalia | Ahmed Ibrahim'}
        description={`I'm a Full Stack Developer with 9+ years of experience in designing and developing user interfaces, testing, debugging, and training staff within modern technologies. Proven ability in optimizing web functionalities that improve data retrieval and workflow efficiencies.`}
        author={'Ahmed Ibrahim'}
        image='/logo.png'
      />
      <Nav />
      <Hero />

      <Clients />
      {/* <Portfolio /> */}
      <Services />
      <Contact />
    </div>
  )
}

export default Home
