import React from "react";
import CallNowButton from "./CallNowButton";
import HotelImage from "../Images/Basic-Hotel.jpg";
import { Link, useLocation } from "react-router-dom";

export default function HotelPage() {
  const location = useLocation();
  const { HotelName, HotelNumber, HotelAdress } = location.state;
  return (
    <div className="HotelPageCard">
      <Link to="/">חזרה לדף בית</Link>
      <h2>{HotelName}</h2>
      <img src={HotelImage} alt="HotelImage" />
      <p>המלון מאוד מדהים בלה בלה בלה מאוד מדהים אהבתי מאוד</p>
      {/* was suppose to be info about hotel */}
      <p>רחוב:{HotelAdress}</p>
      <CallNowButton HotelNumber={HotelNumber} />
    </div>
  );
}
