/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@material-tailwind/react";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useGetAllFacilitiesQuery } from "../Redux/Features/Facilities/facilities.api";
import Loader from "../Utils/Loader";
import { useState } from "react";

const Facilities = () => {
  const { data: facilities, isLoading } = useGetAllFacilitiesQuery(undefined);
       console.log(facilities);
       
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState<string>("");

  const itemsPerPage = 6;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [searchQuery, setSearchQuery] = useState("");

  if (isLoading) {
    return <Loader />;
  }

  const totalItems = facilities?.data?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    scrollToTop();
  };

  const currentData = facilities?.data
    ?.filter((facility: any) => {
      const matchesSearch =
        facility.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        facility.location.toLowerCase().includes(searchQuery.toLowerCase());

      if (priceRange) {
        const [rangeStart, rangeEnd] = priceRange.split("-").map(Number);
        const price = facility.pricePerHour;
        return matchesSearch && price >= rangeStart && price <= rangeEnd;
      }

      return matchesSearch;
    })
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Filtering
  const getPriceRanges = () => {
    if (!facilities?.data?.length) return [];

    const prices = facilities.data.map(
      (facility: any) => facility.pricePerHour
    );

    const maxPrice = Math.max(...prices);

    const ranges: string[] = [];
    for (let start = 0; start <= maxPrice; start += 50) {
      const end = start + 49;
      ranges.push(`${start}-${end}`);
    }
    return ranges;
  };

  return (
    <div>
    <h1 className="text-center text-4xl font-bold mt-20">Our <span className="text-blue-500">Facilities</span></h1>

      <div className="bg-[#F5EDED]">
        <div className="py-20">
          <div className="max-w-screen-xl mx-auto mb-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            <select
              className="px-5 outline-none rounded-lg text-lg font-bold text-black border-x-2 border-y border-black shadow-xl"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="" disabled>
                Filter by Price 
              </option>
              <option value="">All Prices</option>
              {getPriceRanges().map((range, index) => (
                <option key={index} value={range}>
                  {range}
                </option>
              ))}
            </select>

            <form onSubmit={(e) => e.preventDefault()}>
              <Input
                color="black"
                label="Search Facility"
                icon={<IoSearchSharp size={"20"} className="font-bold" />}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </form>
          </div>

          <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
            {currentData?.map((facility: any, index: number) => (
              <div
                key={index}
                className="rounded-xl bg-[#FCF8F3] p-3 shadow-2xl hover:shadow-xl"
              >
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <img
                    src={facility.image}
                    alt="Facility Photo"
                    className="h-[220px] w-full"
                  />
                </div>

                <div className="mt-1 p-2">
                  <h2 className="text-black-800 text-center text-xl font-bold">
                    {facility.name}
                  </h2>

                  <span className="text-lg flex justify-center items-center  text-black-800 text-center">
                    <span className="font-bold text-blue-500 mr-1 mt-4 text-2xl">${facility.pricePerHour} </span> Per Hour
                  </span>

                  <Link
                    className="mt-5 text-white flex justify-center items-center gap-3 font-bold  bg-black p-2 hover:bg-white hover:border-2 hover:border-black hover:text-black"
                    to={`/facilities/${facility._id}`}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`${searchQuery ? "hidden" : ""} ${
              priceRange ? "hidden" : ""
            }  flex justify-center mt-8`}
          >
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="mx-2 px-4 py-2 bg-black p-2 hover:bg-white hover:border-2 hover:border-black hover:text-black text-white rounded disabled:opacity-20"
            >
              Previous
            </button>
            {[...Array(totalPages).keys()].map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber + 1)}
                className={`mx-2 px-4 py-2  ${
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
              className="mx-2 px-4 py-2  bg-black p-2 hover:bg-white hover:border-2 hover:border-black hover:text-black text-white rounded disabled:opacity-20"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
