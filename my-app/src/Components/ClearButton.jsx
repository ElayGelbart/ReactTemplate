import React from "react";
import Xsvg from "../Images/X.svg";
export default function ClearButton(props) {
  return (
    <img
      onClick={() => {
        props.clearFunc();
      }}
      style={{
        height: 15,
        paddingTop: 2,
        paddingLeft: 2,
        cursor: "pointer",
        position: "absolute",
        left: 0,
      }}
      src={Xsvg}
      alt="X"
    />
  );
}
