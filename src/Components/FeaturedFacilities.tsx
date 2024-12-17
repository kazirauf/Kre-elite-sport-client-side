const FeaturedFacilities = () => {
  return (
  <div className="bg-white">
  <h1 className="text-center text-4xl font-bold">Our <span className="text-blue-500">Featured</span> Facilities</h1>
    <section className="flex justify-center mt-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
      <div className="card bg-base-100 w-96 shadow-xl border-x-2 border-y-4 border-black">
  <figure>
    <img
      src="https://images.pexels.com/photos/3651674/pexels-photo-3651674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Elite Sports Arena 🏅</h2>
    <p>Where champions train and compete. This state-of-the-art arena features premium courts, advanced lighting, and spacious seating, ideal for both casual games and professional tournaments</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
      <div className="card bg-base-100 w-96 shadow-xl border-x-2 border-y-4 border-black">
  <figure>
    <img
      src="https://images.pexels.com/photos/6150626/pexels-photo-6150626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Urban Fitness Hub 🏋️</h2>
    <p>A modern fitness center equipped with the latest machines, personal training sessions, and group classes. Perfect for fitness enthusiasts looking to elevate their workout experience.</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
      <div className="card bg-base-100 w-96 shadow-xl border-x-2 border-y-4 border-black">
  <figure>
    <img
      src="https://images.pexels.com/photos/27625147/pexels-photo-27625147/free-photo-of-swimmers-in-a-pool-with-a-yellow-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Crystal Aquatics Center 🏊</h2>
    <p>Dive into our Olympic-sized pool with crystal-clear water, ideal for lap swimming, training, and aquatic sports. Enjoy a refreshing swim in a serene and well-maintained environment</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
    </div>
    </section>
  </div>
  
  );
};

export default FeaturedFacilities;
