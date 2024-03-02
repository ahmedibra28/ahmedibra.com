import AuthorSection from '@/components/AuthorSection'
import Meta from '@/components/Meta'
import { projects } from '@/lib/projects'
import React from 'react'
import readingTime from 'reading-time'

const getPageContent = async (id: string) => {
  const meta = projects.find((item) => item.id === id)
  return { meta }
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  // @ts-ignore
  const {
    meta,
  }: {
    meta: {
      title: string
      description: string
      image: string
      id: string
      content: string
    }
  } = await getPageContent(params.id)

  return {
    ...Meta({
      title: meta?.title,
      description: meta?.description,
      keyword: `All projects, Ahmed Ibrahim, full-stack developer, web development, cloud hosting, mobile apps, journey, insights, inspiration, HTML, CSS, JavaScript, React.js, Node.js, MongoDB, Django, Bootstrap, AWS, DigitalOcean, Google Cloud, Linode, React Native, Wadaag App, ride-sharing app, Somalia`,
      image: meta?.image,
    }),
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const project = (await getPageContent(params.id)) as {
    meta: {
      title: string
      description: string
      image: string
      id: string
      content: string
    }
  }

  return (
    <div className='mb-20 sm:mb-32 mx-auto scroll-m-40 max-w-6xl'>
      <div className='max-w-6xl mx-auto'>
        <div className='card w-full md:w-[80%] mx-auto'>
          <AuthorSection
            item={{
              author: 'Ahmed Ibrahim',
              avatar: 'https://github.com/ahmedibra28.png',
              tags: ['Client Project'],
              createdAt: '2021-08-01',
              // @ts-ignore
              stats: readingTime(project?.meta?.content),
            }}
          />

          <div className='card-body bg-white p-4'>
            <h5 className='font-bold text-2xl mb-3'>{project?.meta?.title}</h5>
            <div className='space-y-5 w-full'>{project?.meta?.description}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
