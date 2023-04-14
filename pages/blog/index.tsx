import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortByDate } from '../../utils'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import { PostProps } from '../../types'
import Meta from '../../components/Meta'
import PostCard from '../../components/PostCard'
import readingTime from 'reading-time'

const Posts = ({ posts }: any) => {
  return (
    <div className='my-7 sm:mb-32 container px-4 md:w-[50%] sm:w-[80%] lg:w-[50%] mx-auto scroll-m-20'>
      <Meta
        title={'All Posts by Ahmed Ibrahim'}
        description={`Browse through all the posts written by Ahmed Ibrahim, a full-stack developer with years of experience. From web development to cloud hosting and mobile apps, find inspiration and valuable insights from his journey.
        `}
        author={'Ahmed Ibrahim'}
        keyword={`All posts, Ahmed Ibrahim, full-stack developer, web development, cloud hosting, mobile apps, journey, insights, inspiration, HTML, CSS, JavaScript, React.js, Node.js, MongoDB, Django, Bootstrap, AWS, DigitalOcean, Google Cloud, Linode, React Native, Wadaag App, ride-sharing app, Somalia`}
        image='/logo.png'
      />

      <div className='row'>
        {posts?.map((post: PostProps) => (
          <div key={post.slug} className='shadow-md shadow-primary mb-10'>
            <Link href={`/blog/${post.slug}`}>
              <PostCard post={post} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Posts

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join('data/posts'))

  const posts = files.map((filename) => {
    const slug = filename.replace('.mdx', '')
    const markdownWithMeta = fs.readFileSync(
      path.join('data/posts', filename),
      'utf-8'
    )
    const { data, content } = matter(markdownWithMeta)
    const stats = readingTime(content)

    return { ...data, slug, stats }
  })

  return {
    props: {
      posts: posts.sort(sortByDate as any),
    },
  }
}
