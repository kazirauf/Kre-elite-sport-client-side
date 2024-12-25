import DemoCard from "../Components/DemoCard";
import FAQ from "../Components/FAQ";
import FeaturedFacilities from "../Components/FeaturedFacilities";
import Hero from "../Components/Hero";
import HowItWorks from "../Components/HowItWorks";
import SumerCamp from "../Components/SumerCamp";
import Testimonials from "../Components/Testimonials";
import WhyUs from "../Components/WhyUs";

const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <FeaturedFacilities />
      <SumerCamp/>
      <DemoCard></DemoCard>
      <HowItWorks />
      <WhyUs/>
      <Testimonials />
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
