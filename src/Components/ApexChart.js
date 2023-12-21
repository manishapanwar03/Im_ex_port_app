import React, { useState } from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day", "x "],
  ["Burnettbrück Trading and services", 6, "/trading"],
  ["Burnettbrück Stock market consultantCommute", 2, "/stock"],
  ["Burnettbrück IT Services and consulting", 4, "/services"],
  ["Burnettbrück Fabrication and Architecture Designing", 4, "/petrolum"],
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

export function CirlceChart(props) {
  const [selectedSlice, setSelectedSlice] = useState(null);

  const handleSelect = (e) => {
    const selectedItem = e && data[e.row + 1] ? data[e.row + 1][0] : null;
    setSelectedSlice(selectedItem);
  };
  const selectHandler = ({ chartWrapper }) => {
    const chart = chartWrapper.getChart();
    const selection = chart.getSelection();

    if (selection.length > 0) {
      const selectedItem = selection[0];
      const selectedRowIndex = selectedItem.row + 1;

      if (data[selectedRowIndex] && data[selectedRowIndex][2]) {
        const link = data[selectedRowIndex][2];
        window.open(link);
      }
    }
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
          callback: (e) => selectHandler(e),
        },
      ]}
    />
  );
}
