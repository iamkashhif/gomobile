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
import { useSelector } from "react-redux";
import CircularLoader from "../tables/Loader";

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

const DashboardGraph = ({ role }) => {
  const { DashboardData, DashboardLoading } = useSelector(
    (state) => state.users
  );
  console.log(DashboardData);
  const lineLabels = DashboardData?.ordersCountPerMonth?.map((item) =>
    item.month.substring(5)
  ); // Extracting just the month (e.g., "10" for October)
  const data = DashboardData?.ordersCountPerMonth?.map(
    (item) => item.orderCount
  );
  console.log({ lineLabels, data });
  const lineChartData = {
    labels: lineLabels,
    datasets: [
      {
        label: "Order Count",
        data: data,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "bottom" },
    },
  };
  // Extract all unique months from the dataset
  const months = [
    ...new Set(
      DashboardData?.franchisesOrderCount?.flatMap((item) =>
        item.results.map((result) => result.month)
      )
    ),
  ];

  // Get the labels (franchise names)
  const labels = DashboardData?.franchisesOrderCount?.map((item) => item.name);
  const datasets = months.map((month) => ({
    label: month,
    data: labels.map((label) => {
      const franchise = DashboardData?.franchisesOrderCount?.find(
        (item) => item.name === label
      );
      const orderForMonth = franchise.results.find(
        (result) => result.month === month
      );

      return orderForMonth ? orderForMonth.orderCount : 0; 
    }),
    backgroundColor: labels.map((label) => {
      const franchise = DashboardData?.franchisesOrderCount?.find(
        (item) => item.name === label
      );
      const orderForMonth = franchise.results.find(
        (result) => result.month === month
      );

      return orderForMonth ? orderForMonth.color : undefined; 
    }),
  }));

  const barChartData = {
    labels,
    datasets,
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
        Orders Growth Over Months
        </h2>
        {DashboardLoading ? (
          <CircularLoader size="w-8 h-8" />
        ) : (
          <Line data={lineChartData} options={lineChartOptions} />
        )}
      </div>
      { (role === "Admin" || role === "Accountant") && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Orders Received
          </h2>
          {DashboardLoading ? (
            <CircularLoader size="w-8 h-8" />
          ) : (
            <Bar data={barChartData} options={barChartOptions} />
          )}
        </div>
      )}
    </div>
  );
};

export default DashboardGraph;
