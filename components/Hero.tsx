import { NextComponentType } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Hero: NextComponentType = () => {
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-lg-7 col-12 my-auto pb-5'>
          <h1 className='fw-bold  display-1 font-custom'>{`I'm Ahmed Ibrahim`}</h1>
          <p style={{ lineHeight: '2rem' }}>
            {/* A Freelance Full-Stack Developer From Mogadishu. <br />I Offer
            Modern Web & Mobile Solutions For Growing Your Business. */}
            {`
            I'm a Full Stack Developer with 9+ years of experience in designing and developing user interfaces, testing, debugging, and training staff within modern technologies. Proven ability in optimizing web & mobile functionalities that improve data retrieval and workflow efficiencies.
            `}
          </p>
          <a
            href='resume.pdf'
            target='_blank'
            className='btn btn-warning rounded-0 mt-3 px-3 py-2 text-light'
          >
            Download Resume
          </a>
          <Link href='/#contact'>
            <a className='btn btn-outline-warning rounded-0 mt-3 px-3 py-2 ms-3'>
              Contact Me
            </a>
          </Link>
        </div>
        <div className='col-lg-5 col-12 '>
          <Image
            width='711.1879'
            height='669.68268'
            src='/feeling_proud.svg'
            alt='hero image'
            className='img-fluid'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
