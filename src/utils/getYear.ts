function getDateYear(str: string) {
  const date = new Date(str)
  const year = date.getFullYear()

  return year
}

export default getDateYear
