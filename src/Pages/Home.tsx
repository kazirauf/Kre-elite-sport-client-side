import DemoCard from "../Components/DemoCard";
import FAQ from "../Components/FAQ";
import FeaturedFacilities from "../Components/FeaturedFacilities";
import Hero from "../Components/Hero";
import HowItWorks from "../Components/HowItWorks";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <div className="bg-[#F5EDED]">
      <Hero />
      <FeaturedFacilities />
      <DemoCard></DemoCard>
      <HowItWorks />
      <Testimonials />
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
