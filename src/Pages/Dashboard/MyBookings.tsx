/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  useCancelBookingMutation,
  useGetBookingsByUserQuery,
} from "../../Redux/Features/Bookings/bookings.api";
import NoDataFound from "../../Utils/NoDataFound";
import LoaderForDashboard from "./LoaderForDashboard";
import { Dialog } from "@material-tailwind/react";
import { formatDate } from "../../Utils/formatDate";
import { convertTo12HourFormat } from "../../Utils/timeConversion";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

import { FacilityDetails } from "../../Types/Types";

const MyBookings = () => {
  const { data: bookings, isLoading } = useGetBookingsByUserQuery(undefined);
  const [cancelBooking] = useCancelBookingMutation();
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState<FacilityDetails | null>(null);

  const handleOpen = (details: any) => {
    setOpen(!open);

    const formattedDate = formatDate(details?.date);
    const formattedStartTime = convertTo12HourFormat(details?.startTime);
    const formattedEndTime = convertTo12HourFormat(details?.endTime);

    setDetails({
      ...details,
      date: formattedDate,
      startTime: formattedStartTime,
      endTime: formattedEndTime,
    });
  };

  const handleCancelBooking = (id: string) => {
    Swal.fire({
      title: "Are you sure you want to cancel this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        cancelBooking(id);
        toast.success("Booking cancelled successfully!");
      }
    });
  };

  if (isLoading) {
    return <LoaderForDashboard />;
  }

  if (bookings.data.length === 0) {
    return <NoDataFound message="No Bookings Found" />;
  }

  return (
    <div>
      <h1 className="text-center text-4xl text-black font-bold my-10">
        My <span className="text-blue-500 text-4xl font-bold">Bookings</span>
      </h1>

      <div className="mx-auto sm:px-6 lg:px-8 mt-10">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price Per Hour
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Booking Info
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bookings?.data?.map((item: any, index: number) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={item.facility.image}
                    alt="Facility"
                    className="h-20 w-20 rounded-full"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {item.facility.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    $ {item.facility.pricePerHour} Per Hour
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-gray-900">
                    Date: {formatDate(item.date)}, From:{" "}
                    {convertTo12HourFormat(item.startTime)} To:{" "}
                    {convertTo12HourFormat(item.endTime)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleOpen(item)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => handleCancelBooking(item?._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {details && (
        <Dialog open={open} size="sm" handler={() => setOpen(false)}>
          <div>
            <img
              src={details?.facility?.image}
              alt="Facility"
              className="h-48 w-full rounded-t"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{details?.facility?.name}</h2>
              <p>Date: {details?.date}</p>
              <p>
                Time: {details?.startTime} - {details?.endTime}
              </p>
              <p>Price: ${details?.facility?.pricePerHour} Per Hour</p>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default MyBookings;
