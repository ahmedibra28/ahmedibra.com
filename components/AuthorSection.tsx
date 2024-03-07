import Image from 'next/image'
import React from 'react'
import { PostMeta } from '../types'
import DateTime from '@/lib/dateTime'
import { Badge } from '@/components/ui/badge'

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
            <small>{DateTime(item?.createdAt).format('MMM D YYYY')}</small>
            {/* <span className='mx-2'>-</span> */}
            {/* @ts-ignore */}
            {/* <small>{item?.stats?.text}</small> */}
            <br />
            <div className='hidden md:flex gap-x-1'>
              {item?.tags?.map((t) => (
                // @ts-ignore
                <Badge key={t} variant='outline'>
                  {t}
                </Badge>
              ))}
            </div>
          </p>
        </div>
      </div>
    </>
  )
}

export default AuthorSection
