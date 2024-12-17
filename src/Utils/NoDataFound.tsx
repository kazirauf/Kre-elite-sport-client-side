/* eslint-disable @typescript-eslint/no-explicit-any */


const NoDataFound = ({ message }: any) => {
  return (
    <div>
      <div className="w-full py-7 rounded-lg flex flex-col justify-center items-center">
        <img className="w-[150px]" src="https://img.freepik.com/premium-vector/no-data-found-empty-file-folder-concept-design-vector-illustration_620585-1698.jpg" alt="" />

        <h1 className="mt-7 text-3xl text-red-500 font-bold italic">
          {message}
        </h1>
      </div>
    </div>
  );
};

export default NoDataFound;
