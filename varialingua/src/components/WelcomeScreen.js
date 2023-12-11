import React from "react";
import cultureData from "./data/culture.json";
import funFacts from "./data/funfacts.json";

const WelcomeScreen = () => {
  const randomIndex = Math.floor(Math.random() * cultureData.length);
  const randomCultureItem = cultureData[randomIndex];
  const countries = ["Nigeria", "Kenya", "Cameroon"];

  const randomCountryFacts = countries.map((country) => {
    const countryFunFacts = funFacts.find((data) => data.country === country);
    const randomFact =
      countryFunFacts.fact[
        Math.floor(Math.random() * countryFunFacts.fact.length)
      ];

    return {
      country,
      randomFact,
    };
  });

  return (
    <div>
      <h2 className="fancier-heading">Welcome to VariaLingua!</h2>
      <p>Explore the nuances of Nigerian, Kenyan, and Cameroonian Englishes!</p>
      <div className="init-profile-content short">
        <div className="init-profile-left-content neumorphic-container short">
          <p>
            English in Nigeria, Kenya, and Cameroon is incredibly diverse and
            deeply intertwined with rich cultural influences. These variations
            reflect historical connections, local customs, and distinct
            linguistic nuances. Dive into the subtleties of these English
            varieties by immersing yourself in a plethora of media, literature,
            and interesting facts!
          </p>
          <p>
            VariaLingua allows you to delve into the vibrant English varieties
            in Nigeria, Kenya, and Cameroon. Explore cultural media, interesting
            facts, and timelines showcasing the historical aspects of English in
            these countries.
          </p>
          <p>
            Begin your exploration by selecting a country or navigating to the
            History, Culture, or Linguistics sections to uncover the facets of
            English language evolution!
          </p>
        </div>
        <div className="init-profile-right-content">
          <div className="random-media neumorphic-container welcome">
            <h3>
              English in {randomCultureItem.country}: {randomCultureItem.title}
            </h3>
            <div className="media-container">
              {randomCultureItem.type === "video" ? (
                <iframe
                  title={randomCultureItem.title}
                  src={randomCultureItem.link}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : randomCultureItem.type === "picture" ? (
                <img
                  src={randomCultureItem.link}
                  alt={randomCultureItem.title}
                  style={{ maxWidth: "100%" }}
                />
              ) : (
                <p>No media available</p>
              )}
            </div>
            <em>Source: {randomCultureItem.source}</em>
          </div>
          <div className="fun-facts neumorphic-container">
            <h3 className="fun-heading">Fun Facts</h3>
            <span>
              {randomCountryFacts.map(({ country, randomFact }, index) => (
                <p key={index}>
                  <strong>{country}:</strong> {randomFact}
                </p>
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
