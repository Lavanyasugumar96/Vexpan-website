import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../sections/ServiceSection"; // ✅ important
import HowWeWork from "../sections/HowWeWork";   // 👈 ADD THIS


const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />  {/* ✅ THIS LINE MUST EXIST */}
       <HowWeWork /> 
    </>
  );
};

export default Home;