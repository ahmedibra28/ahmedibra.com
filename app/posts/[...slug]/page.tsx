import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'

import { Mdx } from '@/components/mdx-components'

import Image from 'next/image'
import Meta from '@/components/Meta'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { url } from '@/lib/url'

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps['params']) {
  const slug = params?.slug?.join('/')
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({ params }: PostProps): Promise<any> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    ...Meta({
      title: post?.title,
      description: post?.excerpt,
      keyword: post?.keyword,
      image: url + post?.image,
    }),
  }
}

export async function generateStaticParams(): Promise<PostProps['params'][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }))
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <article className='prose dark:prose-invert max-w-screen-md mx-auto'>
      <Card className='mb-3 border-none'>
        <CardHeader className='py-0 my-0'>
          <Image
            src={url + post?.image}
            quality={100}
            width={1000}
            height={1000}
            alt={post?.title}
            className='w-full object-cover rounded'
          />
        </CardHeader>
        <CardContent>
          <CardTitle className='my-0'>{post?.title}</CardTitle>

          <div className='my-5'>
            <Mdx code={post.body.code} />
          </div>
        </CardContent>
      </Card>
    </article>
  )
}
