import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortByDate } from '../../utils'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import { PostProps } from '../../types'

const Posts = ({ posts }: any) => {
  return (
    <div className='container'>
      <div className='container text-primary mb-5 mt-2'>
        <Head>
          <title>Blog News</title>
          <meta property='og:title' content='Blog News' key='title' />
        </Head>
      </div>

      <div className='row'>
        {posts?.map((post: PostProps) => (
          <div key={post.slug} className='col-12'>
            <Link href={`/blog/${post.slug}`}>
              <a className='text-decoration-none text-light'>{post.title}</a>
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
