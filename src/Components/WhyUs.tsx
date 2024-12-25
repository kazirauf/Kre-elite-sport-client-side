import { ShoppingBasketIcon as Basketball, Mountain, Plane } from 'lucide-react'

const WhyUs = () => {
    return (
        <div>
              <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-blue-500 font-script text-3xl mb-4">our benefits</h2>
        <h1 className="text-black text-5xl font-extrabold">WHY <span className='text-blue-500'>CHOOSE </span> US</h1>
        <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore menim ad minim veniam, quis nostru.
        </p>
      </div>

      {/* Benefits Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-lg flex items-center justify-center">
            <Basketball className="w-8 h-8 text-blue-500" />
          </div>
          <h3 className="text-black font-bold text-xl mb-2">Diversity</h3>
          <p className="text-gray-600">abounds</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-lg flex items-center justify-center">
            <Mountain className="w-8 h-8 text-blue-500" />
          </div>
          <h3 className="text-black font-bold text-xl mb-2">Natural</h3>
          <p className="text-gray-600">all the way</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-lg flex items-center justify-center">
            <Plane className="w-8 h-8 text-blue-500" />
          </div>
          <h3 className="text-black font-bold text-xl mb-2">Experienced</h3>
          <p className="text-gray-600">and trustworthy</p>
        </div>
      </div>
    </section>
        </div>
    );
};

export default WhyUs;