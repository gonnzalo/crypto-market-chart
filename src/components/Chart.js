import React, { useEffect } from "react";
import Highcharts from "highcharts/highstock";

export default function Chart(props) {
  function createChart() {
    const { series } = props;

    const config = {
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
      }
    };

    Highcharts.stockChart("Graph", {
      ...config,
      series: [...series]
    });
  }

  useEffect(() => {
    createChart();
    return createChart();
  }, []);

  return (
    <>
      <div id="Graph" />
    </>
  );
}
