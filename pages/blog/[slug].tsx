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
    <div className='row mt-2'>
      <div className='col-lg-7 col-md-8 col-12 mx-auto bg-white'>
        <div className='container'>
          <Meta
            title={post?.title}
            description={post?.excerpt}
            author={post?.author}
            image={post?.image}
          />

          <div className='card-body'>
            <AuthorSection item={post} />

            <div className='my-3'>
              <Image
                src={post?.image}
                quality={100}
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
