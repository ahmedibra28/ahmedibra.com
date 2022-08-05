import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { GetStaticPaths, GetStaticProps } from 'next'
import { PostProps } from '../../types'
import MarkdownIt from 'markdown-it'
import Meta from '../../components/Meta'

const Post = (post: PostProps) => {
  const md = new MarkdownIt()
  return (
    <div className='container'>
      <>
        <Meta
          title={post?.title}
          description={post?.title}
          author={''}
          image={''}
        />

        <div className='row'>
          <div className='col-md-9 col-12 mx-auto'>
            <div className='card-body'>
              <h5 className='card-title fs-3 fw-bold'>{post?.title}</h5>

              <div
                dangerouslySetInnerHTML={{
                  __html: md.render(post?.content),
                }}
              />
            </div>
          </div>
        </div>
      </>
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

export const getStaticProps: GetStaticProps = async ({
  params: { slug },
}: any) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('data/posts', slug + '.mdx'),
    'utf-8'
  )

  const { data, content } = matter(markdownWithMeta)
  return {
    props: { ...data, slug, content },
  }
}
