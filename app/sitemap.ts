import { sortByDate } from '@/lib'
import { allPosts } from 'contentlayer/generated'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = allPosts.sort(sortByDate)

  const baseUrl = 'https://ahmedibra.com'

  const postEntries: MetadataRoute.Sitemap = posts.map(
    ({ slug, createdAt }) => ({
      url: `${baseUrl}${slug}`,
      lastModified: new Date(createdAt),
      changeFrequency: 'daily',
      priority: 0.7,
    }),
  )

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date('2024-03-01'),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(posts[0]?.createdAt),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date('2024-03-28'),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/resume.pdf`,
      lastModified: new Date('2024-02-15'),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]

  return [...staticEntries, ...postEntries]
}
