import React, { useState, useEffect } from "react";
import InitLinguistics from "./InitLinguistics";
import Comparison from "./Comparison";
import countriesLinguisticData from "./data/linguistics.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LinguisticSection = ({ country }) => {
  const [selectedTab, setSelectedTab] = useState("tab-1");
  const [showComparisonMenu, setShowComparisonMenu] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [selectedComparisonCountries, setSelectedComparisonCountries] =
    useState([country]);

  useEffect(() => {
    setSelectedComparisonCountries([country]);
    setShowComparison(false);
    setShowComparisonMenu(false);
  }, [country]);

  const handleTabChange = (event) => {
    setSelectedTab(event.target.id);
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

  if (country === "Welcome") {
    return <InitLinguistics />;
  }

  const countryLinguisticData = countriesLinguisticData.find(
    (data) => data.country === country
  ).linguisticContent;

  return (
    <div>
      {!showComparison && (
        <>
          <h2 className="fancy-heading">{country} Linguistics</h2>
          <p>
            Delve into the linguistic intricacies of {country}. Explore the
            nuances of pronunciation, vocabulary, and grammar used in this
            locale. Discover the unique linguistic expressions, idiomatic
            phrases, and grammatical structures that form an integral part of
            the language fabric in this region.
          </p>
          <div className="ling-container">
            <div className="card tabs">
              <input
                id="tab-1"
                type="radio"
                className="tab tab-selector"
                checked={selectedTab === "tab-1"}
                onChange={handleTabChange}
                name="tab"
              />
              <label htmlFor="tab-1" className="tab tab-phonetic">
                Phonetic Differences
              </label>
              <input
                id="tab-2"
                type="radio"
                className="tab tab-selector"
                checked={selectedTab === "tab-2"}
                onChange={handleTabChange}
                name="tab"
              />
              <label htmlFor="tab-2" className="tab tab-vocab">
                Vocabulary and Idioms
              </label>
              <input
                id="tab-3"
                type="radio"
                className="tab tab-selector"
                checked={selectedTab === "tab-3"}
                onChange={handleTabChange}
                name="tab"
              />
              <label htmlFor="tab-3" className="tab tab-grammar">
                Grammar Variations
              </label>
              <div className="glider"></div>
              <section className="content">
                <div className="item" id="content-1">
                  <h2 className="tab-title tab-phonetic">
                    Phonetic Differences
                  </h2>
                  {countryLinguisticData.phonetics.map((phonetic, index) => (
                    <p key={index}>{phonetic}</p>
                  ))}
                </div>
                <div className="item" id="content-2">
                  <h2 className="tab-title tab-vocab">Vocabulary and Idioms</h2>
                  {countryLinguisticData.vocab.map((word, index) => (
                    <p key={index}>{word}</p>
                  ))}
                </div>
                <div className="item" id="content-3">
                  <h2 className="tab-title tab-grammar">Grammar Variations</h2>
                  {countryLinguisticData.grammar.map((variation, index) => (
                    <p key={index}>{variation}</p>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </>
      )}
      {showComparison && (
        <Comparison selectedCountries={selectedComparisonCountries} />
      )}
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
              selectedComparisonCountries.includes("Nigeria") ? "selected" : ""
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
              selectedComparisonCountries.includes("Cameroon") ? "selected" : ""
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

export default LinguisticSection;
