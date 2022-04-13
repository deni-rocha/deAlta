import { ICardTrack } from '../components/CardTrack'

let listTracks: string = localStorage.tracks || JSON.stringify([])

let listParser: ICardTrack[] = JSON.parse(listTracks)

function indexTrack(id: number) {
  let index = listParser.findIndex((res) => res.id === id)

  return index
}

function trackExists(id: number) {
  let index = indexTrack(id)
  const exists = index !== -1

  if (exists) {
    return true
  } else {
    return false
  }
}

function saveTrack({
  disk_number,
  index,
  title_short,
  preview,
  link,
  id,
}: ICardTrack) {
  let newTrack = {
    disk_number,
    index,
    title_short,
    preview,
    link,
    id,
  }

  listParser.push(newTrack)

  localStorage.setItem('tracks', JSON.stringify(listParser))
}

function deleteTrack(id: number) {
  listParser.splice(indexTrack(id), 1)

  localStorage.setItem('tracks', JSON.stringify(listParser))
}

export { trackExists, saveTrack, deleteTrack }
