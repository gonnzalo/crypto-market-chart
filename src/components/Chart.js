import React, { useEffect } from "react";
import Highcharts from "highcharts/highstock";

export default function Chart(props) {
  const { series, update } = props;
  function createChart() {
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
  }, [update]);

  return (
    <>
      <div id="Graph" />
    </>
  );
}
