import { NextComponentType } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Nav: NextComponentType = () => {
  const items: { _id: string; title: string; link: string }[] = [
    {
      _id: '1',
      title: 'Github',
      link: 'https://github.com/ahmaat19',
    },
    {
      _id: '2',
      title: 'About',
      link: '#',
    },
    {
      _id: '3',
      title: 'Contact',
      link: '#',
    },
  ]
  return (
    <nav className='navbar navbar-expand-lg bg-light'>
      <div className='container'>
        <Link href='/'>
          <a className='navbar-brand'>
            <div className='d-flex align-items-center'>
              <Image
                width='30'
                height='30'
                src='/logo.png'
                alt='hero image'
                className='d-inline-block align-text-top'
              />
              <span className='fw-light fs-4 ms-2 text-primary border border-warning px-2'>
                <span className='fw-bold'>A</span>
                hmed <span className='fw-bold text-warning'>I</span>brahim
              </span>
            </div>
          </a>
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
                <Link href={item?.link}>
                  <a
                    className='nav-link active text-primary'
                    aria-current='page'
                  >
                    {item?.title}
                  </a>
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
