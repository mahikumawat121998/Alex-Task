import React from "react";
import Plot from "react-plotly.js";

const BarGraph = ({ selectedRows }) => {
  const ages = selectedRows.map((row) => row.age);

  const data = [
    {
      type: "bar",
      x: selectedRows.map((row) => `${row.firstName} ${row.lastName}`),
      y: ages,
    },
  ];

  const layout = {
    title: "Age Distribution",
    xaxis: { title: "Name" },
    yaxis: { title: "Age" },
  };

  return (
    <div>
      <h2>Age Distribution</h2>
      <Plot data={data} layout={layout} />
    </div>
  );
};

export default BarGraph;
