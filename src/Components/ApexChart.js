import React, { useState } from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Burnettbrück Trading and services", 6],
  ["Burnettbrück Stock market consultantCommute", 2],
  ["Burnettbrück IT Services and consulting", 4],
  ["Burnettbrück Fabrication and Architecture Designing", 4],
];




export const options = {
    title: "My Business",
    legend: "none",
    width: "100%",
    height: "100%",
    // pieSliceText: "label", 
    chartArea: {
        left: "3%",
        top: "3%",
        height: "94%",
        width: "94%",
    },
    pieHole: 0.5,
};


export function CirlceChart() {
    const [selectedSlice, setSelectedSlice] = useState(null); // State to store selected slice

    const handleSelect = (e) => {
        const selectedItem = e && data[e.row + 1] ? data[e.row + 1][0] : null; // Get the selected item label
        setSelectedSlice(selectedItem); // Set the selected slice label
      };
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            handleSelect(chartWrapper.getChart().getSelection()[0]);
          },
        },
      ]}
    
    />
  );
}
