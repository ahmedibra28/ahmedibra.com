import Image from 'next/image'
import React from 'react'
import { PostMeta } from '../types'
import DateTime from '@/lib/dateTime'

const AuthorSection = ({ item }: { item: PostMeta }) => {
  return (
    <>
      <div className='flex items-center'>
        <div className='rounded-full w-12 ring ring-my-primary mr-3'>
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
          <label className=''>{item?.author}</label>
          <p className='text-sm'>
            <small>{DateTime(item?.createdAt).format('MMM D')}</small>
            <span className='mx-2'>-</span>
            {/* @ts-ignore */}
            <small>{item?.stats?.text}</small>
            <br />
            {item?.tags?.map((t) => (
              <small
                key={t}
                className='px-1 py-0.5 rounded-full bg-my-primary ms-1 text-gray-50 text-xs border border-my-primary mr-1'
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
