import { MapPin } from 'lucide-react';
import { BsMailbox } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';


const ContactUs = () => {
  
  return (
    <div className="min-h-screen">
    {/* Hero Section */}
    <div className="relative h-[300px] bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/29558673/pexels-photo-29558673/free-photo-of-soccer-team-celebrating-victory-in-ha-n-i.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Winter scene background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-bold mb-4">Contact</h1>
        <div className="flex items-center gap-2">
          <h2>Home </h2>
         /
         <h2>Contact Us</h2>
        </div>
      </div>
    </div>

    {/* Main Content */}
    <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
      {/* Contact Information */}
      <div className="space-y-8">
        <div>
          <div className="flex items-center gap-2 text-gray-600 mb-6">
            <span>01</span>
            <span className="h-px w-12 bg-gray-300"></span>
            <span>Contact Us</span>
          </div>
          <h2 className="text-4xl font-bold mb-2">Ready to Travel Us</h2>
          <p className="text-2xl text-gray-600">for Better Adventure</p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-gray-600 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-600">532 Main Street, 2nd Block</p>
              <p className="text-gray-600">melbourne, Australia</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <BsMailbox className="w-6 h-6 text-gray-600 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">support@gmail.com</p>
              <p className="text-gray-600">info@dhak.net</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaPhone className="w-6 h-6 text-gray-600 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Hotline</h3>
              <p className="text-gray-600">+000 (123) 456 88</p>
              <p className="text-gray-600">+123456789</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                <FaFacebook className="w-5 h-5 text-gray-600" />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                <FaTwitter className="w-5 h-5 text-gray-600" />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                <FaInstagram className="w-5 h-5 text-gray-600" />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                <FaLinkedin className="w-5 h-5 text-gray-600" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Send Us Message</h2>
        <p className="text-gray-600 mb-6">
          Adipiscing magna verus imperdiet scelerisque suspendisse amet sed ridiculus turpis
        </p>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <div>
            <textarea
              placeholder="Write Message"
              className="w-full p-3 border rounded-lg min-h-[150px]"
            />
          </div>
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  </div>

  );
};

export default ContactUs;
