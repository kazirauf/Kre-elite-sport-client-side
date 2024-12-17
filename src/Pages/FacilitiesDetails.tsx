import { Link, useParams } from "react-router-dom";
import { useGetFacilityDetailsQuery } from "../Redux/Features/Facilities/facilities.api";
import Loader from "../Utils/Loader";
import '../index.css'
const FacilitiesDetails = () => {
  const { id } = useParams();

  const { data: facility, isLoading } = useGetFacilityDetailsQuery(id);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="lg:my-30 my-20">
       
  <h1 className="text-center text-4xl font-bold">View Details By <span className="text-blue-500 text-4xl font-bold">{facility?.data?.name}</span> </h1>
  <div className="wrapper ">
    <div className="product-img">
      <img
        src={facility?.data?.image}
        height="820"
        width="327"
        alt="Harvest Vase"
      />
    </div>
    <div className="product-info">
      <div className="product-text">
        <h1>{facility?.data?.name}</h1>
        <h2 >{facility?.data?.location}</h2>
        <p>
        {facility?.data?.description}
        </p>
      </div>
      <div className="product-price-btn">
        <p>
          <span>${facility?.data?.pricePerHour}</span>
        </p>
        <Link to={`/book-facility/${id}`}>
        <button type="button">Booking now</button>
        </Link>
        
      </div>
    </div>
  </div>
    </section>

  );
};

export default FacilitiesDetails;
