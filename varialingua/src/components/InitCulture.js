import React, { useState } from "react";
import countriesData from "./data/culture.json";
import CultureSection from "./CultureSection";

const InitCulture = () => {
  const [showCultureSection, setShowCultureSection] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryClick = (country) => {
    setShowCultureSection(true);
    setSelectedCountry(country);
  };

  const nigeriaCultureData = countriesData
    .filter((data) => data.country === "Nigeria")
    .sort((a, b) => a.title.localeCompare(b.title));
  const kenyaCultureData = countriesData
    .filter((data) => data.country === "Kenya")
    .sort((a, b) => a.title.localeCompare(b.title));
  const cameroonCultureData = countriesData
    .filter((data) => data.country === "Cameroon")
    .sort((a, b) => a.title.localeCompare(b.title));

  const renderCultureContent = (cultureData) => {
    return cultureData.map((data) => (
      <div className="row-card">
        <h4 className="row-title">{data.title}</h4>
        <div className="row-material-content" key={data.title}>
          {data.type === "video" ? (
            <iframe
              title={data.title}
              width="300"
              height="200"
              src={data.link}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: "15px" }}
            ></iframe>
          ) : data.type === "text" ? (
            <p>{data.text}</p>
          ) : data.type === "picture" ? (
            <img
              src={data.link}
              alt={data.title}
              style={{ maxWidth: "100%", height: "auto", borderRadius: "15px" }}
            />
          ) : null}
          <div className="overlay">
            <p>{data.description}</p>
            <p>Source: {data.source}</p>
          </div>
        </div>
      </div>
    ));
  };

  const nigeriaCultureContent = renderCultureContent(nigeriaCultureData);
  const kenyaCultureContent = renderCultureContent(kenyaCultureData);
  const cameroonCultureContent = renderCultureContent(cameroonCultureData);

  return (
    <div>
      {!showCultureSection && (
        <>
          <h2 className="fancy-heading">
            Unveil English Diversity Through Multimedia
          </h2>
          <p>
            Immerse yourself in the diverse cultures of Nigeria, Kenya, and
            Cameroon, each utilizing English through an assortment of multimedia
            content.
          </p>
          <p>Hover over each item to unveil its description and source!</p>
          <div className="all-material-gallery">
            <h3
              className="country-header nigeria"
              onClick={() => handleCountryClick("Nigeria")}
            >
              Nigeria
            </h3>
            <div className="country-material-gallery">
              {nigeriaCultureContent}
            </div>
            <h3
              className="country-header kenya"
              onClick={() => handleCountryClick("Kenya")}
            >
              Kenya
            </h3>
            <div className="country-material-gallery">
              {kenyaCultureContent}
            </div>
            <h3
              className="country-header cameroon"
              onClick={() => handleCountryClick("Cameroon")}
            >
              Cameroon
            </h3>
            <div className="country-material-gallery">
              {cameroonCultureContent}
            </div>
          </div>
        </>
      )}

      {showCultureSection && <CultureSection country={selectedCountry} />}
    </div>
  );
};

export default InitCulture;
