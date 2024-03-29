import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { allPages } from 'contentlayer/generated'

import { Mdx } from '@/components/mdx-components'
import meta from '@/lib/meta'

interface PageProps {
  params: {
    slug: string[]
  }
}

async function getPageFromParams(params: PageProps['params']) {
  const slug = params?.slug?.join('/')
  const page = allPages.find((page) => page.slugAsParams === slug)

  if (!page) {
    null
  }

  return page
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params)

  if (!page) {
    return {}
  }

  return meta({
    title: page.title,
    description: page.description || '',
    openGraphImage: page?.image || 'https://github.com/ahmedibra28.png',
    canonical: `/pages/` + page.slugAsParams,
  })
}

export async function generateStaticParams(): Promise<PageProps['params'][]> {
  return allPages.map((page) => ({
    slug: page.slugAsParams.split('/'),
  }))
}

export default async function PagePage({ params }: PageProps) {
  const page = await getPageFromParams(params)

  if (!page) {
    notFound()
  }

  return (
    <article className='py-6 prose dark:prose-invert max-w-lg mx-auto'>
      <h1>{page.title}</h1>
      {page.description && <p className='text-xl'>{page.description}</p>}
      <hr />
      <Mdx code={page.body.code} />
    </article>
  )
}
