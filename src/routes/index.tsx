import React from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import Saves from "../pages/Saves";
import Charts from "../pages/Charts";
import Home from "../pages/Home";

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/charts" element={<Charts />} />
      <Route path="/saves" element={<Saves />} />
    </Routes>
  );
}