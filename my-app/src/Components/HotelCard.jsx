import React from "react";
import HotelImage from "../Images/Basic-Hotel.jpg";
import { Link } from "react-router-dom";

export default class HotelCard extends React.Component {
  render() {
    return (
      <div key={this.props.HotelName} className="HotelCard">
        <img src={HotelImage} alt="HotelPic" />
        <Link
          to={`/hotels/${this.props.HotelName}`}
          state={{
            HotelName: this.props.HotelName,
            HotelNumber: this.props.HotelNumber,
            HotelAdress: this.props.HotelAdress,
          }}
          className="HotelName"
        >
          {this.props.HotelName}
        </Link>
      </div>
    );
  }
}
