import React from "react";

export default function Option(props) {
  return (
    <>
      <li className="CountryItem">
        <span>
          {props.CountryName} ({props.CountryShort})
        </span>
        <img src={props.CountryImage} alt="Country Flag" />
      </li>
    </>
  );
}
