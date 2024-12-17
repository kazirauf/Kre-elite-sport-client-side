import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ScrollToTop from "../Utils/ScrollToTop";
import ScrollToTopButton from "../Utils/ScrollToTopButton";

const Mainlayout = () => {
  return (
    <div>
      <ScrollToTop />

      <Navbar />

      <Outlet />

      <Footer />

      <ScrollToTopButton />
    </div>
  );
};

export default Mainlayout;
