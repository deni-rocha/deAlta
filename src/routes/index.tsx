import React from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import Saves from "../pages/Saves";
import Charts from "../pages/Charts";
import Home from "../pages/Home";
import Details from "../pages/Details";

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/charts" element={<Charts />} />
      <Route path="/saves" element={<Saves />} />
      <Route path="/details/:id" element={ <Details />} />
    </Routes>
  );
}