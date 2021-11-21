import React from "react";
import HotelJSON from "../HaifaHotels.json";
import HotelCard from "./HotelCard";
const hotelsJSXarray = [];
for (let value of HotelJSON) {
  hotelsJSXarray.push(<HotelCard HotelName={value.שם} key={value.שם} />);
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
