import { useState } from "react";
import { useGetAllBookingsQuery } from "../../Redux/Features/Bookings/bookings.api";
import { formatDate } from "../../Utils/formatDate";
import NoDataFound from "../../Utils/NoDataFound";
import { convertTo12HourFormat } from "../../Utils/timeConversion";
import LoaderForDashboard from "./LoaderForDashboard";

const ViewAllBookings = () => {
  const { data: bookings, isLoading } = useGetAllBookingsQuery(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Adjust the number of items per page as needed
  const totalPages = Math.ceil(bookings?.data?.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <LoaderForDashboard />;
  }

  if (bookings?.data?.length === 0) {
    return <NoDataFound message="No Bookings Found" />;
  }

  // Calculate the current page's data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = bookings?.data?.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-10">
      All <span className="text-blue-500 text-4xl font-bold">Booking</span>
      </h1>

      <div className="mx-auto sm:px-6 lg:px-8 mt-10">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Image
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Price Per Hour
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Booking Info
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentData.map((item: any, index: number) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={item.facility.image}
                    alt="Facility Photo"
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
                  <span className="text-[15px] font-bold text-gray-800">
                    Booked by{" "}
                    <span className="text-blue-700">{item.user.name}</span> for{" "}
                    <span className="text-blue-700">{formatDate(item.date)}</span>{" "}
                    from{" "}
                    <span className="text-blue-700">
                      {convertTo12HourFormat(item?.startTime)}
                    </span>{" "}
                    to{" "}
                    <span className="text-blue-700">
                      {convertTo12HourFormat(item?.endTime)}
                    </span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className={`flex justify-center mt-14 mb-8`}>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="mx-2 px-4 py-2 bg-black hover:bg-white hover:border-2 hover:border-black hover:text-black text-white rounded disabled:opacity-20"
        >
          Previous
        </button>
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber + 1)}
            className={`mx-2 px-4 py-2 rounded ${
              currentPage === pageNumber + 1
                ? "bg-black text-white"
                : "bg-gray-300 text-gray-800"
            }`}
          >
            {pageNumber + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="mx-2 px-4 py-2 bg-black hover:bg-white hover:border-2 hover:border-black hover:text-black text-white rounded disabled:opacity-20"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ViewAllBookings;
