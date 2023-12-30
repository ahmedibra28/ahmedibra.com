import BlurImage from '@/components/BlurImage'
import Clients from '@/components/Clients'
import Contact from '@/components/Contact'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Link from 'next/link'
import { FaEnvelope, FaInfoCircle } from 'react-icons/fa'

export default function Home() {
  return (
    <div className='max-w-6xl mx-auto scroll-m-44' id='home'>
      <div className='text-center text-2xl mx-2'>
        Experienced <strong>full-stack developer</strong> with{' '}
        <strong>10+ years of expertise</strong> <br /> in web and mobile app
        development.
      </div>

      <div className='flex flex-col-reverse md:flex-row justify-center md:justify-between items-center my-20 gap-4'>
        <div className='w-[90%] md:w-[48%] lg:w-[30%] mx-auto'>
          <p
            className='text-center flex justify-center items-center shadow-2xl rounded-lg flex-col gap-y-5 pt-5 mx-auto hover:scale-105 duration-1000 px-10'
            style={{ width: 300, height: 300 }}
          >
            If you are in search of a skilled and adaptable developer, please do
            not hesitate to contact me.
            <Link
              href={'/#contact'}
              className='btn bg-primary capitalize text-secondary rounded-full w-44'
            >
              <FaEnvelope />
              Get in touch
            </Link>
          </p>
        </div>
        <div className='w-[90%] md:w-[48%] lg:w-[30%] mx-auto'>
          <BlurImage
            src='https://github.com/ahmedibra28.png'
            alt='Ahmed Ibrahim'
            width={300}
            height={300}
            className='rounded-lg w-72 shadow-2xl mx-auto hover:scale-105 duration-1000'
            quality={75}
          />
        </div>
      </div>

      <div className='text-center'>
        <button className='btn bg-white border-0 shadow-2xl capitalize text-secondary rounded-full w-56 hover:scale-90 duration-1000'>
          <FaInfoCircle />
          Learn More
        </button>
      </div>

      <div className='mb-20' />
      <Clients />

      <div className='mb-20' />
      <Skills />

      <div className='mb-20' />
      <Services />

      <div className='mb-20' />
      <Portfolio />

      <div className='mb-20' />
      <Contact />
    </div>
  )
}
