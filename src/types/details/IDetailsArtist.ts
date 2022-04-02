import { Contributor } from "./IDetailsTrack"

export interface IDetailsArtist {
    id: number
    readable: boolean
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
    contributors: Contributor[]
    md5_image: string
    artist: Artist
    album: Album
    type: string
  }
  
  export interface Artist {
    id: number
    name: string
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
  