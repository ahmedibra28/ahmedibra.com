import React from 'react'
import { getAllPostsMeta } from '@/lib/mdx'
import Link from 'next/link'
import PostCard from '@/components/PostCard'
import { PostMeta } from '@/types'
import Meta from '@/components/Meta'

export const metadata = {
  ...Meta({
    title: 'All Posts by Ahmed Ibrahim',
    description: `Browse through all the posts written by Ahmed Ibrahim, a full-stack developer with years of experience. From web development to cloud hosting and mobile apps, find inspiration and valuable insights from his journey.
        `,
    author: 'Ahmed Ibrahim',
    keyword: `All posts, Ahmed Ibrahim, full-stack developer, web development, cloud hosting, mobile apps, journey, insights, inspiration, HTML, CSS, JavaScript, React.js, Node.js, MongoDB, Django, Bootstrap, AWS, DigitalOcean, Google Cloud, Linode, React Native, Wadaag App, ride-sharing app, Somalia`,
    image: '/logo.png',
  }),
}
export default async function Page() {
  const posts = (await getAllPostsMeta()) as PostMeta[]

  return (
    <div className='my-7 sm:mb-32 container px-4 mx-auto scroll-m-20 lg:max-w-6xl'>
      <div className='flex flex-row justify-between flex-wrap'>
        {posts?.map((post) => (
          <div
            key={post.slug}
            className='shadow mb-10  md:w-[70%] sm:w-[80%] lg:w-[48%] mx-auto lg:mx-0'
          >
            <Link href={`/blog/${post.slug}`}>
              <PostCard post={post} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}