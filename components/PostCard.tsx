import Image from 'next/image'
import React from 'react'
import { PostProps } from '../types'
import AuthorSection from './AuthorSection'

const PostCard = ({ post }: { post: PostProps }) => {
  return (
    <div className='card bg-base-100 shadow-xl rounded-lg'>
      <figure className='h-48'>
        <Image
          src={post?.image}
          width={1000}
          height={1000}
          quality={100}
          alt={post?.title}
          className='object-cover'
        />
      </figure>

      <div className='card-body'>
        <AuthorSection item={post} />
        <h2 className='card-title text-center'>{post?.title}</h2>
        <p className='text-sm text-center'>{post?.excerpt}</p>
      </div>
    </div>
  )
}

export default PostCard
