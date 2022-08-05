import { NextComponentType } from 'next'
import Image from 'next/image'

const Hero: NextComponentType = () => {
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-lg-7 col-12 my-auto pb-5'>
          <h1 className='fw-bold  display-1'>I AM AHMED IBRAHIM</h1>
          <p>
            A Freelance Full-Stack Developer From Mogadishu. <br />I Offer
            Modern Web & Mobile Solutions For Growing Your Business.
          </p>
          <a
            href='resume.pdf'
            target='_blank'
            className='btn btn-warning rounded-0 btn-lg mt-3 shadow'
          >
            Download Resume
          </a>
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
