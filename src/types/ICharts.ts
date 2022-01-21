export interface Artist {
  id: number
  name: string
  link: string
  picture: string
  picture_small: string
  picture_medium: string
  picture_big: string
  picture_xl: string
  radio: boolean
  tracklist: string
  type: string
}
export interface Album {
  id: number
  title: string
  cover: string
  cover_small: string
  cover_medium: string
  cover_big: string
  cover_xl: string
  md5_image: string
  tracklist: string
  type: string
}
export interface Datum {
  id: number
  title: string
  title_short: string
  title_version: string
  link: string
  duration: number
  rank: number
  explicit_lyrics: boolean
  explicit_content_lyrics: number
  explicit_content_cover: number
  preview: string
  md5_image: string
  position: number
  artist: Artist
  album: Album
  type: string
}

export interface Tracks {
  data: Datum[]
  total: number
}
export interface Artist2 {
  id: number
  name: string
  link: string
  picture: string
  picture_small: string
  picture_medium: string
  picture_big: string
  picture_xl: string
  radio: boolean
  tracklist: string
  type: string
}
export interface Datum2 {
  id: number
  title: string
  link: string
  cover: string
  cover_small: string
  cover_medium: string
  cover_big: string
  cover_xl: string
  md5_image: string
  record_type: string
  tracklist: string
  explicit_lyrics: boolean
  position: number
  artist: Artist2
  type: string
}

export interface Albums {
  data: Datum2[]
  total: number
}
export interface Datum3 {
  id: number
  name: string
  link: string
  picture: string
  picture_small: string
  picture_medium: string
  picture_big: string
  picture_xl: string
  radio: boolean
  tracklist: string
  position: number
  type: string
}

export interface Artists {
  data: Datum3[]
  total: number
}
export interface User {
  id: number
  name: string
  tracklist: string
  type: string
}
export interface Datum4 {
  id: number
  title: string
  public: boolean
  nb_tracks: number
  link: string
  picture: string
  picture_small: string
  picture_medium: string
  picture_big: string
  picture_xl: string
  checksum: string
  tracklist: string
  creation_date: string
  md5_image: string
  picture_type: string
  user: User
  type: string
}

export interface Playlists {
  data: Datum4[]
  total: number
}
export interface Datum5 {
  id: number
  title: string
  description: string
  available: boolean
  fans: number
  link: string
  share: string
  picture: string
  picture_small: string
  picture_medium: string
  picture_big: string
  picture_xl: string
  type: string
}

export interface Podcasts {
  data: Datum5[]
  total: number
}

export interface ICharts {
  tracks: Tracks
  albums: Albums
  artists: Artists
  playlists: Playlists
  podcasts: Podcasts
}
