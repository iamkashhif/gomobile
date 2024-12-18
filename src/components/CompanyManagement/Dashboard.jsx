import react, { useEffect } from "react";
import { RiNumbersLine } from "react-icons/ri";
import DashboardGraph from "./DashboardGraph";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboard } from "../../rtk/users/userThunks";
import CircularLoader from "../tables/Loader";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { DashboardData, DashboardLoading } = useSelector(
    (state) => state.users
  );
  const { profileData } = useSelector((state) => state.profile);

  const cards = [
    (profileData.role === "Admin" || profileData.role === "Accountant")  && {
      id: 1,
      value: DashboardData?.userCount || "0",
      title: "Total Franchise",
    },
    { id: 2, value: DashboardData?.orderCount || "0", title: "Total Orders" },
    {
      id: 3,
      value: DashboardData?.shippedOrderCount || "0",
      title: "Shipped Orders",
    },
    {
      id: 4,
      value: DashboardData?.pendingOrderCount || "0",
      title: "Awaiting to Ship",
    },
  ].filter(Boolean);

  useEffect(() => {
    dispatch(fetchDashboard());
  }, []);

  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-5 p-6 pointer">
        {cards?.map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-md rounded-lg px-5 py-8 hover:shadow-xl transition-shadow duration-300 h-36 min-w-56 flex flex-col justify-between"
          >
            <div className="flex justify-between">
              {DashboardLoading ? (
                <CircularLoader size="w-8 h-8" />
              ) : (
                <h2 className="text-2xl font-semibold text-gray-800">
                  {card.value}
                </h2>
              )}
              <RiNumbersLine className="text-2xl" />
            </div>

            <h2 className="text-md font-semibold text-gray-800">
              {card.title}
            </h2>
          </div>
        ))}
      </div>

      <DashboardGraph role={profileData.role} />
    </div>
  );
};

export default Dashboard;
