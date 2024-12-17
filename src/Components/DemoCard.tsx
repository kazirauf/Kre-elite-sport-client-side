
import Loader from "../Utils/Loader";
import { useGetAllFacilitiesQuery } from "../Redux/Features/Facilities/facilities.api";
import { Link } from "react-router-dom";


// Define the type for a facility item
interface Facility {
    _id: string;   
image: string;
  name: string;
  location: string;
  pricePerHour: number;
}

const DemoCard: React.FC = () => {
  // Fetch data from the API
  const { data: facilities, isLoading } = useGetAllFacilitiesQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }

  // Take the first three facilities for display
  const homepageFacilities: Facility[] = facilities?.data?.slice(0, 3) || [];

  return (
    <div>
      <h1 className="text-center text-4xl font-bold mt-20">
        How <span className="text-blue-500">Facilities</span>
      </h1>
      
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
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
                    Booking Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
    </div>
  );
};

export default DemoCard;
