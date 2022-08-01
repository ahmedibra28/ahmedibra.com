import React from 'react'

const Hero = () => {
  return (
    <div className='containers bg-warning'>
      <div className='row w-100 vh-100'>
        <div className='col-lg-5 col-12 d-flex flex-column justify-content-center '>
          <h4>HELLO</h4>
          <h1 className='display-1 fw-bold'>I am Ahmed</h1>
          <p>
            A Freelance Full-Stack Developer <br /> From Mogadishu
          </p>
          <button className='btn btn-outline-primary btn-lg rounded-0 w-25'>
            HIRE ME
          </button>
        </div>
        <div className='col-lg-7 col-12'></div>
      </div>
    </div>
  )
}

export default Hero
