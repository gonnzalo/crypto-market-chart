import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

export default function Chart(props) {
  const { series } = props;

  const options = {
    title: {
      text: "market cap"
    },
    yAxis: {
      title: {
        text: "market cap"
      }
    },
    tooltip: {
      valueDecimals: 0
    },
    series: [...series]
  };

  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType="stockChart"
        options={options}
      />
    </>
  );
}
