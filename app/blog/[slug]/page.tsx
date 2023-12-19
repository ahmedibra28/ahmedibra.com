import AuthorSection from '@/components/AuthorSection'
import { getPostBySlug } from '@/lib/mdx'
import { PostMeta } from '@/types'
import Image from 'next/image'
import readingTime from 'reading-time'
import Meta from '@/components/Meta'

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
    <div className='max-w-6xl mx-auto'>
      <div className='card w-full md:w-[80%] mx-auto'>
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

        <div className='mt-3 mb-5 px-2 mx-auto'>
          <figure>
            <Image
              src={post?.meta?.image}
              quality={100}
              width={1000}
              height={1000}
              alt={post?.meta?.title}
              className='w-full object-cover'
            />
          </figure>
        </div>

        <div className='card-body'>
          <h5 className='card-title fw-bold mb-3'>{post?.meta?.title}</h5>
          <div className='space-y-5 w-full'>{post?.content}</div>
        </div>
      </div>
    </div>
  )
}

export default Page
