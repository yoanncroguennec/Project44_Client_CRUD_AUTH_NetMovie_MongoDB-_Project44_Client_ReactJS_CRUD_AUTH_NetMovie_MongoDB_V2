import {
  CategoryScale, // x
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale, // y
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line, getElementAtEvent, getElementsAtEvent } from "react-chartjs-2";
import { useRef } from "react";
import {
  dataStaticsWithLineChartJs,
  optionsStaticsWithLineChartJs,
} from "../../../../utils/assets/data";
ChartJS.register(
  CategoryScale, // x
  Legend,
  LineElement,
  LinearScale, // y
  PointElement,
  Title,
  Tooltip
);
export default function StaticsWithLineChartJs() {
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
        dataStaticsWithLineChartJs.datasets[clickDatasetIndex].link[dataPoint];
      console.log(
        "data.datasets[clickDatasetIndex].link[dataPoint]",
        dataStaticsWithLineChartJs.datasets[clickDatasetIndex].link[dataPoint]
      );
      window.open(link, "_blank"); // OU UN SEUL LIEN SUR TOUS LES POINTS : "window.open("URL", "_blank")"

      //   window.open("URL", "_blank")
    }
  }

  return (
    <div>
      <div
        style={{
          background: "rgba(255,255,255, 0.7)",
          border: "5px solid #000",
          borderRadius: "45px",
          // margin: "50px",
          height: "70vh",
          padding: "20px",
          width: "70vw",
        }}
      >
        <Line
          data={dataStaticsWithLineChartJs}
          onClick={onClick}
          options={optionsStaticsWithLineChartJs}
          ref={chartRef}
        />
      </div>
    </div>
  );
}
