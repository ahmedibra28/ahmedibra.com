import { SortProps } from '../types'

export const sortByDate = (a: SortProps, b: SortProps) => {
  return new Date(b?.createdAt).getTime() - new Date(a?.createdAt).getTime()
}
