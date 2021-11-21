import React from "react";
import HotelImage from "../Images/Basic-Hotel.jpg";

export default class HotelCard extends React.Component {
  render() {
    return (
      <div key={this.props.HotelName} className="HotelCard">
        <img src={HotelImage} alt="HotelPic" />
        <div className="HotelName">{this.props.HotelName}</div>
      </div>
    );
  }
}
