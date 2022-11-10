import { NextComponentType } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Nav: NextComponentType = (props) => {
  const items: { _id: string; title: string; link: string }[] = [
    {
      _id: '1',
      title: 'Github',
      link: 'https://github.com/ahmaat19',
    },
    {
      _id: '2',
      title: 'Blog',
      link: '/blog',
    },
  ].reverse()

  return (
    <nav className='navbar navbar-expand-lg bg-white'>
      <div className='container'>
        <Link href='/' className='navbar-brand'>
          <div className='d-flex align-items-center'>
            <Image
              width='30'
              height='30'
              src='/logo.png'
              alt='hero image'
              className='d-inline-block align-text-top'
            />
          </div>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            {items?.map((item) => (
              <li key={item?._id} className='nav-item'>
                <Link
                  href={item?.link}
                  className='nav-link active text-primary'
                  aria-current='page'
                  target={
                    item?.title === 'Github' || item?.title === 'Youtube'
                      ? '_blank'
                      : '_self'
                  }
                >
                  {item?.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
