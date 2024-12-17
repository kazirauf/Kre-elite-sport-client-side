import React from 'react';
import { selectCurrentUser } from "../../Redux/Features/Auth/authSlice";
import { useGetAllBookingsQuery } from "../../Redux/Features/Bookings/bookings.api";
import { useGetAllFacilitiesQuery } from "../../Redux/Features/Facilities/facilities.api";
import { useAppSelector } from "../../Redux/hooks";
import NoDataFound from "../../Utils/NoDataFound";
import LoaderForDashboard from "./LoaderForDashboard";
import { BarChart } from '@mui/x-charts';

const Overview: React.FC = () => {
  const user = useAppSelector(selectCurrentUser);
  const { data: bookings, isLoading: bookingsLoading } = useGetAllBookingsQuery(undefined);
  const { data: facilities, isLoading: facilitiesLoading } = useGetAllFacilitiesQuery(undefined);

  if (bookingsLoading || facilitiesLoading) {
    return <LoaderForDashboard />;
  }

  if (!bookings?.data?.length) {
    return <NoDataFound message="No Bookings Found" />;

  }

  // Prepare data for the BarChart
  const chartData = [
    { category: 'Total Facilities', value: facilities?.data?.length || 0 },
    { category: 'Total Bookings', value: bookings.data.length },
  ];

  return (
    <div>
      <h1 className="text-center text-black text-5xl font-bold mt-20">
        Welcome <span className="text-blue-500 font-bold">{user?.name}</span> to your Dashboard
        <div className="flex flex-wrap justify-center items-center gap-5 my-10">
        <div className="bg-blue-500 text-white py-5 w-1/4 rounded">
          <h1 className="text-5xl mb-2">{bookings.data.length}</h1>
          <h4 className="text-xl">Total Bookings</h4>
        </div>
        <div className="bg-blue-500 text-white py-5 w-1/4 rounded">
          <h1 className="text-5xl mb-2">{facilities?.data?.length || 0}</h1>
          <h4 className="text-xl">Total Facilities</h4>
        </div>
        <div className="bg-blue-500 text-white py-5 w-1/4 rounded">
          <h1 className="text-5xl mb-2">19</h1>
          <h4 className="text-xl">Total Users</h4>
        </div>
      </div>
      </h1>
      
     

      <div className="flex justify-center my-10">
        <BarChart
          xAxis={[{ id: 'categories', data: chartData.map(item => item.category), scaleType: 'band' }]}
          series={[{ data: chartData.map(item => item.value) }]}
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default Overview;
