import { NextComponentType } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaCloudDownloadAlt, FaMailBulk } from 'react-icons/fa'

const Hero: NextComponentType = () => {
  return (
    <div className='container py-5 mb-5'>
      <div className='row'>
        <div className='col-lg-7 col-12 my-auto pb-5'>
          <h1 className='fw-bold  display-5 font-customs'>{`I'm Ahmed Ibrahim`}</h1>
          <p style={{ lineHeight: '2rem' }} className='mt-3'>
            <span>
              A Full Stack Developer with 9+ years of experience in
              <strong> designing </strong>
              and <strong> developing user interfaces</strong>,
              <strong> testing</strong>,<strong> debugging</strong>, and
              <strong> training staff </strong> within modern technologies.
            </span>
            <br />
            <span>
              Proven ability in optimizing <strong> web & mobile </strong>
              functionalities that improve data retrieval and workflow
              efficiencies.
            </span>
          </p>
          <a
            href='resume.pdf'
            target='_blank'
            className='btn btn-warning rounded-pill mt-3 px-4 py-2 text-light'
          >
            <FaCloudDownloadAlt className='mb-1 me-1' />
            Resume
          </a>
          <Link
            href='/#contact'
            className='btn btn-outline-warning rounded-pill mt-3 px-4 py-2 ms-3'
          >
            <FaMailBulk className='mb-1 me-1' />
            Contact Me
          </Link>
        </div>
        <div className='col-lg-5 col-12 text-center mx-auto'>
          <Image
            src='https://github.com/ahmaat19.png'
            alt='Ahmed Ibrahim Samow'
            width={300}
            quality={100}
            height={300}
            className='rounded-pill img-fluid img-thumbnail'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
