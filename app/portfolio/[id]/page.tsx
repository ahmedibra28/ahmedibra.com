import meta from '@/lib/meta'
import { projects } from '@/lib/projects'
import React from 'react'

const getPageContent = async (id: string) => {
  const metas = projects.find((item) => item.id === id)
  return { metas }
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  // @ts-ignore
  const {
    metas,
  }: {
    metas: {
      title: string
      description: string
      image: string
      id: string
      content: string
    }
  } = await getPageContent(params.id)

  return meta({
    title: metas?.title,
    description: metas?.description,
    keywords: `All projects, Ahmed Ibrahim, full-stack developer, web development, cloud hosting, mobile apps, journey, insights, inspiration, HTML, CSS, JavaScript, React.js, Node.js, MongoDB, Django, Bootstrap, AWS, DigitalOcean, Google Cloud, Linode, React Native, Wadaag App, ride-sharing app, Somalia`,
    openGraphImage: metas?.image,
  })
}

export default async function Page({ params }: { params: { id: string } }) {
  const project = (await getPageContent(params.id)) as {
    metas: {
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
          <div className='card-body bg-white p-4'>
            <h5 className='font-bold text-2xl mb-3'>{project?.metas?.title}</h5>
            <div className='space-y-5 w-full'>
              {project?.metas?.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
