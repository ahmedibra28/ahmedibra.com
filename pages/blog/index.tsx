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
    <div className='mt-2'>
      <div className='container text-primary'>
        <Meta
          title={'Web & Mobile Development Blog'}
          description={`Offcial Ahmed Ibrahim Blog; stay updated with my web and mobile app development tips, latest technology news, and much more.
        `}
          author={'Ahmed Ibrahim'}
          image='/logo.png'
        />
      </div>

      <div className='row'>
        {posts?.map((post: PostProps) => (
          <div key={post.slug} className='col-lg-7 col-md-8 col-12 mx-auto'>
            <Link href={`/blog/${post.slug}`} className='text-decoration-none'>
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
