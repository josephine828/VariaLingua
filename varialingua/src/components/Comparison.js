import React, { useState } from "react";
import countriesData from "./data/linguistics.json";

const Comparison = (props) => {
  const country1 = props.selectedCountries[0];
  const country2 = props.selectedCountries[1] || "...?";

  return (
    <div>
      <h2 className="fancy-heading">
        Now Comparing: {country1} and {country2}
      </h2>
    </div>
  );
};

export default Comparison;
