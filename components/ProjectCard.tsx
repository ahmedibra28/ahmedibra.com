import React from 'react'
import BlurImage from './BlurImage'

import { Card, CardContent, CardHeader } from '@/components/ui/card'

export default function ProjectCard({
  item,
}: {
  item: { title: string; description: string; image: string; id: string }
}) {
  return (
    <>
      <Card className='w-full md:w-[40%] shadow-lg mx-auto'>
        <CardHeader>
          <BlurImage
            src={item.image}
            alt={item.title}
            width={2000}
            height={1000}
            className='w-16 hover:scale-105 duration-1000 object-contain rounded-lg border bg-white'
          />
        </CardHeader>
        <CardContent>
          <p className=''>
            <span className='font-bold'>{item.title}</span> {item.description}
          </p>
        </CardContent>
        {/* <CardFooter className='justify-end'>
          <Link
            href={`/portfolio/${item.id}`}
            className='underline font-normal'
          >
            Read more
          </Link>
        </CardFooter> */}
      </Card>
    </>
  )
}
