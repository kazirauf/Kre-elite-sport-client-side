/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useCreateFacilityMutation,
  useDeleteFacilityMutation,
  useGetAllFacilitiesQuery,
  useUpdateFacilityMutation,
} from "../../Redux/Features/Facilities/facilities.api";
import LoaderForDashboard from "./LoaderForDashboard";
import toast from "react-hot-toast";
import { FormEvent, useState } from "react";
import { Button, Dialog, Input, Textarea } from "@material-tailwind/react";
import { Facility } from "../../Types/Types";
import { IoMdAddCircle } from "react-icons/io";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const FacilityManagement = () => {
  const { data: facilities, isLoading } = useGetAllFacilitiesQuery(undefined);

  const [deletFacility] = useDeleteFacilityMutation();
  const [updateFacility, { isLoading: isUpdateFacilityLoading }] =
    useUpdateFacilityMutation();

  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState<Facility | null>(null);

  const [name, setName] = useState<string>(details?.name || "");
  const [description, setDescription] = useState<string>(
    details?.description || ""
  );
  const [pricePerHour, setPricePerHour] = useState<number>(
    details?.pricePerHour || 0
  );
  const [location, setLocation] = useState<string>(details?.location || "");
  const [image, setImage] = useState<string>(details?.image || "");

  const handleOpen = (details: any) => {
    setOpen(!open);
    setDetails(details);
    setName(details.name);
    setDescription(details.description);
    setPricePerHour(details.pricePerHour);
    setLocation(details.location);
    setImage(details.image);
  };

  const handleUpdateFacility = async (e: FormEvent) => {
    e.preventDefault();

    const id = details?._id;

    const payload = {
      name,
      description,
      pricePerHour,
      location,
      image,
    };

    const res = await updateFacility({ id, payload });

    if (res.data.success) {
      setOpen(!open);
      toast.success("Facility updated successfully!");
    }
  };

  const handleDeleteFacility = (id: string) => {
    Swal.fire({
      title: "Are you sure you want to delete this facility?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it",
    }).then((result) => {
      if (result.isConfirmed) {
        deletFacility(id);
        toast.success("Facility deleted successfully!");
      }
    });
  };

  // Creating new facility
  const [createFacility, { isLoading: isCreateFacilityLoading }] =
    useCreateFacilityMutation();

  const [openCreateFacilityModal, setOpenCreateFacilityModal] = useState(false);
  const [newName, setNewName] = useState<string>("");
  const [newDescription, setNewDescription] = useState<string>("");
  const [newPricePerHour, setNewPricePerHour] = useState<number>(0);
  const [newLocation, setNewLocation] = useState<string>("");
  const [newImage, setNewImage] = useState<string>("");

  const handleCreateFacilityModalOpen = () => {
    setOpenCreateFacilityModal(!openCreateFacilityModal);
  };

  const handleCreateFacility = async (e: FormEvent) => {
    e.preventDefault();

    const payload = {
      name: newName,
      description: newDescription,
      pricePerHour: newPricePerHour,
      location: newLocation,
      image: newImage,
    };

    await createFacility(payload);
    setOpenCreateFacilityModal(!openCreateFacilityModal);
    toast.success("Facility created successfully!");
  };

  // Pagination

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const totalItems = facilities?.data?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    scrollToTop();
  };

  const currentData = facilities?.data?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (isLoading) {
    return <LoaderForDashboard />;
  }

  return (
    <div>
    

      <div className="flex justify-center items-center my-5">
        <Button
          onClick={handleCreateFacilityModalOpen}
           className="w-full text-xl p-3 bg-black text-white rounded-md hover:bg-white hover:text-black hover:border-2 hover:border-black transition duration-200"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <IoMdAddCircle size={20} />
          <span>Create A New Facility</span>
        </Button>
      </div>
         
      <h1 className="text-center text-4xl font-bold">Manage Your All <span className="text-blue-500">Facilities</span> </h1>
      <div className="mt-7 flex justify-center flex-wrap gap-10">
        {currentData?.map((item: any, index: number) => (
      <div
      key={index}
      className="rounded-xl w-[350px] bg-[#FCF8F3] p-3 shadow-2xl hover:shadow-xl"
    >
      <div className="relative flex items-end overflow-hidden rounded-xl">
        <img
          src={item.image}
          alt="Facility Photo"
          className="h-[220px] w-full"
        />
      </div>

      <div className="mt-1 p-2">
        <h2 className="text-black-800 text-center text-xl font-bold">
          {item.name}
        </h2>

        <span className="text-lg flex justify-center items-center  text-black-800 text-center">
          <span className="font-bold text-blue-500 mr-1 text-2xl mt-4">${item.pricePerHour} </span> Per Hour
        </span>

        <Link
          className="mt-5 mb-3 text-white flex justify-center items-center gap-3 font-bold  bg-black p-2 hover:bg-white hover:border-2 hover:border-black hover:text-black"
          to={`/facilities/${item._id}`}
        >
          View Details
        </Link>
        <div className="flex justify-around">
        <Button
                
                onClick={() => handleOpen(item)}
                size="sm"
                className="capitalize bg-transparent"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <img className="w-12" src="https://raw.githubusercontent.com/kazirauf/pure-planet-client/main/src/assets/icons8-edit.gif" alt="" />
               <h2 className="text-base text-lime-600">Update</h2>
              </Button>
              <Button
               onClick={() => handleDeleteFacility(item._id)}
                size="sm"
                className=" bg-transparent"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
            <img className="w-16" src="https://raw.githubusercontent.com/kazirauf/pure-planet-client/main/src/assets/Animation%20-%201720876273691.gif" alt="" />
            <h2 className="text-red-600 text-base">Delete</h2>
              </Button>
        </div>
     
      </div>
    </div>
      
    
        ))}
      </div>

      <div className={`flex justify-center mt-14 mb-8`}>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="mx-2 px-4 py-2 bg-black p-2 hover:bg-white hover:border-2 hover:border-black hover:text-black text-white rounded disabled:opacity-20"
        >
          Previous
        </button>
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber + 1)}
            className={`mx-2 px-4 py-2 rounded ${
              currentPage === pageNumber + 1
                ? "bg-black text-white"
                : "bg-gray-300 text-gray-800"
            }`}
          >
            {pageNumber + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="mx-2 px-4 py-2 bg-black p-2 hover:bg-white hover:border-2 hover:border-black hover:text-black text-white rounded disabled:opacity-20"
        >
          Next
        </button>
      </div>

      {/* Update Modal */}
      <div>
  <Dialog
    open={open}
    handler={handleOpen}
    placeholder={undefined}
    onPointerEnterCapture={undefined}
    onPointerLeaveCapture={undefined}
  >
    <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-md">
      <h1 className="text-white text-2xl text-center font-semibold mb-6">
        Update Your Facility {details?.name}
      </h1>

      <form
        onSubmit={handleUpdateFacility}
        className="space-y-4"
      >
        <div>
          <label className="block text-white mb-1">Facility Name</label>
          <Input
            defaultValue={details?.name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-gray-700 text-white border border-gray-600 rounded"
            placeholder="Enter facility name"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
        </div>

        <div>
          <label className="block text-white mb-1">Description</label>
          <Textarea
            defaultValue={details?.description}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-gray-700 text-white border border-gray-600 rounded"
            placeholder="Enter facility description"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        </div>

        <div>
          <label className="block text-white mb-1">Price per hour</label>
          <Input
            type="number"
            defaultValue={details?.pricePerHour}
            value={pricePerHour}
            onChange={(e) => setPricePerHour(Number(e.target.value))}
            className="w-full bg-gray-700 text-white border border-gray-600 rounded"
            placeholder="Enter price per hour"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
        </div>

        <div>
          <label className="block text-white mb-1">Location</label>
          <Input
            defaultValue={details?.location}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-gray-700 text-white border border-gray-600 rounded"
            placeholder="Enter location"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
        </div>

        <div>
          <label className="block text-white mb-1">Image</label>
          <Input
            defaultValue={details?.image}
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full bg-gray-700 text-white border border-gray-600 rounded"
            placeholder="Enter image URL"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
        </div>

        <Button
          disabled={isUpdateFacilityLoading}
          type="submit"
          className="mt-5 text-white flex justify-center items-center gap-3 font-bold  bg-black py-3 px-4 rounded hover:bg-white hover:border-2 hover:border-black hover:text-black"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {isUpdateFacilityLoading ? (
              <button   className="w-full py-2 px-5 bg-black text-white rounded-md hover:bg-white hover:text-black hover:border-2 hover:border-black transition duration-200">Loading...</button>
          ) : (
            "Update Your Facility"
          )}
        </Button>
      </form>
    </div>
  </Dialog>
</div>


      {/* Create Modal */}
      <div>
  <Dialog
    open={openCreateFacilityModal}
    handler={handleCreateFacilityModalOpen}
    placeholder={undefined}
    onPointerEnterCapture={undefined}
    onPointerLeaveCapture={undefined}
  >
    <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-md">
      <h1 className="text-white text-2xl text-center font-semibold mb-6">
        Add A New Facility
      </h1>

      <form
        onSubmit={handleCreateFacility}
        className="space-y-4"
      >
        <div>
          <label className="block text-white mb-1">Facility Name</label>
          <Input
            required
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="w-full bg-gray-700 text-white border border-gray-600 rounded"
            placeholder="Enter facility name"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
        </div>

        <div>
          <label className="block text-white mb-1">Description</label>
          <Textarea
            required
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="w-full bg-gray-700 text-white border border-gray-600 rounded"
            placeholder="Enter facility description"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        </div>

        <div>
          <label className="block text-white mb-1">Price per hour</label>
          <Input
            required
            type="number"
            value={newPricePerHour}
            onChange={(e) => setNewPricePerHour(Number(e.target.value))}
            className="w-full bg-gray-700 text-white border border-gray-600 rounded"
            placeholder="Enter price per hour"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
        </div>

        <div>
          <label className="block text-white mb-1">Location</label>
          <Input
            required
            value={newLocation}
            onChange={(e) => setNewLocation(e.target.value)}
            className="w-full bg-gray-700 text-white border border-gray-600 rounded"
            placeholder="Enter location"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
        </div>

        <div>
          <label className="block text-white mb-1">Image</label>
          <Input
            required
            value={newImage}
            onChange={(e) => setNewImage(e.target.value)}
            className="w-full bg-gray-700 text-white border border-gray-600 rounded"
            placeholder="Enter image URL"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
        </div>

        <Button
          disabled={isCreateFacilityLoading}
          type="submit"
           className="mt-5 text-white flex justify-center items-center gap-3 font-bold  bg-black py-3 px-4 rounded hover:bg-white hover:border-2 hover:border-black hover:text-black"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {isCreateFacilityLoading ? (
            <button   className="w-full py-2 px-5 bg-black text-white rounded-md hover:bg-white hover:text-black hover:border-2 hover:border-black transition duration-200">Loading...</button>
          ) : (
            "Add A New Facility"
          )}
        </Button>
      </form>
    </div>
  </Dialog>
</div>

    </div>
  );
};

export default FacilityManagement;
