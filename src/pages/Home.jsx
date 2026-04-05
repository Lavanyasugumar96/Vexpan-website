import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../sections/ServiceSection";
import HowWeWork from "../sections/HowWeWork";
import Clients from "../components/Clients";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <HowWeWork />
      <Clients />   {/* 👈 BEST POSITION */}
    </>
  );
};

export default Home;