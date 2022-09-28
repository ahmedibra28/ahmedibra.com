export declare interface PostProps {
  author: string
  title: string
  tags: string[]
  image: string
  caption: string
  createdAt: string
  slug: string
  content: string
}

export declare interface SortProps {
  createdAt: string
}

export interface PageInfo {
  totalResults: number
  resultsPerPage: number
}

export interface Default {
  url: string
  width: number
  height: number
}

export interface Medium {
  url: string
  width: number
  height: number
}

export interface High {
  url: string
  width: number
  height: number
}

export interface Standard {
  url: string
  width: number
  height: number
}

export interface Maxres {
  url: string
  width: number
  height: number
}

export interface Thumbnails {
  default: Default
  medium: Medium
  high: High
  standard: Standard
  maxres: Maxres
}

export interface Localized {
  title: string
  description: string
}

export interface Snippet {
  publishedAt: Date
  channelId: string
  title: string
  description: string
  thumbnails: Thumbnails
  channelTitle: string
  localized: Localized
}

export interface ContentDetails {
  itemCount: number
}

export interface Item {
  kind: string
  etag: string
  id: string
  snippet: Snippet
  contentDetails: ContentDetails
}

export interface RootObject {
  kind: string
  etag: string
  pageInfo: PageInfo
  items: Item[]
}
