import React from "react";
import "../../../styles/kpiGraph.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

ChartJS.defaults.font.size = 7;

type KpiProps = {
  title: String;
  yData: String[];
};

const options = {
  responsive: true,
  borderWidth: 1,
  pointRadius: 2,
};

const KpiVsTime = (props: KpiProps) => {
  const months = [
    "Jul 2017",
    "Aug 2017",
    "Sept 2017",
    "Oct 2017",
    "Nov 2017",
    "Dec 2017",
    "Jan 2018",
    "Feb 2018",
    "Mar 2018",
    "Apr 2018",
    "May 2018",
    "Jun 2018",
    "Jul 2018",
    "Aug 2018",
    "Sept 2018",
    "Oct 2018",
    "Nov 2018",
    "Dec 2018",
    "Jan 2019",
    "Feb 2019",
    "Mar 2019",
    "Apr 2019",
    "May 2019",
    "Jun 2019",
    "Jul 2019",
    "Aug 2019",
    "Sept 2019",
    "Oct 2019",
    "Nov 2019",
    "Dec 2019",
  ];

  const data = {
    labels: months,
    datasets: [
      {
        data: props.yData,
        borderColor: "#2222A8",
        backgroundColor: "#2222A8",
      },
    ],
  };

  return (
    <div className="kpi-graph-card">
      <div id="kpi-graph-title-div">
        <span id="kpi-graph-title">{props.title}</span>
      </div>
      <div>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default KpiVsTime;
