import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className='container px-4 mx-auto'>
      <div className='hero-content flex-col lg:flex-row'>
        <div
          style={{
            clipPath:
              'polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)',
          }}
          className='shadow-2xl shadow-primary max-w-sm lg:w-[75%]'
        >
          <Image
            src='https://github.com/ahmedibradotcom.png'
            alt='Ahmed Ibrahim Samow'
            width={300}
            quality={100}
            height={300}
            className='max-w-sm lg:w-[100%]'
          />
        </div>

        <div className='lg:pl-5'>
          <h1 className='text-4xl font-bold py-5'> Hello, {`I'm`} Ahmed,</h1>
          <p className='py-3'>
            A skilled and experienced full-stack developer with over 9 years of
            experience in developing web and mobile applications. I hold a
            <strong> {`Bachelor's`} degree in Computer Science</strong> and have
            a strong foundation in software engineering principles and
            programming concepts.
          </p>

          <p className='py-3'>
            I have developed expertise in various programming languages and
            technologies, including JavaScript, React, React Native, Node.js,
            Python, Django, SQL and MongoDB. I am passionate about creating
            efficient and user-friendly solutions that meet {`clients'`} needs.
          </p>

          <p className='py-3'>
            Aside from my professional work, I also run a YouTube channel where
            I teach programming to students and aspiring developers. You can
            check it out at{' '}
            <a
              href='https://youtube.com/@ahmedibradotcom'
              target='_blank'
              rel='noreferrer'
              className='underline'
            >
              https://youtube.com/@ahmedibradotcom
            </a>
            .
          </p>

          <p className='py-3'>
            My extensive experience in web development, combined with my passion
            for teaching, allows me to provide high-quality, practical solutions
            that align with industry best practices. I enjoy working on diverse
            projects, from small startups to large-scale enterprise
            applications.
          </p>

          <p className='py-3'>
            I believe that continuous learning is crucial for keeping up with
            the latest industry trends and technologies. I attend tech meetups,
            contribute to open-source projects, and explore new programming
            languages to broaden my skill set.
          </p>

          <p className='py-3'>
            If {`you're`} looking for an experienced and versatile full-stack
            developer to bring your ideas to life, please feel free to reach out
            to me. {`I'd`} be happy to discuss how my expertise can help you
            achieve your project goals.
          </p>

          <Link href='/#contact'>
            <button className='btn btn-primary mt-5'>Contact me</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
