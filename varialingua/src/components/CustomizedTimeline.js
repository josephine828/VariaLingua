import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

const CustomizedTimeline = (props) => {
  const data = props.historyData.sort((a, b) => (new Date(a.date) > new Date(b.date) ? 1 : -1));

  const getBorderColor = (country) => {
    switch (country) {
      case "Nigeria":
        return "rgb(0, 123, 35)";
      case "Kenya":
        return "rgb(162, 0, 29)";
      case "Cameroon":
        return "rgb(252, 209, 22)";
    }
  };

  return (
    <Timeline position="alternate">
      {data.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body"
            color="text.secondary"
          >
            {item.date}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              variant="outlined"
              style={{ border: `3px solid ${getBorderColor(item.country)}` }}
            ></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              {item.title}
            </Typography>
            <Typography>{item.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default CustomizedTimeline;
