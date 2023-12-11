import React, { useState } from "react";
import countriesData from "./data/linguistics.json";
import LinguisticSection from "./LinguisticSection";
import Comparison from "./Comparison";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InitLinguistics = () => {
  const [showLinguisticSection, setLinguisticSection] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showComparisonMenu, setShowComparisonMenu] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [selectedComparisonCountries, setSelectedComparisonCountries] =
    useState([]);

  const handleCountryClick = (country) => {
    setLinguisticSection(true);
    setSelectedCountry(country);
  };

  const handleComparisonClick = () => {
    setShowComparisonMenu(!showComparisonMenu);
  };

  const handleCountrySelection = (event) => {
    const selectedCountry = event.target.textContent;
    if (
      selectedComparisonCountries.length === 2 &&
      !selectedComparisonCountries.includes(selectedCountry)
    ) {
      return;
    }

    if (!selectedComparisonCountries.includes(selectedCountry)) {
      setShowComparison(true);
      setSelectedComparisonCountries([
        ...selectedComparisonCountries,
        selectedCountry,
      ]);
    } else {
      if (selectedComparisonCountries.length === 1) {
        setShowComparison(false);
      }
      setSelectedComparisonCountries(
        selectedComparisonCountries.filter(
          (country) => country !== selectedCountry
        )
      );
    }
  };

  const nigeriaLinguisticData = countriesData.filter(
    (data) => data.country === "Nigeria"
  );
  const kenyaLinguisticData = countriesData.filter(
    (data) => data.country === "Kenya"
  );
  const cameroonLinguisticData = countriesData.filter(
    (data) => data.country === "Cameroon"
  );

  const renderLinguisticContent = (linguisticData) => {
    return linguisticData.map((data) => (
      <div className="linguistic-card" key={data.country}>
        <div className="linguistic-card-content">
          {
            data.linguisticContent.phonetics[
              Math.floor(
                Math.random() * data.linguisticContent.phonetics.length
              )
            ]
          }
        </div>
        <div className="linguistic-card-content">
          {
            data.linguisticContent.vocab[
              Math.floor(Math.random() * data.linguisticContent.vocab.length)
            ]
          }
        </div>
        <div className="linguistic-card-content no-bottom">
          {
            data.linguisticContent.grammar[
              Math.floor(Math.random() * data.linguisticContent.grammar.length)
            ]
          }
        </div>
      </div>
    ));
  };

  return (
    <div>
      {!showLinguisticSection && !showComparison && (
        <>
          <h2 className="fancy-heading">
            Analyze English Varieties' Linguistic Features
          </h2>
          <p>
            Delve into the intricate nuances and distinct linguistic features of
            English varieties. Explore the diverse phonetic, lexical, and
            grammatical facets that define the rich tapestry of these language
            variations across cultures and regions.
          </p>
          <div className="all-ling-container">
            <div
              className="ling-container neumorphic-container"
              onClick={() => handleCountryClick("Nigeria")}
            >
              <div className="init-ling-heading nigeria">
                <h3>Nigerian English</h3>
              </div>
              <div className="init-ling-content">
                {renderLinguisticContent(nigeriaLinguisticData)}
              </div>
            </div>
            <div
              className="ling-container neumorphic-container"
              onClick={() => handleCountryClick("Kenya")}
            >
              <div className="init-ling-heading kenya">
                <h3>Kenyan English</h3>
              </div>
              <div className="init-ling-content">
                {renderLinguisticContent(kenyaLinguisticData)}
              </div>
            </div>
            <div
              className="ling-container neumorphic-container"
              onClick={() => handleCountryClick("Cameroon")}
            >
              <div className="init-ling-heading cameroon">
                <h3>Cameroonian English</h3>
              </div>
              <div className="init-ling-content">
                {renderLinguisticContent(cameroonLinguisticData)}
              </div>
            </div>
          </div>
        </>
      )}
      {showComparison && (
        <Comparison selectedCountries={selectedComparisonCountries} />
      )}
      {showLinguisticSection && <LinguisticSection country={selectedCountry} />}
      <div className="comparison-tool">
        <div
          className="comparison-tool-option round-button"
          onClick={handleComparisonClick}
        >
          <FontAwesomeIcon icon={["fas", "code-compare"]} className="icon" />
        </div>
        {showComparisonMenu && (
          <div className="comparison-tool-option-text neumorphic-container">
            Compare Linguistic Features in:
            <p
              className={
                selectedComparisonCountries.includes("Nigeria")
                  ? "selected"
                  : ""
              }
              onClick={handleCountrySelection}
            >
              Nigeria
            </p>
            <p
              className={
                selectedComparisonCountries.includes("Kenya") ? "selected" : ""
              }
              onClick={handleCountrySelection}
            >
              Kenya
            </p>
            <p
              className={
                selectedComparisonCountries.includes("Cameroon")
                  ? "selected"
                  : ""
              }
              onClick={handleCountrySelection}
            >
              Cameroon
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InitLinguistics;
