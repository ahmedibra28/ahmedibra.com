import Image from 'next/image'
import React from 'react'
import { PostMeta } from '../types'
import AuthorSection from './AuthorSection'

const PostCard = ({ post }: { post: PostMeta }) => {
  return (
    <div className='bg-white p-4 rounded-lg'>
      <figure className='h-56'>
        <Image
          src={post?.image}
          width={1000}
          height={1000}
          quality={100}
          alt={post?.title}
          className='object-cover'
        />
      </figure>

      <div className='card-body p-4 pt-10'>
        <AuthorSection item={post} />
        <h2 className='font-bold text-center mb-2'>{post?.title}</h2>
        <p className='text-sm text-center'>{post?.excerpt}</p>
      </div>
    </div>
  )
}

export default PostCard
