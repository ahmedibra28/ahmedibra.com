import React from 'react'
import { allPosts } from '@/.contentlayer/generated'
import Link from 'next/link'
import PostCard from '@/components/PostCard'
import Meta from '@/components/Meta'

export const metadata = {
  ...Meta({
    title: "Ahmed Ibrahim's Blog - Explore Insightful Posts",
    description: `Browse through all the posts written by Ahmed Ibrahim, a full-stack developer with years of experience. From web development to cloud hosting and mobile apps, find inspiration and valuable insights from his journey.
        `,
    author: 'Ahmed Ibrahim',
    keyword: `All posts, Ahmed Ibrahim, full-stack developer, web development, cloud hosting, mobile apps, journey, insights, inspiration, HTML, CSS, JavaScript, React.js, Node.js, MongoDB, Django, Bootstrap, AWS, DigitalOcean, Google Cloud, Linode, React Native, Wadaag App, ride-sharing app, Somalia`,
    image: '/logo.png',
  }),
}
export default async function Page() {
  const posts = allPosts

  return (
    <div className='my-7 sm:mb-32 container px-4 mx-auto scroll-m-40 lg:max-w-6xl'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {posts?.map((post) => (
          <Link key={post.slug} href={`${post.slug}`}>
            <PostCard post={post} />
          </Link>
        ))}
      </div>
    </div>
  )
}
