import React, { useEffect, useState, useRef } from "react";
import Option from "./Option";
import ClearButton from "./ClearButton";
import DropdownSVG from "../Images/DropDown.svg";
// import Option from "./Option"
export default function SearchBar() {
  const [CountriesArrayJSX, setCountries] = useState(null);
  const [originalCoutriesJsx, setOriginalCountry] = useState(null);
  const SearchInput = useRef(null);
  const CountryList = useRef(null);

  useEffect(() => {
    async function getAPIcountries() {
      const responsejson = await fetch("https://restcountries.com/v3.1/all");
      const response = await responsejson.json();
      console.log(response);
      const countriesArray = [];
      for (let countryObj of response) {
        countriesArray.push(
          <Option
            CountryName={countryObj.name.common}
            key={countryObj.name.common}
            CountryShort={countryObj.altSpellings[0]}
            CountryImage={countryObj.flags.svg}
          />
        );
      }
      setOriginalCountry(countriesArray);
      setCountries(countriesArray);
    }
    getAPIcountries();
  }, []);

  const FilterCountries = () => {
    const inputValue = SearchInput.current.value;
    const countryRegex = new RegExp(inputValue, "i");
    const filterdCountryArray = [];
    for (let jsxElement of originalCoutriesJsx) {
      if (countryRegex.test(jsxElement.props.CountryName)) {
        filterdCountryArray.push(jsxElement);
      }
    }
    setCountries(filterdCountryArray);
  };

  const clearInput = () => {
    SearchInput.current.value = "";
    FilterCountries();
  };

  const changeListVisibility = (boolean) => {
    if (boolean || CountryList.current.style.visibility === "hidden") {
      CountryList.current.style.visibility = "visible";
    } else {
      CountryList.current.style.visibility = "hidden";
    }
  };

  return (
    <label
      style={{
        position: "relative",
      }}
    >
      <ClearButton clearFunc={clearInput} />
      <input
        ref={SearchInput}
        list="CountriesList"
        id="searchInput"
        type="text"
        placeholder="Select Country"
        onChange={() => {
          FilterCountries();
          changeListVisibility(true);
        }}
      />
      <img
        onClick={() => {
          changeListVisibility();
        }}
        alt="dropdown"
        src={DropdownSVG}
        style={{
          height: 15,
          paddingTop: 2,
          paddingRight: 2,
          cursor: "pointer",
          position: "absolute",
          right: 0,
        }}
      />
      <ul ref={CountryList} id="CountryList" style={{ visibility: "hidden" }}>
        {CountriesArrayJSX}
      </ul>
    </label>
  );
}
