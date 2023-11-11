export const dataStaticsWithLineChartJs = {
  labels: ["Septembre", "Octobre", "Novembre"],
  datasets: [
    {
      label: "Films",
      data: [30, 66, 25],
      borderColor: "aqua",
      backgroundColor: "aqua",
      tension: 0.4,
    },
    {
      label: "Catégorie de films",
      data: [1, 5, 3],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      tension: 0.4,
      // link: ["UrL1", "URL2", "URL3", "ETC..."]
    },
  ],
};
export const optionsStaticsWithLineChartJs = {
  animations: {
    tension: {
      duration: 1000,
      easing: "linear",
      from: 1,
      to: 0,
      loop: true,
    },
  },
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
    subtitle: {
      display: true,
      text: "Custom Chart Subtitle",
      font: {
        size: 30,
      },
    },
    title: {
      color: "blue",
      display: true,
      font: {
        size: 34,
      },
      text: "Films / Catégories - Line Chart JS",
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

