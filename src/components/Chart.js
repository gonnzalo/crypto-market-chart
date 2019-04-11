import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

export default function Chart(props) {
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType="stockChart"
        options={props.options}
      />
    </div>
  );
}
