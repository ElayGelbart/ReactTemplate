import React from "react";

export default class CallNowButton extends React.Component {
  render() {
    return (
      <>
        <button
          onClick={() => {
            window.open(`tel:04${this.props.HotelNumber}`);
          }}
        >
          לחץ כאן להתקשר
        </button>
      </>
    );
  }
}
