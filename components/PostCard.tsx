import Image from 'next/image'
import React from 'react'
import { PostProps } from '../types'
import moment from 'moment'

const PostCard = ({ post }: { post: PostProps }) => {
  return (
    <div className='card mb-3 border-0 rounded-0'>
      <div className='row g-0'>
        <div className='col-lg-4'>
          <Image
            src={post?.image}
            width={200}
            height={200}
            alt={post?.title}
            style={{ objectFit: 'cover' }}
            className='card-img rounded-0'
          />
        </div>
        <div className='col-lg-8'>
          <div className='card-body'>
            <h5 className='card-title fw-bold'>{post?.title}</h5>
            <p className='card-text'>{`${post?.excerpt?.slice(0, 120)}...`}</p>
            <p className='card-text'>
              <small className='text-muted '>{post?.author}</small>
              <span className='mx-2'>-</span>
              <small className='text-muted'>
                {moment(post?.createdAt).format('MMM D')}
              </small>
              <span className='mx-2'>-</span>
              <small className='text-muted'>{post?.stats?.text}</small>
              <span className='mx-2'>-</span>
              <small className='badge bg-warning px-2 rounded-pill'>
                {post?.category}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
