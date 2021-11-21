import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HotelGallery from "./Components/HotelGallery"
import HotelPage from "./Components/HotelPage"
import "./style.css"

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HotelGallery />} />
      <Route path="/hotels/:hotelName" element={<HotelPage />} />
    </Routes>
  </BrowserRouter>
  , document.getElementById("root"));
