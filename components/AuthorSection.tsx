import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import { PostProps } from '../types'

const AuthorSection = ({ item }: { item: PostProps }) => {
  return (
    <>
      <div className='d-flex align-items-center'>
        <div className='bg-white rounded-pill'>
          <Image
            src={item?.avatar}
            alt='author'
            width={50}
            quality={100}
            height={50}
            className='rounded-pill'
          />
        </div>
        <div className='ms-2' style={{ fontSize: '80%' }}>
          <label className='text-muted'>{item?.author}</label>
          <p className='card-text'>
            <small className='text-muted'>
              {moment(item?.createdAt).format('MMM D')}
            </small>
            <span className='mx-2'>-</span>
            <small className='text-muted'>{item?.stats?.text}</small>
            <br />
            {item?.tags?.map((t) => (
              <small key={t} className='badge bg-warning ms-1'>
                {t}
              </small>
            ))}
          </p>
        </div>
      </div>
      <hr className='my-2' />
    </>
  )
}

export default AuthorSection
