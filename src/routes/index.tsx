import React from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import Saves from "../pages/Saves";
import Charts from "../pages/Charts";
import Home from "../pages/Home";
import DetailsArtist from "../pages/Details/DetailsArtist";
import DetailsTrack from "../pages/Details/DetailsTrack";

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/charts" element={<Charts />} />
      <Route path="/saves" element={<Saves />} />
      <Route path="/detailsArtist/:id" element={ <DetailsArtist />} />
      <Route path="/detailsTrack/:id" element={ <DetailsTrack />} />
    </Routes>
  );
}
