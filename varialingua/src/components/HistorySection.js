import React from "react";
import CustomizedTimeline from "./CustomizedTimeline";
import InitHistory from "./InitHistory";
import historyData from "./data/history.json";

const HistorySection = ({ country }) => {
  let currentHistory = historyData;

  if (country === "Welcome") {
    return <InitHistory historyData={historyData} />;
  }

  currentHistory = currentHistory.filter((data) => data.country === country);

  return (
    <div>
      <h2 className="fancy-heading">{country}'s English Language Journey</h2>
      <p>
        Delve into the captivating history of English in {country}. Explore
        significant events, cultural shifts, and linguistic milestones that
        shaped the diverse varieties of English spoken in this land.
      </p>
      <CustomizedTimeline historyData={currentHistory} />
    </div>
  );
};

export default HistorySection;
