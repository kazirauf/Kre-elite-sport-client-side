/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllBookingsQuery } from "../../Redux/Features/Bookings/bookings.api";
import { formatDate } from "../../Utils/formatDate";
import NoDataFound from "../../Utils/NoDataFound";
import { convertTo12HourFormat } from "../../Utils/timeConversion";
import LoaderForDashboard from "./LoaderForDashboard";

const ViewAllBookings = () => {
  const { data: bookings, isLoading } = useGetAllBookingsQuery(undefined);

  console.log(bookings);

  if (isLoading) {
    return <LoaderForDashboard />;
  }

  if (bookings.data.length === 0) {
    return <NoDataFound message="No Bookings Found" />;
  }

  return (
    <div>
   <h1 className="text-center text-4xl font-bold my-10">My <span className="text-blue-500 text-4xl font-bold">Booking</span> </h1>


      <div className="mt-7 flex flex-wrap justify-center gap-5">
        {bookings?.data?.map((item: any, index: number) => (
              <div
              key={index}
              className="card bg-base-100 w-80 shadow-xl border-x-2 border-y-4 border-black"
            >
              <figure>
                <img src={item.facility.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.facility.name}</h2>
                <p> $ {item.facility.pricePerHour} per hour</p>
                <div className="flex justify-center gap-3 items-center">
                <span className="text-[15px] font-bold text-gray-800 text-center">
                Booked by{" "}
                <span className="text-blue-700">{item.user.name}</span> for{" "}
                <span className="text-blue-700">{formatDate(item.date)}</span>{" "}
                from{" "}
                <span className="text-blue-700">
                  {" "}
                  {convertTo12HourFormat(item?.startTime)}
                </span>{" "}
                to{" "}
                <span className="text-blue-700">
                  {" "}
                  {convertTo12HourFormat(item?.endTime)}
                </span>
              </span>
  
                
                </div>
              </div>
            </div>
          // <div
          //   key={index}
          //   className="rounded-xl p-3 shadow-2xl hover:shadow-xl border-2 border-green-700"
          // >
          //   <div className="relative flex items-end overflow-hidden rounded-xl">
          //     <img
          //       src={item.facility.image}
          //       alt="Hotel Photo"
          //       className="h-[200px] w-full"
          //     />
          //   </div>

          //   <div className="mt-1 p-2">
          //     <h2 className="text-gray-800 mb-3 text-center text-xl font-bold">
          //       {item.facility.name}
          //     </h2>

           
          //   </div>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllBookings;
