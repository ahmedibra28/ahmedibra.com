import { NextComponentType } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaGithubAlt } from 'react-icons/fa'

const Nav: NextComponentType = (props) => {
  const items: { title: string; link: string }[] = [
    {
      title: 'Home',
      link: '/#home',
    },
    {
      title: 'About',
      link: '/about',
    },
    {
      title: 'Skills',
      link: '/#skills',
    },
    {
      title: 'Services',
      link: '/#services',
    },
    {
      title: 'Portfolio',
      link: '/#portfolio',
    },
    // {
    //   title: 'Blog',
    //   link: '/blog',
    // },
    {
      title: 'Contact',
      link: '/#contact',
    },
  ]

  return (
    <div className='navbar bg-base-100 sticky top-0 z-50'>
      <div className='navbar-start'>
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
        <Link href='/#home' className='btn btn-ghost normal-case text-xl'>
          <Image
            width='30'
            height='30'
            src='/logo.png'
            alt='hero image'
            className='inline-block mr-3'
          />
          <span className=''>Ahmed Ibrahim</span>
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
      <div className='navbar-end'>
        <button className='btn btn-ghost btn-circle'>
          <div className='indicator text-2xl'>
            <FaGithub />
          </div>
        </button>
      </div>
    </div>
  )
}

export default Nav
