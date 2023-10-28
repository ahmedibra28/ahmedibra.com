export declare interface PostProps {
  title: string
  slug: string
  tags: string[]
  image: string
  excerpt: string
  keyword: string
  content: string
  mdxSource: string
  author: string
  avatar: string
  createdAt: string
  stats: {
    text: string
  }
}

export declare interface SortProps {
  createdAt: string
}

export interface PostMeta {
  title: string
  slug: string
  tags: string[]
  image: string
  keyword: string
  excerpt: string
  author: string
  avatar: string
  createdAt: string
}
