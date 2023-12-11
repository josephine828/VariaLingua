import React from "react";
import CustomizedTimeline from "./CustomizedTimeline";
import historyData from "./data/history.json";

const InitHistory = () => {
  return (
    <div>
      <h2 className="fancy-heading">Explore the Evolution of English Varieties</h2>
      <p>
        Embark on a fascinating exploration of English language evolution across
        Nigeria, Kenya, and Cameroon. Travel through time to see the historical
        events, linguistic shifts, and cultural transitions that have influenced
        the unique English varieties in each country.
      </p>
      <CustomizedTimeline historyData={historyData} />
    </div>
  );
};

export default InitHistory;
