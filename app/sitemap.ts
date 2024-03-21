import { sortByDate } from '@/lib'
import { allPosts } from 'contentlayer/generated'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = allPosts.sort(sortByDate)

  const postEntries: MetadataRoute.Sitemap = posts.map(
    ({ slug, createdAt }) => ({
      url: `https://ahmedibra.com${slug}`,
      lastModified: new Date(createdAt),
      changeFrequency: 'daily',
      priority: 0.7,
    }),
  )

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `https://ahmedibra.com`,
      lastModified: new Date('2024-03-01'),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `https://ahmedibra.com/posts`,
      lastModified: new Date(posts[0]?.createdAt),
      changeFrequency: 'daily',
      priority: 0.7,
    },
  ]

  return [...staticEntries, ...postEntries]
}
