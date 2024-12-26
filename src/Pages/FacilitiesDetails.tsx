import { Link, useParams } from "react-router-dom";
import { useGetAllFacilitiesQuery, useGetFacilityDetailsQuery } from "../Redux/Features/Facilities/facilities.api";
import Loader from "../Utils/Loader";
import '../index.css'
import { FaMapMarked } from "react-icons/fa";
interface Facility {
  _id: string;   
image: string;
name: string;
location: string;
pricePerHour: number;
}

const FacilitiesDetails = () => {
  
  const { id } = useParams();

  const { data: facility, isLoading } = useGetFacilityDetailsQuery(id);
  const { data: facilities, } = useGetAllFacilitiesQuery(undefined);
 
  if (isLoading) {
    return <Loader />;
  }
 
  const homepageFacilities: Facility[] = facilities?.data?.slice(0, 3) || [];
  return (
    <section className="lg:my-30 ">
    <div className=" mx-24 my-10">
    <div className="flex justify-center">
      <img src={facility?.data?.image} alt="" className="w-full lg:h-[800px]" />
      </div>
   <div className="flex justify-around items-start lg:mx-20 mt-20">
   <div className="">
        <h1 className="text-blue-500 text-5xl ">{facility?.data?.name}</h1>
        <p className="text-gray-700 text-xl mt-4 font-bold flex items-center "> <FaMapMarked className="text-blue-500 mr-2"/>{facility?.data?.location}</p>
        <p className="text-gray-700 leading-8 text-base mt-5 w-2/3">
        {facility?.data?.description}
        </p>
        <Link to={`/book-facility/${id}`}>
        <button className="mt-5 text-white flex justify-center items-center gap-3 font-bold   bg-black px-7 py-3 rounded hover:bg-white hover:border-2 hover:border-black hover:text-black" type="button">Booking now</button>
        </Link>
      </div>
      <div className="px-10 py-5 shadow-xl border-t-2 border-r-2 border-gray-5 rounded">
      <h1 className="text-blue-500 text-6xl font-bold">${facility?.data?.pricePerHour}</h1>
     <span className="font-bold text-gray-600 text-base mt-2 text-center">Price per hour</span>
      </div>
      
   </div>
   
    </div>

    <div>
      <h1 className="text-center text-5xl font-bold mt-20">
       More <span className="text-blue-500">Facilities</span>
      </h1>
      
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-10 p-6 md:grid-cols-2 lg:grid-cols-3">
      {homepageFacilities.map((facility, index) => (
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
      <div className="flex justify-center ">
     
      </div>
    </div>
 
    </section>

  );
};

export default FacilitiesDetails;
