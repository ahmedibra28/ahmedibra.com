import { NextComponentType } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Hero: NextComponentType = () => {
  return (
    <div className='hero min-h-screen scroll-m-40' id='home'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <Image
          src='/profile.jpg'
          alt='Ahmed Ibrahim Samow'
          width={300}
          quality={100}
          height={300}
          className='rounded-2xl shadow-2xl shadow-primary max-w-sm lg:w-[75%]'
        />

        <div className='lg:pr-5'>
          <h1 className='text-5xl font-bold py-5'> Hello, {`I'm`} Ahmed,</h1>
          <p className='py-3'>
            A full-stack developer with over 9 years of experience in web and
            mobile app development. I have a {`Bachelor's`} degree in Computer
            Science and specialize in front-end and back-end development,
            database design, and server management.
          </p>

          <p className='py-3'>
            If {`you're`} looking for an experienced and versatile full-stack
            developer to help you bring your vision to life, please feel free to
            reach out to me.
          </p>

          <div className='text-center mb-5 pb-5 sm:pb-0 sm:mb-0 sm:text-start'>
            <Link href='/#contact'>
              <button className='btn btn-primary mt-5'>Contact me</button>
            </Link>
            <Link href='/about'>
              <button className='btn btn-outline btn-ghost hover:bg-transparent hover:text-primary mt-5 sm:ml-5'>
                Learn more about me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
