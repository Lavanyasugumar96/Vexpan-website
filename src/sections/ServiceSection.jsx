import ServiceCard from "../components/ServiceCard";
import servicesData from "../data/servicesData";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-black text-white text-center">

      <h2 className="text-4xl font-bold mb-10">Our Services</h2>

      {/* 3 CARDS */}
     <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
  {servicesData.slice(0, 3).map((item) => (
    <ServiceCard key={item.id} {...item} />
  ))}
</div>

      {/* 🔥 BUTTON BELOW CARDS */}
      <div className="mt-12">
        <button
          onClick={() => navigate("/services")}
          className="px-8 py-3 border border-white-400 text-white-400 rounded-full hover:bg-black-400 hover:text-white transition duration-300"
        >
          View All Services
        </button>
      </div>

    </section>
  );
};

export default ServicesSection;