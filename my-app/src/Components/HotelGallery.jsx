import React from "react";
import HotelCard from "./HotelCard";
import HotelJSON from "../HaifaHotels.json";
const hotelsJSXarray = [];
for (let value of HotelJSON) {
  hotelsJSXarray.push(
    <HotelCard
      HotelName={value.שם}
      HotelAdress={value["שם רחוב"]}
      HotelNumber={value.טלפון}
      key={value.שם}
    />
  );
}

export default class HotelGallery extends React.Component {
  render() {
    return (
      <>
        <h1>Haifa Hotels Finder</h1>
        <div id="CardContainer">{hotelsJSXarray}</div>
      </>
    );
  }
}
