import { Album, Artist } from "../charts/ICharts"

export interface Contributor {
    id: number
    name: string
    link: string
    share: string
    picture: string
    picture_small: string
    picture_medium: string
    picture_big: string
    picture_xl: string
    radio: boolean
    tracklist: string
    type: string
    role: string
  }

export interface IDetailsTrack {
    id: number
    readable: boolean
    title: string
    title_short: string
    title_version: string
    isrc: string
    link: string
    share: string
    duration: number
    track_position: number
    disk_number: number
    rank: number
    release_date: string
    explicit_lyrics: boolean
    explicit_content_lyrics: number
    explicit_content_cover: number
    preview: string
    bpm: number
    gain: number
    available_countries: string[]
    contributors: Contributor[]
    md5_image: string
    artist: Artist
    album: Album
    type: string
  }
