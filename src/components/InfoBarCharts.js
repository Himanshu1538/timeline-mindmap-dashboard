import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

function InfoBarChart() {
  return (
    <BarChart
      yAxis={[
        { scaleType: "band", data: ["Positive", "Negative", "Comments"] },
      ]}
      series={[{ data: [13451, 11839, 10463] }]}
      layout="horizontal"
      width={250}
      height={160}
      grid={{ vertical: true }}
    />
  );
}

export default InfoBarChart;
