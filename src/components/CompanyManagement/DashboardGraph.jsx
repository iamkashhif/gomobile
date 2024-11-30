import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DashboardGraph = () => {
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "User Growth",
        data: [100, 200, 300, 400, 500, 700, 1023],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
      title: { display: true, text: "User Growth Over Months" },
    },
  };

  const barChartData = {
    labels: [
      "AZ-PHX",
      "CA-OC",
      "CO-SPR",
      "FL-BROWARD",
      "FL-JAX",
      "IL-CHI",
      "MO-KC",
      "NC-CLT",
      "NY-NYC",
      "OR-PDX",
      "TX-DFW",
    ], // Locations
    datasets: [
      {
        label: "July",
        data: [0, 0, 0, 0, 10, 15, 0, 5, 0, 0, 5], // Replace with your July data
        backgroundColor: "#0070C0", // Blue matching the image
      },
      {
        label: "August",
        data: [0, 0, 1, 0, 20, 25, 5, 15, 30, 5, 10], // Replace with your August data
        backgroundColor: "#FF0000", // Red matching the image
      },
      {
        label: "September",
        data: [0, 0, 0, 5, 50, 30, 10, 20, 45, 25, 20], // Replace with your September data
        backgroundColor: "#FFC000", // Yellow matching the image
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      // title: {
      //   display: true,
      //   text: "Orders Received",
      // },
    },
  };

  return (
    <div className="min-h-screen px-6">
      {/* Chart Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Dashboard Insights
        </h2>
        <Line data={lineChartData} options={lineChartOptions} />
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
        Orders Received
        </h2>
        <Bar data={barChartData} options={barChartOptions} />
      </div>
    </div>
  );
};

export default DashboardGraph;
