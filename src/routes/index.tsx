import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Saves from '../pages/Saves'
import Charts from '../pages/Charts'
import Home from '../pages/Home'
import DetailsArtist from '../pages/Details/DetailsArtist'
import DetailsTrack from '../pages/Details/DetailsTrack'
import DetailsAlbum from '../pages/Details/DetailsAlbum'
import DetailsPlaylist from '../pages/Details/DetailsPlaylist'
import DetailsPodcast from '../pages/Details/DetailsPodcast'

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/charts" element={<Charts />} />
      <Route path="/saves" element={<Saves />} />
      <Route path="/detailsArtist/:id/:name" element={<DetailsArtist />} />
      <Route path="/detailsTrack/:id" element={<DetailsTrack />} />
      <Route path="/detailsAlbum/:id" element={<DetailsAlbum />} />
      <Route path="/detailsPlaylist/:id" element={<DetailsPlaylist />} />
      <Route path="/detailsPodcast/:id" element={<DetailsPodcast />} />
    </Routes>
  )
}
