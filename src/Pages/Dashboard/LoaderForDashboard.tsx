import Lottie from "lottie-react";
import loader from "../../assets/loader.json";

const LoaderForDashboard = () => {
  return (
    <div>
      <div className="h-[300px] flex justify-center items-center">
        <Lottie animationData={loader} loop={true} className="w-[400px]" />
      </div>
    </div>
  );
};

export default LoaderForDashboard;
