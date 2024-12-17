import '../index.css'

const Testimonials = () => {
  return (
    <section className="section__container bg-white">
   <h1 className="text-center text-4xl font-bold mt-20">Customer <span className="text-blue-500">Testimonials</span></h1>
  <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
    <div className="section__card">
      <span><i className="ri-double-quotes-l"></i></span>
      <h4>Sarah Thompson</h4>
      <p>
      Booking through KRE was a breeze! The facility was top-notch, and the whole process was seamless. I’ll definitely be using this service again.
      </p>
      <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user" />
  
 
    </div>
    <div className="section__card">
      <span><i className="ri-double-quotes-l"></i></span>
      <h4>Michael Rodriguez</h4>
      <p>
      I loved how easy it was to find and book a court. The platform is user-friendly, and the facility exceeded my expectations. Highly recommended!
      </p>
      <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user" />
 
    </div>
    <div className="section__card">
      <span><i className="ri-double-quotes-l"></i></span>
      <h4>Emily Chen</h4>
      <p>
      KRE made organizing our team’s practice sessions so much easier. The booking system is straightforward, and the facility was well-maintained.
      </p>
      <img src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user" />
      
    </div>
  </div>
</section>

  );
};

export default Testimonials;
