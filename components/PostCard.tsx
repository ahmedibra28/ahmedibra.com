import Image from 'next/image'
import React from 'react'
import { PostProps } from '../types'
import AuthorSection from './AuthorSection'

const PostCard = ({ post }: { post: PostProps }) => {
  return (
    <div className='card mb-3 border-0 rounded-0'>
      <div className='row g-0'>
        <div className='col-lg-4 my-auto'>
          <Image
            src={post?.image}
            width={200}
            height={200}
            quality={100}
            alt={post?.title}
            style={{ objectFit: 'cover' }}
            className='card-img rounded-0'
          />
        </div>
        <div className='col-lg-8 my-autso d-flex flex-column justify-content-around'>
          <div className='card-body py-2 px-3 '>
            <AuthorSection item={post} />
            <h1 className='card-title fw-bold fs-6'>{post?.title}</h1>
            <p
              className='card-text text-muted'
              style={{ fontSize: '85%' }}
            >{`${post?.excerpt?.slice(0, 100)}...`}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
