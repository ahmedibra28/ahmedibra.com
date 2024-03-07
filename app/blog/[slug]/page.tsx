import AuthorSection from '@/components/AuthorSection'
import { getPostBySlug } from '@/lib/mdx'
import { PostMeta } from '@/types'
import Image from 'next/image'
import readingTime from 'reading-time'
import Meta from '@/components/Meta'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const getPageContent = async (slug: string) => {
  const { meta, content } = await getPostBySlug(slug)
  return { meta, content }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  // @ts-ignore
  const { meta }: { meta: PostMeta } = await getPageContent(params.slug)

  return {
    ...Meta({
      title: meta?.title,
      description: meta?.excerpt,
      keyword: meta?.keyword,
      image: meta?.image,
    }),
  }
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const post = (await getPageContent(params.slug)) as {
    meta: PostMeta
    content: any
  }

  return (
    <div className='max-w-6xl mx-auto px-4'>
      <div className='w-full md:w-[80%] mx-auto'>
        <Card className='mb-3'>
          <CardHeader>
            <AuthorSection
              item={{
                author: post?.meta?.author,
                avatar: post?.meta?.avatar,
                tags: post?.meta?.tags,
                createdAt: post?.meta?.createdAt,
                // @ts-ignore
                stats: readingTime(post?.content),
              }}
            />
            <Image
              src={post?.meta?.image}
              quality={100}
              width={1000}
              height={1000}
              alt={post?.meta?.title}
              className='w-full object-cover rounded'
            />
          </CardHeader>
          <CardContent>
            <CardTitle>{post?.meta?.title}</CardTitle>
            <div className='space-y-5 my-5 w-full'>{post?.content}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Page
