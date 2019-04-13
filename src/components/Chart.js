import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Highcharts from "highcharts/highstock";

export default function Chart(props) {
  const { series, update } = props;

  function createChart() {
    const config = {
      colors: [
        "#A9CF54",
        "#C23C2A",
        "#0075F2",
        "#979797",
        "#FBB829",
        "#9395D3",
        "#468C98",
        "#ED6A5E",
        "#eeeeee",
        "#F0F465"
      ],
      rangeSelector: {
        selected: 4
      },
      chart: {
        height: 600,
        backgroundColor: "#242F39",
        style: {
          color: "white"
        }
      },
      legend: {
        enabled: true,
        align: "right",
        verticalAlign: "bottom",
        itemStyle: {
          color: "#C0C0C0"
        },
        itemHoverStyle: {
          color: "#C0C0C0"
        },
        itemHiddenStyle: {
          color: "#444444"
        }
      },
      // title: {
      //   text: "market cap",
      //   style: {
      //     color: "#FFFFFF"
      //   }
      // },
      tooltip: {
        valueDecimals: 0,
        backgroundColor: "#1C242D",
        borderColor: "#1C242D",
        borderWidth: 1,
        borderRadius: 0,
        style: {
          color: "#FFFFFF"
        }
      },
      subtitle: {
        style: {
          color: "#666666"
        }
      },
      xAxis: {
        gridLineColor: "#2E3740",
        gridLineWidth: 1,
        labels: {
          style: {
            color: "#525252"
          }
        },
        lineColor: "#2E3740",
        tickColor: "#2E3740"
        // title: {
        //   style: {
        //     color: "#FFFFFF"
        //   },
        //   text: "market cap"
        // }
      },
      yAxis: {
        gridLineColor: "#2E3740",
        gridLineWidth: 1,
        labels: {
          style: {
            color: "#525252"
          },
          lineColor: "#2E3740",
          tickColor: "#2E3740",
          title: {
            style: {
              color: "#FFFFFF"
            }
          }
        }
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

Chart.propTypes = {
  series: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  update: PropTypes.bool.isRequired
};
