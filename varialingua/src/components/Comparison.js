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

    const phonetics = countryData.linguisticContent.phonetics.join(", ");
    const vocab = countryData.linguisticContent.vocab.join(", ");
    const grammar = countryData.linguisticContent.grammar.join(", ");

    return (
      <div className="comparison-country-content">
        <p>Phonetic Differences: {phonetics}</p>
        <p>Vocabulary and Idioms: {vocab}</p>
        <p>Grammar Variations: {grammar}</p>
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
