import React, { useEffect, useState, useRef } from "react";
import Option from "./Option";
// import Option from "./Option"
export default function SearchBar() {
  const [CountriesArrayJSX, setCountries] = useState(null);
  const [originalCoutriesJsx, setOriginalCountry] = useState(null);
  const SearchInput = useRef(null);

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

  return (
    <label>
      <input
        ref={SearchInput}
        list="CountriesList"
        id="searchInput"
        type="text"
        placeholder="Select Country"
        onChange={() => {
          FilterCountries();
        }}
      />
      <ul>{CountriesArrayJSX}</ul>
    </label>
  );
}
