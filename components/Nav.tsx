'use client'

import React, { Fragment } from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { FaBars, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import Link from 'next/link'

export default function Navigation() {
  const items: { title: string; link: string }[] = [
    {
      title: 'Services',
      link: '/#services',
    },
    {
      title: 'Portfolio',
      link: '/#portfolio',
    },
    {
      title: 'Posts',
      link: '/posts',
    },
    {
      title: 'Contact',
      link: '/#contact',
    },
  ]

  const renderItems = () => {
    return items.map((item) => (
      <NavigationMenuItem key={item.title}>
        <Link href={item.link} legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {item.title}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    ))
  }

  const renderDropdownItems = () => {
    return items.map((item) => (
      <DropdownMenuItem key={item.title}>
        <Link href={item.link} legacyBehavior passHref>
          {item.title}
        </Link>
      </DropdownMenuItem>
    ))
  }

  return (
    <nav className='border-b border-x-0 border-t-0 py-4 sticky top-0 bg-white z-50'>
      <div className='container flex min-h-20 lg:flex-col gap-y-2 items-center justify-between'>
        <Link href={'/'} aria-label='Home'>
          <Avatar className='size-16'>
            <AvatarImage alt='logo' src='https://github.com/ahmedibra28.png' />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
        </Link>

        <Fragment>
          {/* for mobile and tab */}
          <div className='lg:hidden'>
            <DropdownMenu>
              <DropdownMenuTrigger
                aria-label='Open'
                className='text-2xl focus:hidden'
              >
                <FaBars className='text-primary' />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {renderDropdownItems()}
                <DropdownMenuItem>
                  <a
                    href='https://github.com/ahmedibra28'
                    target='_blank'
                    aria-label='GitHub Profile'
                  >
                    <span className='flex items-center gap-x-1'>
                      <FaGithub className='' /> Github
                    </span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a
                    href='https://www.linkedin.com/in/ahmedibra28'
                    target='_blank'
                    aria-label='LinkedIn Profile'
                  >
                    <span className='flex items-center gap-x-1'>
                      <FaLinkedinIn className='' /> LinkedIn
                    </span>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* for large screen */}
          <div className='hidden flex-row gap-x-1 lg:flex'>
            <NavigationMenu>
              <NavigationMenuList>{renderItems()}</NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <a
                    className={navigationMenuTriggerStyle()}
                    href='https://github.com/ahmedibra28'
                    target='_blank'
                    aria-label='GitHub Profile'
                  >
                    <span className='flex items-center gap-x-1'>
                      <FaGithub className='' /> Github
                    </span>
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a
                    className={navigationMenuTriggerStyle()}
                    href='https://www.linkedin.com/in/ahmedibra28'
                    target='_blank'
                    aria-label='LinkedIn Profile'
                  >
                    <span className='flex items-center gap-x-1'>
                      <FaLinkedinIn className='' /> LinkedIn
                    </span>
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </Fragment>
      </div>
    </nav>
  )
}
