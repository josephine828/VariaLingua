import React, { useEffect, useState } from "react";
import InitCulture from "./InitCulture";
import countriesData from "./data/culture.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const CultureSection = ({ country }) => {
  const [currentMaterialIndex, setCurrentMaterialIndex] = useState(0);

  useEffect(() => {
    setCurrentMaterialIndex(0);
  }, [country]);

  if (country === "Welcome") {
    return <InitCulture />;
  } else {
    const selectedCountryData = countriesData.filter(
      (data) => data.country === country
    ).sort((a, b) => a.title.localeCompare(b.title));

    const currentMaterial = selectedCountryData[currentMaterialIndex] || {};

    const handleNext = () => {
      setCurrentMaterialIndex((prevIndex) =>
        prevIndex === selectedCountryData.length - 1 ? 0 : prevIndex + 1
      );
    };

    const handlePrevious = () => {
      setCurrentMaterialIndex((prevIndex) =>
        prevIndex === 0 ? selectedCountryData.length - 1 : prevIndex - 1
      );
    };

    let materialContent = null;
    let materialContentClass = "material-content";

    if (
      currentMaterial.type === "video" ||
      currentMaterial.type === "picture"
    ) {
      materialContentClass = "material-content no-box-shadow";
    }

    if (currentMaterial.type === "video") {
      materialContent = (
        <iframe
          width="800"
          height="450"
          src={currentMaterial.link}
          title={currentMaterial.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ borderRadius: "15px" }}
        ></iframe>
      );
    } else if (currentMaterial.type === "text") {
      materialContent = <p>{currentMaterial.text}</p>;
    } else if (currentMaterial.type === "picture") {
      materialContent = (
        <img
          src={currentMaterial.link}
          alt={currentMaterial.title}
          style={{ maxWidth: "100%", borderRadius: "15px" }}
        />
      );
    }

    return (
      <div className="material-gallery">
        <div className="material-header">
        <h2 className="fancy-heading">English in Action in {country}</h2>
        <p>Explore vibrant expressions of English in {country} through an immersive showcase featuring literary excerpts, videos, and images, all encapsulating the essence of English.</p>
        </div>
        <div className="material-display">
          <button className="arrow-button" onClick={handlePrevious}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div className="middle-container">
            <div className={materialContentClass}>{materialContent}</div>
            <div className="material-info">
              <h2>{currentMaterial.title}</h2>
              <p>{currentMaterial.description}</p>
              <em>Source: {currentMaterial.source}</em>
            </div>
          </div>
          <button className="arrow-button" onClick={handleNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    );
  }
};

export default CultureSection;
