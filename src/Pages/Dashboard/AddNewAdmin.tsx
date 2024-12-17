import {  Button } from "@material-tailwind/react";
import { FormEvent, useState } from "react";
import { useRegistrationMutation } from "../../Redux/Features/Auth/authAPI";
import toast from "react-hot-toast";
const AddNewAdmin = () => {
  const [createAdmin, { isLoading }] = useRegistrationMutation();

  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const handleCreateAdmin = async (e: FormEvent) => {
    e.preventDefault();

    const payload = {
      name: fullName,
      email,
      password,
      phone,
      role: "admin",
      address,
    };

    await createAdmin(payload);

    toast.success("Admin created successfully!");

    setFullName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setAddress("");
  };

  return (
    <div className="">
     <h1 className="text-center text-4xl font-bold mt-10">Create A New <span className="text-blue-500 text-4xl font-bold">Admin</span> </h1>

     <div className="flex justify-center">
  <div className="flex flex-col md:flex-row items-center 2xl::ml-52 text-white p-6">
    <div className="md:w-1/2 p-4">
      <img
        src="https://images.unsplash.com/photo-1492551557933-34265f7af79e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Profile"
        className="rounded-md lg:max-w-xl max-w-sm rounded-lg shadow-2xl"
      />
    </div>
    <div className="md:w-1/2 p-4">
      <form className="space-y-4 bg-white p-6 rounded-lg shadow-lg" onSubmit={handleCreateAdmin}>
        <div className="flex items-center border-2 py-2 px-3 border-black  mb-4">
        
          <input
            required
            className="pl-2 outline-none border-none text-black w-full"
            type="text"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="flex items-center border-2 py-2 px-3 border-black mb-4">
          
          <input
            required
            className="pl-2 outline-none text-black border-none w-full"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex items-center border-2 py-2 px-3 border-black mb-4">
        
          <input
            required
            className="pl-2 outline-none text-black  border-none w-full"
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex items-center border-2 py-2 px-3 border-black  mb-4">
        
          <input
            required
            className="pl-2 outline-none border-none text-black  w-full"
            type="number"
            placeholder="Admin Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="flex items-center border-2 py-2 px-3 border-black mb-4">
          <input
            required
            className="pl-2 outline-none text-black border-none w-full"
            type="text"
            placeholder="Admin Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <Button
          disabled={isLoading}
          type="submit"
          fullWidth
         className="w-full p-3 bg-black text-white rounded-md hover:bg-white hover:text-black hover:border-2 hover:border-black transition duration-200"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {isLoading ? (
          <button   className="w-full p-3 bg-black text-white rounded-md hover:bg-white hover:text-black hover:border-2 hover:border-black transition duration-200">Loading...</button>
          ) : (
            "Create New Admin"
          )}
        </Button>
      </form>
    </div>
  </div>
</div>

<h1 className="text-center text-4xl font-bold mt-20">Admin <span className="text-blue-500">Features </span></h1>
    <div className="hero   mt-10">
  <div className="hero-content flex-col lg:flex-row ">
    <img
      src="https://blog.huddles.app/wp-content/uploads/Administration-And-Management.jpg"
      className="lg:max-w-xl max-w-sm  rounded-lg shadow-2xl" />
    <div className="ml-12">
      <div className="mb-3">
        <h3 className="text-xl font-bold mb-2">1. 🏟️ Facility Management</h3>
        <p className="text-gray-500">
        Add, edit, or delete sports facilities.
      </p>
      </div>
      <div className="mb-3">
        <h3 className="text-xl font-bold mb-2">2. 📅 Booking Management</h3>
        <p className="text-gray-500">
        View, update, or cancel user bookings.
      </p>
      </div>
      <div className="mb-3">
        <h3 className="text-xl font-bold mb-2">3. 🛠️ Add Admin</h3>
        <p className="text-gray-500">
        Create new admin accounts with dashboard access.
      </p>
      </div>
      <div className="mb-3">
        <h3 className="text-xl font-bold mb-2">4. 🎛️ Handle Special Dashboard</h3>
        <p className="text-gray-500">
        Access all key features like Booking Management, Facility Management, Add Admin, and present user bookings upon arrival at the facility.
      </p>
      </div>
    
     
    
    </div>
  </div>
</div>

    </div>
  );
};

export default AddNewAdmin;
