import React from "react";
import WelcomeScreen from "./WelcomeScreen";
import blurbs from "./data/blurb.json";
import cultureData from "./data/culture.json";
import funFacts from "./data/funfacts.json";

const InitProfile = ({ country }) => {
  if (country === "Welcome") {
    return <WelcomeScreen />;
  }

  const countryBlurb = blurbs.find((data) => data.country === country);
  const countryCulturalData = cultureData.filter(
    (data) => data.country === country
  );
  const countryFunFacts = funFacts.find((data) => data.country === country);
  const randomIndex = Math.floor(Math.random() * countryCulturalData.length);
  const randomCultureItem = countryCulturalData[randomIndex];
  const randomFunFacts = countryFunFacts.fact
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <div className="init-profile">
      <h2 className="fancy-heading">
        This is: {country === "Cameroon" ? "Cameroonian" : `${country}n`}{" "}
        English
      </h2>
      <div className="init-profile-content">
        <div className="init-profile-left-content neumorphic-container ">
          {countryBlurb.blurb}
        </div>
        <div className="init-profile-right-content">
          <div className="random-media neumorphic-container">
            <h3>Currently Showcasing: {randomCultureItem.title}</h3>
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
              {randomFunFacts.map((fact, index) => (
                <p key={index}>{fact}</p>
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitProfile;
