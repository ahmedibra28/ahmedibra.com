import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortByDate } from '../../utils'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import { PostProps } from '../../types'
import Meta from '../../components/Meta'

const Posts = ({ posts }: any) => {
  return (
    <div className='container'>
      <div className='container text-primary mb-5 mt-2'>
        <Meta title='Blog' description='Blog Posts' author={''} image={''} />
      </div>

      <div className='row'>
        {posts?.map((post: PostProps) => (
          <div key={post.slug} className='col-12'>
            <Link href={`/blog/${post.slug}`}>
              <a className='text-decoration-none'>{post.title}</a>
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
    const { data } = matter(markdownWithMeta)

    return { ...data, slug }
  })

  return {
    props: {
      posts: posts.sort(sortByDate as any),
    },
  }
}
