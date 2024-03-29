import Image from 'next/image'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import DateTime from '@/lib/dateTime'
import { Post } from '@/.contentlayer/generated'
import { BASE_URL } from '@/lib/constants'

const PostCard = ({ post }: { post: Post }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <Image
            src={BASE_URL + post?.image}
            width={1000}
            height={1000}
            quality={100}
            alt={post?.title}
            className='object-cover rounded h-44'
            unoptimized
          />
        </CardHeader>
        <CardContent>
          <CardTitle className='text-lg mb-2 leading-5 line-clamp-2'>
            {post?.title}
          </CardTitle>
          <CardDescription className='line-clamp-2'>
            {post?.excerpt}
          </CardDescription>
        </CardContent>
        <CardFooter className='flex justify-end'>
          <CardDescription className='text-xs'>
            {DateTime(post?.createdAt).format('MMM D YYYY')}
          </CardDescription>
        </CardFooter>
      </Card>
    </>
  )
}

export default PostCard
