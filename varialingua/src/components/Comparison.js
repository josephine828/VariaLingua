import React from "react";
import countriesData from "./data/linguistics.json";

const Comparison = (props) => {
  const country1 = props.selectedCountries[0];
  const country2 = props.selectedCountries[1] || "...?";

  const getCountryContent = (country) => {
    const countryData = countriesData.find((data) => data.country === country);
    if (!countryData) {
      return <p>No data available!</p>;
    }

    const phonetics = countryData.linguisticContent.phonetics.map(
      (phonetic) => (
        <div key={phonetic.title}>
          <h4>{phonetic.title}</h4>
          <p>{phonetic.description}</p>
        </div>
      )
    );

    const grammar = countryData.linguisticContent.grammar.map((grammarItem) => (
      <div key={grammarItem.title}>
        <h4>{grammarItem.title}</h4>
        <p>{grammarItem.description}</p>
      </div>
    ));

    return (
      <div className="comparison-country-content">
        <div>
          <h3 className="top-bar">Phonetic Differences</h3>
          {phonetics}
        </div>
        <div>
          <h3 className="top-bar">Grammar Variations</h3>
          {grammar}
        </div>
      </div>
    );
  };

  return (
    <div>
      <h2 className="fancy-heading">
        Now Comparing: {country1} and {country2}
      </h2>
      {!props.selectedCountries[1] && (
        <p>Select a second country to see the comparison</p>
      )}
      <div className="comparison">
        <div className="comparison-country">
          <h3 className="comparison-country-heading">{country1}</h3>
          {getCountryContent(country1)}
        </div>
        <div className="comparison-country">
          <h3 className="comparison-country-heading">{country2}</h3>
          {getCountryContent(country2)}
        </div>
      </div>
    </div>
  );
};

export default Comparison;
