import BlurImage from '@/components/BlurImage'
import Clients from '@/components/Clients'
import Contact from '@/components/Contact'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import { Button } from '@/components/ui/button'
import { years } from '@/lib/year'
import Link from 'next/link'
import { FaEnvelope } from 'react-icons/fa'

export default function Home() {
  return (
    <div className='max-w-6xl mx-auto scroll-m-44' id='home'>
      <div className='text-center text-2xl mx-2 mt-10'>
        <b>Full-stack developer</b> with over <b>{years} years</b> of experience
        building web and mobile applications.
      </div>

      <div className='flex flex-col-reverse md:flex-row justify-center md:justify-between items-center my-20 gap-4'>
        <div className='w-[90%] md:w-[48%] lg:w-[30%] mx-auto'>
          <p
            className='text-center flex justify-center items-center shadow-2xl rounded-lg flex-col gap-y-5 pt-5 mx-auto hover:scale-105 duration-1000 px-10 dark:shadow-gray-800'
            style={{ width: 300, height: 300 }}
          >
            If you are in search of a skilled and adaptable developer, please do
            not hesitate to contact me.
            <Link href={'/#contact'}>
              <Button
                variant='outline'
                className=' border-my-primary w-44 rounded-full'
              >
                <FaEnvelope className='mr-2' />
                Get in touch
              </Button>
            </Link>
          </p>
        </div>
        <div className='w-[90%] md:w-[48%] lg:w-[30%] mx-auto'>
          <BlurImage
            src='https://github.com/ahmedibra28.png'
            alt='Ahmed Ibrahim'
            width={300}
            height={300}
            className='rounded-lg w-72 shadow-2xl mx-auto hover:scale-105 duration-1000 dark:shadow-gray-500'
            quality={75}
          />
        </div>
      </div>

      <div className='mb-20 pt-1' />
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
