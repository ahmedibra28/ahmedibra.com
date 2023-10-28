import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import readingTime from 'reading-time'

const rootDirectory = path.join(process.cwd(), 'app', 'content')

export const getPostBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`)

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  })

  // const stats = readingTime(content)

  return { meta: { ...frontmatter, slug: realSlug }, content }
}

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory)

  let posts = []

  for (const file of files) {
    const { meta } = await getPostBySlug(file)

    posts.push(meta)
  }

  return posts
}
