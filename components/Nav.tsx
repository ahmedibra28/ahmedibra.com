import { NextComponentType } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

const Nav: NextComponentType = (props) => {
  const items: { title: string; link: string }[] = [
    {
      title: 'Home',
      link: '/#home',
    },
    {
      title: 'Services',
      link: '/#services',
    },
    {
      title: 'Portfolio',
      link: '/#portfolio',
    },
    {
      title: 'Blog',
      link: '/blog',
    },
    {
      title: 'Contact',
      link: '/#contact',
    },
  ]

  return (
    <div className='navbar h-12 bg-white shadow-2xl sticky top-0 z-50 w-[95%] md:max-w-6xl mx-auto rounded-full my-5 md:my-10 md:h-[100px] flex items-center duration-1000'>
      <div className='navbar-start flex items-center'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            {items?.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href='/#home'
          className='btn btn-ghost normal-case text-xls h-auto  hover:bg-transparent'
        >
          <Image
            width={64}
            height={64}
            src='/logo.png'
            alt='hero image'
            className='mr-1 w-[70%] md:w-auto duration-1000 hidden md:block'
          />
          <div className='flexs flex-col -space-y-1 hidden md:flex'>
            <span className='text-primary text-xl md:text-2xl duration-1000'>
              Ahmed
            </span>
            <span className='text-secondary text-xl md:text-2xl duration-1000'>
              Ibrahim
            </span>
          </div>
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          {items?.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='navbar-end m-2'>
        <a href='https://github.com/ahmedibra28' target='_blank'>
          <button className='btn bg-transparent border-0 md:border md:bg-primary text-white rounded-full md:w-32'>
            <div className='indicator flex justify-center items-center gap-2'>
              <FaGithub className='text-secondary md:text-white text-3xl lg:text-2xl duration-1000' />
              <span className='capitalize hidden md:block'>GitHub</span>
            </div>
          </button>
        </a>
      </div>
    </div>
  )
}

export default Nav
