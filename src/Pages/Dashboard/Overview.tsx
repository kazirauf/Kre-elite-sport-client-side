/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { selectCurrentUser } from "../../Redux/Features/Auth/authSlice";
import { useGetAllBookingsQuery, useGetBookingsByUserQuery } from "../../Redux/Features/Bookings/bookings.api";
import { useGetAllFacilitiesQuery } from "../../Redux/Features/Facilities/facilities.api";
import { useAppSelector } from "../../Redux/hooks";
import NoDataFound from "../../Utils/NoDataFound";
import LoaderForDashboard from "./LoaderForDashboard";
import { BarChart } from '@mui/x-charts';
import { Link } from 'react-router-dom';

// Define a type for facilities
interface Facility {
  _id: string;
  image: string;
  name: string;
  pricePerHour: number;
}

const Overview: React.FC = () => {
  const user = useAppSelector(selectCurrentUser);
  const { data: bookings, isLoading: bookingsLoading } = useGetAllBookingsQuery(undefined);
  const { data: facilities, isLoading: facilitiesLoading } = useGetAllFacilitiesQuery(undefined);
  const { data: mybookings } = useGetBookingsByUserQuery(undefined);
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
  const chartData2 = [
    { category: 'Total Bookings', value: mybookings?.data?.length || 0 },
 
  ];

  return (
    <div >
       {
       user?.role === "user"  ?
      <div className='items-center'  >
<div className='flex justify-center'>
<div className="bg-blue-500 text-white py-5 text-center lg:w-1/4 md:w-1/4 w-10/12 mb-3 rounded">
          <h1 className="text-5xl font-bold mb-2">{mybookings?.data?.length}</h1>
          <h4 className="text-xl">Total Bookings</h4>
        </div>
</div>
        <div className='lg:flex md:flex justify-center mt-20'>
      
      <div className="flex justify-center my-10">
         <BarChart
           xAxis={[{ id: 'categories', data: chartData2.map(item => item.category), scaleType: 'band' }]}
           series={[{ data: chartData.map(item => item.value) }]}
           width={500}
           height={300}
         />
       </div>
 
       <div className=" mx-auto p-4 lg:mx-32">
         <div className="overflow-x-auto shadow-md sm:rounded-lg">
           <table className="w-full text-sm text-left text-gray-500">
             <thead className="text-xs text-gray-700 uppercase bg-gray-50">
               <tr>
                 <th scope="col" className="px-6 py-3">Image</th>
                 <th scope="col" className="px-6 py-3">Name</th>
                 <th scope="col" className="px-6 py-3">Price Per Hour</th>
                 <th scope="col" className="px-6 py-3">Location</th>
               </tr>
             </thead>
             <tbody>
               {mybookings?.data?.slice(0, 4).map((item: any, index: number) => (
                 <tr key={index} className="bg-white border-b hover:bg-gray-50">
                   <td className="px-6 py-4">
                     <img
                       src={item.facility.image }
                       alt="facility"
                       className="w-10 h-10 rounded-full"
                     />
                   </td>
                   <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                     {item.facility.name }
                   </td>
                   <td className="px-6 py-4">
                     {item.facility.pricePerHour }
                   </td>
                   <td className="px-6 py-4">
                   {item.facility.location }
                   </td>
                 </tr>
               )) || (
                 <tr>
                   <td colSpan={4} className="text-center py-4">No Facilities Found</td>
                 </tr>
               )}
             </tbody>
           </table>
         </div>
       </div>
      </div>
      </div>
      :
      <div>
     
  <div className=''>
  <div className="lg:flex md:flex flex-wrap justify-center items-center gap-10 my-10 mt-20">
        <div className="bg-blue-500 text-white py-5 text-center lg:w-1/4 md:w-1/4 w-10/12 mb-3 rounded">
          <h1 className="text-5xl font-bold mb-2">{bookings.data.length}</h1>
          <h4 className="text-xl">Total Bookings</h4>
        </div>
        <div className="bg-blue-500 text-white text-center py-5 lg:w-1/4 md:w-1/4 w-10/12  mb-3 rounded">
          <h1 className="text-5xl font-bold mb-2">{facilities?.data?.length || 0}</h1>
          <h4 className="text-xl">Total Facilities</h4>
        </div>
        <div className="bg-blue-500 text-white py-5 text-center lg:w-1/4 md:w-1/4 w-10/12  rounded">
          <h1 className="text-5xl font-bold mb-2">19</h1>
          <h4 className="text-xl">Total Users</h4>
        </div>
      </div>
  </div>
    
     <div className='lg:flex md:flex justify-center mt-20'>
      
     <div className="flex justify-center my-10">
        <BarChart
          xAxis={[{ id: 'categories', data: chartData.map(item => item.category), scaleType: 'band' }]}
          series={[{ data: chartData.map(item => item.value) }]}
          width={500}
          height={300}
        />
      </div>

      <div className=" mx-auto p-4 lg:mx-32">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">Image</th>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Price Per Hour</th>
                <th scope="col" className="px-6 py-3">Details</th>
              </tr>
            </thead>
            <tbody>
              {facilities?.data?.slice(0, 4).map((item: Facility, index: number) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <img
                      src={item.image || '/placeholder-image.png'}
                      alt="facility"
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {item.name || 'N/A'}
                  </td>
                  <td className="px-6 py-4">
                    {item.pricePerHour ? `$${item.pricePerHour}` : 'N/A'}
                  </td>
                  <td className="px-6 py-4">
                    <Link   to={`/facilities/${item._id}`} className="font-medium text-blue-600 hover:underline">View Details</Link>
                  </td>
                </tr>
              )) || (
                <tr>
                  <td colSpan={4} className="text-center py-4">No Facilities Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
     </div>
      </div>
}
     
    </div>
  );
};

export default Overview;
