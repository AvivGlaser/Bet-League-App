import React from "react";
import { Chart } from "react-google-charts";
import HeaderComponent from "../../Ui-Components/HeaederComponent/HeaderComponent";

export default function Home() {
  return (
    <div className="container">
      <HeaderComponent header="Welcome" subHeader="Bet League Dashboard" />
      <Chart
        chartType="ScatterChart"
        data={[
          ["Age", "Weight"],
          [4, 5.5],
          [4, 5.5],
          [4, 19.5],
          [8, 12],
        ]}
        width="100%"
        height="400px"
        legendToggle
      />
    </div>
  );
}
