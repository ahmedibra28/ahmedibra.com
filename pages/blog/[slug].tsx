import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { GetStaticPaths, GetStaticProps } from 'next'
import { PostProps } from '../../types'
import Meta from '../../components/Meta'
import Image from 'next/image'
import readingTime from 'reading-time'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
// import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
// import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import AuthorSection from '../../components/AuthorSection'

const Post = (post: PostProps) => {
  return (
    <div className='my-7 sm:mb-32 container px-4 md:w-[50%] sm:w-[80%] lg:w-[45%] mx-auto scroll-m-20'>
      <div className='col-lg-7 col-md-8 col-12 mx-auto shadow-md shadow-primary'>
        <div className='container'>
          <Meta
            title={post?.title}
            description={post?.excerpt}
            author={post?.author}
            image={post?.image}
            keyword={post?.keyword}
          />

          <div className='card-body'>
            <AuthorSection item={post} />

            <div className='my-3'>
              <Image
                src={post?.image}
                quality={100}
                width={1000}
                height={1000}
                alt={post?.title}
                className='card-img w-full object-cover'
              />
            </div>

            <h5 className='card-title fs-3 fw-bold mb-3'>{post?.title}</h5>

            {/* <p className='text-sm'>{post?.excerpt}</p> */}

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
        // [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        // rehypeHighlight,
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
