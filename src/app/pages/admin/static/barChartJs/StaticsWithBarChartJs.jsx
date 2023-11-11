// DOCS :
// Global Docs "Chart Js" : "https://www.chartjs.org/docs/latest/"
// Tooltip : "https://www.chartjs.org/docs/latest/configuration/tooltip.html"
import { useRef } from "react";
import {
  BarElement,
  CategoryScale, // x
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale, // y
  PointElement,
  Tooltip,
} from "chart.js";
import { Chart, getElementAtEvent, getElementsAtEvent } from "react-chartjs-2";
// UTILS DATA
import {
  dataStaticsWithBarChartJs,
  optionsStaticsWithBarChartJs,
} from "../../../../utils/assets/data";

ChartJS.register(
  BarElement,
  CategoryScale, // x
  Legend,
  LineElement,
  LinearScale, // y
  PointElement,
  Tooltip
);
export default function StaticsWithBarChartJs() {
  const chartRef = useRef();

  function onClick(e) {
    if (getElementAtEvent(chartRef.current, e).length > 0) {
      console.log(
        "getElementAtEvent(chartRef.current, e)",
        getElementAtEvent(chartRef.current, e)
      );
      const clickDatasetIndex = getElementsAtEvent(chartRef.current, e)[0]
        .datasetIndex;
      console.log("clickDatasetIndex", clickDatasetIndex);
      const dataPoint = getElementAtEvent(chartRef.current, e)[0].index;
      console.log("dataPoint", dataPoint);
      const link =
        dataStaticsWithBarChartJs.datasets[clickDatasetIndex].link[dataPoint];
      console.log(
        "data.datasets[clickDatasetIndex].link[dataPoint]",
        dataStaticsWithBarChartJs.datasets[clickDatasetIndex].link[dataPoint]
      );
      window.open(link, "_blank"); // OU UN SEUL LIEN SUR TOUS LES POINTS : "window.open("URL", "_blank")"
      //   window.open("URL", "_blank")
    }
  }

  return (
    <div
      style={{
        background: "rgba(255,255,255, 0.7)",
        border: "5px solid #000",
        borderRadius: "45px",
        height: "70vh",
        margin: "50px",
        padding: "20px",
        width: "80vw",
      }}
    >
      {" "}
      <Chart
        type='bar'
        data={dataStaticsWithBarChartJs}
        onClick={onClick}
        options={optionsStaticsWithBarChartJs}
        ref={chartRef}
      />
      ;
    </div>
  );
}
