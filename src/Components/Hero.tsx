import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero bg-base-200 h-[700px]">
  <div className="hero-content flex-col lg:flex-row-reverse lg:gap-60 ">
    <img
      src="https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      className="lg:max-w-xl md:max-w-lg max-w-xs  rounded-lg shadow-2xl" />
    <div className="lg:w-full md:w-full  w-96">
      <h1 className="lg:text-5xl md:text-4xl  text-2xl lg:w-full md:w-full w-4/5 font-bold">Effortless Facility Booking 
      With <span className="text-blue-500">KRE</span></h1>
      <p className="text-gray-500 my-3 lg:w-full md:w-full w-2/3">⚡ Experience the convenience of booking sports facilities with just a few clicks. 🏟️ KRE's intuitive platform ensures a smooth and hassle-free process for both users and administrators.</p>
      <Link
            to={"/facilities"}
           
          >  <button className="py-2 px-4 border-2 border-black bg-black text-white mt-3 rounded">
          Booking Now
           </button></Link>
    
    </div>
  </div>
</div>

  );
};

export default Hero;
