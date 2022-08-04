import { NextComponentType } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Nav: NextComponentType = () => {
  return (
    // <nav className='navbar bg-light'>
    //   <div className='container'>
    //     <Link href='/'>
    //       <a className='navbar-brand'>
    //         <Image
    //           width='24'
    //           height='24'
    //           src='/logo.png'
    //           alt='hero image'
    //           className='d-inline-block align-text-top'
    //         />
    //         <span> Ahmed Ibrahim</span>
    //       </a>
    //     </Link>
    //   </div>
    // </nav>

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
            <li className='nav-item'>
              <Link href='https://github.com/ahmaat19'>
                <a className='nav-link active text-primary' aria-current='page'>
                  Github
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
