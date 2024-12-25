import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Children at summer camp"
    },
    {
      image: "https://images.pexels.com/photos/27394453/pexels-photo-27394453/free-photo-of-two-soccer-players-are-running-after-the-ball.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Soccer players in action"
    },
    {
      image: "https://images.pexels.com/photos/29424195/pexels-photo-29424195/free-photo-of-dynamic-american-football-game-action-on-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Football game action"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (

    <div className="relative min-h-[800px] w-full overflow-hidden mb-20 bg-white">
    {slides.map((slide, index) => (
      <img
        key={index}
        src={slide.image}
        alt={slide.alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          currentSlide === index ? 'opacity-100' : 'opacity-0'
        }`}
      />
    ))}
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    <div className="relative z-10 flex flex-col items-center justify-center min-h-[800px] px-4 text-center">
      <span className="text-yellow-300 italic mb-4 text-xl md:text-2xl">
        children summer camp
      </span>
      <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight mb-8">
      Effortless Facility Booking With <span className="text-blue-500 font-bold text-yellow-300">KRE Elite Sport</span>
      </h1>
      <Link
            to={"/facilities"}
           
          >  <button className="py-4 px-7 text-lg bg-blue-500 text-white mt-3 rounded">
          Booking Now
           </button></Link>
      <div className="absolute bottom-8 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-opacity duration-300 ${
              currentSlide === index ? 'bg-white' : 'bg-white opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  </div>
//     <div className="hero bg-base-200 h-[700px]">
//   <div className="hero-content flex-col lg:flex-row-reverse lg:gap-60 ">
//     <img
//       src="https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       className="lg:max-w-xl md:max-w-lg max-w-xs  rounded-lg shadow-2xl" />
//     <div className="lg:w-full md:w-full  w-96">
//       <h1 className="lg:text-5xl md:text-4xl  text-2xl lg:w-full md:w-full w-4/5 font-bold">Effortless Facility Booking 
//       With <span className="text-blue-500">KRE</span></h1>
//       <p className="text-gray-500 my-3 lg:w-full md:w-full w-2/3">⚡ Experience the convenience of booking sports facilities with just a few clicks. 🏟️ KRE's intuitive platform ensures a smooth and hassle-free process for both users and administrators.</p>
      
    
//     </div>
//   </div>
// </div>

  );
};

export default Hero;
