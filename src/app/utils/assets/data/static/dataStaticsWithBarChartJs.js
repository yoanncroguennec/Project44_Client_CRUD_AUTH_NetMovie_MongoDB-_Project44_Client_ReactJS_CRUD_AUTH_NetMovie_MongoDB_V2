export const dataStaticsWithBarChartJs = {
  labels: ["Septembre", "Octobre", "Novembre"],
  ///// BARS
  datasets: [
    {
      backgroundColor: ["aqua", "aqua"],
      borderColor: "black",
      borderRadius: 25,
      borderWidth: 1,
      data: [30, 66, 25],
      label: "Films",
    },
    {
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgb(255, 99, 132)",
      borderRadius: 25,
      data: [1, 5, 3],
      label: "Catégories de films",
      // link: ["UrL1", "URL2", "URL3", "ETC..."]
      tension: 0.4,
    },
  ],
};
export const optionsStaticsWithBarChartJs = {
  plugins: {
    legend: {
      labels: {
        font: {
          family: "Helvetica Neue",
          size: 34,
          style: "italic",
          weight: "bold",
        },
      },
      position: "top",
    },
    title: {
      color: "blue",
      display: true,
      font: {
        size: 34,
      },
      text: "Films / Catégories - Bar Chart JS",
    },
    tooltip: {
      // CONFIG
      backgroundColor: "rgba(255, 99, 132, 1)",
      borderColor: "#000",
      borderWidth: 2,
      color: "blue",
      cornerRadius: 25,
      padding: 20,
      // TITLE
      titleColor: "#000",
      // titleFont: "bold",
      titleAlign: "center",
      titleFont: {
        size: 30,
      },
      // BOX
      boxHeight: 30,
      boxPadding: 20,
      boxWidth: 30,
      // BODY
      bodyColor: "#000",
      bodyFont: {
        size: 30,
      },
    },
  },
  responsive: true,
  scales: {
    x: {
      ticks: {
        color: "red",
        font: {
          size: 30,
          weight: "bold",
        },
        title: {
          color: "blue",
          display: true,
          font: {
            size: 30,
            weight: "bold",
          },
          text: "Statistiques (Films /  Catégories de films par mois",
        },
      },
    },
    y: {
      title: {
        color: "blue",
        display: true,
        font: {
          size: 24,
          weight: "bold",
        },
        text: "Quantités (Films / Catégories de films par mois",
      },
    },
    yAxes: [
      {
        ticks: {
          fontSize: 40,
          weight: "bold",
        },
      },
    ],
  },
};

