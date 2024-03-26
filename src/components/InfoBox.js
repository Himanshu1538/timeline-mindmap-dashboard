import React from "react";
import Box from "@mui/material/Box";
import InfoBarChart from "./InfoBarCharts";

function InfoBox() {
  return (
    <div style={{ padding: "10px" }}>
      <Box height={220} width={220} alignItems="center" p={1} bgcolor="#f0f0f0">
        <InfoBarChart />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            color: "InfoText",
            fontSize: "12px",
          }}
        >
          <span>Total Reviews</span>
          <span>Positive Reviews</span>
          <span>Negative Reviews</span>
          <span>Comments</span>
        </div>
      </Box>
    </div>
  );
}

export default InfoBox;
