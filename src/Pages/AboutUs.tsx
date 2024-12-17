const AboutUs = () => {
  return (
    <>
    <section>
      {/* about */}
      <div>
      <div className="hero bg-base-200 my-20">
  <div className="hero-content flex-col lg:flex-row-reverse gap-20">
    <img
      src="https://images.pexels.com/photos/5384618/pexels-photo-5384618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      className="lg:max-w-xl max-w-sm  rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">About <span className="text-blue-500 font-bold">Us</span></h1>
      <p className="py-6 text-gray-500">
      At <span className="text-blue-500 font-bold">KRE</span>, we're passionate about making sports accessible, convenient, and enjoyable for everyone. Whether you're an athlete looking for the perfect court, a fitness enthusiast searching for the ideal gym, or a group of friends wanting to book a recreational facility, <span className="text-blue-500 font-bold">KRE</span> is here to simplify the process.
      </p>
      
      <p className=" text-gray-500">
    <span className="text-blue-500 font-bold"> Our mission</span> is to connect you with the best sports facilities in your area, providing a seamless booking experience from start to finish. We believe that finding and reserving a venue should be as effortless as playing the game itself, and we’re dedicated to making that a reality.
      </p>
      
    </div>
  </div>
</div>
{/* why  */}
      <div className="hero bg-base-200 my-20">
  <div className="hero-content flex-col lg:flex-row gap-20">
    <img
      src="https://t4.ftcdn.net/jpg/01/41/52/31/360_F_141523101_8umyxdkpKIqFgVImRhcWNwH9Gg5TBu29.jpg"
      className="lg:max-w-xl max-w-sm  rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold mb-6">Why Choose <span className="text-blue-500 font-bold">Us</span></h1>
      <p className=" text-gray-500 mb-2">
       <span className="text-blue-500 font-bold">Convenience:</span> Our easy-to-use platform allows <br /> you to book facilities anytime, anywhere.
      </p>
      <p className=" text-gray-500 mb-2">
       <span className="text-blue-500 font-bold">Quality:</span>  We partner with top-rated venues to ensure  <br /> that you have access to the best facilities.
      </p>
      <p className=" text-gray-500">
       <span className="text-blue-500 font-bold">Support:</span>  Our dedicated customer service team is always here <br /> to assist you with any questions or concerns.
      </p>
      
    
      
    </div>
  </div>
</div>
{/* gallery */}
<section className="bg-[#EEEDEB] pb-20">
<h1 className="text-center text-4xl font-bold mt-20">Our <span className="text-blue-500">Gallery</span></h1>

  <div className="flex justify-center my-10">
  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
      <img className="w-96 h-70" src="https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <img className="w-96 h-70" src="https://images.pexels.com/photos/163229/football-american-football-sport-ball-163229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <img className="w-96 h-70" src="https://images.pexels.com/photos/12806375/pexels-photo-12806375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <img className="w-96 h-70" src="https://images.pexels.com/photos/16588259/pexels-photo-16588259/free-photo-of-soccer-players-in-action-during-a-match-on-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <img className="w-96 h-70" src="https://images.pexels.com/photos/3755442/pexels-photo-3755442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <img className="w-96 h-70" src="https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <img className="w-96 h-70" src="https://images.pexels.com/photos/13978859/pexels-photo-13978859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <img className="w-96 h-70" src="https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
  </div>
    </section>
      </div>
    </section>
    </>

  );
};

export default AboutUs;
