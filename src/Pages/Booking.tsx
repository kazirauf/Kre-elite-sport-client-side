/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import {
  useCheckAvailabilityMutation,
  useCreateBookingMutation,
  useGetFacilityDetailsQuery,
} from "../Redux/Features/Facilities/facilities.api";
import Loader from "../Utils/Loader";
import { FormEvent, useState } from "react";
import { convertTo12HourFormat } from "../Utils/timeConversion";
import toast from "react-hot-toast";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const Booking = () => {
  const { id } = useParams();

  const { data: facility, isLoading } = useGetFacilityDetailsQuery(id);

  const [checkAvailability, { isLoading: isCheckAvailabilityLoading }] =
    useCheckAvailabilityMutation();

  const [createNewBooking, { isLoading: isCreateBookingLoading }] =
    useCreateBookingMutation();

  const [selectedDate, setSelectedDate] = useState("");
  const [availableSlots, setAvailableSlots] = useState<any[] | undefined>(
    undefined
  );

  const handleCheckAvailability = async () => {
    const res = await checkAvailability(selectedDate);

    setAvailableSlots(res?.data?.data);
  };

  // Handling proceeding to booking
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const payload = {
      facility: facility.data._id,
      date: selectedDate,
      startTime,
      endTime,
    };

    const res = await createNewBooking(payload);

    if (res.error) {
      const errorData = res.error as FetchBaseQueryError;

      if (errorData && "data" in errorData) {
        toast.error((errorData.data as any).message);
      } else {
        toast.error("An unexpected error occurred");
      }
    } else {
      console.log(res.data.data.initializePayment);

      if (res.data.data.initializePayment.result === "true") {
        window.location.href = res.data.data.initializePayment.payment_url;
      }
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="bg-[#F5EDED] py-20">
       <h1 className="text-center text-4xl font-bold my-10">Select Your <span className="text-blue-500 text-4xl font-bold">Schedule</span> And <span className="text-blue-500 text-4xl font-bold">Start Time Slot  </span> To <span className="text-blue-500 text-4xl font-bold">End Time Slot</span></h1>
      <div className="bg-white rounded-lg overflow-hidden shadow-2xl w-[90%] md:w-[60%] mx-auto flex">
     
        <div className="p-8">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
            {facility?.data?.name}
          </h2>

          <p className="lg:text-lg md:text-xl font-bold text-gray-800 mb-6">
          <span className="font-bold text-blue-500 mr-1 text-2xl ">${facility?.data?.pricePerHour} </span> Per Hour
       
          </p>

          <div className="mt-10">
            <p className="mb-2 font-bold text-lg text-gray-700">
              Select Your Schedule 📅
            </p>
            <div className="">
              <input
                type="date"
                className="w-[200px] border-black border-2 outline-none p-3  font-bold"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
       <br />
              <button
                onClick={handleCheckAvailability}
                disabled={!selectedDate || isCheckAvailabilityLoading}
                className="mt-5 text-white flex justify-center items-center gap-3 font-bold  bg-black py-3 px-4 rounded hover:bg-white hover:border-2 hover:border-black hover:text-black"
              >
                {isCheckAvailabilityLoading ? (
             <button   className="w-full py-2 px-5 bg-black text-white rounded-md hover:bg-white hover:text-black hover:border-2 hover:border-black transition duration-200">Loading...</button>
                ) : (
                  "Check Availability Slot"
                )}
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {availableSlots && (
                <div className="mt-5">
                  <p className="mb-2 font-bold text-lg text-gray-700">
                    Available Slots:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {availableSlots?.map((item: any, index: number) => (
                      <div
                        key={index}
                        className="bg-black py-2 text-center text-base font-semibold text-white rounded-lg"
                      >
                        {convertTo12HourFormat(item.startTime)} -{" "}
                        {convertTo12HourFormat(item.endTime)}
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-col md:flex-row gap-10">
                    <div>
                      <p className="mb-2 font-bold text-lg text-gray-700">
                        Select start time of your slot:
                      </p>

                      <input
                        type="time"
                        className="w-[200px] border-black border-2 outline-none p-3  font-bold"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                      />
                    </div>

                    <div>
                      <p className="mb-2 font-bold text-lg text-gray-700">
                        Select end time of your slot:
                      </p>

                      <input
                        type="time"
                        className="w-[200px] border-black border-2 outline-none p-3 font-bold"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isCreateBookingLoading}
                    className="mt-5 w-full px-3 py-2 tracking-wider  bg-black text-white rounded-md hover:bg-white hover:text-black hover:border-2 hover:border-blackfont-bold transition-colors duration-300 transform"
                  >
                    {isCreateBookingLoading ? (
                      <div className="flex gap-3 justify-center items-center text-2xl">
                        <button   className="w-full p-3 bg-black text-white rounded-md hover:bg-white hover:text-black hover:border-2 hover:border-black transition duration-200">Loading...</button>
                      </div>
                    ) : (
                      "Click For Payment"
                    )}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
        <div>
        <img src="https://img.freepik.com/free-vector/appointment-booking-mobile-concept_23-2148570788.jpg?w=826&t=st=1725174543~exp=1725175143~hmac=633e6f3ec7d6e33c01c601e4df386ba704d2ae05136c8ed72e2c4a385935d519" alt="" />
        </div>
      </div>
    X
    </div>
  );
};

export default Booking;
