const firstDate = '2018-07-01'
const currentDate = new Date()

export const years =
  currentDate.getFullYear() - new Date(firstDate).getFullYear()
