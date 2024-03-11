import Image from 'next/image'
import React from 'react'
import { PostMeta } from '../types'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import DateTime from '@/lib/dateTime'

const PostCard = ({ post }: { post: PostMeta }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <Image
            src={
              post?.image ||
              'https://st3.depositphotos.com/23594922/31822/v/450/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'
            }
            width={1000}
            height={1000}
            quality={100}
            alt={post?.title}
            className='object-cover rounded h-44'
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
        <CardFooter>
          <CardDescription>
            {DateTime(post?.createdAt).format('MMM D YYYY')}
          </CardDescription>
        </CardFooter>
      </Card>
    </>
  )
}

export default PostCard
