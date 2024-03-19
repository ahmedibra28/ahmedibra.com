interface SortProp {
  createdAt: string
}

export const sortByDate = (a: SortProp, b: SortProp) => {
  return new Date(b?.createdAt).getTime() - new Date(a?.createdAt).getTime()
}
