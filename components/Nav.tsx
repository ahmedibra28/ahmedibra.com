import { NextComponentType } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars, FaGithub } from 'react-icons/fa'
import { Button } from './ui/button'

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar'

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
    <div className='h-12 md:bg-white bg-transparent md:shadow-2xl md:sticky top-0 z-50 w-[95%] md:max-w-6xl mx-auto rounded-full my-5 md:my-10 md:h-[100px] flex justify-between items-center duration-1000 px-4'>
      <div className='navbar-start flex items-center'>
        <div className='md:hidden z-50'>
          <Menubar className='border-none'>
            <MenubarMenu>
              <MenubarTrigger className='outline-none'>
                <FaBars className='text-2xl' />
              </MenubarTrigger>
              <MenubarContent>
                {items?.map((item, index) => (
                  <MenubarItem key={index}>
                    <Link href={item.link}>{item.title}</Link>
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>

        <Link
          href='/#home'
          className='btn btn-ghost normal-case text-xls h-auto hover:bg-transparent hidden md:block'
        >
          <Image
            width={64}
            height={64}
            src='/logo.png'
            alt='hero image'
            className='mr-1 w-[70%] md:w-auto duration-1000 hidden md:block'
          />
        </Link>
      </div>
      <div className='navbar-center hidden md:flex'>
        <ul className='flex space-x-4 px-1'>
          {items?.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <a
        href='https://github.com/ahmedibra28'
        target='_blank'
        aria-label='GitHub Profile'
      >
        <Button variant='outline' className='rounded-full border-my-primary'>
          <FaGithub className='text-my-secondary md:text-my-secondary text-3xl lg:text-2xl duration-1000 mr-2' />
          GitHub
        </Button>
      </a>
    </div>
  )
}

export default Nav
