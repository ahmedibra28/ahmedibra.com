import Image from 'next/image'
import React from 'react'
import { PostMeta } from '../types'
import AuthorSection from './AuthorSection'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const PostCard = ({ post }: { post: PostMeta }) => {
  return (
    <>
      <Card className='grid lg:grid-cols-2'>
        <CardHeader className='lg:p-0'>
          <Image
            src={post?.image}
            width={1000}
            height={1000}
            quality={100}
            alt={post?.title}
            className='object-cover rounded'
          />
        </CardHeader>
        <CardContent className='my-auto'>
          <CardTitle className='text-lg mb-2 leading-5 line-clamp-2'>
            {post?.title}
          </CardTitle>
          <CardDescription className='line-clamp-2'>
            {post?.excerpt}
          </CardDescription>
        </CardContent>
      </Card>
    </>
  )
}

export default PostCard
