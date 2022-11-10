import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { GetStaticPaths, GetStaticProps } from 'next'
import { PostProps } from '../../types'
import Meta from '../../components/Meta'
import Image from 'next/image'
import moment from 'moment'
import readingTime from 'reading-time'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const Post = (post: PostProps) => {
  return (
    <div className='row mt-2'>
      <div className='col-lg-7 col-md-8 col-12 mx-auto'>
        <div className='container'>
          <Meta
            title={post?.title}
            description={post?.excerpt}
            author={post?.author}
            image={post?.image}
          />

          <div className='card-body'>
            <div className='d-flex align-items-center'>
              <div className='bg-white rounded-pill'>
                <Image
                  src={post?.avatar}
                  alt='author'
                  width={30}
                  height={30}
                  className='rounded-pill'
                />
              </div>
              <div className='ms-2'>
                <label className='text-muted'>{post?.author}</label>
                <p className='card-text'>
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

            <div className='my-3'>
              <Image
                src={post?.image}
                width={200}
                height={200}
                alt={post?.title}
                style={{ objectFit: 'cover' }}
                className='card-img rounded-0 h-auto'
              />
            </div>

            <h5 className='card-title fs-3 fw-bold mb-3'>{post?.title}</h5>

            <p className='text-muted'>{post?.excerpt}</p>

            {/* @ts-ignore */}
            <MDXRemote {...post?.mdxSource} components={{}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join('data/posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string }

  const markdownWithMeta = fs.readFileSync(
    path.join('data/posts', slug + '.mdx'),
    'utf-8'
  )

  const { data, content } = matter(markdownWithMeta)
  // const mdxSource = await serialize(content)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypeHighlight,
      ],
    },
  })

  const stats = readingTime(content)

  return {
    props: {
      ...data,
      slug,
      mdxSource,
      stats,
    },
  }
}
