import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import { PostProps } from '../types'

const AuthorSection = ({ item }: { item: PostProps }) => {
  return (
    <>
      <div className='flex items-center'>
        <div className='rounded-full w-12 ring ring-primary mr-3'>
          <Image
            src={item?.avatar}
            alt='author'
            width={50}
            quality={100}
            height={50}
            className='rounded-full w-12 h-12'
          />
        </div>
        <div className='ms-2' style={{ fontSize: '80%' }}>
          <label className='text-muted'>{item?.author}</label>
          <p className='text-sm'>
            <small className='text-muted'>
              {moment(item?.createdAt).format('MMM D')}
            </small>
            <span className='mx-2'>-</span>
            <small className='text-muted'>{item?.stats?.text}</small>
            <br />
            {item?.tags?.map((t) => (
              <small
                key={t}
                className='badge bg-primary ms-1 text-gray-50 text-xs border border-primary mr-1'
              >
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
